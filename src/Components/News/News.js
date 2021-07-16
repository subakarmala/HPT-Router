import React from "react";
import news from "../../images/news.png";
import news1 from "../../images/news1.png";
import "./News.css"
import { newsData } from "./JSONNEWS";
const News = () => {
  return (
    <div>
      <div className="whiteBox paddingLR0 p50">
        <div className="whiteBox__heading">News</div>
        <a href="/NewsPage" className="viewAll">
          View All
        </a>
        {newsData.map((val) => {
          return (
            <div className="newsInfo">
              <a href="#" className="newsList">
                <div
                  className="newsList__img"
                  // style={{ background: `url(${news})` }}
                >
                  <img src={val.logo} />
                </div>
                <h3>{val.title}</h3>
                <div className="dateTimeBox">
                  <div className="dateInfo">{val.date}</div>
                  <div className="timeInfo">{val.time}</div>
                </div>
                {/* <p className="desc">
                  Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                  fringilla sit amet purus a, lobortis…
                </p> */}
              </a>
              <a href="#" className="newsList">
                <div
                  className="newsList__img"
                  //style={{ background: `url(${news1})` }}
                >
                  <img src={val.logo1} />
                </div>
                <h3>{val.title}</h3>
                <div className="dateTimeBox">
                  <div className="dateInfo">{val.date}</div>
                  <div className="timeInfo">{val.time}</div>
                </div>
                {/* <p className="desc">
                  Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                  fringilla sit amet purus a, lobortis…
                </p> */}
              </a>
              <a href="#" className="newsList">
                <div
                  className="newsList__img"
                  // style={{ background: `url(${news})` }}
                >
                  <img src={val.logo} />
                </div>
                <h3>{val.title}</h3>
                <div className="dateTimeBox">
                  <div className="dateInfo">{val.date}</div>
                  <div className="timeInfo">{val.time}</div>
                </div>
                {/* <p className="desc">
                  Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                  fringilla sit amet purus a, lobortis…
                </p> */}
              </a>
              <a href="#" className="newsList">
                <div
                  className="newsList__img"
                  //style={{ background: `url(${news1})` }}
                >
                  <img src={val.logo1} />
                </div>
                <h3>{val.title}</h3>
                <div className="dateTimeBox">
                  <div className="dateInfo">{val.date}</div>
                  <div className="timeInfo">{val.time}</div>
                </div>
                {/* <p className="desc">
                  Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                  fringilla sit amet purus a, lobortis…
                </p> */}
              </a>
              <a href="#" className="newsList">
                <div
                  className="newsList__img"
                  // style={{ background: `url(${news})` }}
                >
                  <img src={val.logo} />
                </div>
                <h3>{val.title}</h3>
                <div className="dateTimeBox">
                  <div className="dateInfo">{val.date}</div>
                  <div className="timeInfo">{val.time}</div>
                </div>
                {/* <p className="desc">
                  Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                  fringilla sit amet purus a, lobortis…
                </p> */}
              </a>
              <a href="#" className="newsList">
                <div
                  className="newsList__img"
                  //style={{ background: `url(${news1})` }}
                >
                  <img src={val.logo1} />
                </div>
                <h3>{val.title}</h3>
                <div className="dateTimeBox">
                  <div className="dateInfo">{val.date}</div>
                  <div className="timeInfo">{val.time}</div>
                </div>
                {/* <p className="desc">
                  Praesent sagittis eu ante vel tincidunt. Integer nulla nibh,
                  fringilla sit amet purus a, lobortis…
                </p> */}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
