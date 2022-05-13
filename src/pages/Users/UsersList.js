import React , {useState, useMemo} from  "react";
import {Menu, MenuItem} from "react-pro-sidebar";
import { MdWarning  } from "react-icons/md";
import './UsersList.css';
import { users} from "../../db.js";
import {Rating} from "../../components/Rating/Rating";
import NavBar from "../../components/NavBar/NavBar";

import {
    Link
} from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination'



const ItemListUser = () => {

     let PageSize = 7;
     const [currentPage, setCurrentPage] = useState(1)

        const currentTableData = useMemo(() => {
            const firstPageIndex = (currentPage - 1) * PageSize;
            const lastPageIndex = firstPageIndex + PageSize;
            return users.slice(firstPageIndex , lastPageIndex);
        }, [currentPage])


    function handlePageChange(pageNumber) {
        this.setState({activePage : pageNumber})
    }

    return (
        <div className="usersContainer page">
            <NavBar/>
            <div className="column">
                <table className="containList">
                    <thead>
                    <tr>
                        <th className="headTab"></th>
                        <th className="headTab">First Name</th>
                        <th className="headTab">Last Name</th>
                        <th className="headTab">Email</th>
                        <th className="headTab">Phone</th>
                        <th className="headTab">Rating</th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentTableData.map(item => {
                        return (
                            <tr key={item.id}>
                                <td> <img className="imgUserList" src={item.profilPicture}/></td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.mail}</td>
                                <td>{item.phone}</td>
                                <td><Rating star = {item.rate}/></td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={users.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>
        </div>
    )
}

export default ItemListUser;