import React, {ChangeEvent, useState} from "react";
import styles from "./ModalWindow.module.scss";
import {TodoItem} from "../../page";
import {Button} from "../Button/Button";
import {Input} from "../Input/Input";

interface Props {
    addTodoValue: (todo: TodoItem) => void,
    setOpenModal: (value: boolean) => void
}

export const ModalWindow: React.FC<Props> = ({addTodoValue, setOpenModal}) => {
    const [inputValue, setInputValue] = useState<string>('')
    const [isInputEmpty, setInputEmpty] = useState(false)

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    const onTodoClick = () => {
        const todo = {id: Math.random(), title: inputValue}

        if (inputValue.length) {
            addTodoValue(todo)
            setOpenModal(false)
            setInputEmpty(false)
        } else {
            setInputEmpty(true)
        }
    }

    return (
        <div className={styles.modal}>
            <div
                className={styles.modalCloseBtn}
                onClick={() => setOpenModal(false)}
            >
                x
            </div>

            <h2>Set new ToDo</h2>
            <div className={styles.modalContent}>
                <div className={styles.modalInputWrapper}>
                    <Input
                        value={inputValue}
                        onChange={e => onInputChange(e)}
                        placeholder={'New task'}
                    />

                    {isInputEmpty &&
                        <span className={styles.modalWarningMsg}>input field is empty</span>
                    }
                </div>

                <Button btnText={'Add'} onClick={onTodoClick} />
            </div>
        </div>
    )
}
