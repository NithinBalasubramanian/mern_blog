import React , { useState , useEffect } from 'react';
import '../App.css';
import axios from '../config/instance';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        'auther' : '',
        'blog' : ''
    }

    let [ datas , setDatas ] = useState(initialState);

    const onChangeHandler = (e) =>{
        let nowName = e.target.name;
        let nowValue = e.target.value;
        setDatas(prevState => {
            return {...prevState , [ nowName ] : nowValue }
        });
    }

    const onSubmitData = (e) => {
        e.preventDefault();

        let payload = {
            title : datas.title,
            auther : datas.auther,
            blog : datas.blog
        };

        axios.post('savedata',payload)
        .then(res => {
            console.log('sent');
            fetchAll();
        })
        .catch(error => {
            console.log(error);
        })
        setDatas(initialState);
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
            <h2 className="mt-5">Add Blog</h2>
            <form onSubmit={ onSubmitData } >
                <div className="form-group">
                    <input className="form-control" name="title" placeholder="title" value={ datas.title } onChange={ onChangeHandler } />
                </div>
                <div className="form-group">
                    <input className="form-control" name="auther" placeholder="auther" value={ datas.auther } onChange={ onChangeHandler } />
                </div>
                <div className="form-group">
                    <textarea className="form-control" name="blog" placeholder="blog" value={ datas.blog } onChange={ onChangeHandler } >{datas.blog }</textarea>
                </div>
                <button type="submit" className="btn btn-sm btn-primary blogSubmit">Submit</button>
            </form>
            <div className="mt-5">
                <h2>List Blog Data</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Title</th>
                            <th>Auther</th>
                            <th>Blog</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    { Listdata.map((itm,k) => {
                        return(
                            <tr>
                                <td key={k}>{k+1}</td>
                                <td>{itm.title}</td>
                                <td>{itm.auther}</td>
                                <td>{itm.blog}</td>
                                <td><button className="btn btn-danger btn-sm" onClick={ () => { deleteHandler(itm._id) }}>Delete</button></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AddBlog
