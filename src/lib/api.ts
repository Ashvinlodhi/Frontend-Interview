import type { Blog } from "../types";

const API_URL = "http://localhost:3000";

export const getAllBlogs = async (): Promise<Blog[]> => {
  const res = await fetch(`${API_URL}/blogs`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
};

export const getBlogById = async (id: number): Promise<Blog> => {
  const res = await fetch(`${API_URL}/blogs/${id}`);
  if (!res.ok) throw new Error("Blog not found");
  return res.json();
};

export const createBlog = async (blog: Omit<Blog, "id">): Promise<Blog> => {
  const res = await fetch(`${API_URL}/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  });
  if (!res.ok) throw new Error("Failed to create blog");
  return res.json();
};