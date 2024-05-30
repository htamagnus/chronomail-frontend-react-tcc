import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {

    return (
        <button className={styles.button} type="submit">{ text }</button>
    )
}

export default Button;