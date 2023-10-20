document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('get_todos');
  const input = document.getElementById('user-id-input');
  const checkbox = document.getElementById('checkbox2');

  const getUsers = async () => {
    const usersResponse = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    const users = await usersResponse.json();
    console.log(users);

    const ul = document.createElement('ul');
    ul.classList.add('user-list');
    const usersWrapper = document.getElementById('users');

    users.forEach((user) => {
      const li = document.createElement('li');
      const spanId = document.createElement('span');
      const spanName = document.createElement('span');
      spanId.classList.add('user-id');
      spanId.textContent = user.id;
      spanName.classList.add('user-name');
      spanName.textContent = user.name;
      li.append(spanId);
      li.append(spanName);
      ul.append(li);
    });

    usersWrapper.append(ul);
  };
  getUsers();

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
    const userId = input.value;

    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then((response) => response.json())
      .then((todos) => console.log(todos))
      .catch((error) => console.log(error));
  }

  function handleCheckboxChange() {
    console.log('Checked', this.checked);
  }
});

// 1. Get real users list from https://jsonplaceholder.typicode.com/
// 2. When setting user ID get this user ToDos
// 3. When checking a todo, set it's status to done and send the "completed" value to server using PUT
