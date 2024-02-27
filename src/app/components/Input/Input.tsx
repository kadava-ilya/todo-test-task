import React, {FC} from "react";
import styles from './Input.module.scss'

interface Props {
    value: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    type?: string
    placeholder?: string
}

export const Input: FC<Props> = ({value, onChange, placeholder='Input value', type = 'text'}) => {
    return (
        <input
            className={styles.input}
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
        />
    )
}