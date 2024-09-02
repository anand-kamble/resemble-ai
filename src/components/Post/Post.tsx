import React from "react";
import PostType from "../../types/PostType";
import { timeDifference } from "../../utils";
import "./Post.css";

const Post = ({
  title,
  url,
  author,
  points,
  rank,
  time_posted,
  descendants,
}: PostType) => {
  //   const Regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/;

  const abb_url = url?.split("/")[2];

  return (
    <div className="Post">
      <div>{rank}. </div>
      <div className="votearrow" title="upvote"></div>
      <div>
        <span className="title"> {title}</span>{" "}
        <span>
          {" "}
          {abb_url ? (
            <a className="abb_url" href={url}>
              ({abb_url})
            </a>
          ) : null}
        </span>
        <br />
        <span className="subline">
          {points} {points > 1 ? "points" : "point"} by {author}{" "}
          {timeDifference(+Date.now(), time_posted * 1000)}{" "}
          {descendants !== undefined ? "|" : null} {descendants}{" "}
          {descendants !== undefined && descendants > 1
            ? "comments"
            : descendants !== undefined
            ? "comment"
            : null}
        </span>
      </div>
    </div>
  );
};

export default Post;
