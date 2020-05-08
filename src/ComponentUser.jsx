import React from 'react';
import DisplayUser from "./DisplayUser";
import ControlPanelUser from "./ControlPanelUser";
import {connect} from "react-redux";
import {incCounterAC, resetToZeroAC} from "./redux/reducer";


const ComponentUser = (props) => {

    return (
        <div className="counterBlock">
            <div className="box">
                <DisplayUser state={props.state}/>

                <ControlPanelUser state={props.state} incCounter={props.incCounter}
                                  resetToZero={props.resetToZero}/>
            </div>
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incCounter: () => {
            dispatch(incCounterAC())
        },
        resetToZero: () => {
            dispatch(resetToZeroAC())
        },

    }
}


const ComponentUserContainer = connect(mapStateToProps, mapDispatchToProps)(ComponentUser);
export default ComponentUserContainer;