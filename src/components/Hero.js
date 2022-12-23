import React from "react";
import {
  HeroButton,
  HeroContainer,
  HeroDescription,
  HeroTitle,
} from "./Hero.styles";

function Hero({ movie }) {
  // console.log(movie);
  return (
    <HeroContainer background={movie?.backdrop_path}>
      <HeroTitle>{movie?.title}</HeroTitle>
      <HeroDescription>{movie?.overview}</HeroDescription>
      <HeroButton>PLay</HeroButton>
      <HeroButton>My List</HeroButton>
    </HeroContainer>
  );
}
export default Hero;