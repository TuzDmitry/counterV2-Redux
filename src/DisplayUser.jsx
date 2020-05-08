import React from 'react';

const DisplayUser = (props) => {


    // let maxV = props.state.maxValue;
    // let minV = props.state.minValue;
    // let memo = props.state.memoryValue;
    //let isDisabledSet=props.state.isDisabledSet;

    ///деструктуризация объекта
    const {maxValue: maxV, minValue: minV, memoryValue: memo, isDisabledSet} = props.state;


    let classRedForDisplay = memo === maxV ? "filter-red" : "";
    /// isDisabledSet: true-когда кнопка SET недоступна для нажатия
    let isSucsess = isDisabledSet && (maxV > minV) && (minV >= 0);
    let isSettigs = !isDisabledSet && (maxV > minV) && (minV >= 0);
    let isError = (maxV <= minV || minV < 0 || maxV < 0);


    return (
        <div className={`display`}>

            {isSucsess && <span className={`numb ${classRedForDisplay}`}>{memo}</span>}

            {isSettigs && <span className="message">enter values and press 'set'</span>}

            {isError && <span className="filter-red">incorrect value</span>}

        </div>
    );

}

export default DisplayUser;