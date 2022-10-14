import { FaUserPlus } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Modal = (props) => {
    return (
        <div>
            <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                {props.id ? <p class="text-center font-bold mb-1">Update User</p> : <p class="text-center font-bold mb-1">Add User</p>}

                                <div className="input">
                                    <div className="input-group">
                                        <FaUserPlus />
                                        <input type="text" placeholder="Deba p nayak" />
                                    </div>
                                    <div className="input-group">
                                        <MdEmail />
                                        <input type="text" placeholder="heyme@gmail.com" />
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
                                                    <input type="radio" id="radio1" name="gender" />
                                                    <label htmlFor="radio1">Male</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="radio2" name="gender" />
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
                                                    <input type="radio" id="radio3" name="status" />
                                                    <label htmlFor="radio3">Active</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="radio4" name="status" />
                                                    <label htmlFor="radio4">Inactive</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                {!props.id ? <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Add</button> : <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Update</button>}

                                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={props.cancel}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Modal;