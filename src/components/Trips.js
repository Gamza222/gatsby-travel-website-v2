import React from 'react'
import './styles/Trips.scss'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import { Button } from './Button';
import { ImLocation } from 'react-icons/im'


export default function Trips({heading}) {

  const data = useStaticQuery(graphql`query TripsQuery {
  allTripsJson {
    edges {
      node {
        alt
        button
        name
        img {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
}
`);
  
  const getTrips = (data) => {
    
    return data.allTripsJson.edges.map((image, index) => {
      return (
        <div className="product-card" key={index}>
          <GatsbyImage className='product-image'
            image={image.node.img.childImageSharp.gatsbyImageData}
            alt={image.node.alt}
          />
          <div className="product-info">
            <div className="text-wrapper">
              <ImLocation />
              <h3 className="product-title">{image.node.name}</h3>
            </div>
            <Button primary="true" round="true" to="/trips" >{image.node.button}</Button>
          </div>
        </div>
      );
    }
    );
  };
  

  return (
    <section className="products-container">
        <div className="product-heading">{heading}</div>
        <div className="product-wrapper">{getTrips(data)}</div>
    </section>
  )
}
