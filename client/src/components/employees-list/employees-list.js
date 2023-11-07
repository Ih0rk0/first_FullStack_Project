import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete,toggleStar,toggleRise,changeList}) => {
    
    let newArr=data.map(item=>{
        const {user_id, ...itemsProps}=item
        return(
            <EmployeesListItem 
            key={user_id}
            {...itemsProps}
            userId={user_id}
            changeList={changeList}
            onDelete={()=>onDelete(user_id)}
            toggleStar={()=>toggleStar(user_id)}
            toggleRise={()=>toggleRise(user_id)}/>
        )

    })
    return (
        <ul className="app-list list-group">
            {newArr}
        </ul>
    )
}

export default EmployeesList;