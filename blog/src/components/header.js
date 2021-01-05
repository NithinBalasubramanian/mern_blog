import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

function Header(){
    return(
        <div className="header_main">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="logo_part">
                            <h1>MERN BLOG</h1>
                            {/* <img src="" alt="logo" height="100%" width="100%"></img> */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="menu">
                            <ul>
                                <li><NavLink to="/" exact activeClassName="navActive">Home</NavLink></li>
                                <li><NavLink to="/AddBlog" exact activeClassName="navActive">Add Blog</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;