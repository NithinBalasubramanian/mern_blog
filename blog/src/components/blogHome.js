import React , { useState , useEffect } from 'react';
import axios from '../config/instance';
import { Link } from 'react-router-dom';
import moment from 'moment';

function BlogHome() {

    let [ Listdata , setListdata ] = useState([]);

    const [ loader , setLoader ] = useState(true);

    useEffect(() => {
        fetchAll();
        document.title = "MERN Blog - Blogging Application for tech news and intersting world news";
    }, [])

    const fetchAll = () =>{
        axios.get('/')
        .then((res) => {
            setListdata(res.data);
            setLoader(false);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div className="container">
         <div className={ (loader) ? 'loading' : ''}></div>
            <div className="row blogListOut">
            { Listdata.map((itm,k) => {
                if(k === 0 || k === 1){
                    return(
                    <div className="col-md-6 card_col" >
                        <div className="card_home">
                            <Link to={'/Blog/'+itm.url} exact >
                                <img src={itm.imgUrl} alt={itm.title} width="100%" height="250px" /> 
                                <div className="byAuth">
                                    - by {itm.auther} 
                                    <small>{moment(itm.createdOn).fromNow()}</small>
                                </div>
                                <h4>{itm.title}</h4>
                                <p className="frontSubCont">{itm.preheading}</p>
                            </Link>
                        </div>                        
                    </div>
                    )
                }
                return(
                    <div className="col-md-4 card_col">
                        <div className="card_home">
                            <Link to={'/Blog/'+itm.url} exact >
                                <img src={itm.imgUrl} alt={itm.title} width="100%" height="250px" /> 
                                <div className="byAuth">
                                    - by {itm.auther} 
                                    <small>{moment(itm.createdOn).fromNow()}</small>
                                </div>
                                <h4>{itm.title}</h4>
                                <p className="frontSubCont">{itm.preheading}</p>
                            </Link>
                        </div>
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default BlogHome;
