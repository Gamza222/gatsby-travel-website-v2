import React from 'react'
import './styles/Email.scss'
import { Button } from './Button'

export default function Email() {
  return (
    <div className="email-container" id="#Contact">
        <div className="email-content">
            <h2>Get Access to Exlusive Offers</h2>
            <p>Sign up for your newsletter below to get $100
            off your first trip!</p>
            <form action="" className="email-form" id="email-form">
                <div className="form-wrap">
                    <label htmlFor='email'>
                        <input type="email" id="email" placeholder="Enter your email"></input>
                    </label>
                    <button for="email-form" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}
