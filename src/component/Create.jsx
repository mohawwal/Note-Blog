import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [review, setReview] = useState("");

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (title && body !== "") {
      const blog = { title, body, author };

      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        console.log("new blog added");
        // navigate(-1);
        navigate("/");
      });
    } else {
      setReview("The Title and Body must not be Empty");
    }
  };
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <p>{review}</p>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="Alfred">Alfred</option>
        </select>

        <button onClick={handleClick}>Add blog</button>
      </form>
    </div>
  );
};

export default Create;
