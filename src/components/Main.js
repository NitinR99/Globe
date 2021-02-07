import React,  { useEffect, useRef } from "react";
import Globe from 'react-globe.gl';
const Main = () => {
  const globeEl = useRef();
  const MAP_CENTER = { lat: 42.3043, lng: -83.0660, altitude: 2 }; //home
  const gData = [{
       lat: 42.3043,
       lng: -83.0660,
       size:  3,
       color: "green"
     }];
  useEffect(() => {
    globeEl.current.pointOfView(MAP_CENTER, 0);

     // Auto-rotate
     globeEl.current.controls().autoRotate = true;
     globeEl.current.controls().autoRotateSpeed = 0.5;
   }, []);
  return (
    <Globe
    ref={globeEl}
    globeImageUrl="//raw.githubusercontent.com/NitinR99/NitinR99.github.io/master/images/earthgreen.jpg"
    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    backgroundColor="#001100"
    showAtmosphere={false}
    //  backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
    //  animateIn="true"
    //  pointsData={gData}
  />




  );
};
export default Main;
//unpkg.com/three-globe/example/img/night-sky.png
