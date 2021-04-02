import React , { useState , useEffect } from 'react';
import '../App.css';
import axios from '../config/instance';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddBlog() {

    let initialState = {
        'category' : '',
        'title' : '',
        'url' : '',
        'auther' : '',
        'blog' : '',
        'imgUrl' : '',
        'preheading':'',
        'subPara':[],
        'subImgUrl' : '',
        'videoLink' : '',
        'reference' : '',
        // 'file':'',
        // 'fileName' : ''
    }

    useEffect(() => {
        document.title = "Create Your Own Blog or News";
    },[])

    let [ datas , setDatas ] = useState(initialState);
    
    let [ typeData , setTypeData ] = useState('para');

    const onChangeHandler = (e) =>{
        let nowName = e.target.name;
        let nowValue = e.target.value;
        if(nowName === 'fileName'){
            setDatas(prevState => {
                return {...prevState , 'file' : e.target.files[0] ,'fileName' : e.target.files[0].name }
            });
        }
        if(nowName === 'title'){
            let title = nowValue;
            let titleUrl = nowValue.toLowerCase().replace(/ /g, '-') 
            .replace(/[^\w-]+/g, ''); 
            setDatas(prevState => {
                return {...prevState , [nowName] : title ,'url' : titleUrl }
            });
        }
        else if(nowName === 'subPara'){
            let subpara_cont  = [ ...datas.subPara ];
            
            subpara_cont.push({
                SubHeading : typeData,
                Content : nowValue
            });
            
            setDatas(prevState => {
                return {...prevState , [nowName] : subpara_cont }
            });
        }
        else if(nowName === 'subHead'){
            setTypeData(e.target.value);
        }
        else{
            setDatas(prevState => {
                return {...prevState , [ nowName ] : nowValue }
            });
        }
    }

    const onSubmitData = (e) => {
        e.preventDefault();
        
        console.log(datas);

        const formdata = new FormData();

        // formdata.append('file',datas.file);
        
        
        formdata.append('category',datas.category);

        formdata.append('title',datas.title);

        formdata.append('imgUrl',datas.imgUrl);

        formdata.append('url',datas.url);

        formdata.append('auther',datas.auther);

        formdata.append('blog',datas.blog);
        
        formdata.append('subPara',JSON.stringify(datas.subPara));

        formdata.append('preheading',datas.preheading);
        
        formdata.append('subImgUrl',datas.subImgUrl);
        
        formdata.append('videoLink',datas.videoLink);
        
        formdata.append('reference',datas.reference);
        
        console.log(formdata);

        axios.post('savedata',formdata,{
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
        
    }

    return (
        <div className="container">
            <h2 className="subHead">Add Blog</h2>
            <form onSubmit={ onSubmitData } className="form" > 
                <div className="form-group">
                <label> Blog Title </label>
                    <input className="form-control" name="title" placeholder="Title" value={ datas.title } onChange={ onChangeHandler } />
                </div>
                <div className="form-group">
                <label>Pre heading</label>
                    <input className="form-control" name="preheading" placeholder="Enter Pre heading" value={ datas.preheading } onChange={ onChangeHandler } />
                </div>
                <div className="form-group">
                <label>Category</label>
                    <select class="form-control" name="category" onChange={ onChangeHandler } >
                        <option value="">Select a Category</option>
                        <option value="techNews">TECH NEWS</option>
                        <option value="techInfo">TECH INFOMATION</option>
                        <option value="programming">PROGRAMMING</option>
                        <option value="automobiles">AUTOMOBILES</option>
                        <option value="space">SPACE</option>
                        <option value="finance">FINANCE </option>
                        <option value="others">OTHERS</option>
                    </select>
                </div>
                <div className="form-group">
                <label>Auther</label>
                    <input className="form-control" name="auther" placeholder="Auther" value={ datas.auther } onChange={ onChangeHandler } />
                </div>
                <div className="form-group">
                     <label>Reference</label>
                    <input className="form-control" name="reference" placeholder="Reference" value={ datas.reference } onChange={ onChangeHandler } />
                </div>
                 <div className="form-group">
                 <label>Image</label>
                    <input className="form-control" name="imgUrl" placeholder="Enter Image Url" value={ datas.imgUrl } onChange={ onChangeHandler } />
                    {/* <input type="file" className="form-control" name="fileName" value={ datas.fileName } onChange={ onChangeHandler } /> */}
                </div>
                <div className="form-group">
                <label>Blog Contents</label>
                    <textarea className="form-control" name="blog" rows="6" placeholder="blog" value={ datas.blog } onChange={ onChangeHandler } >{datas.blog }</textarea>
                </div>
                <div className="form-group">
                        <label>Type</label>
                            <select class="form-control" name="subHead" onChange={ onChangeHandler } >
                                <option value="para">para</option>
                                <option value="sub_head">sub_heading</option>
                                <option value="head">heading</option>
                            </select>
                        </div>
                <div className="form-group">
                <label>Sub Para Contents</label>
                    <textarea className="form-control" name="subPara" rows="6" placeholder="Sub Paragraph" onBlur={ onChangeHandler } ></textarea>
                </div>
                <div className="form-group">
                     <label>SUB Image Url</label>
                    <input className="form-control" name="subImgUrl" placeholder="Sub Image URL" value={ datas.subImgUrl } onChange={ onChangeHandler } />
                </div>
                <div className="form-group">
                     <label>video Link</label>
                    <input className="form-control" name="videoLink" placeholder="videoLink" value={ datas.videoLink } onChange={ onChangeHandler } />
                </div>
                <button type="submit" className="btn btn-sm btn-primary blogSubmit">Submit</button>
            </form>
        </div>
    )
}

export default AddBlog
