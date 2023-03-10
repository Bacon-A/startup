function showPostForm() {

    console.log('Entering showPostForm function...');
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
  }

const addPostButton = document.querySelector('#add-post-button');
addPostButton.addEventListener('click', showPostForm);
  