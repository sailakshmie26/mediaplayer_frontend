import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Landingpage() {
  return (
    <>
     <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100'>
        <Row>
          <Col>
              <h3 className='textStyle'>Welcome To <span className='text-warning'>Media Player</span></h3>
              <p className='textStyle' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in illum, reiciendis dolorum rerum, cupiditate sunt quos, aspernatur ipsum odio quaerat! Cumque rem tempora dolorum, omnis doloribus aperiam ad adipisci?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas accusamus et dolore libero, voluptates nam vero, provident quos debitis at, repudiandae totam deleniti! Doloremque debitis aspernatur sit, dolor laborum praesentium.</p>
              <Link to='/home'>
              <button className='btn btn-warning mt-5'>Get Started<i class="fa-solid fa-arrow-right ms-2"></i></button>
              </Link>
          </Col>
          <Col>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" className='ms-5' height={'400px'} />
          </Col>
        </Row>
     </Container>
     <div className='container mt-5 mb-5'>
      <h3 className='textStyle mb-5'>Features</h3>
      <div className='cards d-flex align-items-center justify-content-evenly'>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" 
      height='250px'/>
      <Card.Body className='bg-dark'>
        <Card.Title className='textStyle'>Card Title</Card.Title>
        <Card.Text className='textStyle'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" 
      height='250px'/>
      <Card.Body className='bg-dark'>
        <Card.Title className='textStyle'>Card Title</Card.Title>
        <Card.Text className='textStyle'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" 
      height='250px'/>
      <Card.Body className='bg-dark'>
        <Card.Title className='textStyle'>Card Title</Card.Title>
        <Card.Text className='textStyle'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

      </div>
     </div>
     <div className='container mb-5 mt-5 border border-2 border-secondary rounded p-5'>
     <Row>
        <Col>
           <h3 className='textStyle mb-3'>Simple and Powerful</h3>
           <p className='textStyle'><span className='fs-5 fw-bolder'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. A laboriosam, perspiciatis eius quae consequuntur commodi quod non ad reiciendis iusto ex sunt quo minima enim quisquam saepe cumque accusamus deserunt.</p>
           <p className='textStyle'><span className='fs-5 fw-bolder'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. A laboriosam, perspiciatis eius quae consequuntur commodi quod non ad reiciendis iusto ex sunt quo minima enim quisquam saepe cumque accusamus deserunt.</p>
           <p className='textStyle'><span className='fs-5 fw-bolder'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. A laboriosam, perspiciatis eius quae consequuntur commodi quod non ad reiciendis iusto ex sunt quo minima enim quisquam saepe cumque accusamus deserunt.</p>
          
        </Col>
        <Col>
        <div className='mt-5'>
        <iframe width="600" height="350" src="https://www.youtube.com/embed/kY7a_ReAcas" title="Kho Gaye Hum Kahan - Lyrical |Baar Baar Dekho |Sidharth Malhotra, Katrina Kaif |Jasleen R, Prateek K" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>
        </div>
        </Col>
     </Row>
     </div>
    </>
  )
}

export default Landingpage
