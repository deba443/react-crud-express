// import userEvent from "@testing-library/user-event";
import axios from "axios";
import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useSelector } from "react-redux";
const Modal = (props) => {
    const {posts}=useSelector((state)=>state.post)
    let val=JSON.parse(localStorage.getItem("auth"))
    let{_id,name,email,gender,status}=posts[0]
    // if(posts.length){
        
    // }
    const [input, setInput] = useState({
        name: '',
        email: '',
        gender: '',
        status: ''
    })
    const [updateInput,setUpdateInput]=useState({
        name: name,
        email: email,
        gender: gender,
        status: status

    })
    
    const addUser = async (e) => {
        e.preventDefault()
        try {
            let results = await axios.post("http://localhost:8080/api/users", {
                name: input.name,
                email: input.email,
                gender: input.gender,
                status: input.status
            },
            {
                headers:{
                    Authorization:`Bearer ${val.token}`
                }
            }
            )
        }
        catch (err) {
            console.log(err)
        }
        props.getData()
        props.cancel()
    }
    const updateUser=async (e)=>{
        e.preventDefault()
        try{
            axios.put(`http://localhost:8080/api/users/${_id}`,updateInput,{
                headers:{
                    Authorization:`Bearer ${val.token}`
                }

            })
            props.getData()

        }
        catch(err){
            console.log(err)
            props.getData()
        }
        
        props.cancel()
    }
    return (
        
        <div>
            {!props.ide?
            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                 <p class="text-center font-bold mb-1">Add User</p>

                                <div className="input-data">
                                    <div className="input-group">
                                        <FaUserPlus />
                                        <input className="input" type="text" placeholder="Deba p nayak"  value = {input.name} onChange={(e) => {
                                            setInput({ ...input, name: e.target.value })
                                        }} />
                                    </div>
                                    <div className="input-group">
                                        <MdEmail />
                                        <input type="text" className="input" placeholder="heyme@gmail.com" value={input.email} onChange={(e) => {
                                            setInput({ ...input, email: e.target.value })
                                        }} />
                                    </div>
                                    {/* <div className="input-group">
                                        <FaUserPlus/>
                                        <input type="text" placeholder="Deba p nayak" />
                                    </div> */}
                                    <div className="input-group">
                                        <div className="input-group__content">
                                            <label htmlFor="gender">Gender</label>
                                            <div className="input-group__content-main">
                                                <div>
                                                    <input type="radio" id="radio1" name="gender" onClick={() => {
                                                        setInput({ ...input, gender: 'Male' })
                                                    }} />
                                                    <label htmlFor="radio1">Male</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="radio2" name="gender" onClick={() => {
                                                        setInput({ ...input, gender: 'Female' })
                                                    }} />
                                                    <label htmlFor="radio2">Female</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <div className="input-group__content">
                                            <label htmlFor="status" className="status-label">Status</label>
                                            <div className="input-group__content-main">
                                                <div>
                                                    <input type="radio" id="radio3" name="status" onClick={() => {
                                                        setInput({ ...input, status: 'Active' })
                                                    }} />
                                                    <label htmlFor="radio3">Active</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="radio4" name="status" onClick={() => {
                                                        setInput({ ...input, status: 'Inactive' })
                                                    }} />
                                                    <label htmlFor="radio4">Inactive</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" onClick={addUser}>Add</button> 

                                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={props.cancel}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>:
                        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        
                        <div class="fixed inset-0 z-10 overflow-y-auto">
                            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        
                                <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                         <p class="text-center font-bold mb-1">Update User</p>
        
                                        <div className="input">
                                            <div className="input-group">
                                                <FaUserPlus />
                                                <input type="text" placeholder="Deba p nayak"  value = {updateInput.name} onChange={(e) => {
                                                    setUpdateInput({ ...updateInput, name: e.target.value })
                                                }} />
                                            </div>
                                            <div className="input-group">
                                                <MdEmail />
                                                <input type="text" placeholder="heyme@gmail.com" value={updateInput.email} onChange={(e) => {
                                                    setUpdateInput({ ...updateInput, email: e.target.value })
                                                }} />
                                            </div>
                                            {/* <div className="input-group">
                                                <FaUserPlus/>
                                                <input type="text" placeholder="Deba p nayak" />
                                            </div> */}
                                            <div className="input-group">
                                                <div className="input-group__content">
                                                    <label htmlFor="gender">Gender</label>
                                                    <div className="input-group__content-main">
                                                        <div>
                                                            <input type="radio" id="radio1" name="gender" onClick={() => {
                                                                setUpdateInput({ ...updateInput, gender: 'Male' })
                                                            }} />
                                                            <label htmlFor="radio1">Male</label>
                                                        </div>
                                                        <div>
                                                            <input type="radio" id="radio2" name="gender" onClick={() => {
                                                                setUpdateInput({ ...updateInput, gender: 'Female' })
                                                            }} />
                                                            <label htmlFor="radio2">Female</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group__content">
                                                    <label htmlFor="status" className="status-label">Status</label>
                                                    <div className="input-group__content-main">
                                                        <div>
                                                            <input type="radio" id="radio3" name="status" onClick={() => {
                                                                setUpdateInput({ updateInput, status: 'Active' })
                                                            }} />
                                                            <label htmlFor="radio3">Active</label>
                                                        </div>
                                                        <div>
                                                            <input type="radio" id="radio4" name="status" onClick={() => {
                                                                setUpdateInput({ updateInput, status: 'Inactive' })
                                                            }} />
                                                            <label htmlFor="radio4">Inactive</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" onClick={updateUser}>Update</button> 
        
                                        <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={props.cancel}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
}


        </div>
    )
}
export default Modal;