import { useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import {  } from "react-router-dom";
import { useNavigate,Outlet } from "react-router-dom";

const Protected=()=>{
    let value=JSON.parse(localStorage.getItem('auth'))
    const navigate=useNavigate()
    // let token=value.token
    useEffect(()=>{
        // console.log(value.token)
        if(!value.token){
            // Navigate()
            navigate('/')
        }
    })
    return(
        <div>
            <Outlet/>

        </div>
    )
}
export default Protected;