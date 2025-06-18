import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  width: 500px;
  border-radius: 10px;
  text-align: center;
`;

const CloseButton = styled.button`
  background: red;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Modal = ({ onClose }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Are You Looking For Talented Candidates?</h2>
        <p>If you're looking for a job <a href="/apply">Apply Here</a>.</p>
        <form>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <textarea placeholder="Purpose and Requirements"></textarea>
          <button type="submit">Get a call back</button>
        </form>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
