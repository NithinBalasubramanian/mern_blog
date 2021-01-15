import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer(){

    let date=new Date();

    let Year  = date.getFullYear();

    return(
        <footer>
            <p>{ Year }  &copy; || All Right Reserved || MERN BLOG</p>
        </footer>
    )
}

export default Footer;