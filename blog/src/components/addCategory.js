import React , { useState , useEffect } from 'react'
import '../App.css';
import axios from '../config/instance';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddCategory = () => {
  
  let { datas , setDatas } = useState( { Category : '' } );
  
  useEffect(() => {
        document.title = "Mernblog - Create Category";
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
           
        </div>
    </>
  )
}

export default AddCategory
