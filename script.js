
document.getElementById('signUpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Close the sign-up modal
    var signUpModalElement = document.getElementById('signUpModal');
    var signUpModalInstance = bootstrap.Modal.getInstance(signUpModalElement);
    signUpModalInstance.hide();

    // Show the success modal
    var successModalElement = new bootstrap.Modal(document.getElementById('successModal'));
    successModalElement.show();
});

document.querySelectorAll('.learn-more-btn').forEach(function(button) {
    button.addEventListener('click', function() {
      const selectedCourse = button.getAttribute('data-course');
      document.getElementById('course').value = selectedCourse;
    });
  });
