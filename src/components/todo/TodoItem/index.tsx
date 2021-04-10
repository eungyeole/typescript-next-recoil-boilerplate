import { ITodoListState } from "@/src/libs/intefaces/todoList";
import { FC, ReactElement } from "react";
import * as S from "./style"
interface Props extends ITodoListState{}
export const TodoItem : FC<Props> = ({ id, content }) : ReactElement => {
    return(
        <S.Wrapper>
            <p>{id} | {content}</p>
        </S.Wrapper>
    )
}
