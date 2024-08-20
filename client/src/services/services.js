async function postData(e,data,url){
    console.log(data)
    e.preventDefault()
    const res= await fetch(url,{
        method:"POST",
        headers:{'Content-type': 'application/json'},
        body:JSON.stringify(data)
        
    })
    if(!res.ok){
        throw new Error(` Gould not fetch ${url} status:${res.status}`)
    }
    return JSON.parse(res)
}
export{postData}