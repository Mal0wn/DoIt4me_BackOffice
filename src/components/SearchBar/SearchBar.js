import React from "react";
import {FaSearch} from "react-icons/fa"
import style from "./SearchBar.module.css"

export const SearchBar = () => {
    return (
       <div className={style.containSearchBar}>
           <input type="search"/>
           <FaSearch/>
       </div>
    )
}