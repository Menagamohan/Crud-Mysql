import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';
import 'boxicons';


// Import images for carousel
import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpg';
import index from './images/index.jpg';


// Gallery images
import p1 from './images/p1.jpg';
import p2 from './images/p2.jpg';
import p3 from './images/p3.jpg';
import p4 from './images/p4.jpg';
import p5 from './images/p5.jpg';
import p6 from './images/p6.jpg';
import p7 from './images/p7.jpg';
import p8 from './images/p8.jpg';
import p9 from './images/p9.jpg';
import p10 from './images/p10.jpg';
import p11 from './images/p11.jpg';
import office from './images/office.jpg';


// Icons
import a1 from './images/a1.png'; // Adjust based on your file structure
import a2 from './images/a2.png'; 
import a3 from './images/a3.png'; 
// import a4 from './images/a4.png';
import a5 from './images/a5.png';
import a6 from './images/a6.png';
import a7 from './images/a7.png';
import a8 from './images/a8.png';

// Spinner import
import { Spinner } from 'react-bootstrap';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const carouselItems = [
        { id: 1, text: 'West Virginia', img: index },
        { id: 2, text: 'United States<br />Live Wonderful Life', img: slide2 },
        { id: 3, text: 'United States', img: slide3 },
    ];

    const cardItems = [
        { id: 1, title: '', description: 'Gallery', img: slide1 },
        { id: 2, title: '', description: 'Amenities', img: slide2 },
        { id: 3, title: '', description: 'Packages', img: slide3 },
    ];

    return (
        <div className="container">
            <h1>Welcome to My Home Page</h1>
            <Slider {...settings}>
                {carouselItems.map(item => (
                    <div key={item.id}>
                        <img src={item.img} alt={item.text} style={{ width: '100%', height: '550px' }} />
                        <h4 dangerouslySetInnerHTML={{ __html: item.text }}></h4> {/* Render HTML if needed */}
                    </div>
                ))}
            </Slider>

            <div className="card-container">
                {cardItems.map(card => (
                    <div key={card.id} className="card">
                        <img src={card.img} alt={card.description} />
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>

            <div className="outer-container">
                <div className="text-container">
                    <p className="inviting-text">An inviting escape</p>
                </div>
                <div className="info-container">
                    <p>Crafted with Bootstrap 4, Hideaway is perfectly responsive to every device available. Thousands of CSS helper classes let you customize this template in any way you want, without writing any code. This is a dummy text that you can customize as you like.</p>
                </div>
            </div>

            <center>
                <button className="styled-button">Our History</button>
            </center>

            <div className="outer-container">
                <div className="text-container">
                    <center>
                        <h3 className='inviting-text'>Oops! Something went wrong.</h3>
                        <p>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
                    </center>
                </div>
                <div className="info-container">
                    <div className="images">
                        <img src={p1} alt="Description 1" />
                        <img src={p2} alt="Description 2" />
                        <img src={p3} alt="Description 3" />
                        <img src={p4} alt="Description 4" />
                        <img src={p5} alt="Description 5" />
                        <img src={p6} alt="Description 6" />
                    </div>
                </div>
            </div>

            <h4 className="title">About Our Company</h4>
            <br />
            <div className='about-container'>
                <div className='image-container'>
                    <img src={office} alt='Office Image' className='image' />
                </div>
                <div className='text-container'>
                    <h2 className='heading'>Our Working Place</h2>
                    <p className='paragraph'>
                        Vestibulum ligut praesent commodo cursus magna, consectetur et. 
                        Cum socis natoque penatibus et magnis dis tellus parturient pharetra montes. 
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. 
                        Integer posuere erat a ante venenatis dapibus posuere velit aliquet. 
                        Maecenas sed diam eget risus varius blandit sit amet non magna. 
                        Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. 
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    </p>
                </div>
            </div>

            
<hr/><br/>
<div className="divide50"></div>
<div className="row">
    <div className="col-sm-4">
        <h4>Our Journeys</h4>
        <hr/>
        <p>Explore the world with us through carefully curated journeys.</p>
        <div className="divide5"></div>
        <ul className="progress-list">
            <li>
                <p>Asia <em>90%</em></p>
                <div className="progress plain">
                    <div className="bar" style={{ width: '90%' }}></div>
                </div>
            </li>
            <li>
                <p>Australia <em>80%</em></p>
                <div className="progress plain">
                    <div className="bar" style={{ width: '80%' }}></div>
                </div>
            </li>
            <li>
                <p>America <em>85%</em></p>
                <div className="progress plain">
                    <div className="bar" style={{ width: '85%' }}></div>
                </div>
            </li>
            <li>
                <p>Europe <em>50%</em></p>
                <div className="progress plain">
                    <div className="bar" style={{ width: '50%' }}></div>
                </div>
            </li>
        </ul>
    </div>
    
    <div className="col-sm-4">
        <h4>Why Choose Us?</h4>
        <hr/>
        <p>Discover our commitment to excellence and customer satisfaction.</p>
        <div className="divide10"></div>
        <ol className="color">
            <li>Unmatched service quality.</li>
            <li>Affordable pricing.</li>
            <li>Expert guides and support.</li>
            <li>Personalized experiences.</li>
            <li>Safety and reliability.</li>
            <li>Customer-centric approach.</li>
        </ol>
    </div>
    
    <div className="col-sm-4">
        <h4>Our Transports</h4>
        <hr/>
        <div className="divide10"></div>
        <div className="services-2">
            <div className="icon">
                <img src={a1} alt="Responsive Layout" />
            </div>
            <div className="text">
                <h5>Responsive Layout</h5>
                <p>Optimized for all devices.</p>
            </div>
            <div className="divide20"></div>
            <div className="icon">
                <img src={a2} alt="Flat & Clean Design" />
            </div>
            <div className="text">
                <h5>Flat & Clean Design</h5>
                <p>Simplicity at its best.</p>
            </div>
            <div className="divide20"></div>
            <div className="icon">
                <img src={a3} alt="Print Design" />
            </div>
            <div className="text">
                <h5>Print Design</h5>
                <p>High-quality materials.</p>
            </div>
        </div>
    </div>
</div>

<div id="services" className="services">
    <div className="container">
        <div className="row">
            <div className="col-md-4 offset-md-4 text-center">
                <h2 className="main-title">Our Services</h2>
                <hr/>
            </div>
        </div>
        <div className="divide50"></div>
        <div className="row">
            <div className="col-md-3 text-center">
                <div className="service-item">
                <img src={a7} alt="Responsive Layout" />                   
                    <h4 className="service-title">Great Transport</h4>
                    <p className="service-desc">Reliable and comfortable transport options for all journeys.</p>
                </div>
            </div>
            <div className="col-md-3 text-center">
                <div className="service-item">
                <img src={a6} alt="Responsive Layout" />
                    <h4 className="service-title">Not Expensive</h4>
                    <p className="service-desc">Affordable pricing without compromising quality.</p>
                </div>
            </div>
            <div className="col-md-3 text-center">
                <div className="service-item">
                <img src={a8} alt="Responsive Layout" />
                    <h4 className="service-title">Delicious Food</h4>
                    <p className="service-desc">Savor exquisite cuisine during your travels.</p>
                </div>
            </div>
            <div className="col-md-3 text-center">
                <div className="service-item">
                <img src={a5} alt="Responsive Layout" />
                    <h4 className="service-title">Best Photographers</h4>
                    <p className="service-desc">Capture your memories with our expert photographers.</p>
                </div>
            </div>
        </div>
    </div>
</div>


<div id="places" className="places">
    <div className="container">
        <div className="row">
            <div className="col-md-4 offset-md-4 text-center">
                <h2 className="main-title">Our Visited Places</h2>
                <hr />
            </div>
        </div>
    </div>  
    <div className="divide50"></div>  
    <div className="container">
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <div className="grid center-block">
                    <figure className="effect-zoe">
                    <img src={p6} alt="Paris" className="img-responsive center-block" style={{ height: '400px' }} />

                        <figcaption>
                            <h2>Paris</h2>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien.
                            </p>
                        </figcaption>           
                    </figure>
                </div>
            </div>
            <div className="col-md-6 col-sm-12">
                <div className="grid center-block">
                    <figure className="effect-zoe">
                        <img src={p7} alt="Sydney" className="img-responsive center-block" />
                        <figcaption>
                            <h2>Sydney</h2>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien.
                            </p>
                        </figcaption>           
                    </figure>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <div className="grid center-block">
                    <figure className="effect-zoe">
                        <img src={p8} alt="Washington" className="img-responsive center-block" />
                        <figcaption>
                            <h2>Washington</h2>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien.
                            </p>
                        </figcaption>           
                    </figure>
                </div>
            </div>
            <div className="col-md-6 col-sm-12">
                <div className="grid center-block">
                    <figure className="effect-zoe">
                        <img src={p11} alt="London" className="img-responsive center-block" />
                        <figcaption>
                            <h2>London</h2>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien.
                            </p>
                        </figcaption>           
                    </figure>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <div className="grid center-block">
                    <figure className="effect-zoe">
                        <img src={p10} alt="U.S.A" className="img-responsive center-block" />
                        <figcaption>
                            <h2>U.S.A</h2>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien.
                            </p>
                        </figcaption>           
                    </figure>
                </div>
            </div>
            <div className="col-md-6 col-sm-12">
                <div className="grid center-block">
                    <figure className="effect-zoe">
                        <img src={p9} alt="Pizza Tower" className="img-responsive center-block" />
                        <figcaption>
                            <h2>Pizza Tower</h2>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in lobortis nisl, vitae iaculis sapien.
                            </p>
                        </figcaption>           
                    </figure>
                </div>
            </div>
        </div>
    </div>
</div>




<div className="call-to-action">
    <div className="container">
        <div className="row">
            <center>
            <div className="col-md-6 col-md-offset-3 text-center">
                <h3>We provide online booking</h3>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Booking
</button>


                
            </div>
            </center>
        </div>
    </div>
</div>

<div className="map">
    <iframe width="100%" height="400px" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3618.727010735933!2d91.837871!3d24.907291700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1404919738144"></iframe>
</div>


      </div>
    );
};


export default Home;

