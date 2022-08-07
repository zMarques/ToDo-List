import { Check, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Task } from '../App';
import styles from '../styles/taskCard.module.css';

interface TaskCardProps {
  setTasks: (tasks: Task[]) => void;
  currentTask: Task;
  tasks: Task[];
  onDeleteTask: (id: string) => void;
}

export function TaskCard({
  currentTask,
  tasks,
  setTasks,
  onDeleteTask,
}: TaskCardProps) {
  const [checked, setChecked] = useState(false);

  function onMarkAsDone() {
    const newTaskList = (tasks as Task[])
      .map((task) => {
        if (task.id === currentTask.id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
      .sort((a, b) => (a.done ? 1 : 0) - (b.done ? 1 : 0));
    setTasks(newTaskList);
    setChecked(!currentTask.done);
  }

  function handleDeleteTask() {
    onDeleteTask(currentTask.id);
  }

  return (
    <div className={styles.card}>
      <label htmlFor="done" onClick={onMarkAsDone}>
        <input
          name="done"
          type="checkbox"
          aria-label="Concluir tarefa"
          title="Concluir tarefa"
          checked={checked}
          onChange={() => {}}
        />
        <Check size={11} weight="bold" />
      </label>

      {checked ? (
        <p className={styles.checked}>{currentTask.content}</p>
      ) : (
        <p>{currentTask.content}</p>
      )}

      <button onClick={handleDeleteTask} title="Deletar Task">
        <Trash size={14} />
      </button>
    </div>
  );
}
