import React, { useState , useEffect } from 'react';

// import { Editor } from 'react-draft-wysiwyg';
// import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

import parse from 'html-react-parser';
import axios from '../config/instance';


const BlogMore = () =>  {


    let [ blog , setBlog ] = useState('')

    let [ blogres , setBlogres ] = useState('1')

    const handleChange = (value) => {
        setBlog(value)
        // console.log(value);
      }
    
      const addMore = () => {

const formdata = new FormData();


formdata.append('BlogData',blog)

       // let data = {
           // BlogData : blog
       // }

        axios.post('saveBlog',formdata)
        .then(res=>{
                 // setDatas(initialState);
             setBlogres(JSON.stringify(res))
        })
        .catch(err=>{
            console.log(err);
        })
      }

    return(
        <>
         {/* <Editor /> */}

         <div className="container">

            <ReactQuill 
            value={ blog } 
            theme= "snow"
            onChange={handleChange}
            modules =  {{
                toolbar: [
                    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                    [{size: []}],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{'list': 'ordered'}, {'list': 'bullet'}, 
                    {'indent': '-1'}, {'indent': '+1'}],
                    ['link', 'image', 'video'],
                    ['clean']
                ],
                clipboard: {
                    // toggle to add extra line breaks when pasting HTML:
                    matchVisual: false,
                }}
            }
            formats = {[
                'header', 'font', 'size',
                'bold', 'italic', 'underline', 'strike', 'blockquote',
                'list', 'bullet', 'indent',
                'link', 'image', 'video'
                ]}
                />

                <button className="btn btn-success" onClick={ addMore }>Add Blog</button>
            <div>
                { parse(blog) }
            </div>
               <div>{ blogres }</div>
         </div>

        </>
    )

}

export default BlogMore
