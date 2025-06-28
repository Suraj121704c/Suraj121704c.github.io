// App.js
import React from "react";
import styled from "styled-components";

const BookCard = styled.div`
  display: flex;
  max-width: 800px;
  margin: 20px auto;
  background: transparent;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  perspective: 1000px;
  @media (max-width: 767px) {
    flex-direction: column;
    transform: none;
  }
`;

const Page = styled.div`
  flex: 1;
  padding: 20px;
  background: #f8f8f8;
  box-shadow: ${(props) =>
    props.left
      ? "5px 5px 15px rgba(0, 0, 0, 0.1)"
      : "-5px 5px 15px rgba(0, 0, 0, 0.1)"};
  transform: rotateY(${(props) => (props.left ? "-10deg" : "10deg")});
  transform-origin: ${(props) => (props.left ? "left" : "right")};
  @media (max-width: 767px) {
    transform: none;
    box-shadow: none;
  }
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f8f8f8;
  padding: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

const Description = styled.p`
  margin: 10px 0;
  font-size: 16px;
  color: #555;
`;

const TechStack = styled.p`
  margin: 10px 0;
  font-size: 14px;
  color: #888;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 14px;
  color: #fff;
  background: ${(props) => (props.primary ? "#007BFF" : "#28A745")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => (props.primary ? "#0056b3" : "#218838")};
  }
`;

const ResponsiveBookCard = () => {
  return (
    <BookCard>
      <Page left>
        <ImageContainer>
          <img
            src="https://user-images.githubusercontent.com/106812942/278866276-08e3e6cb-0648-4adb-a9fa-891a98e27d33.png"
            alt="Organic Store"
          />
        </ImageContainer>
      </Page>
      <Page>
        <ContentContainer>
          <Title>Organic Store</Title>
          <Description>
            An Organic Products website, Where person can buy all the Organics
            Food products.
          </Description>
          <TechStack>React, HTML, CSS, JS, Axios, Tailwind CSS</TechStack>
          <ButtonsContainer>
            <Button primary>Button 1</Button>
            <Button>Button 2</Button>
          </ButtonsContainer>
        </ContentContainer>
      </Page>
    </BookCard>
  );
};

export default ResponsiveBookCard;
