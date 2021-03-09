import React , { useState , useEffect } from 'react'
import '../App.css';
import axios from '../config/instance';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddCategory = () => {
  
  let initial = {
    'Category' : ''
  }
  
  let { datas , setDatas } = useState(initial);
  
  useEffect(() => {
        document.title = "Mernblog - Create Category";
    console.log(datas);
  },[])
  
  const onChangeHandler = (e) =>{
        let nowName = e.target.name;
        let nowValue = e.target.value;
        setDatas(prevState => {
                return {...prevState , [ nowName ] : nowValue }
            });
  }
  
  const onSubmitData = (e) => {
      e.preventDefault();
    
    let nowData = datas;
    
    axios.post('savecategory',nowData,{
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        })
        .then(res=>{
            setDatas('');
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
