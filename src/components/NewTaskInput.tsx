import { v4 as uuidv4 } from 'uuid';

import { ChangeEvent, FormEvent, useState } from 'react';
import { Task } from '../App';
import PlusIcon from '../assets/plus.svg';
import styles from '../styles/newTaskInput.module.css';

interface NewTaskInputPorps {
  setTasks: (tasks: Task[]) => void;
  tasks: Task[];
}

export function NewTaskInput({ setTasks, tasks }: NewTaskInputPorps) {
  const [newTaskText, setNewTaskText] = useState('');

  function onCreateTodo(e: FormEvent) {
    e.preventDefault();

    setTasks([...tasks, { id: uuidv4(), content: newTaskText, done: false }]);
    setNewTaskText('');
  }

  function handleNewTaskTextChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(e.target.value);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={onCreateTodo}>
        <input
          name="task"
          type="text"
          value={newTaskText}
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskTextChange}
          required
        />
        <button type="submit">
          Criar
          <img src={PlusIcon} />
        </button>
      </form>
    </div>
  );
}
