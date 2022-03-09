import './styles/Testimonials.scss'
import React, { useEffect, useState } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { useStaticQuery, graphql } from 'gatsby'
import { FaRegLightbulb } from 'react-icons/fa'

export default function Testimonials() {
    const data = useStaticQuery(graphql`query Testimonials {
        allTestimonialsJson {
            edges {
                node {
                    alt
                    name
                    text
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

    let person = undefined;
    (() => {
        person = data.allTestimonialsJson.edges.map((item, index) => {
            return {
                name: item.node.name,
                text: item.node.text,
                img: item.node.img.childImageSharp.gatsbyImageData,
                alt: item.node.alt,
                index: index            
            }
        });
        console.log('lklkll');
        console.log(person[0]);
    })();

    
    console.log('ddd');
    
    

  return (
    <section className="testimonials-container" id="Trips">
        <h2 className="heading" >Testimonials</h2>
        <p className="description">What people are sying</p>
        <div className="content-wrapper">
            <div className="column-one">
                <div className="testimonial">
                    <IoMdCheckmarkCircleOutline 
                    css={`
                    color: rgb(0, 255, 0);
                    height: 28.44px;
                    width: 28.44px;
                    `}
                    />
                    <h3>{person[0].name}</h3>
                    <p>{person[0].text}
                    </p>        
                </div>
                <div className="testimonial">
                    <FaRegLightbulb 
                    css={`
                    color: rgb(241, 157, 0);
                    height: 28.44px;
                    width: 28.44px;
                    `}
                    />
                    <h3>{person[1].name}</h3>
                    <p>{person[1].text}
                    </p>        
                </div>
            </div>
            <div className="column-two">
                {person.map(item => {
                    return (
                    <GatsbyImage className="testimonial-image"
                    image={item.img}
                    alt={item.alt}
                    key={item.index}
                    />
                    )
                })}
            </div>
        </div>
    </section>
  )
}
