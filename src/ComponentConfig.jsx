import React from 'react';
import DisplayConfig from "./DisplayConfig";
import ControlPanelConfig from "./ControlPanelConfig";
import {connect} from "react-redux";
import {adjustValueMaxAC, adjustValueMinAC, setSettingsAC, setStateFromLocalStorageAC} from "./redux/reducer";

///////можно будет передлелать под фунциональную
class ComponentConfig extends React.Component{
componentDidMount() {
    // this.props.restorageState()
}

    render (){
        return (
            <div className="configBlock">
                <div className="box">
                    <DisplayConfig state={this.props.state} adjustValueMin={this.props.adjustValueMin}
                                   adjustValueMax={this.props.adjustValueMax}/>
                    <ControlPanelConfig setSettings={this.props.setSettings} state={this.props.state}/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        state: state
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        adjustValueMax: (value) => {
            dispatch(adjustValueMaxAC(value))
        },
        adjustValueMin: (value) => {
            dispatch(adjustValueMinAC(value))
        },
        setSettings: () => {
            dispatch(setSettingsAC())
        },
        restorageState: () => {
            dispatch(setStateFromLocalStorageAC())
        }

    }
}

let ComponentConfigContainer = connect(mapStateToProps, mapDispatchToProps)(ComponentConfig)
export default ComponentConfigContainer;