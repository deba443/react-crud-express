import "./Common.css"
import axios from "axios"
import { FaUserPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import Modal from "./Modal"
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import {set_single_user} from "../redux/slice"
import { useDispatch } from "react-redux";
const User = () => {
    // let val;
    const dispatch=useDispatch()
    const [data, setData] = useState([])
    // const[updateData,setUpdateData]=useState({})
    // let id;
    const getData = () => {
        // if (data.length===0) {
        axios.get("http://localhost:8080/api/users").then((res) => {
            setData(res.data)
            // len=res.data.length;
            // console.log(res.data)
        });
        // }

    }
    useEffect(() => {
        // handleClick();
        getData();
    }, [])
    const [open, setOpen] = useState(false)
    const [ide, setIde] = useState(false)
    const openModal = () => {
        setOpen(true)
        // setId(false)
    }
    const closeModal = () => {
        setOpen(false);
        setIde(false)
    }

    const editHandler = (e,idt) => {
        e.preventDefault();
        let result=data.find((item)=>item._id===idt)
        dispatch(set_single_user(result))
        setIde(true)
        setOpen(true)
    }
    const deleteHandler = async (e,id) => {
        e.preventDefault()
        try{
            let result=axios.delete(`http://localhost:8080/api/users/${id}`)
            getData()
        }
        catch(err){
            console.log(err)
        }
        getData()
        
    }
    return (
        <div>
            <header>
                <h1>User Management</h1>
            </header>
            {open && <Modal cancel={closeModal} ide={ide} getData={getData} />}
            {open && ide && <Modal  cancel={closeModal} ide={ide} getData={getData}/>}
            <main>
                <button className="button text-gradient" onClick={(e) => {
                    e.preventDefault();
                    openModal();
                    // setId(false)
                }}>
                    <p>New User</p>
                    <FaUserPlus />
                </button>
                <div className="main-table">
                    <table className="table">
                        <thead className="thead">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Status</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className="tbody">
                            {data.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.status}</td>
                                        <td><button className="text-gradient" onClick={(e)=>{
                                            // console.log(item._id)
                                            editHandler(e,item._id);
                                        }}><MdModeEditOutline /></button></td>
                                        <td><button className="text-gradient" onClick={(e)=>
                                            deleteHandler(e,item._id)
                                            }><MdDelete /></button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </main>

        </div>
    )
}
export default User;