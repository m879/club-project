import React, { useState, useEffect } from 'react';
import HeaderCarousel from './components/HeaderCarousel';

import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import homeImg1 from '../../assets/home1.png';
import homeImg2 from '../../assets/home2.png';
import homeImg3 from '../../assets/home3.png';
import homeImg4 from '../../assets/home4.png';
import homeImg5 from '../../assets/home5.png';
import homeImg6 from '../../assets/home6.png';

const data = [
    { img: homeImg1,text:'Health' },
    { img: homeImg2,text:'Sports' },
    { img: homeImg3,text:'Education' },
    { img: homeImg4,text:'Health' },
    { img: homeImg5,text:'Sports' },
    { img: homeImg6,text:'Education' },
]


export default function HomeComponent() {
 
    return (
        <div className='page'>
            <HeaderCarousel />
            <section className='home-about' style={{marginTop:'50px'}}>
                <Container>
                <div className='text-center'>
                    <h1 className='home-title'>Welcome To PI-Club</h1>
                </div>
                </Container>
            </section>
            <section className='home-join' style={{marginTop:'50px'}}>
                <Container>
                <div className='text-center'>
                    <h1 className='home-title'>Join PI-Club</h1>
                </div>
                </Container>
            </section>
            <section className='home-services' style={{marginTop:'50px'}}>
                <Container>
                <div className='text-center'>
                    <h1 className='home-title'>Our Awesome Services</h1>
                </div>
                </Container>
            </section>
            <section className='home-gallery' style={{marginTop:'50px'}}>
                <Container>
                <div className='text-center'>
                    <h1 className='home-title'>Our Gallery</h1>
                </div>
                </Container>
            </section>
            <section className='home-blogs' style={{marginTop:'50px'}}>
                <Container>
                <div className='text-center'>
                    <h1 className='home-title'>Latest Blog</h1>
                </div>
                </Container>
            </section>
            <section className='home-testimony' style={{marginTop:'50px'}}>
                <Container>
                <div className='text-center'>
                    <h1 className='home-title'>Member Testimonial</h1>
                </div>
                </Container>
            </section>
            <section className='home-faqs' style={{marginTop:'50px'}}>
                <Container>
                <div className='text-center'>
                    <h1 className='home-title'>Students FAQs</h1>
                </div>
                </Container>
            </section>
        </div>
    )
}
