import React from 'react';
import './style.css';
import { learnMore, About} from './FooterRoute';
import {Container, Row, Col } from 'react-bootstrap';
import AppleIcon from '@mui/icons-material/Apple';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';


function Footer() {
    return (
        <div >
            <section className='footer-container'>
            <Container className='my-4' style={{paddingBottom:'50px'}}>
                <Row>
                    <Col xs={12} lg={4} className='mt-4'>
                        <div className='px-4'>
                            <div>
                                <p className='footer-text1'>Organizer App</p>
                                <div className='my-2'>
                                    <a href='/'><AppleIcon style={{ color: '#333' }} /></a>
                                    <a href='/' className='mx-1'><FacebookIcon style={{ color: '#333' }} /></a>
                                </div>
                            </div>
                            <div style={{ marginTop: '50px' }}>
                                <p className='footer-text1'>Follow us on</p>
                                <div className='my-2'>
                                    <a href='/'><FacebookIcon style={{ color: '#333' }} /></a>
                                    <a className='mx-1' href='/'><TwitterIcon style={{ color: '#333' }} /></a>
                                    <a className='mx-1' href='/'><InstagramIcon style={{ color: '#333' }} /></a>
                                    <a className='mx-1' href='/'><LinkedInIcon style={{ color: '#333' }} /></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={4} className='mt-4'>
                        <div>
                            <p className='footer-text1'>Learn More</p>
                            {
                                learnMore.map((row) => (
                                    <a><p className='footer-text2'>{row.name}</p></a>
                                ))
                            }
                        </div>
                    </Col>
                    <Col xs={12} lg={4} className='mt-4'>
                        <div>
                            <p className='footer-text1'>About</p>
                            {
                                About.map((row) => (
                                    <a><p className='footer-text2'>{row.name}</p></a>
                                ))
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
            <section className='copyright-box p-4 text-center'>
                <p className='m-0'>copyright@PI-CLUB</p>
            </section>
            </section>
        </div>
    )
}

export default Footer;
