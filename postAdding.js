document.addEventListener('DOMContentLoaded', () => {
    // Get the posts from localStorage or initialize an empty array if no posts exist
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
  
    // Save the updated posts array back to localStorage
    localStorage.setItem('posts', JSON.stringify(posts));
  
    // Loop through the posts and create a new row in the table for each post
    const tableBody = document.querySelector('tbody');
    for (const post of posts) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${post.time}</td>
        <td>${post.text}</td>
        <td><a href="${post.location}">${post.location}</a></td>
      `;
      tableBody.appendChild(newRow);
    }
  
    // Add a new post to the array
    function addPost(time, text, location) {
      posts.push({
        time: time,
        text: text,
        location: location
      });
      localStorage.setItem('posts', JSON.stringify(posts));
    }
  
    function showPostForm() {
      const form = document.createElement('form');
      form.innerHTML = `
        <label for="post-time">Time:</label>
        <input type="text" id="post-time" name="post-time"><br>
  
        <label for="post-text">Post:</label>
        <input type="text" id="post-text" name="post-text"><br>
  
        <label for="post-location">Location:</label>
        <input type="text" id="post-location" name="post-location"><br>
  
        <button type="submit">Add Post</button>
      `;
  
      const container = document.querySelector('.container');
      container.appendChild(form);
  
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const timeInput = document.querySelector('#post-time');
        const postTextInput = document.querySelector('#post-text');
        const locationInput = document.querySelector('#post-location');
  
        // Call the addPost function to add the new post to the array
        addPost(timeInput.value, postTextInput.value, locationInput.value);
  
        const tableBody = document.querySelector('#post_table');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
          <td>${timeInput.value}</td>
          <td>${postTextInput.value}</td>
          <td><a href="${locationInput.value}">${locationInput.value}</a></td>
        `;
        tableBody.appendChild(newRow);
  
        form.remove();
      });
    }
  
    const addPostButton = document.querySelector('#add-post-button');
    addPostButton.addEventListener('click', showPostForm);
  });
  