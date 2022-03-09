import React, {useState} from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import './styles/Header.scss'



export default function Header() {
  const [active, setActive] = useState(false);

  const isActive = () => {
      if (active) {
        return 'active';
      } else {
        return '';
      }
  }
  
  return (
    <header id="Header">
        <Nav className={isActive()}>
          <NavLink to='/'>EXPLORIX</NavLink>
          <Bars onClick={() => {setActive(!active)}}/>
          <NavMenu className="navMenu">
            {menuData.map((item, index) => (
                <NavLink to={item.link} key={index} className="nav-link">
                  {item.title}
                </NavLink>
            ))}
          </NavMenu>
          <NavBtn>
            <Button primary='true' round='true' to="/trips" big='false' css={`position: absolute; right: 25px;`}>Book a Flight</Button>
          </NavBtn>
        </Nav>
    </header>
  )
}

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem;
  padding-right: 2em;
  height: 100%;
  cursor: pointer;
  z-index: 100;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 80%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 100;
  }

  @media screen and (max-width: 350px) {
    right: -1em;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    position: fixed;
    top: -2000px;
    width: 100%;
    height: 110vh;
    flex-direction: column;
    padding: 18em 0;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.5s ease;
    
  }

  @media screen and (max-width: 348px) {
    position: fixed;
    height: 132vh;
    top: -1000px;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 28px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`