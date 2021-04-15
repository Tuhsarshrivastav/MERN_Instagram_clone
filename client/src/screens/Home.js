import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="card home-card">
        <h5>Tushar</h5>
        <div className="card-image">
          <img
            src="https://images.unsplash.com/photo-1569466896818-335b1bedfcce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="post"
          />
        </div>
        <div className="card-content">
          <i className="material-icons " style={{ color: "red" }}>
            favorite
          </i>
          <h4>Title</h4>
          <p>This is amazing post</p>
          <input type="text" placeholder="add a comment" />
        </div>
      </div>
    </div>
  );
};

export default Home;
