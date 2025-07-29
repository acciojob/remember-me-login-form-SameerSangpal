//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const checkbox = document.getElementById('checkbox');
  const submitBtn = document.getElementById('submit');
  const existingBtn = document.getElementById('existing');
  const form = document.getElementById('loginForm');

  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (storedUsername && storedPassword) {
    existingBtn.style.display = 'inline-block';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (!username || !password) {
      alert("Username and password cannot be empty.");
      return;
    }

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      existingBtn.style.display = 'inline-block';
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      existingBtn.style.display = 'none';
    }

    form.reset();
  });

  existingBtn.addEventListener('click', function () {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      alert(`Logged in as ${savedUsername}`);
    }
  });
});
