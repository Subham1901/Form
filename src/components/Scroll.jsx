import React from "react";

const Scroll = ({ posts }) => {
  return (
    <div className="contnet-container">
      {posts &&
        posts.map((data) => (
          <div className="content" key={data?.id}>
            <li>{data?.id}</li>
            <li>{data?.title}</li>
          </div>
        ))}
    </div>
  );
};

export default Scroll;
