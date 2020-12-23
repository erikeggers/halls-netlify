import React from "react"
import styled from "styled-components"

const ButtonContainer = styled.div`
  background-color: ${props => props.color};
  border-radius: ${props => (props.fontLarge ? "28px" : "20px")};
  box-shadow: 0 4px 8px 0 rgba(35, 35, 35, 0.14);
  padding: ${props => props.padding};
  font-family: Montserrat;
  font-size: ${props => (props.fontLarge ? "16px" : "14px")};
  font-weight: bold;
  letter-spacing: 0;
  color: ${props => (props.secondary ? "#000" : "#fff")};
  border: ${props => (props.secondary ? "1px solid #8CBD45" : null)};
`

const Button = ({ text, color, padding, secondary, fontLarge }) => (
  <ButtonContainer
    color={color}
    padding={padding}
    secondary={secondary}
    fontLarge={fontLarge}
  >
    {text}
  </ButtonContainer>
)

export default Button
