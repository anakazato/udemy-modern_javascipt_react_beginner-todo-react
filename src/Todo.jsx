
import { useState } from 'react';
import './styles.css';

export const Todo = () => {
    const [todoText, setTodoText] = useState("");
    const [incompleteTodos, setIncompleteTodos] = useState([
        "TODOです１",
        "TODOです２"
    ]);
    const [completeTodos, setcompleteTodos] = useState([
        "TODOでした１",
        "TODOでした２"
    ]);

    const onChageTodoText = (event) => setTodoText(event.target.value);
    const onClickAdd = () => {
        if(todoText === "") return;
        if(incompleteTodos.findIndex(todo => todo == todoText) != -1){
            alert("同じのはダメだってば！");
            return;
        }
        const newTodos = [...incompleteTodos,todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    }

    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1); // newTodos 配列から index位置から１つ削除
        setIncompleteTodos(newTodos);
    }
    
    const onClickComplete = (index) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1); // newTodos 配列から index 位置から１つ削除
        
        const newCompleteTodos = [...completeTodos , incompleteTodos[index]];
        
        setIncompleteTodos(newIncompleteTodos);
        setcompleteTodos(newCompleteTodos);

    }
     
    const onClickBack = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1); // newTodos 配列から index 位置から１つ削除
        
        const newIncompleteTodos = [...incompleteTodos , completeTodos[index]];
        
        setIncompleteTodos(newIncompleteTodos);
        setcompleteTodos(newCompleteTodos);

    }
   
    return (
        <>
            <div className="input-area">
                <input
                    placeholder='TODOを入力'
                    value={todoText} 
                    onChange={onChageTodoText} />
                <button onClick={onClickAdd}>追加</button>
            </div>
            <div className='incomplete-area'>
                <p className='title'>未完了のTODO</p>
                <ul>
                    {incompleteTodos.map((todo,index) => (
                        <li key={todo}>
                            <div className="list-row">
                                <p className='todo-item'>{todo}</p>
                                <button onClick={() => onClickComplete(index)}>完了</button>
                                
                                {/* onClickDeleteは関数の中で動くもの、というふうにする */}
                                <button onClick={() => onClickDelete(index)}>削除</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='complete-area'>
                <p className='title'>完了のTODO</p>
                <ul>
                    {completeTodos.map((todo,index) => (
                        <li key={todo}>
                            <div className="list-row">
                                <p className='todo-item'>{todo}</p>
                                <button onClick={() => onClickBack(index)}>戻す</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
