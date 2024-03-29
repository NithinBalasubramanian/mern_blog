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
        'subLink':[],
        'key' : '',
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
    
    let [ linkFor , setlinkFor ] = useState('Ref');

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
        else if(nowName === 'subLink'){
            let subLink_cont  = [ ...datas.subLink ];
            
            subLink_cont.push({
                linkFor : linkFor,
                link : nowValue
            });
            
            setDatas(prevState => {
                return {...prevState , [nowName] : subLink_cont }
            });
        }
        else if(nowName === 'subHead'){
            setTypeData(e.target.value);
        }
        else if(nowName === 'linkFor'){
            setlinkFor(e.target.value);
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
        
        formdata.append('subLink',JSON.stringify(datas.subLink));

        formdata.append('preheading',datas.preheading);
        
        formdata.append('key',datas.key);
        
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
                     <label>Key Tags</label>
                    <input className="form-control" name="key" placeholder="Keys" value={ datas.key } onChange={ onChangeHandler } />
                </div>
                <div className="form-group">
                <label>Category</label>
                    <select className="form-control" name="category" onChange={ onChangeHandler } >
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
                            <select className="form-control" name="subHead" onChange={ onChangeHandler } >
                                <option value="para">para</option>
                                <option value="sub_head">sub_heading</option>
                                <option value="youtube">Youtube</option>
                                <option value="quotes">Quotes</option>
                                <option value="head">heading</option>
                                <option value="sub_img">Image</option>
                                <option value="tweet">Tweet</option>
                                <option value="gist">Gist</option>
                                <option value="bold">Bold</option>
                            </select>
                        </div>
                <div className="form-group">
                <label>Sub Para Contents</label>
                    <textarea className="form-control" name="subPara" rows="6" placeholder="Sub Paragraph" onBlur={ onChangeHandler } ></textarea>
                </div>
                <div className="form-group">
                <label>Link For</label>
                    <select className="form-control" name="linkFor" onChange={ onChangeHandler } >
                        <option value="ref">Reference</option>
                        <option value="also_view">Also view</option>
                        <option value="check_out">Check Out</option>
                    </select>
                </div>
                <div className="form-group">
                     <label>Sub Links</label>
                    <input className="form-control" name="subLink" placeholder="Sub Links" onBlur={ onChangeHandler } />
                </div>

                <button type="submit" className="btn btn-sm btn-primary blogSubmit">Submit</button>
            </form>
        </div>
    )
}

export default AddBlog
