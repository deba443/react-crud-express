import { useState } from "react"
import "../App.css"

const Demo=()=>{
    
    const[data,setData]=useState({
        name:'',
        age:'',
    })
    // console.log(formData)
    const submitHandler=(e)=>{
        // formData.append('name':data.name,'age':data.age})
        let formData=new FormData()
        for(let key in data){
            console.log(key,data[key])
            formData.append(key,data[key])

        }
        for(let pair of formData.entries()){
            console.log(pair[1])
        }
        // e.preventDefault()s
        // console.log(formData[0])
    }
    return(
        <div>
            <input type="text" className="app-input" placeholder="input" value={data.name} onChange={(e)=>{
                setData({...data,name:e.target.value})
            }}/>
            <input type="text" className="app-input" placeholder="input" value={data.age} onChange={(e)=>{
                setData({...data,age:e.target.value})
            }}/>
            <button className="app-input" onClick={submitHandler}>Submit</button>

        </div>
    )
}
export default Demo;