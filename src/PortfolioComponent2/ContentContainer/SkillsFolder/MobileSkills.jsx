import React from "react";
import styled from "@emotion/styled";
import SkillsCard from "./SkillsCard";

export default function MobileSkills() {
  const mobileSkillsArray = [
    {
      image: "https://reactnative.dev/img/header_logo.svg",
      text: "React Native",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/545/545682.png",
      text: "Linking",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
      text: "WebSocket",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/255086458-7f6be61d-ffe1-4096-af30-2a39e7b3ed6f.png",
      text: "TypeScript",
    },
    {
      image: "https://jestjs.io/img/opengraph.png",
      text: "Jest Testing",
    },
    {
      image: "https://redux.js.org/img/redux.svg",
      text: "Redux",
    },
    {
      image:
        "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
      text: "Android Studio",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/1827/1827504.png",
      text: "Notification",
    },
    {
      image:
        "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png",
      text: "Firebase",
    },
    {
      image:
        "https://developer.apple.com/assets/elements/icons/xcode/xcode-128x128_2x.png",
      text: "Xcode",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      text: "Rest Apis",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaTyuFXQDDOUPdafq8kkiBQ1Ai-ovU_avXecDIkszkPTeOxZ5R8H8g99xl6vRfQH-w4BA&usqp=CAU",
      text: "Axios",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
      text: "Responsive UI",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/255094909-ccb4d46c-a531-42e1-8d6a-300641127a91.png",
      text: "HTML",
    },
    {
      image:
        "https://user-images.githubusercontent.com/106812942/255088314-35bd02cd-4771-4156-9409-5f5a4c74155a.png",
      text: "CSS",
    },
    {
      image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      text: "GIT Control",
    },
    {
      image:
        "https://play-lh.googleusercontent.com/2PS6w7uBztfuMys5fgodNkTwTOE6bLVB2cJYbu5GHlARAK36FzO5bUfMDP9cEJk__cE",
      text: "Stripe",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRENijCCe0u8MXMbZ94rZmuSKfN67dgQAdsdg&s",
      text: "Superwall",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3064/3064155.png",
      text: "App Security",
    },
  ];
  return (
    <>
      <div style={{ textAlign: "start", fontSize: "1rem" }}>
        <p>Mobile Technologies I am familiar with:</p>
      </div>
      <br />
      <MobileSkillsStyled>
        {mobileSkillsArray.map((ele, i) => (
          <SkillsCard imageLink={ele.image} text={ele.text} key={i} />
        ))}
      </MobileSkillsStyled>
    </>
  );
}

const MobileSkillsStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
