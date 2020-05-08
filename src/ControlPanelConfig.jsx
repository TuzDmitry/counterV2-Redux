import React from 'react';
import Button from "./Button";

class ControlPanelConfig extends React.Component {

    onSetClick = () => {
        // debugger
        let currentState = JSON.stringify(this.props.state)
        localStorage.setItem("our-state", currentState);
        this.props.setSettings()
    }


    render = () => {

        let setDisabled = this.props.state.isDisabledSet;



        return (
            <div className="controlPanel">
                <Button name={'set'} setDisabled={setDisabled} onClickFunc={this.onSetClick}/>
            </div>
        );
    }
}

export default ControlPanelConfig;