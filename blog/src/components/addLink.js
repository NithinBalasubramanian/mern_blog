import React , { useState , useEffect } from 'react';
import '../App.css';
import axios from '../config/instance';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddLink() {

    let initialState = {
        'by' : '',
        'content' : '',
    }

    useEffect(() => {
        document.title = "Create Your Blog";
    },[])

    let [ datas , setDatas ] = useState(initialState);

    const onChangeHandler = (e) =>{
        let nowName = e.target.name;
        let nowValue = e.target.value;

            setDatas(prevState => {
                return {...prevState , [ nowName ] : nowValue }
            });
    }

    const onSubmitData = (e) => {
        e.preventDefault();

        const formdata = new FormData();

        formdata.append('by',datas.by);

        formdata.append('content',datas.content);

        axios.post('savelink',formdata,{
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        })
        .then(res=>{
            setDatas(initialState);
        })
        .catch(err=>{
            console.log(err);
        })
        
        e.preventDefault();
    }

    return (
        <div className="container">
            <h2 className="subHead">Write Here</h2>
            <form onSubmit={ onSubmitData } className="form" > 
                <div className="form-group">
                <label> By </label>
                    <input className="form-control" name="by" placeholder="by" value={ datas.by } onChange={ onChangeHandler } />
                </div>
                <div className="form-group">
                <label>Contents</label>
                    <textarea className="form-control" name="content" rows="6" placeholder="content" value={ datas.content } onChange={ onChangeHandler } >{datas.blog }</textarea>
                </div>
                <button type="submit" className="btn btn-sm btn-primary blogSubmit">Submit</button>
            </form>
        </div>
    )
}

export default AddLink
