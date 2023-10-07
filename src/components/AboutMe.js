import React from 'react'

const AboutMe = () => {
  return (
    <div>
      <section id="about" className="about">
        <div className="container">

            <div className="section-title">
            <span>About Me</span>
            <h2>About Me</h2>
            {/* <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p> */}
            </div>

            <div className="row">
            <div className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
            <div className="col-lg-8 d-flex flex-column align-items-stretch">
                <div className="content ps-lg-4 d-flex flex-column justify-content-center">
                
                <div className="row">
                        <h4>Dipam Turkar</h4>
                        <p><em>I am a motivated software developer and engineering student with a strong commitment to delivering high-quality solutions. Detail-oriented, organized collaborator with a passion for continuous learning and growth in software development.</em></p>
                    <div className="col-lg-6">
                    <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Name:</strong> <span>Dipam Turkar</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 7620605524</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Gondia, Maharashtra</span></li>
                    </ul>
                    </div>
                    <div className="col-lg-6">
                    <ul>
                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>20</span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelors (Pursuing) </span></li>
                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>dipamt1729@gmail.com</span></li>
                    </ul>
                    </div>
                </div>
                <div className="row mt-n4">

                    <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                        <i className="bi bi-journal-richtext" style={{color: "color : #e67e29"}}></i>
                        <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                        <p><strong>Projects</strong> Worked on various open-source community hosted projects. </p>
                    </div>
                    </div>

                    <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                        <i className="bi bi-clock" style={{color: "color : #e67e29"}}></i>
                        <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter"></span>
                        <p><strong>Years of experience</strong> 3 Months </p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="skills-content ps-lg-4">
                <div className="progress">
                    <span className="skill">C++ <i className="val">100%</i></span>
                    <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                </div>

                <div className="progress">
                    <span className="skill">Python <i className="val">90%</i></span>
                    <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                </div>

                <div className="progress">
                    <span className="skill">JavaScript <i className="val">75%</i></span>
                    <div className="progress-bar-wrap">
                    <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                </div>
                </div>

            </div>
            </div>

        </div>
        </section>
    </div>
  )
}

export default AboutMe
