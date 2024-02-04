import React, { useState } from "react";
import { dummyPosts } from "../data";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [posts, setPosts] = useState(dummyPosts);
  return (
    <section className="dashboard">
      {posts.length ? (
        <div className="container dashboardContainer">
          {posts.map((post) => {
            return (
              <article key={post.id} className="]dashboardPost">
                <div className="dashboardPostInfo">
                  <div className="dashboardPostThumbnail">
                    <img src={post.thumbnail} alt="" />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboardPostActions">
                  <Link to={`/posts/${post.id}`} className="btn sm">
                    View
                  </Link>
                  <Link to={`/posts/${post.id}/edit`} className="btn sm primary">
                    Edit
                  </Link>
                  <Link to={`/posts/${post.id}/delete`} className="btn sm danger">
                    Delete
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <h2 className="center">No posts yet!</h2>
      )}
    </section>
  );
};

export default Dashboard;
