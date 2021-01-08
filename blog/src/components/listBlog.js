import React , { useState , useEffect } from 'react';
import '../App.css';
import axios from '../config/instance';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function ListBlog() {

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
        }
    }

    return (
        <div className="container">
            <h2 className="subHead">List Blog</h2>
            <div className="mt-5">
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
                                        <img src={itm.imgUrl} alt="Pic" width="120px" height="80px"></img>
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

export default ListBlog
