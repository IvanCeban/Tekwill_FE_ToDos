document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('get_todos');

  // Add event listener
  if (button) {
    // Check if button is not null
    button.addEventListener('click', handleClick);
  }

  // Event handler function
  function handleClick(event) {
    event.preventDefault();
    console.log('Button clicked!');
  }
});
