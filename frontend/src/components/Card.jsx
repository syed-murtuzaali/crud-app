import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Edit from './Edit';

export default function Card({item,HandleEdit,handleDelete}) {
    // const HandleEdit=()=>{
    //     // document.getElementById('my_modal_4').showModal()
    // }
  return (
    <>
    
      <div className="w-full rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
        <figure className="relative overflow-hidden">
          <img
            className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-300"
            src={item.Image_url}
            alt={item.title}
          />
        </figure>
        <div className="p-4 sm:p-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{item.title}</h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">{item.des}</p>
          <div className="flex flex-wrap gap-2">
            <button className="btn btn-outline btn-sm flex-1 sm:flex-none flex items-center justify-center gap-2 text-xs sm:text-sm" onClick={HandleEdit}>
              <FaEdit /> <span>Edit</span>
            </button>
            <button className="btn btn-outline btn-error btn-sm flex-1 sm:flex-none flex items-center justify-center gap-2 text-xs sm:text-sm" onClick={handleDelete}>
              <FaTrash /> <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
