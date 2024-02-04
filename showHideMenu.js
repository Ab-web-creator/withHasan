document.addEventListener('DOMContentLoaded', function () {
  // Get the menu button and menu items
  var menuButton = document.querySelector('.first-part button');
  var menuItemsContainer = document.getElementById('menuItemsContainer');

  // Remove 'visible' class initially
  menuItemsContainer.classList.remove('visible');

  menuButton.addEventListener('click', function () {
    // Toggle 'visible' class on menu items container
    menuItemsContainer.classList.toggle('visible');
  });
});
