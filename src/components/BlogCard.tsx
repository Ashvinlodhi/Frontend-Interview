import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../components/ui/badge";
import { Blog } from "@/types";
import { Link } from "react-router-dom";

interface BlogCardProps {
  blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link to={`/blog/${blog.id}`}>
      <Card className="h-full hover:shadow-md transition-shadow">
        {blog.coverImage && <img src={blog.coverImage} alt={blog.title} className="h-48 w-full object-cover" />}
        <CardHeader>
          <div className="flex flex-wrap gap-2">
            {blog.category.map((cat) => <Badge key={cat}>{cat}</Badge>)}
          </div>
          <CardTitle>{blog.title}</CardTitle>
          <CardDescription>{blog.date}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3">{blog.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}