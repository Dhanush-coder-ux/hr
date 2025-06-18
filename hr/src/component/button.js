import React from 'react';
import styled from 'styled-components';

const Button = ({ children, as: Component = "button", ...props }) => {
  return (
    <StyledWrapper>
      <Component className="button" {...props}>
        {children}
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
        </svg>
      </Component>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center; /* Center the button */
  align-items: center;
  width: 100%;

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0.75rem 1.5rem;
    background-color: rgb(0 107 179);
    color: white;
    font-weight: bold;
    font-size: 16px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 9999px;
    outline: none;
    cursor: pointer;
    text-decoration: none; /* Ensures links look like buttons */
    transition: all 0.3s ease-in-out;
    width: fit-content; /* Prevents stretching */
    max-width: 300px;
  }

  .icon {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease-in-out;
  }

  .button:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.6);
  }

  .button:hover .icon {
    transform: translateX(4px);
  }

  .button::before {
    content: "";
    position: absolute;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    opacity: 0.6;
  }

  @keyframes shine {
    0% { left: -100px; }
    60% { left: 100%; }
    100% { left: 100%; }
  }
`;

export default Button;
