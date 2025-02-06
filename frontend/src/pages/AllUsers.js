import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import { toast } from 'react-toastify'
import moment from 'moment'
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';

/**
 * Component to display and manage all users.
 *
 * @component
 * @example
 * return (
 *   <AllUsers />
 * )
 *
 * @returns {JSX.Element} The AllUsers component.
 *
 * @description
 * This component fetches and displays a list of all users in a table format. 
 * It allows updating user roles by opening a modal with user details.
 *
 * @function
 * @name AllUsers
 *
 * @property {Array} allUser - State to store the list of all users.
 * @property {Function} setAllUsers - Function to update the allUser state.
 * @property {Boolean} openUpdateRole - State to control the visibility of the update role modal.
 * @property {Function} setOpenUpdateRole - Function to update the openUpdateRole state.
 * @property {Object} updateUserDetails - State to store the details of the user to be updated.
 * @property {Function} setUpdateUserDetails - Function to update the updateUserDetails state.
 * @property {Function} fetchAllUsers - Function to fetch all users from the API.
 *
 * @requires useState - React hook to manage state.
 * @requires useEffect - React hook to perform side effects.
 * @requires SummaryApi - API configuration for fetching users.
 * @requires toast - Function to display error messages.
 * @requires moment - Library to format dates.
 * @requires MdModeEdit - Icon component for edit button.
 * @requires ChangeUserRole - Component to change user role.
 */
const AllUsers = () => {
    const [allUser,setAllUsers] = useState([])
    const [openUpdateRole,setOpenUpdateRole] = useState(false)
    const [updateUserDetails,setUpdateUserDetails] = useState({
        email : "",
        name : "",
        role : "",
        _id  : ""
    })

    const fetchAllUsers = async() =>{
        const fetchData = await fetch(SummaryApi.allUser.url,{
            method : SummaryApi.allUser.method,
            credentials : 'include'
        })

        const dataResponse = await fetchData.json()

        if(dataResponse.success){
            setAllUsers(dataResponse.data)
        }

        if(dataResponse.error){
            toast.error(dataResponse.message)
        }

    }

    useEffect(()=>{
        fetchAllUsers()
    },[])

  return (
    <div className='bg-white pb-4'>
        <table className='w-full userTable'>
            <thead>
                <tr className='bg-black text-white'>
                    <th>Sr.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Created Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className=''>
                {
                    allUser.map((el,index) => {
                        return(
                            <tr>
                                <td>{index+1}</td>
                                <td>{el?.name}</td>
                                <td>{el?.email}</td>
                                <td>{el?.role}</td>
                                <td>{moment(el?.createdAt).format('LL')}</td>
                                <td>
                                    <button className='bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white' 
                                    onClick={()=>{
                                        setUpdateUserDetails(el)
                                        setOpenUpdateRole(true)

                                    }}
                                    >
                                        <MdModeEdit/>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

        {
            openUpdateRole && (
                <ChangeUserRole 
                    onClose={()=>setOpenUpdateRole(false)} 
                    name={updateUserDetails.name}
                    email={updateUserDetails.email}
                    role={updateUserDetails.role}
                    userId={updateUserDetails._id}
                    callFunc={fetchAllUsers}
                />
            )      
        }
    </div>
  )
}

export default AllUsers