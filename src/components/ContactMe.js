import React from 'react'

const ContactMe = () => {
  return (
    <div>
      <section id="contact" class="contact">
        <div class="container">

            <div class="section-title">
            <span>Contact Me</span>
            <h2>Contact Me</h2>
            {/* <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p> */}
            </div>

            <div class="row">

            <div class="col-lg-6">

                <div class="row">
                <div class="col-md-6">
                    <div class="info-box">
                    <i class="bx bx-share-alt"></i>
                    <h3>Social Profiles</h3>
                    <div class="social-links">
                        {/* <a href="#" class="twitter"><i class="bi bi-twitter"></i></a> */}
                        {/* <a href="#" class="facebook"><i class="bi bi-facebook"></i></a> */}
                        <a href="https://instagram.com/turkardipam" class="instagram"><i class="bi bi-instagram"></i></a>
                        {/* <a href="#" class="google-plus"><i class="bi bi-skype"></i></a> */}
                        <a href="https://linkedin.com/in/dipam-turkar" class="linkedin"><i class="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="info-box">
                    <i class="bx bx-share-alt"></i>
                    <h3>Professional Profiles</h3>
                    <div class="social-links">
                        <a href="https://github.com/anfanite396" class="github"><i class="bi bi-github"></i></a>
                        <a href="https://gitlab.com/anfanite396" class="gitlab"><i class="bi bi-gitlab"></i></a>
                        <a href="https://gerrit.libreoffice.org/q/anfanite396" class="gerrit"><i class="bi bi-git"></i></a>
                    </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="info-box mt-4">
                    <i class="bx bx-envelope"></i>
                    <h3>Email Me</h3>
                    <p>dipamt1729@gmail.com</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="info-box mt-4">
                    <i class="bx bx-phone-call"></i>
                    <h3>Call Me</h3>
                    <p>+91 7620605524</p>
                    </div>
                </div>
                </div>

            </div>

            <div class="col-lg-6">
                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                <div class="row">
                    <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                </div>
                <div class="form-group mt-3">
                    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div class="form-group mt-3">
                    <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                </div>
                <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Send Message</button></div>
                </form>
            </div>

            </div>

        </div>
        </section>
    </div>
  )
}

export default ContactMe
