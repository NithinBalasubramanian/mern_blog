import React , { useState , useEffect } from 'react';
import axios from '../config/instance';
import { Link } from 'react-router-dom';

function BlogHome() {

    let [ Listdata , setListdata ] = useState([]);

    useEffect(() => {
        fetchAll();
        document.title = "MERN Blog";
    }, [])

    const fetchAll = () =>{
        axios.get('/')
        .then((res) => {
            setListdata(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="container">
            <div className="row blogListOut">
            { Listdata.map((itm,k) => {
                return(
                    <div className="col-md-4 card_col">
                        <Link to={'/Blog/'+itm.url} exact className="card">
                            <img src={itm.imgUrl} alt="img" width="100%" height="150px" /> 
                            <h4>{itm.title}</h4>
                            <p> - by {itm.auther}</p>
                        </Link>
                    </div>
                    )
                }) 
            }
            </div>
        </div>
    )
}

export default BlogHome;
