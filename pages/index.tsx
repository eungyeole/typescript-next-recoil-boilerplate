import { TodoItemCreator, TodoList } from "@/src/components/todo";
//const fetcher = async () => (await todoList.getTodoList()).data;

export default function Home() {
  return (
    <>
      <TodoItemCreator></TodoItemCreator>
      <TodoList/>    
    </>
  )
}

