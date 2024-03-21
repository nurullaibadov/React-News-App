import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./header";
import "../App.css";
const Article = () => {
  const [getData, setGetData] = useState([]);
  const [searchNews, setSearchNews] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const handleChange = (e) => {
    setSearchNews(e.target.value);
  };
  useEffect(() => {
    const pullData = async () => {
      try {
        const response = await axios.request(
          "https://api.npoint.io/fb056cd41c1a323af5d4"
        );
        setGetData(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    pullData();
  }, []);
  useEffect(() => {
    const strainerData = getData.filter((news) =>
      news.title.toLowerCase().includes(searchNews.toLowerCase())
    );
    setFilteredData(strainerData);
  }, [searchNews, getData]);
  console.log(getData);
  return (
    <>
      <Header onFilterChange={handleChange} />
      <div className="grid grid-cols-4 p-28 mt-[-10%] gap-y-6 gap-x-4">
        {filteredData.map((element, index) => (
          <div key={index} className="container">
            <a href={element.url}>
              <img
                className="h-[300px] "
                src={element.urlToImage}
                alt="data problem, don't worry we will hell"
              />
              <div className="overlay">
                <h1 className="text-xl text-yellow-100">{element.title}</h1>
                <p>{element.category}</p>
                <p>{element.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Article;
