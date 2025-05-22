import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import { useState,useEffect } from 'react';
import './app.css';

function App  () {
  const [list,setList]=useState([])
  const  changeList=async (data)=>{
    const newData=await data
    setList(newData)
  }

  useEffect(()=>{
      fetch('https://first-full-stack-project-three.vercel.app/')
      .then(data=>data.json())
      .then(data=>{
          console.log(data)
          setList(data)
      })
  
  },[])
    const [trigger,setTrigger]=useState(1)
    const [searchStr,setSearchStr]=useState('')
  
const toggleStar = async (id) => {
    // знайдемо в списку старе значення
    const old = list.find(u => u.user_id === id);
    const newPromotion = !old.promotion;

    try {
      const resp = await fetch(
        `https://first-full-stack-project-three.vercel.app/users/${id}/promotion`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ promotion: newPromotion }),
        }
      );
      if (!resp.ok) throw new Error('Network response was not ok');
      const updatedUser = await resp.json();

      // оновимо локальний стейт
      setList(prev =>
        prev.map(u => u.user_id === id ? updatedUser : u)
      );
    } catch (e) {
      console.error('Failed to toggle promotion:', e);
    }
  };

  const changeSearchStr=(str)=>{
    setSearchStr(str)
  }

  const find = (data,str) => {
    console.log('yes')
    if(str.length===0){
      console.log(0)
      return data
    }else{
      return data.filter(item=>{
        return item.user_name.indexOf(str)>-1
      })
    }
  }
  
console.log(Date.now())
const toggleRise = async (id) => {
    const old = list.find(u => u.user_id === id);
    const newPremium = !old.get_premium;

    try {
      const resp = await fetch(
        `https://first-full-stack-project-three.vercel.app/users/${id}/premium`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ get_premium: newPremium }),
        }
      );
      if (!resp.ok) throw new Error('Network response was not ok');
      const updatedUser = await resp.json();

      setList(prev =>
        prev.map(u => u.user_id === id ? updatedUser : u)
      );
    } catch (e) {
      console.error('Failed to toggle premium:', e);
    }
  };

  const setEmployer=(obj)=>{
    setList((prevData) => [...prevData, obj])

  }


    let data
    switch(trigger){
      case 1 :data=find(list,searchStr)
      break
      case 2 :data=find(list.filter(item=>item.promotion),searchStr) 
      break
      case 3 :data=find(list.filter(item=>item.salary>1000),searchStr) 
      break
      default: data=list
    }
    console.log( data)
    return (
      
      <div className="app">
        <AppInfo  
        
        data={list}/>
        
        <div className="search-panel">
          <SearchPanel 
          changeSearchStr={changeSearchStr}/>

          <AppFilter 
          setTrigger={setTrigger}
          trigger={trigger}/>
        </div>

        <EmployeesList 
        data= { data} 
        changeList={changeList}
        toggleStar={toggleStar}
        toggleRise={toggleRise}/>

        <EmployeesAddForm 
        changeList={changeList}
        setEmployer={setEmployer}
        />
      </div>
    );
  
}

export default App;
