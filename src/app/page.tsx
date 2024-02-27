'use client'
import {useState} from "react";
import styles from './page.module.scss'
import {ModalWindow} from "./components/ModalWindow/ModalWindow";
import {Button} from "./components/Button/Button";
import {Input} from "./components/Input/Input";

export type TodoId = number
export interface TodoItem {id: TodoId, title: string}

export default function Home() {
  const [todos, setTodos] = useState<TodoItem[]>([])
  const [openModal, setOpenModal] = useState(false)
  const [filterInputValue, setFilterInputValue] = useState('')

    const addTodoValue = (value: TodoItem) => {
        setTodos([...todos, value])
    }

    const removeTodoValue = (id: TodoId) => {
      setTodos(prevState => prevState.filter(item => item.id !== id))
    }

    const filteredTodos = todos.filter(
        item =>
            item.title.trim().toLowerCase().includes(filterInputValue.trim().toLowerCase())
    )

   return (
    <div className={styles.main}>
        <div className={styles.mainContent}>
            <h2>Your TODO list</h2>

            <Input
                value={filterInputValue}
                onChange={e => setFilterInputValue(e.target.value)}
                placeholder={'Search'}
            />

            <ul>
                {filteredTodos.length
                    ? filteredTodos
                        .map(todo => (
                        <li
                            key={todo.id}
                            className={styles.mainItem}
                        >
                            {todo.title}
                            <span onClick={e => removeTodoValue(todo.id)}>x</span>
                        </li>
                    ))
                    : <p className={styles.mainEmptyList}>Your list is empty</p>
                }
            </ul>
            <Button
                btnText={'Create New'}
                onClick={() => setOpenModal(true)}
            />
        </div>


        {openModal && (
          <ModalWindow addTodoValue={addTodoValue} setOpenModal={setOpenModal} />
      )}
    </div>
  )
}
