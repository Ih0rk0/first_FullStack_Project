import './employees-add-form.css';
import { Component } from 'react';
import { postData } from '../../services/services';
class EmployeesAddForm extends Component {
    constructor(props){
        super(props)
        this.state={
            user_name:'',
            salary:''
        }
    }
    onValueChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        const{user_name,salary}=this.state
        return (
            <div className="app-add-form">
                <h3>Добавте нового співробітника</h3>
                <form
                    onSubmit={(e)=>this.props.changeList(postData(e,{"name":e.target.user_name.value,"salary":e.target.salary.value},'https://first-full-stack-project-three.vercel.app/'))} 
                    className="add-form d-flex">
                    <input name = 'user_name'
                        onChange={this.onValueChange} 
                        value={user_name}type="text"
                        className="form-control new-post-label"
                        placeholder="Як його звати?" />
                    <input name='salary' 
                        onChange={this.onValueChange} 
                        value={salary} type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавити</button>
                </form>
            </div>
        )
    }

}

export default EmployeesAddForm;