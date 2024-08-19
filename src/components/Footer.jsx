import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='footer d-flex align-items-center justify-content-evenly'>

         <div style={{width:'400px'}}>          
          <h5 className='textStyle'><i class="fa-solid fa-video text-warning me-3"></i>Media Player</h5>
          <p style={{textAlign:'justify'}} className='textStyle'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sit consequatur sed adipisci aspernatur! Tenetur laboriosam quis fuga voluptatum eligendi autem temporibus nesciunt, vel delectus vero quasi officia dolorum voluptas.</p>
         </div>

         <div className='d-flex flex-column ms-5'>
          <h4 className='textStyle'>Links</h4>
          <Link to='/' style={{textDecoration:'none', color:'white'}}>
          Landing Page
          </Link>

          <Link to='/home' style={{textDecoration:'none', color:'white'}}>
          Home Page
          </Link>

          <Link to='/watch' style={{textDecoration:'none', color:'white'}}>
          Watch history
          </Link>
         </div>

         <div className='d-flex flex-column ms-5'>
          <h4 className='textStyle'>Guides</h4>
          <Link to='https://react.dev/' target='_blank' style={{textDecoration:'none', color:'white'}}>
          React
          </Link>

          <Link to='https://react-bootstrap.github.io/' target='_blank' style={{textDecoration:'none', color:'white'}}>
          React Bootstrap
          </Link>

          <Link to='https://www.npmjs.com/package/json-server' target='_blank' style={{textDecoration:'none', color:'white'}}>
          JSON Server
          </Link>
         </div>

         <div className='ms-5'>
          <h4 className='textStyle'>Contact US</h4>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter your email ID'/>
            <button className='btn btn-warning ms-2'>SUBSCRIBE</button>                        
          </div>

          <div className='d-flex justify-content-evenly align-items-center mt-3'>
            <Link style={{textDecoration:'none', color:'white'}}>
            <i class="fa-brands fa-instagram fa-2x"></i>
            </Link>
            <Link style={{textDecoration:'none', color:'white'}}>
            <i class="fa-brands fa-facebook fa-2x"></i>
            </Link>
            <Link style={{textDecoration:'none', color:'white'}}>
            <i class="fa-brands fa-twitter fa-2x"></i>
            </Link>
            <Link style={{textDecoration:'none', color:'white'}}>
            <i class="fa-brands fa-reddit fa-2x"></i>
            </Link>
            </div>
         </div>

      </div>

    </div>
  )
}

export default Footer
