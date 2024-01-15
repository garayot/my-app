function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center">
    <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
      <div className="row">
        <div className="col-lg-8">
          <h1>Welcome to <span>Club 1990</span></h1>
          <h2>Delivering great events</h2>

          <div className="btns">
            <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Book Now</a>
          </div>
        </div>
        <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
          <a href="https://www.youtube.com/watch?v=u6BOC7CDUTQ" className="glightbox play-btn"></a>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Hero