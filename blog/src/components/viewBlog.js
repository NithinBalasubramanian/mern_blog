import React , { useState , useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from '../config/instance';

function ViewBlog(){
    let {url} = useParams();

    const [ datas , setDatas ] = useState([]);

    const [ recent , setRecent ] = useState([]);

    const [ loader , setLoader ] = useState(false);

    const Fetchdata = () => {
        axios.get(`/view/${url}`)
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
            <div className={ (loader) ? 'loading' : ''}></div>
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
                            <div className="contentDisp">
                                <p className="paraMainCont">{itm.blog}</p>
                                    { (itm.subPara) ? 
                                       itm.subPara.map((sub_itm,s_k) => {
                                        if(sub_itm.SubHeading === 'head'){
                                            return (
                                                <h2  key={s_k} >{sub_itm.Content}</h2>
                                            ) 
                                        }else if(sub_itm.SubHeading === 'sub_head'){
                                            return (
                                                <h4  key={s_k} >{sub_itm.Content}</h4>
                                            ) 
                                        }else if(sub_itm.SubHeading === 'sub_img'){
                                            return (
                                                <img src={sub_itm.Content} alt="techidiots" width="100%" height="auto" className="sub_img" />
                                            ) 
                                        }else if(sub_itm.SubHeading === 'tweet'){
                                            return (
                                                <div className="tweet">
                                                </div>
                                            ) 
                                        }else if(sub_itm.SubHeading === 'bold'){
                                            return (
                                                <p><b  key={s_k} >{sub_itm.Content}</b></p>
                                            ) 
                                        }else{
                                            return (
                                                <p  className="paraSubCont" key={s_k} >{sub_itm.Content}</p>
                                            ) 
                                        }
                                    })
                                   : null 
                                   }
                            </div>
                        </div>
                        </>
                    )
                }) }
                <div className="col-md-4 row recent">
                    <div className="recent_part">
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
