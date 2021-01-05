import React , { useState , useEffect } from 'react';
import '../App.css';
import axios from '../config/instance';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function AddBlog() {

    let [ Listdata , setListdata ] = useState([]);

    useEffect(() => {
        fetchAll();
    }, [])

    const fetchAll = () =>{
        axios.get('/')
        .then((res) => {
            setListdata(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    let initialState = {
        'title' : '',
        'url' : '',
        'auther' : '',
        'blog' : '',
        'imgUrl' : '',
        // 'file':'',
        // 'fileName' : ''
    }

    let [ datas , setDatas ] = useState(initialState);

    const onChangeHandler = (e) =>{
        let nowName = e.target.name;
        let nowValue = e.target.value;
        if(nowName === 'fileName'){
            setDatas(prevState => {
                return {...prevState , 'file' : e.target.files[0] ,'fileName' : e.target.files[0].name }
            });
        }
        if(nowName === 'title'){
            let titleUrl = nowValue.toLowerCase().replace(/ /g, '-') 
            .replace(/[^\w-]+/g, ''); 
            setDatas(prevState => {
                return {...prevState , [nowName] : nowValue ,'url' : titleUrl }
            });
        }
        else{
            setDatas(prevState => {
                return {...prevState , [ nowName ] : nowValue }
            });
        }
    }

    const onSubmitData = (e) => {
        e.preventDefault();

        const formdata = new FormData();

        // formdata.append('file',datas.file);

        formdata.append('title',datas.title);

        formdata.append('imgUrl',datas.imgUrl);

        formdata.append('url',datas.url);

        formdata.append('auther',datas.auther);

        formdata.append('blog',datas.blog);

        axios.post('savedata',formdata,{
            headers : {
                'Content-Type' : 'multipart/form-data'
            }
        })
        .then(res=>{
            fetchAll();
            setDatas(initialState);
        })
        .catch(err=>{
            console.log(err);
        })
        
        e.preventDefault();
    }

    const deleteHandler = (id) => {
        if(window.confirm("Are You Sure ?")){
            axios.delete('deleteblog/'+id)
            .then(res => {
                console.log('Deleted');
                fetchAll();
            })
            .catch(error => {
                console.log(error);
            })
            setDatas(initialState);
        }
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
                <label>Auther</label>
                    <input className="form-control" name="auther" placeholder="Auther" value={ datas.auther } onChange={ onChangeHandler } />
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
                <button type="submit" className="btn btn-sm btn-primary blogSubmit">Submit</button>
            </form>
            <div className="mt-5">
                <h2>List Blog Data</h2>
                <div className="table-responsive">
                <table className="table table-bordered table-stripped">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Title</th>
                            <th>Auther</th>
                            <th>Image</th>
                            <th>Action</th>
                            <th>View</th>
                        </tr>
                    </thead>
                    <tbody>
                    { Listdata.map((itm,k) => {
                        return(
                                <tr key={k}>
                                    <td>{k+1}</td>
                                    <td>{itm.title}</td>
                                    <td>{itm.auther}</td>
                                    <td>
                                        <img src={itm.imgUrl} alt="image" width="120px" height="80px"></img>
                                    </td>
                                    <td><button className="btn btn-danger btn-sm" onClick={ () => { deleteHandler(itm._id) }}>Delete</button></td>
                                    <td><Link to={'Blog/'+itm.url} className="btn btn-success btn-sm">View</Link></td>
                                </tr>
                        )
                    })}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default AddBlog
