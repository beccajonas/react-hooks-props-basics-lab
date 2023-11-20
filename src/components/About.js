import React from "react";

function About({bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {!bio ? null : <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links
      <a href={links.github}>{links.github}</a>
      <a href={links.linkedin}>{links.linkedin}</a>
      </h3>
    </div>
  );
}

export default About;
