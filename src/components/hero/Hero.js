import React from "react";
// import {useNavigate} from "react-router"
import { useNavigate } from "react-router-dom";
import "./Hero.scss";

function Hero() {
	const navigate=useNavigate();
	return (
		<div className="hero">
			<div className="hero-content center">
				<div className="heading">Exclusive Prints And Art Works</div>
				<div className="sub-heading">
					Exclusive Artwork for the Exclusive YOU!
				</div>
				<div className="cta primary-btn " onClick={()=>{
					navigate('/category')
				}}>Explore More</div>
			</div>
		</div>
	);
}

export default Hero;
