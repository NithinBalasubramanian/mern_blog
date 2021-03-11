import React , { useState , useEffect } from 'react'
import '../App.css';
import axios from '../config/instance';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddCategory = () => {
  
  let initial = {
    'fields' : "news"
  }
  
  let { catDatas , setCatDatas } = useState(initial);
  
  useEffect(() => {
        document.title = "Mernblog - Create Category";
        console.log(catDatas);
        console.log(catDatas.fields);
  },[])
  
  const onChangeHandler = (e) =>{
        let nowName = e.target.name;
        let nowValue = e.target.value;
        setCatDatas(prevState => {
                return {...prevState , [ nowName ] : nowValue }
            });
  }
  
  const onSubmitData = (e) => {
      e.preventDefault();
    
    let nowData = catDatas;
    
    axios.post('savecategory',nowData,{
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        })
        .then(res=>{
            setCatDatas(initial);
        })
        .catch(err=>{
            console.log(err);
        })
  }
  
  return(
    <>
    <div className="container">
            <h2 className="subHead">Add Category</h2>
            <form onSubmit={ onSubmitData } className="form" > 
                <div className="form-group">
                <label> Category </label>
                    <input className="form-control" name="Category" placeholder="Category" onChange={ onChangeHandler } />
                </div> <button type="submit" className="btn btn-sm btn-primary blogSubmit">Submit</button>
            </form>
        </div>
    </>
  )
}

export default AddCategory
