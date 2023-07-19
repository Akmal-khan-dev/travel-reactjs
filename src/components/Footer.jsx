import React from 'react'
import styled from "styled-components";
import {BsLinkedin, BsFacebook, BsInstagram} from 'react-icons/bs'
import {AiFillInstagram} from "react-icons/ai";

const Footer = () => {
  return (
    <FooterContainer>
      <span>Copyright &copy; 2023 Tour Agency. All right reserved</span>
      <ul  className="links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Places">Places</a>
        </li>
        <li>
          <a href="#Testimonials">Testimonials</a>
        </li>
        
      </ul>
      <ul className="social_links">
        <li><BsFacebook/></li>
        <li><BsLinkedin/></li>
        <li><BsInstagram/></li>
      </ul>
      
    </FooterContainer>
  )
}

export default Footer

const FooterContainer=styled.footer `
display:flex;
justify-content:space-evenly;
background-color:#d0d8ff;
padding:2.5rem;
border-radius:0.5rem;
ul{
  display:flex;
  list-style-type:none;
  gap:2rem;
  li{
    a{
      text-decoration:none;
      color:black;
      transition:0.3s ease-in-out;
      &:hover{
        color:#302ce9;
      }
    }
    svg{
      font-size:1.3rem;
      transition:0.3s ease-in-out;
      &:hover{
        color:#302ce9;
      }
    }
  }
}


`;