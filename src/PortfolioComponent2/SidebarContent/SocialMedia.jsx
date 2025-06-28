import styled from "@emotion/styled";
import React from "react";

export default function SocialMedia(data) {
  const { icon, color, link } = data.data;

  const handleRedirect = () => {
    window.location.href = `${link}`;
  };
  return (
    <>
      <MediaContainerStyled onClick={handleRedirect} color={color}>
        {icon}
      </MediaContainerStyled>
    </>
  );
}

export const MediaContainerStyled = styled.div(({ color }) => ({
  width: "20%",
  margin: "auto",
  borderRadius: "66% 34% 41% 59% / 55% 38% 62% 45% ",
  //   borderRadius: "4px",
  //   backgroundColor: "#f4f6f5",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.6rem",
  cusrors: "pointer",
  color: color || "black",
  cursor: "pointer",

  transition:
    "background-color 0.5s ease-in-out, color 0.5s ease-in-out, transform 0.5s ease-in-out",
  "&:hover": {
    backgroundColor: color || "",
    color: "#fff",
    transform: "scale(1.07)",
  },
}));
