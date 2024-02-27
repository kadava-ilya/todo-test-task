import {FC} from "react";
import styles from './Button.module.scss'

interface Props {
    btnText: string
    onClick: () => void
}

export const Button: FC<Props> = ({btnText = 'submit', onClick}) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
        >
            {btnText}
        </button>
    )
}