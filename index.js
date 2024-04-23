document.getElementById('fetchButton').addEventListener('click', fetchUserData);

function fetchUserData() {
  fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
      displayUserData(data.data);
    })
    // .catch(error => console.error('Error fetching user data:', error));
}

function displayUserData(users) {
  const userDataElement = document.getElementById('userData');
  userDataElement.innerHTML = '';

  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');

    const name = document.createElement('p');
    name.textContent = `Name: ${user.first_name} ${user.last_name}`;

    const email = document.createElement('email');
    email.textContent = `Email: ${user.email}`;

    const avatar = document.createElement('img');
    avatar.src = user.avatar;
    avatar.alt = `Avatar of ${user.first_name}`;

    userDiv.appendChild(avatar);
    userDiv.appendChild(name);
    userDiv.appendChild(email);

    userDataElement.appendChild(userDiv);
  });
}
