import { TodoItem, TodoList } from "@/src/components/todo";
import useSWR from 'swr';
import todoList from "@/src/libs/api/todoList";

const fetcher = async () => (await todoList.getTodoList()).data;

export default function Home() {
  const { data, error} = useSWR('/api/todo', fetcher);
  if(error) alert(error);
  if (!data) return <div>loading...</div>;
  return (
    <TodoList todo={data} />    
  )
}
