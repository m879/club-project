import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import logo from '../../assets/logo1.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';


const team = [
  {}, {}, {}, {}, {}, {}
]

function AboutUs() {

  return (
    <div className='page'>
      <section style={{ paddingTop: '100px' }}>
        <Container>
          <Row>
            <Col lg={4} xs={12} className='mt-4'>
              <img src={logo} style={{ height: '350px', width: '100%' }}></img>
            </Col>
            <Col lg={8} xs={12} className='mt-4'>
              <h2 className='text-center'>About <span className='text-primary'>PI-CLUB</span></h2>
              <div>
                <p className='p-4 blog-text1'>
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <hr style={{ marginTop: '100px' }} />
      <section style={{ marginTop: '100px' }}>
        <Container>
          <div className='text-center'>
            <h2>Meet our Dedicate Team</h2>
            <p className='mb-1 mt-4 blog-text1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's.</p>
            <p className='mb-4 blog-text1'>Standard dummy text ever since the been when an unknown printer.</p>
          </div>
          <div>
            <Row>
              {
                team.map(() => (
                  <Col lg={4} xs={12} className='mt-4'>
                    <Card className='card-box'>
                      <div>
                        <img style={{ width: '100%', height: '150px' }}
                          src='https://cdn.pixabay.com/photo/2021/11/27/12/16/mountain-6827881_960_720.jpg'></img>
                      </div>
                      <Card.Body className='p-4'>
                        <div className='text-center'>
                          <img style={{
                            width: '100px', height: '100px', borderRadius: '100%',
                            marginTop: '-100px'
                          }}
                            src='https://avatars.githubusercontent.com/u/57950583?v=4'></img>
                          <h4 className='blog-text0 mt-4'>Meraj Ahmed</h4>
                          <h4 className='blog-text1'>Joint Coordinator</h4>
                        </div>
                        <hr />
                        <div className='my-4 text-center'>
                          <a className='mr-2' href='/'><FacebookIcon style={{ color: '#333' }} /></a>
                          <a className='mx-2' href='/'><TwitterIcon style={{ color: '#333' }} /></a>
                          <a className='mx-2' href='/'><InstagramIcon style={{ color: '#333' }} /></a>
                          <a className='mx-2' href='/'><LinkedInIcon style={{ color: '#333' }} /></a>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              }
            </Row>
          </div>
        </Container>
      </section>

    </div>);
}

export default AboutUs;
