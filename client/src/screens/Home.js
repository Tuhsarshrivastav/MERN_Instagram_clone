import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/allpost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.posts);
      });
  }, []);
  return (
    <div className="home">
      {data.map((item) => {
        return (
          <div className="card home-card" key={item.id}>
            <h5 style={{ padding: "10px" }}>{item.postedBy.name}</h5>
            <div className="card-image">
              <img src={item.photo} alt="post" />
            </div>
            <div className="card-content">
              <i className="material-icons " style={{ color: "red" }}>
                favorite
              </i>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
              <input type="text" placeholder="add a comment" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
