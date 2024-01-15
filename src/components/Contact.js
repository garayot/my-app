function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div> 
      </div>

      <div style={{ width: '100%', height: 350 }}>
        <iframe
            style={{ border: 0, width: '100%', height: '100%' }}
            src="https://maps.google.com/maps?q=Butuan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            allowFullScreen
        ></iframe>
      </div>

      <div className="container " data-aos="fade-up">

          <div className="row">
              <div className="col mt-5">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>Butuan City, Philippines, 8600</p>
                  </div>
                </div>
              </div>
      
              <div className="col mt-5">   
                <div className="info">
                  <div className="social">
                    <i className="bi bi-facebook"></i>
                    <h4>Facebook</h4>
                    <p>
                      Club 1990 
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="col mt-2">   
                <div className="info">
                    <div className="email">
                      <i className="bi bi-envelope"></i>
                      <h4>Email:</h4>
                      <p>clubbyaggy@yahoo.com</p>
                    </div>
                </div>    
              </div>

              <div className="col mt-2">   
                <div className="info">
                    <div className="phone">
                      <i className="bi bi-phone"></i>
                      <h4>Call:</h4>
                      <p>+63 908 747 8829</p>
                    </div>
                  </div>    
              </div>

            </div>

          </div>


      
    </section>
  )
}

export default Contact