import LogInModal from "./LogInModal";
// import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import "./auth.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
    // const[error,setError]=useState=({
    //     emailError:'',
    //     passwordError:'',
    // })

    const navigate=useNavigate();
    const [input, setInput] = useState({
        emailData: '',
        passwordData: '',
    })
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const signUpModal = () => {
        setOpen(true)
    }
    // const getLoginData=async ()=>{
    //     try{
    //         let results=axios.post("http://localhost:8080/api/signin",input)
    //         console.log(results)
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }
    // useEffect(()=>{
    const logInHandler= async (e)=>{
            e.preventDefault()
            // console.log(input)
            // useEffect(()=>{

            // })
            try{
                let results=await axios.post("http://localhost:8080/api/signin",{
                    email:input.emailData,
                    password:input.passwordData
                })
                console.log(results.data.user,results.data.token)
                localStorage.setItem("auth",JSON.stringify(results.data))
                navigate('/home')
            }
            catch(err){
                console.log(err)
            }
    }
    
    return (
        <div>

            <section className="login-main">
                {open && (
                    <LogInModal
                        cancel={handleClose}
                    />
                )}

                <form action="">
                    <div className="login-container">
                        <div className="conatainer__input">
                            <div className="content">
                                <div className="userName">
                                    <MdEmail />
                                    <input
                                        type="text"
                                        placeholder="email"
                                        className="inputValue"
                                        value={input.emailData}
                                        onChange={(e) => {
                                            setInput({...input,emailData:e.target.value});
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="content">
                                <div className="password">
                                    <RiLockPasswordFill />
                                    <input
                                        type="password"
                                        placeholder="password"
                                        className="inputValue"
                                        value={input.passwordData}
                                        onChange={(e) => {
                                            setInput({ ...input, passwordData: e.target.value });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="container__button">
                            <button className="logIn" onClick={logInHandler}>log in</button>
                            <div>
                                <span>Not a user ? </span>
                                <span className="signUp" onClick={signUpModal}>
                                    Sign up
                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </section>

        </div>
    );
}
export default Login;