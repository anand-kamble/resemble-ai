import React, { useEffect } from "react";
import { Header } from "../../components";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { loadStory, loadtopPosts } from "../../Redux/slices/PostSlice";
import { AppDispatch, RootState } from "../../Redux/store";
import Post from "../../components/Post/Post";
import PostType from "../../types/PostType";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts: PostType[] = useSelector<RootState>(
    (state) => state.posts.posts
  ) as PostType[];
  const postIds: number[] = useSelector<RootState>(
    (state) => state.posts.postIds
  ) as number[];

  useEffect(() => {
    dispatch(loadtopPosts());
  }, [dispatch]);

  useEffect(() => {
    console.log("Load called")
    postIds.forEach((id, i) => {
      if (i < 10) {
        dispatch(loadStory(id));
      }
    });
  }, [postIds, dispatch]);

  return (
    <div className="HomePage">
      <Header />
      {posts.map((p, i) => (
        <Post {...p} rank={i + 1} />
      ))}
    </div>
  );
};

export default Home;
