document.addEventListener('DOMContentLoaded', function () {
  const getUsers = async () => {
    const usersResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    const users = await usersResponse.json();
    console.log(users);

    const ul = document.createElement('ul');
    ul.classList.add('user-list');
    const li = document.createElement('li');
    const spanId = document.createElement('span');
    const spanName = document.createElement('span');
    const usersWrapper = document.getElementById('users');
    spanId.classList.add('user-id');
    spanName.classList.add('user-name');
    li.append(spanId);
    li.append(spanName);
    ul.append(li);
    usersWrapper.append(ul);
  };
  getUsers();
  const button = document.getElementById('get_todos');
  const checkbox = document.getElementById('checkbox2');

  // Add event listener
  if (button) {
    // Check if button is not null
    button.addEventListener('click', handleClick);
  }

  if (checkbox) {
    checkbox.addEventListener('change', handleCheckboxChange);
  }
  // Event handler function
  function handleClick(event) {
    event.preventDefault();
    console.log('Button clicked!');
  }

  function handleCheckboxChange() {
    console.log('Checked', this.checked);
  }
});

// 1. Get real users list from https://jsonplaceholder.typicode.com/
// 2. When setting user ID get this user ToDos
// 3. When checking a todo, set it's status to done and send the "completed" value to server using PUT
