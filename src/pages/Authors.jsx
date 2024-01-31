import React from "react";
import { useState } from "react";
import Avatar1 from "../images/avatar1.jpg";
import Avatar2 from "../images/avatar2.jpg";
import Avatar3 from "../images/avatar3.jpg";
import Avatar4 from "../images/avatar4.jpg";
import Avatar5 from "../images/avatar5.jpg";
import { Link } from "react-router-dom";
import Home from "./Home";


const authorsData = [
  { id: 1, avatar: Avatar1, name: "Raj Patil", posts: 3 },
  { id: 2, avatar: Avatar2, name: "Neel Mohite", posts: 5 },
  { id: 3, avatar: Avatar3, name: "Arun Pawar", posts: 0 },
  { id: 4, avatar: Avatar4, name: "Kunal Patil", posts: 2 },
  { id: 5, avatar: Avatar5, name: "Atharv Mhatre", posts: 1 },
];

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  return (
    <section className="authors">
      {authors.length > 0 ? (
        <div className="container authorsContainer">
          {authors.map(({ id, avatar, name, posts }) => {
            return (
              <Link key={id} to={`/posts/users/${id}`} className="author">
                <div className="authorAvatar">
                  <img src={avatar} alt={`Image of ${name}`} />
                </div>
                <div className="authorInfo">
                  <h4>
                    {name}
                  </h4>
                  <p>
                    {posts}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <h2 className="center">No authors found!</h2>
      )}
    </section>
  );
};

export default Authors;
