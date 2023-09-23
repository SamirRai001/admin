// --------------------- sidebar toggle ---------------------

document.addEventListener('DOMContentLoaded', () => {
    const $leftbutton = document.querySelector('#left-sidebar-toggle');
    const $rightbutton = document.querySelector('#right-sidebar-toggle');
    const $wholeContentWrapper = document.querySelector('#whole-content-wrapper');

    $leftbutton.addEventListener('click', (e) => {
        e.preventDefault();
        $wholeContentWrapper.classList.toggle('left-toggled');
    });

    $rightbutton.addEventListener('click', (e) => {
        e.preventDefault();
        $wholeContentWrapper.classList.toggle('right-toggled');
    });
});


// --------------------- sidebar link buttons ---------------------

$(document).ready(function () {
    // Prevent page from jumping to top from # href link
    $('.menu-parent li.menu-child > a').click(function (e) {
        e.preventDefault();
    });

    // Remove link from menu items that have children
    $(".menu-parent li.menu-child > a").attr("href", "#");

    // Function to open/close menu items
    $(".menu-parent a").click(function () {
        var link = $(this);
        var closest_ul = link.closest("ul");
        var parallel_active_links = closest_ul.find(".active")
        var closest_li = link.closest("li");
        var link_status = closest_li.hasClass("active");
        var count = 0;

        closest_ul.find("ul").slideUp(function () {
            if (++count == closest_ul.find("ul").length)
                parallel_active_links.removeClass("active");
        });

        if (!link_status) {
            closest_li.children("ul").slideDown();
            closest_li.addClass("active");
        }
    })
});

// --------------------- notification clear function ---------------------

document.addEventListener("DOMContentLoaded", function () {
    // Function to handle notification close button click
    function handleNotificationCloseClick(event) {
      // Get the parent notification element
      const notificationElement = event.target.closest('.alert');

      // Check if the clicked element is a notification with class "alert"
      if (notificationElement) {
        // Remove the notification element from the DOM
        notificationElement.remove();
        // Update the notification count
        updateNotificationCount();
      }
    }

    // Function to clear all notifications
    function clearAllNotifications() {
      // Get all notification elements
      const notificationElements = document.querySelectorAll('.notification-box .alert');

      // Remove each notification element
      notificationElements.forEach((notificationElement) => {
        notificationElement.remove();
      });

      // Update the notification count
      updateNotificationCount();
    }

    // Function to update the notification count
    function updateNotificationCount() {
      // Get the updated count of notifications
      const notificationCount = document.querySelectorAll('.notification-box .alert').length;

      // Find the span element with class "notification-number"
      const notificationNumberSpan = document.querySelector('.notification-number');

      // Update the innerHTML of the span to display the updated notification count
      notificationNumberSpan.innerHTML = notificationCount;

      // Toggle the visibility of the span based on the count
      notificationNumberSpan.style.display = notificationCount > 0 ? 'inline-block' : 'none';
    }

    // Add a click event listener to all close buttons with class "notification-closebtn"
    const closeButtons = document.querySelectorAll('.notification-closebtn');
    closeButtons.forEach((closeButton) => {
      closeButton.addEventListener('click', handleNotificationCloseClick);
    });

    // Add a click event listener to the "Clear All" button
    const clearAllButton = document.getElementById('clear-all-btn');
    clearAllButton.addEventListener('click', clearAllNotifications);

    // Initial count of notifications
    updateNotificationCount();
  });