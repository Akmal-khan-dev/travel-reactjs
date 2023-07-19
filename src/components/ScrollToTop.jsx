import React, {useState} from "react";
import { styled } from "styled-components";
import logo from "../assets/logo.png"

const ScrollToTop=()=>{
    const[scrollState, setScrollState]= useState(false);

    const ToTop =()=>{
        window.scrollTo({top:0})
    }

    window.addEventListener("scroll", ()=>{
        window.pageYoffset>200 ? setScrollState(true) : setScrollState(false)
    })
    return(
        <ScrollTop scrollState={scrollState} onClick={ToTop}>
            <img src={logo} alt="" />
        </ScrollTop>
    )
}

export default ScrollToTop;

const ScrollTop=styled.div`
display:${({scrollState})=>(scrollState ? "block" :"none")};
position:fixed;
bottom:1rem;
right:2rem;
z-index:10;
cursor:pointer;
img{
    height:1.5rem;

}
border-radius:2rem;
background-color:#1900ff39;
padding:1rem;
`;