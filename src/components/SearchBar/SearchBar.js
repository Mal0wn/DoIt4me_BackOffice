import React from "react";
import "./SearchBar.css";
import {FaSearch} from "react-icons/fa"

export const SearchBar = () => {
    return (
       <div className="containSearchBar">
           <input type="search"/>
           <FaSearch/>
       </div>
    )
}