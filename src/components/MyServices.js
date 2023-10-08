import React from 'react'
import { Link } from 'react-router-dom'

const MyServices = () => {
  return (
    <div>
      <section id="services" className="services">
        <div className="container">

            <div className="section-title">
            <span>My Engagements</span>
            <h2>My Engagements</h2>
            {/* <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p> */}
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div className="icon-box">
                  <Link to = {"/portfolio1/contributions/#libreoffice"}>
                  <div className="icon"><i className="bx bxl-dribbble"></i></div>
                  <h4 className="title">The LibreOffice Foundation</h4>
                  <p className="description" style={{color : 'black'}}>Contributing since Feb 2023. ALso participated in GSOC under LibreOffice.</p>
                  </Link>
                  </div>
              </div>
            
            
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div className="icon-box">
                  <Link to={"/portfolio1/contributions/#libssh"}>
                  <div className="icon"><i className="bx bx-file"></i></div>
                  <h4 className="title">libssh</h4>
                  <p className="description" style={{color : 'black'}}>Contributing at libsh since Aug 2023.</p>
                  </Link>
                  </div>
              </div>
            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box">
                <Link to = {"/portfolio1/contributions/#griffinsight"}>
                <div className="icon"><i className="bx bx-tachometer"></i></div>
                <h4 className="title">Griffinsight</h4>
                <p className="description" style={{color : 'black'}}>Member of web development team at Griffinsight, the Student Media Body of IIT Mandi.</p>
                </Link>
                </div>
            </div>

            <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div className="icon-box">
                <Link to = {"/portfolio1/contributions/#TA"}>
                <div className="icon"><i className="bx bx-world"></i></div>
                <h4 className="title">IIT Mandi</h4>
                <p className="description" style={{color : 'black'}}>Served as Teaching Assistant for courses 'Data Structures and Algorithms' and 'Data Science III'.</p>
                </Link>
                </div>
            </div>

            </div>

        </div>
        </section>
    </div>
  )
}

export default MyServices
