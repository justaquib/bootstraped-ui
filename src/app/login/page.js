import Link from 'next/link'
import React from 'react'

export default function page() {
    const imgs = [
        {
            'url': 'https://images.unsplash.com/photo-1690828850582-a9c604c5e9e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
        },
        {
            'url': 'https://images.unsplash.com/photo-1537431701805-c1bb45cd2f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1486&q=80'
        },
        {
            'url': 'https://images.unsplash.com/photo-1673107287387-065fd7b9e758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80'
        },
    ]
  return (
    <>
        <div className="container-fluid">
 
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" style={{height:'100vh'}}>
                    {
                        imgs.map((img,key) => (
                            <div className={`carousel-item ${key===0 ? 'active' : '' } `} key={key} data-bs-interval="5000">
                                <img src={img.url} className="d-block img-fluid w-100" alt="..."/>
                            </div>
                        ))
                    }
                    
                </div>
                <div className='position-absolute top-0 w-100 h-100' >
                    <div className='d-flex justify-content-center align-items-center bg-transparent h-100 w-100'>
                        <div className='px-5 flex-column rounded-4 w-25 h-75 py-5' style={{background:'rgb(255 255 255 / 75%)'}}>
                            <div className='text-center mt-3 mb-4'>
                                <img className='w-50' src="https://logowik.com/content/uploads/images/looka-design4953.jpg"  alt="brand-logo"/>
                            </div>
                            <div className='mb-3 text-center'>
                                <h4 className='text-dark'>User Login</h4>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label text-dark">Email address</label>
                                <input type="email" className="form-control rounded-pill px-4 py-3" id="email" placeholder="name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label text-dark">Password</label>
                                <input type="password" className="form-control rounded-pill px-4 py-3" id="password" placeholder="*********"/>
                            </div>
                            <div className="mb-3 text-end">
                                <Link href="#" className='text-info'>Forgot Password?</Link>
                            </div>
                            <div className="mb-3 text-center">
                                <button className='btn btn-warning rounded-pill px-5'>Login</button>
                            </div>
                            <div className="mb-3 text-center">
                                <Link href="#" className='text-dark'>New User? <span className='text-info'>Register</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
