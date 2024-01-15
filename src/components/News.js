import Carousel from 'react-bootstrap/Carousel';
import './Events.css';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function News() {
  return (
    <section id="news" className="news">
    <div className="container">
    <div className="container mt-5" data-aos="fade-up">
        <div className="section-title">
          <h2>News & Announcements</h2>
          <p>See News</p>
        </div>
      </div>
    <Carousel>
      
      <Carousel.Item interval={5000}>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src="assets/img/news/news1.jpg" alt=""
        width="100%"
        />

        <Carousel.Caption>
          <h3>Jack and Mary Just Got Married!</h3>
          <div>
            <p>
              <span> 
                <b>newly weds</b>
              </span>
            </p>
          </div>
            
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src="assets/img/news/new2.jpg" alt=""
        width="100%"
        />
        <Carousel.Caption className>
        <h3>Themed Props from Our partners</h3>
          <div>
            <p>
              <span> 
               <b>wide selections of themes</b> 
              </span>
            </p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src="assets/img/news/news3.jpg" alt=""
        width="100%"
        />
        <Carousel.Caption>
        <h3>Operations to a Halt</h3>
          <div>
            <p>
              <span> 
                <b>pandemic strikes</b>
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

export default News;