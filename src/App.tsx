import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "./lib/api";
import BlogDetail from "./pages/BlogDetail";
import CreateBlog from "./pages/CreateBlog";

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl text-gray-600">Loading blogs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl text-red-600">Error loading blogs: {error.message}</p>
      </div>
    );
  }

  return (
    
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">CA Monk Blog</h1>
              <p className="text-gray-500 text-sm">
                Stay updated with latest trends in finance, accounting, and career growth
              </p>
            </div>
            <Link
              to="/create"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Create New Blog
            </Link>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
              {data?.length === 0 ? (
                <p className="text-center text-gray-500">No blogs found</p>
              ) : (
                data?.map((blog) => (
                  <Link
                    key={blog.id}
                    to={`/blog/${blog.id}`}
                    className="block bg-white rounded-xl p-5 shadow hover:shadow-lg transition"
                  >
                    <p className="text-xs text-blue-600 font-semibold mb-2 uppercase">
                      {blog.category?.[0] || "Uncategorized"}
                    </p>
                    <h2 className="font-semibold text-lg mb-2 line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {blog.description}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {blog.date}
                    </p>
                  </Link>
                ))
              )}
            </div>

            <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
              <Routes>
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/create" element={<CreateBlog />} />
                <Route path="*" element={
                  <p className="text-center text-gray-600 py-10">
                    Select a blog from the left or create a new one
                  </p>
                } />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    
  );
}

export default App;