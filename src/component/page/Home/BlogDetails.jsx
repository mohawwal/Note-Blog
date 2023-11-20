// import { useParams } from "react-router-dom";
// import useFetch from "../../../useFetch";

// const BlogDetails = () => {
//   const { id } = useParams();
//   const { data, isPending, error } = useFetch(
//     "http://localhost:8000/blogs/" + id
//   );
//   return (
//     <div className="blog-details">
//       {isPending && <div>Loading...</div>}
//       {error && <div>{error}</div>}
//       {data && (
//         <article>
//           <h2>{data.title}</h2>
//           <p>{data.body}</p>
//           <p>written by {data.author}</p>
//         </article>
//       )}
//     </div>
//   );
// };

// export default BlogDetails;

import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../../useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/blogs/" + id
  );

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + data.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="blog-details">
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          {isPending ? (
            <div>Loading...</div>
          ) : (
            <article>
              <h2>{data.title}</h2>
              <p>{data.body}</p>
              <p>written by {data.author}</p>
              <button onClick={handleDelete}>Delete</button>
            </article>
          )}
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
