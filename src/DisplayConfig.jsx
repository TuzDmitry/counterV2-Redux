import React from 'react';
import ComponentInstaller from "./ComponentInstaller";

const DisplayConfig = (props) => {

    let onChangeValueMax = (e) => {
        let value = parseInt(e.currentTarget.value)
        props.adjustValueMax(value)
        // alert(e.currentTarget)
        // debugger;
    }
    let onChangeValueMin = (e) => {
        let value = parseInt(e.currentTarget.value)

        props.adjustValueMin(value)
        // alert(e.currentTarget)
        // debugger;
    }

    const {maxValue: maxV, minValue: minV} = props.state;

    let classRedForMaxValue = (maxV <= minV || maxV < 0) ? "input-red" : "";
    let classRedForMinValue = (maxV <= minV || minV < 0) ? "input-red" : "";

    return (
        <div className="display">

            <ComponentInstaller nameInstaller={"max value:"}
                                value={maxV}
                                onChangeFunc={onChangeValueMax}
                                classRed={classRedForMaxValue}/>
            <ComponentInstaller nameInstaller={"start value:"}
                                value={minV}
                                onChangeFunc={onChangeValueMin}
                                classRed={classRedForMinValue}/>
        </div>
    );

}

export default DisplayConfig;