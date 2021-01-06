import React , { useState , useEffect } from 'react';
import { useParams } from 'react-router';
import axios from '../config/instance';

function ViewBlog(){
    let {url} = useParams();

    const [ datas , setDatas ] = useState([]);

    const [ loader , setLoader ] = useState(true);

    useEffect(()=>{
        Fetchdata();
    }, [])

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

    return(
        <div className="container">
            <div class={ (loader) ? 'loading' : ''}></div>
            <div className="row blogContent">
                { datas.map((itm,k) => { 
                    return(
                        <>
                        <div className="col-md-12">
                            <h1>{itm.title}</h1>
                        </div>
                        <div className="col-md-8">
                            {/* <img src={itm.filePath} alt="img" width="100%" height="auto" /> */}
                            <img src={itm.imgUrl} alt="img" width="100%" height="auto" /> 
                            <div className="byAuth">
                                - by {itm.auther}
                            </div>
                            <p>{itm.blog}</p>
                        </div>
                        </>
                    )
                }) }
                <div className="col-md-4">
                    <h3>Recent Blog</h3>
                </div>
            </div>
        </div>
    )
}

export default ViewBlog;