import React from 'react'

const header = () => {
  return (
    <div>
        <header id="header" className="fixed-top d-flex justify-content-center align-items-center header-transparent">

            <nav id="navbar" className="navbar">
            <ul>
                <li><a className="nav-link scrollto active" href="/portfolio1/#hero">Home</a></li>
                <li><a className="nav-link scrollto" href="/portfolio1/#about">About</a></li>
                <li><a className="nav-link scrollto" href="/portfolio1/#resume">Resume</a></li>
                <li><a className="nav-link scrollto" href="/portfolio1/#services">Services</a></li>
                <li><a className="nav-link scrollto " href="/portfolio1/#portfolio">Portfolio</a></li>
                {/* <li className="dropdown"><a href="/portfolio1/#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                    <li><a href="/portfolio1/#">Drop Down 1</a></li>
                    <li className="dropdown"><a href="/portfolio1/#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                        <li><a href="/portfolio1/#">Deep Drop Down 1</a></li>
                        <li><a href="/portfolio1/#">Deep Drop Down 2</a></li>
                        <li><a href="/portfolio1/#">Deep Drop Down 3</a></li>
                        <li><a href="/portfolio1/#">Deep Drop Down 4</a></li>
                        <li><a href="/portfolio1/#">Deep Drop Down 5</a></li>
                    </ul>
                    </li>
                    <li><a href="/portfolio1/#">Drop Down 2</a></li>
                    <li><a href="/portfolio1/#">Drop Down 3</a></li>
                    <li><a href="/portfolio1/#">Drop Down 4</a></li>
                </ul>
                </li> */}
                <li><a className="nav-link scrollto" href="/portfolio1/#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>

        </header>
    </div>
  )
}

export default header
