import React from 'react';

const ComponentInstaller = (props) => {

    return (
        <div className="containerValue">
            <div>{props.nameInstaller}</div>
            <input type="number"
                   value={props.value}
                   onChange={props.onChangeFunc}
                   className={props.classRed}/>
        </div>
    );

}

export default ComponentInstaller;