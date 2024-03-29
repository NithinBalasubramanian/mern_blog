import React, { useState , useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

function Header(){

    const [ display_status , setdisplay_status ] = useState(false);
    
     useEffect(() => {
        setdisplay_status(false);
    },[])
    
    const sidebarStatusHandler = () =>{
        setdisplay_status(!display_status);
    }

    return(
        <div className="header_main">
            <div className="blog_container">
                <div className="row">
                    <div className="col-md-6 flex">
                        <div className="logo_part">
                            <h1>MERN BLOG</h1>
                            {/* <img src="" alt="logo" height="100%" width="100%"></img> */}
                        </div>
                        <BiMenuAltLeft onClick={ sidebarStatusHandler }  className="desk_none" size="40px" color="#fff" style={{margin:"10px"}}/>
                    </div>
                    <div className="col-md-6 mobile_none">
                        <div className="menu">
                            <ul>
                                <li><NavLink to="/" exact activeClassName="navActive">Home</NavLink></li>
                                <li><NavLink to="/AddBlog" exact activeClassName="navActive">Add Blog</NavLink></li>
                                {/* <li><NavLink to="/ListBlog" exact activeClassName="navActive">List Blog</NavLink></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={ (display_status) ? 'mobileNav mobOn' : 'mobileNav'}>
                <ul>
                    <li><NavLink to="/" exact activeClassName="navActive">Home</NavLink></li>
                    <li><NavLink to="/AddBlog" exact activeClassName="navActive">Add Blog</NavLink></li>
                    {/* <li><NavLink to="/ListBlog" exact activeClassName="navActive">List Blog</NavLink></li> */}
                </ul>
            </div>
        </div>
    )
}

export default Header;
