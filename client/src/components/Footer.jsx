import React from 'react';
import { FaEye, FaGit, FaEarlybirds as FaYardbirds } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-dark text-center text-lg-start text-light'>
      <div className='container p-4'>
        <section className='d-flex justify-content-center justify-content-lg-between border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href='#!' className='me-4 text-reset'>{FaEye}
            </a>
            <a href='#!' className='me-4 text-reset'>
            </a>
            <a href='#!' className='me-4 text-reset'>
            </a>
            <a href='#!' className='me-4 text-reset'>
              <i className='fab fa-instagram'></i>
            </a>
            <a href='#!' className='me-4 text-reset'>
            </a>
            <a href='#!' className='me-4 text-reset'>
            </a>
          </div>
        </section>

        <section className='mt-3'>
          <div className='row'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>PARIVEDANA</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius cumque, officiis atque totam sed molestiae amet facilis mollitia quas praesentium.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

<div className='mx-auto mb-md-0 mb-4 col-12 col-lg-3 col-xl-3'>
  <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
  <p>
   
    New York, NY 10012, US
  </p>
  <p>
    {FaYardbirds}
    info@example.com
  </p>
  <p>
     + 01 234 567 88
  </p>
  <p>
     + 01 234 567 89
  </p>
</div>

            </div>
            </section>
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright : &nbsp;
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Chhaya Chaudhary
        </a>
      </div>
            </div>
            </footer>



    
  )
}

export default Footer