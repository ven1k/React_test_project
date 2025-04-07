import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-apnel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

function App() {
    const data = [
        {name: "Hakate Kakashi", salary: 5000, increase: false},
        {name: "Kamado Tanjiro", salary: 2400, increase: true},
        {name: "Ranonoa Zoro", salary: 4000, increase: false},
        {name: "Ichigo Kurasaki", salary: 1100, increase: false},
    ]

    return (
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm />
        </div>
    );
}

export default App; 