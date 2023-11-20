// import { useState, useEffect } from "react";
// const useFetch = (url) => {
//   const [data, setData] = useState();
//   const [isPending, setIsPending] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const abortCont = new AbortController();
//     setTimeout(() => {
//       fetch(url, { signal: abortCont.signal })
//         .then((resp) => {
//           if (!resp.ok) {
//             throw Error("Error in fetching data");
//           }
//           return resp.json();
//         })
//         .then((data) => {
//           setData(data);
//           setIsPending(false);
//         })
//         .catch((err) => {
//           if (err.name == "AbortError") {
//             console.log("fetch Abort");
//           } else {
//             setError(err.message);
//           }
//         });
//     }, 1000);
//     return () => abortCont.abort();
//   }, [url]);
//   return { data, isPending, error };
// };

// export default useFetch;

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Error in fetching data");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
        })
        .catch((err) => {
          if (err.name == "AbortError") {
            console.log("fetch Abort");
          } else {
            setError(err.message);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
