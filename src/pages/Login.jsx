// src/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI } from '../services/allAPI';

function Login() {
  const navigate =useNavigate()
  const [inputData, setInputData] = useState({
    email:"",password:""
  });

  const handleLogin = async (e) => {
    e.preventDefault()
    if(inputData.email && inputData.password){
      try{
        const result = await loginAPI(inputData)
        console.log(result);
        if(result.status==200){
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token) 
          setInputData({
            username:"",
            email:"",
            password:""
          })
          navigate('/home')
        }else{
          if(result.response.status==404){
            alert(result.response.data)
          }
        }

      }catch(error){
        console.log(error);
      }
    }else{
      alert("fill the form")
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
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
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p>Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
