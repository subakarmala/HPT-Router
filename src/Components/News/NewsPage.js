import React from 'react'
import news from "../../images/news.png";
import news1 from "../../images/news1.png";
import HeaderNext from '../Header/HeaderNext';
import {newsData} from "./JSONNEWS";

const NewsPage = () => {
    return (
      <div>
        <HeaderNext />
        <a href="/" className="btn btn-primary" style={{ marginLeft: "100px" }}>
          Back
        </a>
        <div className="container">
          <div className="row">
            <div className="whiteBox paddingLR0 p50">
              <div
                className="whiteBox__heading"
                style={{ textAlign: "center" }}
              >
                News
              </div>
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
                    </a>
                    <a href="#" className="newsList">
                      <div
                        className="newsList__img"
                        // style={{ background: `url(${news1})` }}
                      >
                        <img src={val.logo1} />
                      </div>
                      <h3>{val.title}</h3>
                      <div className="dateTimeBox">
                        <div className="dateInfo">{val.date}</div>
                        <div className="timeInfo">{val.date}</div>
                      </div>
                      <p className="desc"></p>
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
                        <div className="timeInfo">{val.date}</div>
                      </div>
                      {/* <p className="desc">
                        Praesent sagittis eu ante vel tincidunt. Integer nulla
                        nibh, fringilla sit amet purus a, lobortis…
                      </p> */}
                    </a>
                    <a href="#" className="newsList">
                      <div className="newsList__img">
                        {" "}
                        <img src={val.logo1} />
                      </div>

                      <h3>{val.title}</h3>
                      <div className="dateTimeBox">
                        <div className="dateInfo">{val.date}</div>
                        <div className="timeInfo">{val.date}</div>
                      </div>
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
                        <div className="timeInfo">{val.date}</div>
                      </div>
                    </a>
                    <a href="#" className="newsList">
                      <div
                        className="newsList__img"
                        // style={{ background: `url(${news1})` }}
                      >
                        <img src={val.logo1} />
                      </div>
                      <h3>{val.title}</h3>
                      <div className="dateTimeBox">
                        <div className="dateInfo">{val.date}</div>
                        <div className="timeInfo">{val.date}</div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
}

export default NewsPage
