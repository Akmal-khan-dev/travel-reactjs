import React from "react";
import { styled } from "styled-components";
import homeImage from "../assets/home-bg-3.jpg";

function Hero() {
  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="Image loading..." />
      </div>
      <div className="content">
        <div className="title">
          <h1>TRAVEL TO EXPLORE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            earum voluptas, libero labore tempore, nesciunt omnis voluptatem
            blanditiis necessitatibus natus neque veniam, maxime eos at! Aut
            doloribus excepturi blanditiis soluta?
          </p>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Where you want to go?</label>
            <input type="text" placeholder="Search your location" />
          </div>
          <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date" />
          </div>
          <button>Explore Now</button>
        </div>
      </div>
    </Section>
  );
}

export default Hero;

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  .background {
    img {
      width: 100%;
      filter: brightness(60%);
    }
  }
  .content{
    position:absolute;
    top:0;
    width:100%;
    height:100%;
    text-align:center;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:1rem;
    .title{
      color:white;
      h1{
        font-size:3rem;
        letter-spacing:0.2rem;
      }
      p{
        text-align:center;
        padding:0 30vw;
        margin-top:0.2rem;
        font-size:1.2rem;
      }
    }
    .search{
      background-color:white;
      border-radius:0.5rem;
      padding: 0.5rem ;
      display: flex;
      .container{
        display:flex;
        text-align:center;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:0 1.5rem;
        label{
          font-size:1.1rem;
          color:#03045e;
        }
        input{
          background-color:transparent;
          border:none;
         
          color:black;
          &[type="date"]{
            padding-left:2rem;
          }
          &::placeholder{
            color:black;
          }
          &:focus{
            outline:none;
          }
        }
      }
      button{
        background-color:#4361ee;
        padding: 1rem;
        border-radius:0.3rem;
        border:none;
        color:white;
        font-size:1.1rem;
        text-transform:uppercase;
        transition:0.3ms ease-in-out;
        &:hover{
          background-color:#023e8a;
        }
      }
    }
  }
`;
