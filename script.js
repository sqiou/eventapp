const events = [
  {
    name: 'City Food Festival',
    date: 'June 8, 2025',
    time: '12:00 PM',
    location: 'Central Park',
    description: 'Enjoy delicious street food and live music in the heart of the city.'
  },
  {
    name: 'Tech Innovators Meetup',
    date: 'June 10, 2025',
    time: '5:00 PM',
    location: 'Innovation Hub',
    description: 'Connect with local tech enthusiasts and startups.'
  },
  {
    name: 'Art & Wine Evening',
    date: 'June 15, 2025',
    time: '6:30 PM',
    location: 'Gallery Lane',
    description: 'A relaxing evening of art displays and wine tasting.'
  },
  {
    name: 'Local Farmers Market',
    date: 'June 20, 2025',
    time: '9:00 AM',
    location: 'Downtown Plaza',
    description: 'Shop fresh produce and handmade goods from local farmers.'
  }
];

const eventGrid = document.getElementById('eventGrid');
const searchInput = document.getElementById('searchInput');

function renderEvents(filteredEvents) {
  eventGrid.innerHTML = ''; // Clear current cards

  if (filteredEvents.length === 0) {
    eventGrid.innerHTML = '<p>No events found.</p>';
    return;
  }

  filteredEvents.forEach(event => {
    const card = document.createElement('div');
    card.className = 'event-card';

    card.innerHTML = `
      <h3>${event.name}</h3>
      <p><strong>Date:</strong> ${event.date} at ${event.time}</p>
      <p><strong>Location:</strong> ${event.location}</p>
      <p>${event.description}</p>
      <button class="register-btn">Register</button>
    `;

    eventGrid.appendChild(card);
  });
}

// Initial render
renderEvents(events);

// Filter on search input
searchInput.addEventListener('input', e => {
  const keyword = e.target.value.toLowerCase();
  const filtered = events.filter(event =>
    event.name.toLowerCase().includes(keyword)
  );
  renderEvents(filtered);
});
