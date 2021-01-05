import React , { useState , useEffect } from 'react';
import { useParams } from 'react-router';
import axios from '../config/instance';

function ViewBlog(){
    let {url} = useParams();

    const [ datas , setDatas ] = useState([]);

    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata = () => {
        axios.get('/view/'+url)
        .then( res => {
            setDatas(res.data);
        })
        .catch( err => {
            console.log(err);
        })
    }

    return(
        <div className="container">
        { datas.map((itm,k) => { 
            return(
                <div>
                    <h1>{itm.title}</h1>
                    <img src={itm.filePath} alt="img" width="100%" height="500px" />
                    <p>{itm.blog}</p>
                </div>
            )
        }) }
            <h1></h1>
        </div>
    )
}

export default ViewBlog;