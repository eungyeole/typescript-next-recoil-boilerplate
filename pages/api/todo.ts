import { ITodoListState } from "@/src/libs/intefaces/todoList"

export default (req, res) => {
    const json : ITodoListState[] = [
        {
            id : 1,
            content : "Hello, World",
            regist_Date : new Date("Mon Apr 12 2021 22:31:59 GMT+0900")
        },
        {
            id : 2,
            content : "Im, Happy",
            regist_Date : new Date("Mon Apr 12 2021 18:31:59 GMT+0900")
        },
        {
            id : 3,
            content : "Don't give up.",
            regist_Date : new Date("Mon Apr 12 2021 14:31:59 GMT+0900")
        }
    ]
    res.status(200).json(json)
}