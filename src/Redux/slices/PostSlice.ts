import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import PostType from "../../types/PostType";
import axios from "axios";

export interface PostSliceState {
  postIds: number[];
  posts: PostType[];
  loading: boolean;
  failed: boolean;
}

const initialState: PostSliceState = {
  posts: [],
  loading: false,
  failed: false,
  postIds: [],
};

export const loadtopPosts = createAsyncThunk("post/load", async () => {
  const posts = axios.get(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  return posts;
});

export const loadStory = createAsyncThunk(
  "post/loadStory",
  async (id: number) => {
    const story = axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${id.toString()}.json?print=pretty`
    );
    return story;
  }
);

export const PostSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    emptyPosts: (state) => {
      state.posts = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(loadtopPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadtopPosts.rejected, (state) => {
      state.loading = false;
      state.failed = true;
    });
    builder.addCase(loadtopPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.failed = false;
      state.postIds = action.payload.data as unknown as number[];
    });
    builder.addCase(loadStory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadStory.rejected, (state) => {
      state.loading = false;
      state.failed = true;
    });
    builder.addCase(loadStory.fulfilled, (state, action) => {
      state.loading = false;
      state.failed = false;
      const api_data = action.payload.data;
      const story: PostType = {
        author: api_data.by,
        points: api_data.score,
        time_posted: api_data.time,
        title: api_data.title,
        url: api_data.url,
        descendants: api_data.descendants
      };
      state.posts.push(story);
      state.posts.sort((p1,p2) => p2.points - p1.points)
    });
  },
});

// Action creators are generated for each case reducer function
export const { emptyPosts } = PostSlice.actions;

export default PostSlice.reducer;
