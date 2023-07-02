import React, { useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { Navigate, useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchTerm){
      navigate(`/search/${searchTerm}`)

      setSearchTerm('')
    }
  }
  return (
    <div className="flex justify-between bg-white rounded-xl text-red-600 px-3 py-1 w-64" >
          <form className='w-full' onSubmit={handleSubmit}>
          <input
            className="bg-transparent outline-none w-11/12"
            type="text"
            placeholder="Search.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <HiOutlineSearch />
          </button>
          </form>
        </div>
  )
}

export default SearchBar