import React from 'react'

const ContactMe = () => {
  return (
    <div>
      <section id="contact" className="contact">
        <div className="container">

            <div className="section-title">
            <span>Contact Me</span>
            <h2>Contact Me</h2>
            {/* <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p> */}
            </div>

            <div className="row">

            <div className="col-lg-12">

                <div className="row">
                <div className="col-md-6">
                    <div className="info-box">
                    <i className="bx bx-share-alt"></i>
                    <h3>Social Profiles</h3>
                    <div className="social-links">
                        {/* <a href="#" className="twitter"><i className="bi bi-twitter"></i></a> */}
                        {/* <a href="#" className="facebook"><i className="bi bi-facebook"></i></a> */}
                        <a href="https://instagram.com/turkardipam" className="instagram"><i className="bi bi-instagram"></i></a>
                        {/* <a href="#" className="google-plus"><i className="bi bi-skype"></i></a> */}
                        <a href="https://linkedin.com/in/dipam-turkar" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="info-box">
                    <i className="bx bx-share-alt"></i>
                    <h3>Professional Profiles</h3>
                    <div className="social-links">
                        <a href="https://github.com/anfanite396" className="github"><i className="bi bi-github"></i></a>
                        <a href="https://gitlab.com/anfanite396" className="gitlab"><i className="bi bi-gitlab"></i></a>
                        <a href="https://gerrit.libreoffice.org/q/anfanite396" className="gerrit"><i className="bi bi-git"></i></a>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="info-box mt-4">
                    <i className="bx bx-envelope"></i>
                    <h3>Email Me</h3>
                    <p>dipamt1729@gmail.com</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="info-box mt-4">
                    <i className="bx bx-phone-call"></i>
                    <h3>Call Me</h3>
                    <p>+91 7620605524</p>
                    </div>
                </div>
                </div>

            </div>

            {/* <div className="col-lg-6">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                    <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                </div>
                <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
            </div> */}

            </div>

        </div>
        </section>
    </div>
  )
}

export default ContactMe
