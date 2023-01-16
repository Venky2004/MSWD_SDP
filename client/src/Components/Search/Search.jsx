import React from 'react'
import "./search.css";
import {BsSearch} from 'react-icons/bs'
import  {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react';
import { useEffect } from 'react';

export default function SearchBar({ placeholder, data }) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.login.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };
    return (
        <div className=" container search_container" >
            <div className='search_input' >
                <input
                    type="text"
                    placeholder={placeholder}
                    value={wordEntered}
                    onChange={handleFilter} />
                    <div className="search_icon">
                    {
                       (wordEntered.length===0)?<BsSearch/>
                  :<a onClick={clearInput}><AiOutlineClose/></a>
                    }
            </div>
                    </div>
                    
        </div>
    );
}