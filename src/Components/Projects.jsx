import React, { useEffect } from "react";
import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Text } from "@chakra-ui/react";
import styled from "styled-components";
import { Badge } from "antd";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  let projectsarr = [
    {
      anim: "flip-right",
      image:
        "https://user-images.githubusercontent.com/106812942/278866276-08e3e6cb-0648-4adb-a9fa-891a98e27d33.png",
      name: "Organic Store",
      dis: "An Organic Products website, Where person can buy all the Organics Food products..--",
      pro: "Individuel - Project",
      tstack: "React,HTML,CSS,JS,Axios,Tailwind CSS",
      github: "https://github.com/mdfaizan973/ZC_ORG",
      link: "https://organicstore.vercel.app/",
    },
    {
      anim: "flip-left",
      image:
        "https://github.com/mdfaizan973/EduHub-idea_clan/assets/106812942/ccee7c0f-1acd-4791-8208-b09b973f5cb1",
      name: "Learning Management System",
      dis: "Learning Management System (LMS): A platform for students to learn programming.--",
      pro: "Individuel - Project",
      tstack:
        "React,HTML,CSS,JS,Ant Design(CSS), Node.js, Express.js, Mongo DB",
      github: "https://github.com/mdfaizan973/EduHub-idea_clan",
      link: "https://faizanlms.vercel.app/",
    },
    {
      anim: "zoom-in",
      image:
        "https://user-images.githubusercontent.com/106812942/262247221-6b79b2f0-da86-4fcb-b4f7-8abe6439712e.png",
      name: "FashionZone",
      dis: "A FashionZone is a website,Where person can buy the clothes as per the choice with famous brands.--",
      pro: "Individuel - Project",
      tstack: "React,Axios,React-Router-Dom",
      github: "https://github.com/mdfaizan973/FashioZone/",
      link: "https://myfashionzonefz.netlify.app/",
    },
    {
      anim: "flip-right",
      image:
        "https://user-images.githubusercontent.com/106812942/255404404-dc6669bc-a638-4d99-95ed-5c4cf2b40cb9.png",
      name: "RentEZ",
      dis: "Welcome to RentEZ: Simplifying home rentals. Explore apartments and houses for rent. Your perfect living space, just a RentEZ away!--",
      pro: "Individuel - Project",
      tstack: "HTML,CSS,Angular,Python, Flask,Bootstrap",
      github: "https://github.com/mdfaizan973/NEBULA",
      link: "https://yes-5otwzwn11-mdfaizan973.vercel.app/",
    },
    {
      anim: "flip-right",
      image:
        "https://user-images.githubusercontent.com/106812942/260703096-29803c53-ca47-4921-84de-97235c984ff6.png",
      name: " Fc Food",
      dis: "An experience Fc Food: Your gateway to gourmet pizzas, juicy burgers, exotic biryanis, and more. Delight in every bite!.--",
      pro: "Individuel - Project",
      tstack: "HTML,CSS,JavaScript,Bootstrap",
      github: "https://github.com/mdfaizan973/Food_Website",
      link: "https://food-fz.netlify.app/",
    },
    // {
    //   anim: "flip-right",
    //   image:
    //     "https://user-images.githubusercontent.com/106812942/215109393-cfcfb68a-7de0-4554-9380-7d3b65e4f9b6.png",
    //   name: "Skin-Care",
    //   dis: "An E-Commerce website,Where user can buy skin related products.--",
    //   pro: "Individuel - Project",
    //   tstack: "HTML,CSS,JS",
    //   github: "https://github.com/mdfaizan973/SkinCare_Clone",
    //   link: "https://my-skincares.netlify.app/",
    // },
    // {
    //   anim: "flip-right",
    //   image:
    //     "https://user-images.githubusercontent.com/106812942/214018158-224d47c0-2f3e-4a72-bc00-53ea918e6fdf.png",
    //   name: "Fz-Shoes",
    //   dis: "An E-Commerce website,Where user can buy all the products related to shoes.--",
    //   pro: "Individuel - Project",
    //   tstack: "React,Axios,Json-Server,React-Router-Dom",
    //   github:
    //     "https://github.com/mdfaizan973/thoughtless-scarecrow-7735/tree/main/T-S-7735/fz_shoes",
    //   link: "https://fzshoes.netlify.app/",
    // },
    {
      anim: "zoom-out",
      image:
        "https://user-images.githubusercontent.com/106812942/221214462-36c35e3a-f00e-4c5f-a874-aadc6a6503d2.png",
      name: "Sweets-Flowers",
      dis: "An E-commerce website, Where user can buy flowers, chocolates and beautiful gifts for burthdays or party.--",
      pro: "Individuel - Project",
      tstack: "React,Axios,Json-Server,React-Router-Dom",
      github: "https://github.com/mdfaizan973/interesting-vase-9902",
      link: "https://flowerfz.netlify.app/",
    },
    // {
    //   anim: "zoom-out",
    //   image:
    //     "https://user-images.githubusercontent.com/106812942/218271324-c3071ba5-560d-4029-bcfe-9263fb982e5d.png",
    //   name: "Furniture-Stock",
    //   dis: " An E-commerce website, Where user can buy home or furniture related products.--",
    //   pro: "Group - Project",
    //   tstack: "HTML,CSS,JS,Json,Server",
    //   github: "https://github.com/deepakChourasiya-aj/amiable-place-6800",
    //   link: "https://sensational-druid-3f736c.netlify.app/",
    // },
    {
      anim: "flip-left",
      image:
        "https://user-images.githubusercontent.com/106812942/229482067-fc289bf3-4d15-478c-81ea-aebd54b5950e.jpg",
      name: "SmileKart",
      dis: "An E-Commerce website,Where user can buy all the A to Z products.--",
      pro: "Group - Project",
      tstack: "React,Axios,Json-Server,React-Router-Dom,Redux",
      github: "https://github.com/narender24681/innate-partner-2755",
      link: "https://incandescent-cassata-f56374.netlify.app/",
    },
    {
      anim: "flip-left",
      image:
        "https://github.com/mdfaizan973/mdfaizan973/assets/106812942/4eac3e09-97c4-4145-9cff-ce4c4ea5c93f",
      name: "Clotho",
      dis: "A Clothes website,Where user can buy dresses for mens, womens and kids.--",
      pro: "Group - Project",
      tstack: "React,Axios,React-Router-Dom,Redux,Node.js,MongooDB",
      github: "https://github.com/hrithikvishwakarma001/incredible-birth-7157",
      link: "https://clotho.vercel.app/",
    },
    {
      anim: "zoom-in",
      image:
        "https://github.com/mdfaizan973/mdfaizan973/assets/106812942/a3f0797e-71b4-4d55-a9f0-a48d058e1ddc",
      name: "FitnessFuel",
      dis: "A Fitness website,Where person can know about body health and fix his own daily routine.--",
      pro: "Group - Project",
      tstack: "React,Axios,React-Router-Dom,Redux,Node.js,MongooDB,Telwind CSS",
      github: "https://github.com/VivekTomar03/FitnessFuel",
      link: "https://frontend-iota-blond.vercel.app/",
    },
  ];

  return (
    <DIV className="top" id="projects">
      <h1
        className="project-title"
        style={{ fontSize: "3rem", marginTop: "5px" }}
      >
        PROJECTS
      </h1>

      <div>
        {projectsarr.map((ele, i) => (
          <div className="animation project-card" data-aos="zoom-in-up">
            <div className="pro-img">
              <img src={ele.image} data-aos="fade-up-right" alt="pro_img" />
            </div>{" "}
            <div className="pro-dis">
              <h1 className="title-pro project-title">{ele.name}</h1>
              <h1 className="project-description">
                {ele.dis}
                <span style={{ fontSize: "1rem", color: "teal" }}>
                  {ele.pro}
                </span>
              </h1>

              <Text
                style={{ fontSize: "1rem", fontWeight: "700" }}
                className="project-tech-stack"
              >
                {ele.tstack}
              </Text>
              <div className="dep-btn">
                <Button data-aos="fade-down-right">
                  <a
                    className="project-github-link"
                    href={ele.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </Button>
                <Button data-aos="fade-down-left">
                  <a
                    className="project-deployed-link"
                    href={ele.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <hr />
    </DIV>
  );
}

const DIV = styled.div`
  margin-top: 50px;

  .animation {
    width: 50%;
    height: 100%;
    margin: 20px auto;
    //  box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15),
      0 4px 12px rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #e8e8e8;
  }

  .proj-title {
    font-size: 3rem;
    margin: 5px 0;
  }

  .title-pro {
    font-size: 1.6rem;
  }

  .animation div {
    width: 50%;
  }

  .pro-dis {
    text-align: center;
    justify-content: center;
    line-height: 1.6;
    font-size: 1.1rem;
  }

  .dep-btn {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 10px auto;
  }

  img {
    border-radius: 10px;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; */
  }

  img:hover {
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  }

  @media screen and (max-width: 768px) {
    .animation {
      width: 95%;
      margin: 15px auto;
      flex-direction: column;
      padding: 0 !important;
    }

    .proj-title {
      font-size: 1.5rem;
    }

    .title-pro {
      font-size: 1.2rem;
    }

    .pro-img {
      width: 95% !important;
    }

    .dep-btn {
      width: 100%;
      justify-content: center;
    }

    .dep-btn button {
      margin: 5px;
      font-size: 0.8rem;
    }

    .pro-img img {
      width: 100%;
    }

    .pro-dis {
      line-height: 1.2;
      font-size: 0.8rem;
      width: 90% !important;
    }
  }

  @media screen and (max-width: 1200px) {
    .animation {
      width: 90%;
    }

    .proj-title {
      font-size: 1.9rem;
    }

    .title-pro {
      font-size: 1.4rem;
    }

    .pro-dis {
      font-size: 1rem;
    }
  }

  /* .animation {
    width: 50%;
    height: 100%;
    margin: 20px auto;
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;

    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
  }

  .proj-title {
    font-size: 3rem;
    margin: 5px 0;
  }
  .title-pro {
    font-size: 1.6rem;
  }
  .animation div {
    width: 50%;
  }
  .pro-dis {
    text-align: center;
    justify-content: center;
    line-height: 1.6;
    font-size: 1.1rem;
  }
  .dep-btn {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 10px auto;
  }
  img {
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  img:hover {
    box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  }
  @media screen and (min-width: 100px) and (max-width: 450px) {
    width: 90%;
    margin: auto;
    .animation {
      display: flex;
      flex-direction: column;
      padding: 0 !important;
      width: 100%;
    }
   
    .title-pro {
      font-size: 1rem;
    }
    .pro-img {
      width: 95% !important;
    }
    .pro-img img {
      width: 100%;
    }
    .animation:hover {
      width: 100%;
      border-radius: 20px;
    }
    .pro-dis {
      line-height: 1.2;
      font-size: 0.7rem;
    }
  } */
`;
// {
//   anim: "",
//   image: "",
//   name: "",
//   dis: "",
//   pro: "",
//   tstack: "",
//   github: "",
//   link: "",
// },
