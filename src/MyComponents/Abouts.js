import React from "react";
import imagge from "../images/images.jpg";

function About() {

  function alrt(){
    alert("We will contact you shortly , Thanks.");
  }
  return (
    <>
      <section>
        <div className="container">
            <div className="about-head-sec">
                <h2 style={{fontWeight:"bold"}}>About</h2>
                <h3>
                  Find Out More About Us
                </h3>
                <p >
                  The success of hospitals and healthcare providers depends on the
                  quality of their service. But in an age where most of us look up
                  information online before making almost any decision, a
                  well-designed healthcare website is no less important.
                </p>
            </div>
            <div>
                <img src={imagge} style={{height:"100%",width:"100%",borderRadius:"2vh"}} />
              </div>
            <div>
              <div className="about-head-sec">
                <h3 style={{fontWeight:"bold"}}>THE MOST VALUABLE THING IS YOUR HEALTH!!</h3>
                <p>
                  We deliver quality services at your door step
                </p>
                <ul>
                  <li>
                    <i className="fas fa-file-medical-alt"></i>
                      <h5>Your most trusted health partner</h5>
                      <p>Hight quality medicines at affordable rates</p> 
                  </li>
                  <li>
                    <i className="fas fa-briefcase-medical"></i>
                    <div>
                      <h5>Personal care for your healthy living</h5>
                      <p>Medicines services you can trust</p>
                    </div>
                  </li>
                </ul>
                <p style={{fontWeight:"bold"}}>
                  Getmeds! have been putting forth pharmacy administrations to
                  our clients for more than 10 years. We know the pharmacy and
                  wellbeing and magnificence industry back to front, continually
                  guaranteeing we offer the most breakthrough items and
                  medications. We bring our customers the best quality
                  administration and give the nearby network and neighboring
                  wards with a brilliant, understanding centered administration.
                  </p>
              </div>
            </div>  
        </div>
      </section>

      
        <div style={{width:"50%",margin:"auto",marginTop:"60px"}}>
          <div>
            <h1 className="text-center">
              Contact Us
            </h1>
            <p>
              Get in contact with Us , Register below and our team will reach
              you for helping you out.
            </p>
          </div>
          <div>
            
              <div>
                <div>
                  <label htmlFor="name">
                    Name:{" "}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                  />
                </div>

                <div >
                  <div >
                    <label
                      htmlFor="email"
                    >
                      Email:{" "}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <label
                    htmlFor="message"
                  >
                    Message:{" "}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    cols="52"
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <button onClick={alrt} className="btn btn-primary my-2">Just a Click Away!</button>
              </div>
            
          </div>
        </div>
    </>
  );
}

export default About;
