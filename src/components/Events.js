import Carousel from 'react-bootstrap/Carousel';
import './Events.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Events() {
  return (
    <section id="events" className="events">
      <div className="container">
      <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Events</h2>
            <p>Our Affordable Pricing</p>
          </div>
        </div>
      <Carousel>
        
        <Carousel.Item interval={5000}>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img src="assets/img/event-wedding2.jpg" alt=""
          width="100%"
          />

          <Carousel.Caption>
            <h3>Venue</h3>
            <div>
              <p>
                <span> 
                  <b>for as low as Php 3,990</b>
                </span>
              </p>
            </div>
              
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <img src="assets/img/event-wedding3.jpg" alt=""
          width="100%"
          />
          <Carousel.Caption className>
          <h3>Documentations</h3>
            <div>
              <p>
                <span> 
                <b>for as low as Php 2,990</b> 
                </span>
              </p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <img src="assets/img/event-wedding4.jpg" alt=""
          width="100%"
          />
          <Carousel.Caption>
          <h3>Photo-shoot</h3>
            <div>
              <p>
                <span> 
                  <b>for as low as Php 1,990</b>
                </span>
              </p>
            </div>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </section>
  );
}

export default Events;