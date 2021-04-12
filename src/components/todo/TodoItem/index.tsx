import { ITodoListState } from "@/src/libs/intefaces/todoList";
import { FC, ReactElement } from "react";
import Link from 'next/link'
import * as S from "./style"
import dateFormat from "@/src/libs/function/dateFormat";
interface Props extends ITodoListState{}
export const TodoItem : FC<Props> = ({ id, content, regist_Date }) : ReactElement => {
    return( 
        <S.Wrapper>
            <Link href="/api/todo">
                <a>{id}. {content} {dateFormat(regist_Date)}</a>
            </Link>
        </S.Wrapper>
    )
}
