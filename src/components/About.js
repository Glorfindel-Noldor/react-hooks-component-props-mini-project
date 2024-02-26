import React from "react";
const IfNoPic = 'https://via.placeholder.com/215';

function About({about, image= IfNoPic}) {

  return (
    <aside>
        <img src={image} alt="blog logo"/>
        <p>{about}</p>
    </aside>
  )
}
export default About;
