import { todoListState } from "@/src/modules/atom/todoList";
import { FC, ReactElement, useState } from "react"
import { useSetRecoilState } from "recoil";


interface Props{}
export const TodoItemCreator : FC<Props> = () : ReactElement =>{
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);
    const addItem = () => {
        setTodoList((oldTodoList) => {
          const id = oldTodoList.length
            ? oldTodoList[oldTodoList.length - 1].id + 1
            : 0; 
          return [
            ...oldTodoList,
            {
              id,
              content: inputValue,
              regist_Date: new Date()
            },
          ];
        });
        setInputValue('');
      };
    const onChange = ({ target: { value } }) => {
        setInputValue(value);
    };
    return(
        <div>
            <input type='text' value={inputValue} onChange={onChange} />
            <button onClick={addItem}>Add</button>
        </div>
    )
}
