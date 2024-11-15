// src/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerAPI } from '../services/allAPI';

function Register() {
    const navigate=useNavigate()
    const [inputData,setInputData]=useState({
      username:"",email:"",password:""})
  
    const handleRegister=async(e)=>{
      e.preventDefault()
      // console.log("inside handle register");
      if(inputData.email && inputData.password && inputData.username){
        // alert("make api call")
        try {
          const result =await registerAPI(inputData)
          console.log(result);
          if(result.status==200){
            alert(`Welcome ${result.data?.username}, Please login to explore our website !!`)
            navigate('/login')
            setInputData( {username:"",email:"",password:""})
          }else{
            if(result.response.status==406){
              alert(result.response.data)
              setInputData( {username:"",email:"",password:""})
            }
          }
          
        } catch (error) {
          console.log(error);
          
        }
  
      }else{
        alert("Please fill the form !!")
      }
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={inputData.username} onChange={(e)=>setInputData({...inputData,username:e.target.value})}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={inputData.email} onChange={(e)=>setInputData({...inputData,email:e.target.value})}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={inputData.password} onChange={(e)=>setInputData({...inputData,password:e.target.value})}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-center">
          <p>Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
