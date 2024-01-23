import React, { useState } from "react";
import PostItem from "./PostItem";
import PostAuthor from "./PostAuthor";

import Thumbnail1 from "../images/blog20.jpg";
import Thumbnail2 from "../images/blog100.jpg";
import Thumbnail3 from "../images/blog27.jpg";
import Thumbnail4 from "../images/blog95.jpg";

import { dummyPosts } from "../data";

function Posts() {
  const [posts, setPosts] = useState(dummyPosts);
  return (
    <section className="posts">
      {posts.length > 0 ? <div className="container postsContainer">
        {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
          <PostItem
            key={id}
            postID={id}
            thumbnail={thumbnail}
            category={category}
            title={title}
            description={desc}
            authorID={authorID}
          />
        ))}
      </div> : <h2 className="center">No posts found</h2>}
    </section>
  );
}

export default Posts;
