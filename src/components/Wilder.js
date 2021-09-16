import React from "react";
import blank_profile from "../blank-profile-picture-female.png";
import Skill from "./Skill";
import Proptypes from "prop-types";

function Wilder({ name, skills }) {
  return (
    <article className="card">
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>{name}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill, index) => (
          <Skill key={index} title={skill.title} votes={skill.votes} />
        ))}
      </ul>
    </article>
  );
}

Wilder.propTypes = {
  name: Proptypes.string.isRequired,
  skills: Proptypes.array.isRequired,
};

export default Wilder;
