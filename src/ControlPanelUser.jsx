import React from 'react';
import Button from "./Button";

const ControlPanelUser = (props) => {

    ///деструктуризация объекта
    const {maxValue: maxV, minValue: minV, memoryValue: memo, isDisabledSet} = props.state;

    let setDisabledForInc = (memo === maxV) || !isDisabledSet || (maxV <= minV || minV < 0 || maxV < 0) ? true : false;
    let setDisabledForReset = (minV === memo) || !isDisabledSet || (maxV <= minV || minV < 0 || maxV < 0) ? true : false;

    return (
        <div className="controlPanel">
            <Button setDisabled={setDisabledForInc} name={'inc'} onClickFunc={props.incCounter}/>
            <Button setDisabled={setDisabledForReset} name={'reset'} onClickFunc={props.resetToZero}/>
        </div>
    );

}

export default ControlPanelUser;