import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpeg";

const Testimonial = () => {
  return (
    <Section>
      <div className="title">
        <h2>Happy Customer</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            quibusdam obcaecati neque corporis excepturi provident architecto
            praesentium sint reprehenderit omnis, consectetur quia dolor ex
            fugiat eveniet? Tempore assumenda iste a.
          </p>

          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>elon musk</h4>
              <span>CEO - Twitter</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            quibusdam obcaecati neque corporis excepturi provident architecto
            praesentium sint reprehenderit omnis, consectetur quia dolor ex
            fugiat eveniet? Tempore assumenda iste a.
          </p>

          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>elon musk</h4>
              <span>CEO - Twitter</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            quibusdam obcaecati neque corporis excepturi provident architecto
            praesentium sint reprehenderit omnis, consectetur quia dolor ex
            fugiat eveniet? Tempore assumenda iste a.
          </p>

          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>elon musk</h4>
              <span>CEO - Twitter</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonial;

const Section = styled.section`
 margin: 5rem 0;
 .title{
  text-align:center;
  margin-bottom:2rem;
 }
 .testimonials{
  display:flex;
  justify-content:center;
  gap:2rem;
  margin:0 2rem;
  .testimonial{
    background-color:aliceblue;
    padding:2rem;
    border-radius:0.5rem;
    box-shadow:rgba(100,100,111,0.2) 0px 7px 29px 0px;
    transition:0.3s ease-in-out;
    &:hover{
      transform:translateX(0.4rem) translateY(-1rem);
      box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .info{
      display:flex;
      justify-content:center;
      gap:1rem;
      align-items:center;
      margin-top:1rem;
      img{
        height:3rem;
        border-radius:3rem;
      }
      .details{
        font-size:0.9rem;
      }
    }
  }
 }

`;
