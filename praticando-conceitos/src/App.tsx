import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskList } from "./components/TaskList";

export function App() {

  return (
    <div>
      <Header />
      <NewTask />
      <TaskList />
    </div>
  )
}