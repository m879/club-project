import React, { useState, useEffect } from 'react';
import {CreatePost} from '../../actions/user';
import { Button, Form,Alert} from "react-bootstrap";

function AddBlogs(props) {

    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState('');
      
    const [formData ,setFormdata]=useState({
        title:'',
        description:'',
    });

    const {title,description}=formData;

    const onChange = e => setFormdata({ ...formData, [e.target.name]: e.target.value });

    const [image, setimage] = useState(null);
    const handleImageChange = (e) => {
      setimage(e.target.files[0]);
    };

    const handleSubmit=()=>{
        let post_data = new FormData();
        if(title.length=='' ||  description.length==''){
            setShow(true);
            setMsg('All fields required');
        }else{
            post_data.append("title",title);
            post_data.append("description", description);
            if(image){
                post_data.append("image", image);
                CreatePost(post_data);
                setShow(true);
                setMsg('Blog created successfully');
                props.view(false);
            }else{
                setShow(true);
                setMsg('Image required for creating blogs.');
            }
        }
      
    }

    return (
        <div>
            <Form>
                {
                    show?
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>{msg}</Alert>:null
                }
                <Form.Group className="mb-3" controlId="Title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" 
                    value={title}   onChange={e => onChange(e)} name='title'/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" as='textarea' style={{ height: '100px' }} 
                    value={description}    onChange={e => onChange(e)} name='description'/>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload Image</Form.Label>
                  <Form.Control type="file"  id="custom-file" custom accept="image/png, image/jpeg"
                  onChange={handleImageChange} />
                </Form.Group>
             
                <Button variant="primary" onClick={()=>handleSubmit()}>Create</Button>
            </Form>
        </div>
    )
}

export default AddBlogs;
