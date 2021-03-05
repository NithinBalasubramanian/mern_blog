import React , { useState , useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import axios from '../config/instance';
import moment from 'moment';

function ViewBlog(){
    let {url} = useParams();

    const [ datas , setDatas ] = useState([]);

    const [ recent , setRecent ] = useState([]);

    const [ loader , setLoader ] = useState(true);

    const Fetchdata = () => {
        axios.get('/view/'+url)
        .then( res => {
            setDatas(res.data);
            setLoader(false);
        })
        .catch( err => {
            console.log(err);
        })
    }
    
    const getDate = (date) => {
     return date.split(' ',1)
    }

    const FetchdataNot = () => {
        axios.get('/recent/'+url)
        .then( res => {
            setRecent(res.data);
        })
        .catch( err => {
            console.log(err);
        })
    }

    useEffect(()=>{
        setLoader(true);
        Fetchdata();
        FetchdataNot();
    }, [url])

    return(
        <div className="blog_container">
            <div class={ (loader) ? 'loading' : ''}></div>
            <div className="blogContent">
                { datas.map((itm,k) => { 
                    document.title=itm.title;
                    return(
                        <>
                        <div className="col-md-12">
                            <h1>{itm.title}</h1>
                        </div>
                        <div className="col-md-8">
                            <div className="preheading">
                                <p style={ {padding:'10px 0px',margin:'0px'} }>{itm.preheading}</p>
                            </div>
                            <div className="byAuth">
                                - by {itm.auther} 
                            <small>{ getDate(itm.createdOn) }</small>
                            </div>
                            {/* <img src={itm.filePath} alt="img" width="100%" height="auto" /> */}
                            <img src={itm.imgUrl} alt={itm.title} width="100%" height="auto" /> 
                            
                            <p>{itm.blog}</p>
                        </div>
                        </>
                    )
                }) }
                <div className="col-md-4 row recent">
                    <div class="recent_part">
                        <h4>Recent Blog</h4>
                        {recent.map((itm,k) => {
                            return (
                                <div className="card_recent">
                                    <Link to={'/Blog/'+itm.url}  >
                                        <img src={itm.imgUrl} width="100%" height="150px" alt={itm.title}></img>
                                        <h5>{itm.title}</h5>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewBlog;
