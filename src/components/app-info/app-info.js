import { Component } from 'react';

import './app-info.css';

class AppInfo extends Component {
   constructor(props) {
        super(props);
        this.state = {}
   }

   render() {
    const {countEmployees, increase} = this.props;

    return (
        <div className="app-info">
            <h1>Список працівників в компанії</h1>
            <h2>Загальна кількість працівників: {countEmployees}</h2>
            <h2>Премію отримають: {increase}</h2>
        </div>
    )
   }
   
}

export default AppInfo;  