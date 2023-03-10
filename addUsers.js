function addUser(name) {
    const table = document.querySelector('#user-table tbody');
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const viewPostsCell = document.createElement('td');
    const link = document.createElement('a');
  
    nameCell.textContent = name;
    link.textContent = 'View Posts';
    link.href = '#';
    viewPostsCell.classList.add('view-posts'); // Add class to the td element
  
    viewPostsCell.appendChild(link);
  
    row.appendChild(nameCell);
    row.appendChild(viewPostsCell);
  
    table.appendChild(row);


    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ name });
    localStorage.setItem('users', JSON.stringify(users));
}

function init() {
    // Load users from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    for (const user of users) {
      addUser(user.name);
    }
  }

window.addEventListener('load', init);

  