import React, { useState, useRef } from "react";
import{useNavigate} from "react-router-dom"

function AddComment({ blogId, comments, setComments, user }) {
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState([]);
  const formReset = useRef();
  const navigate = useNavigate()
  function handleChange(e) {
    setComment(e.target.value);
  }

  function handleSubmit(e) {
    if (user) {
      e.preventDefault();
      fetch("/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: comment,
          blog_id: blogId,
        }),
      }).then((res) => {
        if (res.ok) {
          res.json().then((data) => setComments([...comments, data]));
        } else {
          res.json().then((resErrors) => setErrors(resErrors.errors));
        }
      });

      formReset.current.reset();
    }else{
        navigate('/signup')
    }
  }
  return (
    <div>
      <h4>Add Comment</h4>
      {errors.map((err) => {
        return (
          <p style={{ color: "red" }} key={err}>
            {err}
          </p>
        );
      })}
      <form onSubmit={handleSubmit} className="comment-form" ref={formReset}>
        <div>
          <textarea
            className="form-comment"
            id="comment"
            name="comment"
            rows="3"
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <input type="submit" name="comment" value={"Comment"} />
        </div>
      </form>
    </div>
  );
}

export default AddComment;
