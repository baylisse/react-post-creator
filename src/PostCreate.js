import React, { useState } from "react";

/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */
function PostCreate({createPost}) {
  const initialState = { type: "Text", content:""};
  const [formData, setFormData] = useState(initialState);
  
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    createPost(formData.type, formData.content);
    setFormData({ ...initialState });
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select 
            id="type" 
            name="type" 
            required={true}
            onChange={handleChange}
            value={formData.type}
          >
            <option>Text</option>
            <option>Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {formData.type === "Text" ? (
            <textarea id="content" name="content" required={true} rows={3} onChange={handleChange}
            value = {formData.content}/>
          ) : (
            <input id="content" name="content" type="url" required={true} onChange={handleChange}
            value = {formData.content}/>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;
