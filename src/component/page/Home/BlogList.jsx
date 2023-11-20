// import { Link } from "react-router-dom";
// const BlogList = ({ title, blogs }) => {
//   return (
//     <div>
//       <h2>{title}</h2>
//       {blogs &&
//         blogs.map((blog) => (
//           <div key={blog.id} className="blog-preview">
//             <div>
//               <Link className="blogDetailsLinks" to={`blogs/${blog.id}`}>
//                 <h2>{blog.title}</h2>
//                 <p>{blog.author}</p>
//               </Link>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default BlogList;

import { Link } from "react-router-dom";
const BlogList = ({ data, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {data.map((blog) => (
        <div key={blog.id} className="blog-preview">
          <Link to={`blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
