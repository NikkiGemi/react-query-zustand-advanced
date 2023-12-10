import axios from "axios";
import { useEffect, useState } from "react";
import usePosts from "../hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetching,
  } = usePosts({ pageSize });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <h1>List of posts</h1>
      <ul className="list-group">
        {posts.pages.map((posts) =>
          posts.map((post) => (
            <li className="list-group-item" key={post.id}>
              {post.title}
            </li>
          ))
        )}
      </ul>
      {/*<button
        disabled={page === 1}
        className="btn btn-primary my-3"
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <button
        className="btn btn-primary my-3 ms-1"
        onClick={() => setPage(page + 1)}
      >
        Next
        </button>*/}
      <button
        disabled={isFetching}
        className="btn btn-primary my-3"
        onClick={() => fetchNextPage()}
      >
        {isFetching ? "Loading.." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
