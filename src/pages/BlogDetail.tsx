import { useParams } from "react-router-dom";
import { useBlog } from "@/hooks/useBlogs";
import { Badge } from "@/components/ui/badge";
import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { ErrorMessage } from "@/components/ErrorMessage";

export function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const blogId = Number(id);
  const { data: blog, isLoading, error } = useBlog(blogId);

  if (isLoading) return <LoadingSkeleton />;
  if (error || !blog) return <ErrorMessage message="Blog not found" />;

  return (
    <div className="max-w-3xl mx-auto">
      {blog.coverImage && <img src={blog.coverImage} alt={blog.title} className="w-full h-64 object-cover mb-4" />}
      <div className="flex gap-2 mb-4">
        {blog.category.map((cat) => <Badge key={cat}>{cat}</Badge>)}
      </div>
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 mb-4">{blog.date}</p>
      <p className="mb-4">{blog.description}</p>
      <div className="whitespace-pre-line">{blog.content}</div>
    </div>
  );
}
export default BlogDetail;