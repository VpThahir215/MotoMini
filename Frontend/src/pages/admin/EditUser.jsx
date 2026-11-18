import React from 'react'
import UserEdit from '../../component/Admin/UserEdit'
import { useLocation } from 'react-router-dom'

const EditUser = () => {
    
    const location =useLocation()
    const id=location.state?.user
    console.log("iddddd",id);
    
    

    

  return (
    <div>
      <UserEdit id={id}/>
    </div>
  )
}

export default EditUser
