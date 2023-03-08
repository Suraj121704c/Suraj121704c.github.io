import React from "react";

const Githubs = () => {
  return (
    <div id="githubs" className="max-width">
      <div className="main-text">
        <h2>
          <span>GitHub </span>Statistics
        </h2>
      </div>
      <div id="stat">
        <div>
          <img
            className="ht1"
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=Suraj121704c&count_private=true"
          />
        </div>
        <div>
          <img
            className="ht1"
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Suraj121704c&theme=outrun"
          />
        </div>
        <div>
          <img
            className="ht1"
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Suraj121704c&theme=radical&hide_border=true&border_radius=6.5&date_format=m%20j%5b%2c%20y%5d"
          />
        </div>
      </div>
      <div style={{marginTop : "10px"}}>
        <img src="https://visitcount.itsvg.in/api?id=SurajSingh&label=Profile%20Views&pretty=false" alt="count" />
        <img src="https://raw.githubusercontent.com/Trilokia/Trilokia/379277808c61ef204768a61bbc5d25bc7798ccf1/bottom_header.svg" />
      </div>
    </div>
  );
};

export default Githubs;
