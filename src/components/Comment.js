import React from "react";

export default function Comment({ comment }) {
  return (
    <div>
      <fieldset className="comment">
        <legend>{comment.author}</legend>
        {comment.content}
      </fieldset>
    </div>
  );
}
