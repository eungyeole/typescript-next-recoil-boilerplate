import { todoListSelector } from "@/src/modules/selector/todoList";
import { FC, ReactElement, useEffect, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { TodoItem } from "../TodoItem";
import * as S from "./style"
interface Props {}
export const TodoList : FC<Props> = () : ReactElement => {
    const todo = useRecoilValueLoadable(todoListSelector);
    const [isOpen, setOpen] = useState(false);
    useEffect(()=>{
        setOpen(true);
    },[])
    if(!isOpen || todo.state==="loading") return(<div>loading...</div>) 
    return(
        <S.TodoListWrapper>
        {
            todo.contents.map(i=>(
                <TodoItem 
                key={i.id} 
                id={i.id}
                regist_Date={i.regist_Date}
                content={i.content}/>)
            )
        }
        </S.TodoListWrapper>
    )
}
