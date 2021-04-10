import { ITodoListState } from "@/src/libs/intefaces/todoList"

export default (req, res) => {
    const json : ITodoListState[] = [
        {
            id : 1,
            content : "Hello, World"
        },
        {
            id : 2,
            content : "Im, Happy"
        },
        {
            id : 3,
            content : "Don't give up."
        }
    ]
    res.status(200).json(json)
}