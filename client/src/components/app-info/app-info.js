import "./app-info.css";
import { useState,useEffect } from "react";

const AppInfo = ({data}) => {
    const [names,setNames]=useState([])

    useEffect(()=>{
        setNames(data.filter(item=> item.get_premium ))
    },[data])

    return (
        <div className="app-info">
            <h1>Облік співробітників в компанії </h1>
            <h2>Загальна кількість співробітників:{data.length}</h2>
             <h2>Премію отримають:{names.map(name=>name.user_name+", ")}</h2> 
        </div>
    )
}

export default AppInfo;