import { useState } from 'react';
import { Header } from './components/Header';
import { ListTasks } from './components/ListTask';
import { NewTaskInput } from './components/NewTaskInput';

export interface Task {
  id: string;
  content: string;
  done: boolean;
}

export function App() {
  const [tasks, setTasks] = useState([] as Task[]);

  return (
    <>
      <Header />
      <NewTaskInput setTasks={setTasks} tasks={tasks} />
      <ListTasks setTasks={setTasks} tasks={tasks} />
    </>
  );
}
