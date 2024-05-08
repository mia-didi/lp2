// Get the form element
const form = document.getElementById('registration-form');
// Get the input elements
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
// Create an empty array to store user data
let userData = [];
// Add event listener to the form submit event
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();
  // Create a new user object with the input values
  const user = {
    username: username.value,
    email: email.value,
    password: password.value
  };
  // Convert the user object to a JSON string
  const userString = JSON.stringify(user);
  // Add the user string to the userData array
  userData.push(userString);
  // Convert the userData array to a JSON string
  const userDataString = JSON.stringify(userData);
  // Store the userData string in local storage
  localStorage.setItem('userData', userDataString);
  // Clear the input fields
  username.value = '';
  email.value = '';
  password.value = '';
  // Redirect to a new page
  window.location.href = 'new-page.html';
});