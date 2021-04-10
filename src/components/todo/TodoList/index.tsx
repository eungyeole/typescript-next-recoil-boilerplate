import { ITodoListState } from "@/src/libs/intefaces/todoList";
import { FC, ReactElement, useMemo } from "react";
import { TodoItem } from "../TodoItem";
import * as S from "./style"
interface Props {
    todo : ITodoListState[]
}
export const TodoList : FC<Props> = ({ todo }) : ReactElement => {
    const todoList = useMemo(
        ()=>todo.map((i)=>(
            <TodoItem 
                key={i.id} 
                id={i.id}
                content={i.content}
            />
        )),
        [todo]
    )
    return(
        <S.Wrapper>
            {todoList}
        </S.Wrapper>
    )
}
