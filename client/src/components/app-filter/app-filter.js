import "./app-filter.css";

const AppFilter  =({trigger,setTrigger})=>  {
    // showPromotion =async()=>{
    //        this.setState(({trigger})=>({
    //         trigger: !trigger
    //     }))
        
    //     console.log(this.state.trigger)
    //      this.props.showPromotion(this.state.trigger)
    // }

        return (
            <div  className="btn-group">
                <button onClick={()=>setTrigger(1)}  type="button"
                        className={trigger===1 ?  "btn btn-light" :"btn btn-outline-light"}>
                        Всі працівники
                </button>
                <button onClick={()=>setTrigger(2)} type="button"
                        className={trigger===2 ?  "btn btn-light" :"btn btn-outline-light"}>
                        На підвищення
                </button>
                <button onClick={()=>setTrigger(3)} type="button"
                        className={trigger===3 ?  "btn btn-light" :"btn btn-outline-light"}>
                        З/П більше 1000$
                </button>
            </div>
        )
}



export default AppFilter;