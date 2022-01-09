import React, { useState , useEffect } from 'react';

import parse from 'html-react-parser';
import axios from '../config/instance';

const NewBlog = () => { 

let [ blog , setBlog ] = useState('')

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
}


return( <>
<div> 
       { blog.map((itm)=>{
        
           <div>
                { parse(itm.blogData) }
            </div>
            
        })
      }
           
         </div>

        </>
)

   }

export default NewBlog
