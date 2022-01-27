import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AddBlogs from './AddBlogs';
import {GetUserPost,baseUrl} from '../../actions/user';

import {Modal, Table, Button, Container} from "react-bootstrap";

function Dashboard() {

    const [show, setShow] = useState(false);

    const [allBlog,setAllBlogs]=useState([]);

    useEffect(()=>{
        GetUserPost().then((data)=>{
            if(data){
                setAllBlogs(data);
            }
        });
    },[show]);


    return (
        <div style={{ marginTop: '80px' }}>
            <Modal size='lg' show={show} onHide={() => setShow(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Blogs</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddBlogs view={setShow}/>
                </Modal.Body>
            </Modal>
            <Container className='shadow p-4'>
                <div style={{ paddingTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                    <h5>All Blogs</h5>
                    <Button onClick={() => setShow(true)}>Add Blogs</Button>
                </div>
                <div className='my-4'>
                    <Table   className='my-4'>
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allBlog.map((row,index)=>(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>
                                        <img src={`${baseUrl}/images/${row.image}`} style={{height:'50px',width:'50px'}}></img>
                                    </td>
                                    <td>{row.title}</td>
                                    <td className='text-center'>
                                       {
                                            !row.status?<Button variant="warning" className='mx-2' disabled>Pending</Button>:null
                                        }
                                        <NavLink to={`/blog/${row._id}`}>
                                            <Button variant="success">View</Button>
                                        </NavLink>
                                    </td>
                                </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    )
}

export default Dashboard;
