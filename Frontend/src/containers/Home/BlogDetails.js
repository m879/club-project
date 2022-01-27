import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { GetPostbyId ,baseUrl} from '../../actions/user';

import './style.css';
import { NavLink } from 'react-router-dom';

import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';


const data=[
    {image:'https://cdn.pixabay.com/photo/2021/12/03/21/56/lamps-6843881_960_720.jpg'},
    {image:'https://cdn.pixabay.com/photo/2021/11/23/13/32/forest-6818683_960_720.jpg'}
]

function EventDetails() {

    const id=useParams();
    console.log(id);


    const [blog, setAllBlog] = useState([]);
    console.log(blog);

    useEffect(() => {
        GetPostbyId(id.id).then((data) => {
            if (data) {
                setAllBlog(data);
            }
        });
    }, []);

    return (
        <div className='blog-box' style={{marginTop:'50px'}}>
            <div>
                <Container>
                    <Row>
                        <Col lg={8} className='my-4'>
                            <div >
                                <section id="section-1">
                                    <div>
                                        <img style={{ width: '100%' }} 
                                        src='https://cdn.pixabay.com/photo/2021/11/27/12/16/mountain-6827881_960_720.jpg'></img>
                                    </div>
                                    <div style={{marginTop:'50px'}}>
                                        <div>
                                            <h4 className='blog-text0'>Hello World</h4>
                                        </div>
                                        <div className='d-flex'>
                                            <div style={{width:'50%'}} className='d-flex'>
                                                <InsertInvitationIcon className='blog--icon' />
                                                <p className='mx-2 blog-text3'>Dec 04 - 15 | 05:00 AM</p>
                                            </div>
                                        </div>
                                    </div>
                                   <hr className='my-4'/>
                                </section>
                                <section style={{marginTop: '20px' }} id="section-2">
                                    <Card style={{background:'transparent'}}>
                                        <Card.Body>
                                            <div>
                                                <p className='blog-text2'>
                                                {blog.description}
                                                <hr/>
                                                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
                                                </p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </section>
                            </div>
                        </Col>
                        <Col lg={4} xs={12}>
                            <div style={{ height: '100vh', position: 'sticky', width: '100%', top: 80 }}>
                            <section  style={{ marginTop: '20px' }} id="section-3">
                                    <Card>
                                        <div>
                                            <img style={{ width: '100%', height: '150px' }}
                                                src='https://cdn.pixabay.com/photo/2021/11/27/12/16/mountain-6827881_960_720.jpg'></img>
                                        </div>
                                        <Card.Body className='p-4'>
                                            <div className='text-center'>
                                                <img style={{ width: '100px', height: '100px', borderRadius: '100%',
                                                 marginTop: '-100px' }} 
                                                src='https://avatars.githubusercontent.com/u/57950583?v=4'></img>
                                                <h4 className='blog-text0 mt-4'>Meraj Ahmed</h4>
                                                <h4 className='blog-text1'>3rd Year Computer Engineering</h4>
                                            </div>
                                            <hr/>
                                            <div className='my-4'>
                                                <h5 className='blog-text1'>About</h5>
                                                <p className='my-4 blog-text2'>We are providing the best virtual running experience to all the runners pan India.</p>
                                            </div>
                                            <hr/>
                                            <div>
                                                <div className='my-4'>
                                                    <a className='mr-2' href='/'><FacebookIcon style={{ color: '#333' }} /></a>
                                                    <a className='mx-2' href='/'><TwitterIcon style={{ color: '#333' }} /></a>
                                                    <a className='mx-2' href='/'><InstagramIcon style={{ color: '#333' }} /></a>
                                                    <a className='mx-2' href='/'><LinkedInIcon style={{ color: '#333' }} /></a>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </section>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default EventDetails;
