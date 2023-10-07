import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Contributions = () => {
  return (
    <div>
        <Header/>
      <main id="main">

        <section className="libreoffice breadcrumbs">
        <div className="container">

            <div className="d-flex justify-content-between align-items-center">
            <h2>The LibreOffice Foundation</h2>
            
            </div>

        </div>
        </section>

        <section className="inner-page libssh">
        <div className="container">
            <p>
            <ol>
                <li>Implemented a solution to address a critical issue, introducing a user-friendly "more content" indicator for improved user experience.</li>
                <li>Conducted comprehensive code refactoring within the `include/vcl` directory, meticulously splitting include files into public and internal sections, and reorganizing code to enhance maintainability and organization.</li>
            </ol>
            </p>
        </div>
        </section>

        <section className="libssh breadcrumbs">
        <div className="container">

            <div className="d-flex justify-content-between align-items-center">
            <h2>libssh - The SSH Library</h2>
            </div>

        </div>
        </section>

        <section className="inner-page libssh">
        <div className="container">
            <p>
            Example inner page template
            <ol>
                <li>Enhanced the libssh client-side functionality by introducing support for limits@openssh.com, contributing to the broader SSH protocol compatibility.</li>
                <li>Developed and executed a suite of rigorous unit tests to validate the new feature's functionality and ensure robust performance.</li>
            </ol>
            </p>
        </div>
        </section>

        </main>
        <Footer />
    </div>
  )
}

export default Contributions
