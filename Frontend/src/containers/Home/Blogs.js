import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const data = [{}, {}, {}, {}, {}, {}]

export default function HomeComponent() {

    const id=useParams();
    console.log(id);

    return (
        <div  className='py-1 page'>
            <section className='category-event-box'>
                <Container>
                    <div>
                        <h4>{id.category}</h4>
                    </div>
                    <Row className='my-4'>
                        {
                            data.map(() => (
                                <Col lg={4} xs={12} className='px-4'>
                                    <NavLink to='/details' style={{ textDecoration: 'none' }}>
                                        <div>
                                        <Card className='card-box my-4'>
                                                <div className='py-2' style={{borderRadius:'5px',height:'50px',
                                                    background:'linear-gradient(180deg,rgba(0,0,0,.7) 0,transparent 95%)'}}>
                                                </div>
                                                <Card.Img variant="top" 
                                                style={{marginTop:-50,zIndex:-10}} 
                                                  src='https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg'
                                                />
                                                <Card.Body className='pb-1'>
                                                    <Card.Title className='card-title'>
                                                    Some quick example text to build on the card title.
                                                    </Card.Title>
                                                    <hr/>
                                                    <p className='blog-text4'>10 min ago</p>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </NavLink>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
        </div>
    )
}
