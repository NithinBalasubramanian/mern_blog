import React , { useState , useEffect } from 'react';
import '../App.css';
import axios from '../config/instance';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddLink from './addLink';
import moment from 'moment';

function LinkBlog() {

    let [ Listdata , setListdata ] = useState([]);

    useEffect(() => {
        fetchAll();
        document.title = "List Out Blog";
    }, [])

    setInterval(() => {
        fetchAll();
      }, 80000);

    const fetchAll = () =>{
        axios.get('/link')
        .then((res) => {
            setListdata(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const deleteHandler = (id) => {
            axios.delete('deletelink/'+id)
            .then(res => {
                console.log('Deleted');
                fetchAll();
            })
            .catch(error => {
                console.log(error);
            })
    }

    let initialState = {
        'by' : '',
        'content' : '',
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

        const formdata = new FormData();

        formdata.append('by',datas.by);

        formdata.append('content',datas.content);

        axios.post('savelink',formdata,{
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
        fetchAll();
        
        e.preventDefault();
    }

    return (
        <div className="container">
            <h2 className="subHead">Write Here</h2>
            <form onSubmit={ onSubmitData } className="form" > 
                <div className="form-group">
                <label> By </label>
                    <input className="form-control" name="by" placeholder="by" value={ datas.by } onChange={ onChangeHandler } />
                </div>
                <div className="form-group">
                <label>Contents</label>
                    <textarea className="form-control" name="content" rows="6" placeholder="content" value={ datas.content } onChange={ onChangeHandler } >{datas.blog }</textarea>
                </div>
                <button type="submit" className="btn btn-sm btn-primary blogSubmit">Submit</button>
            </form>
            <h2 className="subHead">List Out</h2>
            <div className="mt-5">
                <div className="table-responsive">
                <table className="table table-bordered table-stripped">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>By</th>
                            <th>Cont</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    { Listdata.map((itm,k) => {
                        return(
                                <tr key={k}>
                                    <td>{ moment(itm.createdOn).fromNow() }</td>
                                    <td>{itm.by}</td>
                                    <td className="contWidth">{itm.content}</td>
                                    <td><button className="btn btn-danger btn-sm " onClick={ () => { deleteHandler(itm._id) }}>Delete</button></td>
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

export default LinkBlog
