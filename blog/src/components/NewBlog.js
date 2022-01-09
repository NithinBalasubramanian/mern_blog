import React, { useState , useEffect } from 'react';

import parse from 'html-react-parser';
import axios from '../config/instance';

const NewBlog = () => { 

let [ blog , setBlog ] = useState([])


useEffect(()=>{
    getBlog()
},[])

const getBlog = () => {

   axios.post('newBlog')
        .then(res => {
             setBlog(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
 }



return( <>
<div> 
<h2>New</h2>
<p>{blog.length}</p>

       { blog.map((itm)=>{


        
           return (

<>{ itm.blogData ? <div>
                { parse(itm.blogData) }
            </div> : null } </> )
            
        })
      }
           
         </div>

        </>
)

   }

export default NewBlog
