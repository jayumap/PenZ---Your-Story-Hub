import React, { useState } from "react";
import PostItem from "./PostItem";
import PostAuthor from "./PostAuthor";

import Thumbnail1 from "../images/blog1.jpg";
import Thumbnail2 from "../images/blog2.jpg";
import Thumbnail3 from "../images/blog3.jpg";
import Thumbnail4 from "../images/blog4.jpg";

const dummyPosts = [
  {
    id: "1",
    thumbnail: Thumbnail1,
    category: "education",
    title: "This is the title of the very first post on this blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, earum unde perspiciatis blanditiis ut possimus?",
    authorID: 3,
  },
  {
    id: "2",
    thumbnail: Thumbnail2,
    category: "science",
    title: "This is the title of the very second post on this blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, earum unde perspiciatis blanditiis ut possimus?",
    authorID: 1,
  },
  {
    id: "3",
    thumbnail: Thumbnail3,
    category: "weather",
    title: "This is the title of the very third post on this blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, earum unde perspiciatis blanditiis ut possimus?",
    authorID: 13,
  },
  {
    id: "4",
    thumbnail: Thumbnail4,
    category: "farming",
    title: "This is the title of the very fourth post on this blog",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, earum unde perspiciatis blanditiis ut possimus?",
    authorID: 3,
  },
];

function Posts() {
  const [posts, setPosts] = useState(dummyPosts);
  return (
    <section className="posts">
      <div className="container postsContainer">
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
      </div>
    </section>
  );
}

export default Posts;
