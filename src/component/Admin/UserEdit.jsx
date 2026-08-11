import React, { useEffect, useState } from "react";
import { data, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getUserById } from "../../services/userService";
import { editUser } from "../../services/userService";
import Users from "../../pages/admin/Users";
import { getUsers } from "../../services/userService";



const UserEdit = ({id}) => {

 
  const navigate = useNavigate();
  const [getUser,setGetUser]=useState([])

  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    access:"",
  });
useEffect(()=>{
    async function fetchUser(){
        const data= await getUserById(id)
        console.log("hyyyyyyyyyy",data.name);
        setUser(data)
        
        
    }
    fetchUser()
},[])



  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.name.trim()) {
      toast.error("Please enter user name");
      return;
    }

    if (!user.email.trim()) {
      toast.error("Please enter email");
      return;
    }

    try {
      await editUser(id, user);

      toast.success("User updated successfully");

      navigate("/admin/users");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update user");


    }
  };


  return (
   <div className="min-h-screen bg-[#080808] p-8 text-white">

      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">
            Edit User
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Update user account information
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="border border-[#29230d] bg-[#0d0d0d] p-6"
        >

          {/* Name */}
          <div className="mb-5">
            <label className="mb-2 block text-xs uppercase tracking-wider text-gray-500">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full border border-[#29230d] bg-[#111] px-4 py-3 text-sm text-gray-200 outline-none focus:border-[#D3AF37]"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="mb-2 block text-xs uppercase tracking-wider text-gray-500">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border border-[#29230d] bg-[#111] px-4 py-3 text-sm text-gray-200 outline-none focus:border-[#D3AF37]"
            />
          </div>

          {/* Role */}
          <div className="mb-6">
            <label className="mb-2 block text-xs uppercase tracking-wider text-gray-500">
              Role
            </label>

            <select
              name="role"
              value={user.role}
              onChange={handleChange}
              className="w-full border border-[#29230d] bg-[#111] px-4 py-3 text-sm text-gray-200 outline-none focus:border-[#D3AF37]"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
           <div className="mb-6">
            <label className="mb-2 block text-xs uppercase tracking-wider text-gray-500">
              Access
            </label>

            <select
              name="access"
              value={user.access}
              onChange={handleChange}
              className="w-full border border-[#29230d] bg-[#111] px-4 py-3 text-sm text-gray-200 outline-none focus:border-[#D3AF37]"
            >
              <option value="active">Active</option>
              <option value="blocked">Blocked</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={() => navigate("/admin/users")}
              className="border border-[#29230d] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 transition hover:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-[#D3AF37] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-black transition hover:bg-[#b99625]"
            >
              Update User
            </button>

          </div>

        </form>
      </div>
    </div>
  )
}

export default UserEdit
