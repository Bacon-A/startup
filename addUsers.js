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
    viewPostsCell.style.textAlign = 'right'; // set text-align property to right
  
    viewPostsCell.appendChild(link); // append link to viewPostsCell
    row.appendChild(nameCell);
    row.appendChild(viewPostsCell);
  
    table.appendChild(row);
  
    // Add the new user to the list of users in local storage
    const users = JSON.parse(sessionStorage.getItem('users')) || [];
    users.push({ name });
    sessionStorage.setItem('users', JSON.stringify(users));
  }
  
  function loadUsers() {
    const table = document.querySelector('#user-table tbody');
    const users = JSON.parse(sessionStorage.getItem('users')) || [];
  
    for (const user of users) {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      const viewPostsCell = document.createElement('td');
      const link = document.createElement('a');
  
      nameCell.textContent = user.name;
      link.textContent = 'View Posts';
      link.href = `#${user.name}-posts`;
  
      viewPostsCell.style.textAlign = 'right';
      viewPostsCell.appendChild(link);
  
      row.appendChild(nameCell);
      row.appendChild(viewPostsCell);
  
      table.appendChild(row);
    }
  }
  window.addEventListener('load', loadUsers);
