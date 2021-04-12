import { selector } from "recoil";
import { todoListState } from "../../atom/todoList";
import todoListAPI from "@/src/libs/api/todoList";

export const todoListSelector = selector({
    key : 'todoList',
    get : async ({get}) =>{
        const todo = get(todoListState)
        if(todo.length<1) return await (await todoListAPI.getTodoList()).data
        else return todo;
    }
})