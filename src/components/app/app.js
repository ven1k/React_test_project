import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-apnel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
          data: [
            {name: "Hakate Kakashi", salary: 5000, increase: false, rise: true, id: 1},
            {name: "Kamado Tanjiro", salary: 2400, increase: true, rise: false, id: 2},
            {name: "Ranonoa Zoro", salary: 4000, increase: false, rise: false, id: 3},
            {name: "Ichigo Kurasaki", salary: 1100, increase: false, rise: false, id: 4},
          ]
        }
        this.maxId = 4;
    }

deleteItem = (id) => {
    this.setState(({data}) => {
/*        const index = data.findIndex(elem => elem.id == id);  //fisrt 
        
         const before = data.slice(0, index);
        const after = data.slice(index + 1);

        const newArr = [...before, ...after] */


        return {
            data: data.filter(item => item.id !== id)   // second 
        }
    })
}

addItem = (name, salary) => {
  
    if(name.length > 0 && salary.length > 0) {
    const currentEmployee = {
        name: name,
        salary: salary,
        increase: false,
        rise: false,
        id: ++this.maxId
    }

    this.setState(({data}) => {
        return {
            data: [...data, currentEmployee] 
        }
    })
   } 
}

onToggleIncrease = (id) => {
 /*    this.setState(({data}) => {
        const index = data.findIndex(elem => elem.id === id);

        const old = data[index];
        const newItem = {...old, increase: !old.increase};
        const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

        return {
            data: newArr
        } 
     })*/

        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }))

}

onToggleRise = (id) => {
    this.setState(({data}) => ({
        data: data.map(item => {
            if(item.id === id) {
                return {...item, rise: !item.rise}
            }
            return item;
        })
    }))
}

render() {

    const employees = this.state.data.length;
    const increase = this.state.data.filter(item => item.increase === true).length;

    return (
    <div className="app">
        <AppInfo countEmployees={employees} increase={increase}/>
        <div className="search-panel">
            <SearchPanel />
            <AppFilter />
        </div>
        <EmployeesList 
            data={this.state.data}
            onDelete={this.deleteItem}
            onToggleIncrease={this.onToggleIncrease}
            onToggleRise={this.onToggleRise}
            />
        <EmployeesAddForm onAdd={this.addItem}/>
    </div>
    );
}
}

export default App; 