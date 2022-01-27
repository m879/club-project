import React ,{useState,useEffect} from 'react';
import {Container,Col,Row} from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const position = [27.9135, 78.0782]

function ContactUs() {
    
  return (<div className='page'>
     <Container style={{paddingTop:'50px'}}>
       <div className='text-center'>
         <h1>Contact Us</h1>
       </div>
         <div style={{marginTop:'50px'}}>
           <Row>
             <Col lg={8}>
               <h3>Form</h3>
             </Col>
             <Col lg={4}>
               <h3>Address</h3>
             </Col>
           </Row>
         </div>
     </Container>
     <section style={{marginTop:'100px'}}>
       <Container>
          <MapContainer center={position} zoom={30} scrollWheelZoom={false} style={{height:'70vh'}}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>,
       </Container>
     </section>

  </div>);
}

export default ContactUs;
