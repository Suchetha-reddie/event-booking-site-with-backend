document.addEventListener("DOMContentLoaded", () => {
    const eventsList = document.getElementById("events");
    const eventSelect = document.getElementById("eventSelect");
    const bookingForm = document.getElementById("eventBookingForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    // Mock event data
    const events = [
        { id: 1, name: "Music Concert", date: "2024-12-10" },
        { id: 2, name: "Art Exhibition", date: "2024-12-12" },
        { id: 3, name: "Tech Conference", date: "2024-12-15" }
    ];

    // Populate event list and select options
    function displayEvents() {
        events.forEach(event => {
            // Add to list view
            const listItem = document.createElement("li");
            listItem.textContent = `${event.name} - ${event.date}`;
            eventsList.appendChild(listItem);

            // Add to select options
            const option = document.createElement("option");
            option.value = event.id;
            option.textContent = event.name;
            eventSelect.appendChild(option);
        });
    }

    // Handle booking submission
    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const selectedEvent = eventSelect.value;
        const userName = document.getElementById("name").value;
        const userEmail = document.getElementById("email").value;

        if (selectedEvent && userName && userEmail) {
            // Mock API request
            setTimeout(() => {
                confirmationMessage.textContent = `Thank you, ${userName}! Your booking for the event "${events.find(e => e.id == selectedEvent).name}" is confirmed.`;
                bookingForm.reset();
            }, 500);
        }
    });

    displayEvents();
});
