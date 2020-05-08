import React from 'react';
import './App.css';
import ComponentUserContainer from "./ComponentUser";
import ComponentConfigContainer from "./ComponentConfig";


class App extends React.Component {

    componentDidMount() {
        // dispatch(setStateFromLocalStorageAC())
        console.log('я вмонтировалась')
        // this.restoreState()
    }



    render = () => {
        return (
            <div className="container">
                <ComponentConfigContainer/>
                {/*<ComponentConfig state={this.state}*/}
                {/*                 adjustValueMin={this.adjustValueMin}*/}
                {/*                 adjustValueMax={this.adjustValueMax}*/}
                {/*                 setSettings={this.setSettings}/>*/}

                <ComponentUserContainer />
                {/*<ComponentUser state={this.state}*/}
                {/*               incCounter={this.incCounter}*/}
                {/*               resetToZero={this.resetToZero}/>*/}
            </div>
        );
    }
}

export default App;