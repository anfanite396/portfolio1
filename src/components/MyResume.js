import React from 'react'

const MyResume = () => {
  return (
    <div>
        <section id="resume" class="resume">
            <div class="container">

                <div class="section-title">
                <span>My Resume</span>
                <h2>My Resume</h2>
                {/* <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p> */}
                </div>

                <div class="row">
                <div class="col-lg-6">
                    <h3 class="resume-title">Sumary</h3>
                    <div class="resume-item pb-0">
                    <h4>Dipam Turkar</h4>
                    <p><em>I am a motivated software developer and engineering student with a strong commitment to delivering high-quality solutions. Detail-oriented, organized collaborator with a passion for continuous learning and growth in software development.</em></p>
                    <p>
                    <ul>
                        <li>Gondia, Maharashtra, India</li>
                        <li>+91 7620605524</li>
                        <li>dipamt1729@gmail.com</li>
                    </ul>
                    </p>
                    </div>

                    <h3 class="resume-title">Education</h3>
                    <div class="resume-item">
                    <h4>Bachelor of Technology &amp; Computer Science and Engineering</h4>
                    <h5>2021 - 2025</h5>
                    <p><em>Indian Institute of Technology, Mandi</em></p>
                    <p>Currently pursuing my Bachelors at the prestigious Indian Institute of Technology, Mandi. </p>
                    </div>
                    {/* <div class="resume-item">
                    <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                    <h5>2010 - 2014</h5>
                    <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                    <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
                    </div> */}
                </div>
                <div class="col-lg-6">
                    <h3 class="resume-title">Professional Experience</h3>
                    <div class="resume-item">
                    <h4>Student Software Developer Intern (Google Summer of Code)</h4>
                    <h5>May 2023 - Aug 2023</h5>
                    {/* <p><em>Experion, New York, NY </em></p> */}
                    <p>
                    <ul>
                        <li>Selected for Google Summer of Code under The LibreOffice Foundation for the summer of 2023.</li>
                        <li>Quickly learned and adopted new technologies to convert legacy Unit tests from Java to C++ using the CppUnit Testing Framework. </li>
                        <li>Demonstrated creative engineering and adaptability in delivering high-performance and reliable code.</li>
                    </ul>
                    </p>
                    </div>
                    {/* <div class="resume-item">
                    <h4>Graphic design specialist</h4>
                    <h5>2017 - 2018</h5>
                    <p><em>Stepping Stone Advertising, New York, NY</em></p>
                    <p>
                    <ul>
                        <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                        <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                        <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                        <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                    </ul>
                    </p>
                    </div> */}
                </div>
                </div>

            </div>
            </section>
    </div>
  )
}

export default MyResume
