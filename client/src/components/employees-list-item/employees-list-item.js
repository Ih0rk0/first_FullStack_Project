import './employees-list-item.css';
import { postData } from '../../services/services';

const EmployeesListItem =(props)=>{
    let {user_name, salary,get_premium,promotion,userId,toggleStar,toggleRise,changeList} =props

    let nameOfClass
    

    if(get_premium &&promotion){
        nameOfClass='list-group-item d-flex justify-content-between increase like'
    }else if(get_premium){
        nameOfClass='list-group-item d-flex justify-content-between increase'
    }else if(promotion){
        nameOfClass='list-group-item d-flex justify-content-between like'
    }else{
        nameOfClass='list-group-item d-flex justify-content-between'
    }




    return (
        <li className={nameOfClass}>
            <span onClick={toggleStar} className="list-group-item-label">{user_name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary+'$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={toggleRise} type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button onClick={(e)=>changeList(postData(e,{userId},'https://first-full-stack-project-client.vercel.app/delete'))} type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}
export default EmployeesListItem;