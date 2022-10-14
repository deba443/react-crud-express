import "./Common.css"
import axios from "axios"
import { FaUserPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import Modal from "./Modal"
import { MdModeEditOutline, MdDelete } from "react-icons/md";
const User = () => {
    const [data, setData] = useState([])
    // let len;
    // const handleClick = async (e) => {
    //     // e.preventDefault()
    //     if(Object.keys(data).length === 0){
    //         try {
    //             let results = await axios.get("http://localhost:8080/api/users")
    //             // console.log(results)
    //             if (results.data.length) {
    //                 // console.log(results.data)
    //                 // console.log(1)
    //                 setData(results.data)
    //             }
    //             else {
    //                 console.log(2)
    //             }
    //         }
    //         catch (err) {
    //             console.log(err)
    
    //         }
    //     }
    // }
    useEffect(() => {
        // handleClick();
        if (data.length===0) {
            axios.get("http://localhost:8080/api/users").then((res) => {
                setData(res.data)
                // len=res.data.length;
                console.log(res.data)
            });
        }
    }, [])
    const [open, setOpen] = useState(false)
    const [id, setId] = useState(false)
    const openModal = () => {
        setOpen(true)
        // setId(false)
    }
    const closeModal = () => {
        setOpen(false);
        setId(false)

    }
    const editHandler = (e) => {
        e.preventDefault();
        setId(true)
        setOpen(true)
    }
    const deleteHandler=(e)=>{
        e.preventDefault()
    }
    // console.log(data)
    // if(data.length){
    //     console.log('deba')
    // }
    // else{
    //     console.log('prasad')
    // }
    return (
        <div>
            <header>
                <h1>User Management</h1>
            </header>
            {open && <Modal open={openModal} cancel={closeModal} id={id} />}
            {open && id && <Modal open={openModal} cancel={closeModal} id={id} />}
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
                            {data.map((item,i) => {
                                return(
                                    <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.status}</td>
                                    <td><button className="text-gradient" onClick={editHandler}><MdModeEditOutline /></button></td><td><button className="text-gradient" onClick={deleteHandler}><MdDelete /></button></td>
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