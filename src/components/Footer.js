import React from 'react'
import './styles/Footer.scss'
import { Link } from 'gatsby'

export default function footer() {
  return (
    <div className="footer-container">
        <div className="footer-wrapper">
            <div className="footer-description">
                <h2>Explorix</h2>
                <p> We strive to create the best experience for 
                our customers</p>
            </div>
            <div className="footer-links">
                <h3>Information</h3>
                <Link to="#Contact">Trips</Link>
                <Link to="#Header">About</Link>
                <Link to="#Trips">Contact</Link>
            </div>
        </div>
        <div className="footer-wrapper">
            <div className="footer-links">
                <h3>Videos</h3>
                <Link to="/">Agency</Link>
                <Link to="/">Influencer</Link>
                <Link to="/">Ambasadors</Link>
                <Link to="/">Submut Video</Link>
            </div>
            <div className="footer-links">
                <h3>Social Media</h3>
                <Link to="#">Twitter</Link>
                <Link to="https://www.linkedin.com/in/gamza-ramazanov-790b7b231/">LinkedIn</Link>
                <Link to="https://www.instagram.com/fckm.fff/">Instagram</Link>
            </div>
        </div>
    </div>
  )
}
