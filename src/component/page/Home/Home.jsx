// import BlogList from "./BlogList";
// import useFetch from "../../../useFetch";

// const Home = () => {
//   const { data, isPending, error } = useFetch("http://localhost:8000/blogs");
//   return (
//     <div>
//       {error ? (
//         <div>{error}</div>
//       ) : (
//         <div>
//           {isPending ? (
//             "Loading..."
//           ) : (
//             <BlogList title={"All Blog Data"} blogs={data} />
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;

import useFetch from "../../../useFetch";
import BlogList from "./BlogList";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");
  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : (
        <div>
          {isPending ? (
            <div>Loading...</div>
          ) : (
            <BlogList data={data} title={"ALL BLOGS"} />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
