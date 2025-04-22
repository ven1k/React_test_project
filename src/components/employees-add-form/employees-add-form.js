import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: ""
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addNewItem = (e, onAdd) => {
        e.preventDefault();
        onAdd(this.state.name, this.state.salary);
        this.setState(() => {
           return {
                name: "",
                salary: ""
            } 
        })
    }

    render() {
        const {name, salary} = this.state;
        const {onAdd} = this.props;

        return (
            <div className="app-add-form">
            <h3>Додати нового працівника</h3>
            <form
                className="add-form d-flex"
                onSubmit={(e) => this.addNewItem(e, onAdd)}>
                <input type="text"
                    className="form-control new-post-label"
                    name="name"
                    value={name}
                    placeholder="Як його звуть?" onChange={this.onValueChange}/>
                <input type="number"
                    className="form-control new-post-label"
                    name="salary"
                    value={salary}
                    placeholder="З/П в $?" onChange={this.onValueChange}/>
    
                <button type="submit"
                        className="btn btn-outline-light">Додати</button>
            </form>
        </div>
        )
    }
}

export default EmployeesAddForm;