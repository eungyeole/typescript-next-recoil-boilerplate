import { ITodoListState } from "@/src/libs/intefaces/todoList";
import { atomFamily } from "recoil";
import { TODO_LIST_STATE } from "../../keys/todoList";


export const todoListStateFamily = atomFamily<ITodoListState[], any>({
    key: TODO_LIST_STATE,
    default: [
    ]
});