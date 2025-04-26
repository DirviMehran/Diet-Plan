document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-button');
    const dayContents = document.querySelectorAll('.day-content');
    const extraCheckboxes = document.querySelectorAll('.extra-checkbox');

    // Function to show the selected day and hide others
    function showDay(dayId) {
        // Hide all day contents
        dayContents.forEach(content => {
            content.classList.remove('active');
        });

        // Deactivate all nav buttons
        navButtons.forEach(button => {
            button.classList.remove('active');
        });

        // Show the selected day content
        const selectedDayContent = document.getElementById(dayId);
        if (selectedDayContent) {
            selectedDayContent.classList.add('active');
        }

        // Activate the clicked nav button
        const selectedNavButton = document.querySelector(`.nav-button[data-day="${dayId}"]`);
        if (selectedNavButton) {
            selectedNavButton.classList.add('active');
        }
    }

    // Add click event listeners to navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const dayId = button.getAttribute('data-day');
            showDay(dayId);
        });
    });

    // Add change event listeners to "Ate Something Extra" checkboxes
    extraCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const dayId = checkbox.getAttribute('data-day');
            const detailsTextarea = document.getElementById(`extra-details-${dayId}`);
            if (detailsTextarea) {
                if (checkbox.checked) {
                    detailsTextarea.style.display = 'block';
                } else {
                    detailsTextarea.style.display = 'none';
                    // Optionally clear the textarea when unchecked
                    // detailsTextarea.value = '';
                }
            }
        });
    });

    // --- Initial Setup ---
    // Show Monday by default (or the first day in the list)
    const initialDay = navButtons.length > 0 ? navButtons[0].getAttribute('data-day') : null;
    if (initialDay) {
        showDay(initialDay);
    }

    // Ensure all extra details textareas are hidden initially
    extraCheckboxes.forEach(checkbox => {
         const dayId = checkbox.getAttribute('data-day');
         const detailsTextarea = document.getElementById(`extra-details-${dayId}`);
         if(detailsTextarea) {
            detailsTextarea.style.display = 'none';
         }
    });
});