import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getAllBlogs, getBlogById, createBlog } from "../lib/api";   
import type { Blog } from "../types";                                      


export const useBlogs = () => {
  return useQuery<Blog[], Error>({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  });
};


export const useBlog = (id: number) => {
  return useQuery<Blog, Error>({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
    enabled: !!id,  
  });
};

export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
    onError: (error) => {
      console.error("Create blog failed:", error);
      
    },
  });
};