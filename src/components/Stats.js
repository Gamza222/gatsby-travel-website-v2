import React from 'react'
import './styles/Stats.scss'
import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer} from 'react-icons/md'
import {FaMoneyCheck} from 'react-icons/fa'


export default function Stats() {

  const data = [
    {
      icon: (<GiEarthAmerica css={`color: #047bf1`}/>),
      title: "Over 100 Destinations",
      desc: "Travel to aver 100 unique places"
    },
    {
      icon: (<MdAirplanemodeActive css={`color: #f34f2e`}/>),
      title: "1 Million Trips Made",
      desc: "Over 1 million trips completed last year"
    },
    {
      icon: (<MdTimer css={`color: #f34f2e`}/>),
      title: "Fatest Support",
      desc: "Access our support team 24/7"
    },
    {
      icon: (<FaMoneyCheck css={`color: #3af576`}/>),
      title: "Best Deals",
      desc: "We offer the best prices"
    }
  ]


  return (
    <section className="stats-container">
        <h2 className="stats-heading">Why Choose Us?</h2>
        <div className="stats-wrap">
          {data.map((item, index) =>
          <div className="stats-box" key={index}>
            <div className="stats-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
          )}
        </div>
    </section>
  )
}
