import React, { useState , useEffect } from 'react';

import parse from 'html-react-parser';
import axios from '../config/instance';

const Newblog = () => { 

let [ blog , setBlog ] = useState('')

useEffect(()=>{
    getBlog()
},[])

const getBlog = () => {

   axios.post('newBlog')
        .then(res=>{
                 // setDatas(initialState);
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
        itm.blogData && 
           <div>
                { parse(itm.blogData) }
            </div>
            
        })
           
         </div>

        </>
)

   }

export default Newblog
