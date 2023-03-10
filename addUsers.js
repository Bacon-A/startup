function addUser(name) {
    const table = document.querySelector('#user-table tbody');
  
    // Check if the name already exists in the user table
    const existingNames = Array.from(table.querySelectorAll('td:first-child')).map(td => td.textContent.trim());
    if (existingNames.includes(name.trim())) {
      console.log('User with this name already exists.');
      return;
    }
  
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const viewPostsCell = document.createElement('td');
    const link = document.createElement('a');
  
    nameCell.textContent = name;
    link.textContent = 'View Posts';
    link.href = `#${name}-posts`;
    viewPostsCell.appendChild(link);
    viewPostsCell.classList.add('view-posts');
  
    row.appendChild(nameCell);
    row.appendChild(viewPostsCell);
  
    table.appendChild(row);
  
    // Add the new user to the list of users in local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name });
    localStorage.setItem('users', JSON.stringify(users));
  }
  
