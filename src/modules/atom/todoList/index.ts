import { ITodoListState } from "@/src/libs/intefaces/todoList";
import { atom } from "recoil";
import { TODO_LIST_STATE } from "../../keys/todoList";


export const todoListState= atom<ITodoListState[]>({
    key: TODO_LIST_STATE,
    default: [
    ]
});