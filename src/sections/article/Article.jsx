import React from "react";
import { data } from "./data";
import "./article.css";

const Article = () => {
  return (
    <section className="article">
      <div className="articles wrapper">
        {data?.map((data) => (
          <div className="sub-articles">
            <div className="image">
              <img src={data.image} alt="" />
            </div>
            <div className="content">
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Article;
