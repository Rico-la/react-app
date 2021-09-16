import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components";

const Badge = styled.span`
  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;
  /* Colors */
  background-color: ${({ vote }) => 
  vote > 1
  ? "rgba(0, 0, 0, .3)"
  : "#F0F"};
  /* Rounded border */
  border-radius: 9999px;
   height: 20px;
   width: 20px;
`;

function Skill({ title, votes }) {
  return (
    <li>
      {title}
      <Badge vote={votes}>{votes}</Badge>
    </li>
  );
}

Skill.propTypes = {
  title: Proptypes.string.isRequired,
  votes: Proptypes.number.isRequired,
};

export default Skill;
