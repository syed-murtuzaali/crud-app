import React from 'react';
import img from '../assets/img.png'
import Edit from './Edit';
import AddProductModal from './AddProductModal';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/slices/AuthSlice';
export default function Navbar() {
  const disptch=useDispatch()
  const navigate = useNavigate();
  const {Auth} = useSelector((state)=>state.auth)

    const hanldeAdd=()=>{
    document.getElementById('addProductModal').showModal();
    }
    const handleNavigate=()=>{
      disptch(logOut())
      navigate('/login')
    }
   
  return (
   <>
    <div className="navbar bg-white shadow-md px-4 sm:px-6 lg:px-8 sticky top-0 z-50">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl sm:text-2xl font-bold text-purple-600">
          StockNest
        </a>
      </div>
      <div className="flex-none gap-2 sm:gap-4">
        <button 
          onClick={hanldeAdd}
          className="btn btn-primary btn-sm sm:btn-md hidden sm:flex"
        >
          Add Product
        </button>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-8 sm:w-10 rounded-full ring-2 ring-purple-300">
              <img
                alt="User Avatar"
                src={Auth?.profileImage || img}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow-lg z-[1]">
            <li className="menu-title">
              <span className="text-sm font-semibold text-gray-700">{Auth?.userName || 'User'}</span>
              <span className="text-xs text-gray-500">{Auth?.email || ''}</span>
            </li>
            <li onClick={hanldeAdd} className="sm:hidden">
              <a className="justify-between font-medium">
                Add Product
              </a>
            </li>
            <li onClick={handleNavigate}>
              <a className="font-medium text-red-600">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div></>
  );
}
