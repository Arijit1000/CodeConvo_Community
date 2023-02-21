// Get the elements for the join modal
const joinModal = document.getElementById('join-modal');
const joinModalClose = document.getElementById('join-modal-close');
const joinModalSubmit = document.getElementById('join-modal-submit');
const joinModalForm = document.getElementById('join-modal-form');
const joinModalName = document.getElementById('join-modal-name');
const joinModalEmail = document.getElementById('join-modal-email');

// Add functionality to the join button
const joinButton = document.querySelector('.button');
joinButton.addEventListener('click', () => {
  // Display the join modal
  joinModal.style.display = 'block';
});

// Add functionality to the join modal close button
joinModalClose.addEventListener('click', () => {
  // Hide the join modal
  joinModal.style.display = 'none';
});

// Add functionality to the join modal submit button
joinModalSubmit.addEventListener('click', event => {
  event.preventDefault();

  // Validate the form fields
  if (joinModalName.value.trim() === '') {
    alert('Please enter your name.');
    return;
  }

  if (joinModalEmail.value.trim() === '') {
    alert('Please enter your email.');
    return;
  }

  // Submit the form
  joinModalForm.submit();
});

// Add functionality to the forum links
const forumLinks = document.querySelectorAll('nav a[href="#forum"]');
forumLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    alert('The forum is currently under construction. Please check back soon!');
  });
});
