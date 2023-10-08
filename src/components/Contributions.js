import React from 'react'

import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Contributions = () => {
  return (
    <div>
        <Header/>
      <main id="main">

        <section className="breadcrumbs">
        <div className="container">

            <div className="d-flex justify-content-between align-items-center">
            <h2>Open Source Contributions</h2>
            <ol>
                <li><Link to={'/'}>Home</Link></li>
                <li>Contributions</li>
            </ol>
            </div>

        </div>
        </section>

        <section className="inner-page" id='libreoffice'>
        <div className="container resume">
            <div className="resume-item">
                <h4>The LibreOffice Foundation</h4>
                <h5>Feb 2023 - Present</h5>
                <p>
                <ul>
                    <li>Implemented a solution to address a critical issue, introducing a user-friendly "more content" indicator for improved user experience.</li>
                    <li>Conducted comprehensive code refactoring within the `include/vcl` directory, meticulously splitting include files into public and internal sections, and reorganizing code to enhance maintainability and organization.</li>
                </ul>
                </p>
            </div>
        </div>
        </section>

        <section className="inner-page" id='libssh'>
        <div className="container resume">
            <div className="resume-item">
                <h4>libssh - The SSH Library</h4>
                <h5>Sept 2023 - Present</h5>
                <p>
                <ul>
                    <li>Enhanced the libssh client-side functionality by introducing support for limits@openssh.com, contributing to the broader SSH protocol compatibility.</li>
                    <li>Developed and executed a suite of rigorous unit tests to validate the new feature's functionality and ensure robust performance.</li>
                </ul>
                </p>
            </div>
        </div>
        </section>

        <section className="inner-page" id='TA'>
        <div className="container resume">
            <div className="resume-item">
                <h4>Teaching Assistant</h4>
                <h5>Feb 2023 - May 2023</h5>
                <p>
                <ul>
                    <li>Assisted Dr. Dinesh Singh as a Teaching Assistant for the course Data Structures and Algorithms.</li>
                    <li>Collaborated effectively with students, facilitated discussions to reinforce learning, and provided guidance and support during office hours.</li>
                </ul>
                </p>
                <h5>Aug 2023 - Present</h5>
                <p>
                <ul>
                    <li>Currently assisting Dr. Aditya Nigam as a Teaching Assistant for the course Data Science III.</li>
                    <li>Collaborated with course instructor to assist students in understanding complex data science concepts, provided guidance during office hours, and facilitated discussions to reinforce learning.</li>
                </ul>
                </p>
            </div>
        </div>
        </section>

        <section className="inner-page" id='griffinsight'>
        <div className="container resume">
            <div className="resume-item">
                <h4>Griffinsight - Student Media Body of IIT Mandi</h4>
                <h5>Sept 2023 - Present</h5>
                <p>
                <ul>
                    <li>Served as a member of Griffinsight's web development team.</li>
                    <li>Contributed to the club by actively participating in the design and maintenance of the club's website, implementing feature enhancements, and ensuring its smooth functionality.</li>
                </ul>
                </p>
            </div>
        </div>
        </section>

        </main>
        <Footer />
    </div>
  )
}

export default Contributions
