import React, {useState} from 'react'
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";

import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";


const data=[
  {
    image:Destination1,
    title:"Singapore",
    subtitle:"Singapore, officialy the Republic of singapore",
    cost:"38,800",
    duration:"Approx 2 night trip"
  },
  {
    image:Destination2,
    title:"Thailand",
    subtitle:"Thailand is a Southeast Asia country. It's known for",
    cost:"54,200",
    duration:"Approx 2 night trip"
  },
 
  {
    image:Destination3,
    title:"Paris",
    subtitle:"Paris, france's capital, is a major European city.",
    cost:"45,500",
    duration:"Approx 2 night trip"
  },
  {
    image:Destination4,
    title:"New Zealand",
    subtitle:"New Zealand is an island country ",
    cost:"354,100",
    duration:"Approx 2 night trip"
  },
  {
    image:Destination5,
    title:"Bora Bora",
    subtitle:"Bora Bora is a small South Pacific island northwest",
    cost:"38,800",
    duration:"Approx 2 night trip"
  },
  {
    image:Destination6,
    title:"London",
    subtitle:"London, The capital of england",
    cost:"38,800",
    duration:"Approx 2 night trip"
  },
]

const packages=[
  "The Weekend Break",
  "The Package holiday",
  "The Group Tour",
  "Long Term Slow Travel",
];

const Recommend = () => {

  const [active, setActive]=useState(1);

  return (
    <Section id='recommend'>
       <div className="title">
         <h2>Recommended Destinations</h2>
       </div>
       <div className="packages">
        <ul>
          {
            packages.map((pkg, index)=>{
              return (
                <li className={active ===index+1 ? "active":""} onClick={()=>setActive(index+1)} >{pkg}</li>
              )
            })
          }
        </ul>
       </div>
       <div className="destinations">
        {
          data.map((destination)=>{
            return(
              <div className="destination">
                <img src={destination.image} alt="Destination Image" />
                <h3>{destination.title}</h3>
                <p>{destination.subtitle}</p>
                <div className="info">
                  <div className="services">
                    <img src={info1} alt="" />
                    <img src={info2} alt="" />
                    <img src={info3} alt="" />
                  </div>
                  <h4>{destination.cost}</h4>
                </div>
                <div className="distance">
                  <span>1000 kms</span>
                  <span>{destination.duration}</span>
                </div>
              </div>
            )
          })
        }
       </div>
    </Section>
  )
}

export default Recommend

const Section=styled.section `

   padding:2rem 0;
   .title{
    text-align:center;
   }
   .packages{
    display:flex;
    justify-content:center;
    margin:2rem 0;
    ul{
      display:flex;
      list-style-type:none;
      width:max-content;
      li{
        padding:1rem 2rem;
        border-bottom:0.1rem solid black;
      }
      .active{
        border-bottom:0.5rem solid #8338ec;
      }
    }
   }
   .destinations{
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    gap:2rem;
    padding:0 2rem;
    .destination{
      padding:1rem;
      display:flex;
      flex-direction:column;
      gap:0.5rem;
      background-color:#8338ec14;
      border-radius: 1rem;
      transition:0.3s ease-in-out;
      &:hover{
        transform:translateX(0.4rem) translateY(-1rem);
        box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img{
        width:100%;
      }
      .info{
        display:flex;
        align-items:center;
        justify-content:space-between;
        .services{
          display:flex;
          gap:0.3rem;
          img{
            width:2rem;
            background-color:#4d2ddb84;
            border-radius:1rem;
            padding:0.2rem 0.4rem;
          }
        }
      }
    }
   }
   .distance{
    display:flex;
    justify-content:space-between;
   }
`;