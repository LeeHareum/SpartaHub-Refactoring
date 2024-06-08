import { createSlice } from "@reduxjs/toolkit";
import supabase from "../../supabaseClient";

const initialState = {
  posts: []
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.posts = action.payload;
    },
    updatePost(state, action) {
      const { id, title, content, url, created_at, updated_at, user_id } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.url = url;
        existingPost.content = content;
        existingPost.created_at = created_at;
        existingPost.updated_at = updated_at;
        existingPost.user_id = user_id;
      }
    },
    deletePost(state, action) {
      const { id } = action.payload;
      state.posts = state.posts.filter((post) => post.id !== id);
    }
  }
});

export const { setPosts, updatePost, deletePost } = postsSlice.actions;
export const fetchPosts = () => async (dispatch) => {
  const { data, error } = await supabase.from("board").select();
  if (error) {
    console.error("Error fetching posts:", error);
  } else {
    dispatch(setPosts(data));
  }
};
export default postsSlice.reducer;
