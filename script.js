// 1. Button Click, Hover, Double Click
const magicButton = document.getElementById('magicButton');
const buttonOutput = document.getElementById('buttonOutput');

magicButton.addEventListener('click', () => {
  buttonOutput.textContent = "You clicked the button!";
  magicButton.style.backgroundColor = "#28a745";
});

magicButton.addEventListener('mouseenter', () => {
  buttonOutput.textContent = "You're hovering over me!";
});

magicButton.addEventListener('dblclick', () => {
  buttonOutput.textContent = "Double click unlocked a secret! 🎉";
  document.body.style.backgroundColor = "#ffeaa7";
});

// 2. Tabs Functionality
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const selectedTab = tab.getAttribute('data-tab');

    document.querySelectorAll('.tab-content').forEach(content => {
      content.style.display = 'none';
    });

    document.getElementById(`tab-${selectedTab}`).style.display = 'block';
  });
});

// 3. Keypress Detection
document.addEventListener('keydown', (e) => {
  if (e.key === 'j') {
    buttonOutput.textContent = "You pressed 'J' – JavaScript fan?";
  }
});

// 4. Form Validation
const form = document.getElementById('signupForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMessage.textContent = '';

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (username.value.trim() === '' || email.value.trim() === '' || password.value.trim() === '') {
    formMessage.textContent = "All fields are required.";
    formMessage.style.color = "red";
    return;
  }

  if (!email.value.match(emailPattern)) {
    formMessage.textContent = "Please enter a valid email.";
    formMessage.style.color = "red";
    return;
  }

  if (password.value.length < 8) {
    formMessage.textContent = "Password must be at least 8 characters.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Form submitted successfully! ✅";
  formMessage.style.color = "green";
});

// Bonus: Real-time validation
password.addEventListener('input', () => {
  if (password.value.length < 8) {
    password.style.borderColor = "red";
  } else {
    password.style.borderColor = "green";
  }
});
