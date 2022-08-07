import { Task } from '../App';
import Clipboard from '../assets/Clipboard.png';
import styles from '../styles/listTask.module.css';
import { TaskCard } from './TaskCard';

interface ListTaskProps {
  setTasks: (tasks: Task[]) => void;
  tasks: Task[];
}

export function ListTasks({ tasks, setTasks }: ListTaskProps) {
  let tasksDone = tasks.filter((task) => task.done).length;
  let totalTask = tasks.length;

  function onDeleteTask(TaskIdToDelete: string) {
    const tasksWhithoutDeleted = tasks.filter(
      (task) => task.id !== TaskIdToDelete
    );
    setTasks(tasksWhithoutDeleted);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.painel}>
          <p>Tarefas criadas</p>
          <span>{totalTask}</span>
        </div>
        <div className={styles.painel}>
          <p>Concluídas</p>
          <span>{`${tasksDone} de ${totalTask}`}</span>
        </div>
      </div>

      {tasks.length > 0 ? (
        <div className={styles.content}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              setTasks={setTasks}
              currentTask={task}
              tasks={tasks}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </div>
      ) : (
        <div className={styles.x}>
          <img src={Clipboard} />
          <div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      )}
    </div>
  );
}
