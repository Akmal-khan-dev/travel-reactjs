import React from 'react'
import styled from "styled-components"
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";

const data=[
  {
    icon:service1,
    title:"Get Best Prices",
    subtitle:"Pay through our application and save thousand and get amazing rewards."
  },
  {
    icon:service2,
    title:"Covid Safe",
    subtitle:"We have all the curated hotels that have all the precaution for the covid safe enviroment."
  },
  {
    icon:service3,
    title:"Flexible Payment",
    subtitle:"Enjoy the flexible payment through our app and get rewards on eveery payment."
  },
  {
    icon:service4,
    title:"Find The Best Near You",
    subtitle:"Find the best hotels and places to visit near you in single clicks."
  },
]

const Services = () => {
  return (
    <Section id="services">
      {
        data.map((service)=>{
          return(
            <div className="service">
              <div className="icon">
                <img src={service.icon} alt="loading" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.subtitle}</p>
            </div>
          )
        })
      }
    </Section>
  )
}

export default Services

const Section=styled.section `
   padding:5rem 0;
   display:grid;
   grid-template-columns:repeat(4, 1fr);
   gap:1rem;
   .service{
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding:2rem;
    background-color:aliceblue;
    box-shadow:rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition:0.3ms ease-in-out;
    &:hover{
      transform:translateX(0.4rem) translateY(-1rem);
      box-shadow:rgba(0, 0, 0,0,0.2) 0px 5px 15px;
    }
    .icon{
      img{

        height:2.4rem;
      }
    }
   }
`;
