import React from 'react';
import style from './Button.module.css'

const Button = (props) => {

    return (
        <span>
                <button
                    onClick={props.onClickFunc}
                    disabled={props.setDisabled}
                    className={`${style.buttonClass}`}>
                    {props.name}
                </button>
            </span>
    );

}

export default Button;