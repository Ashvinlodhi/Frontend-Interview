import { useBlogs } from "@/hooks/useBlogs";
import { BlogCard } from "@/components/BlogCard";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { ErrorMessage } from "@/components/ErrorMessage";
import { Link } from "react-router-dom";

export function BlogList() {
  const { data: blogs, isLoading, error } = useBlogs();

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, i) => <LoadingSkeleton key={i} />)}
      </div>
    );
  }

  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Blogs</h2>
        <Link to="/create" className="bg-blue-500 text-white px-4 py-2 rounded">Create New</Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs?.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>
    </div>
  );
}