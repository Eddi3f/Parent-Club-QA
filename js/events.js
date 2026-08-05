const SHEET_URL = 'https://opensheet.elk.sh/1CFaTiEiO9H3Ev_D0CbX4z1JkQIjo_NlSlr1qf0gYx60/Event.Schedule';
const text = (value) => String(value || '').trim();

function createEventCard(event) {
  const date = new Date(event.Date);
  const card = document.createElement('article');
  card.className = 'event-card reveal is-visible';
  const when = document.createElement('div');
  when.className = 'event-when';
  [['dow', date.toLocaleDateString('en-GB', { weekday: 'short' })], ['day', date.getDate()], ['mon', date.toLocaleDateString('en-GB', { month: 'long' })]].forEach(([className, value]) => {
    const item = document.createElement('span'); item.className = className; item.textContent = value; when.append(item);
  });
  const body = document.createElement('div'); body.className = 'event-body';
  const title = document.createElement('h3'); title.textContent = text(event.Title);
  const meta = document.createElement('p'); meta.className = 'event-meta'; meta.textContent = [text(event.Time), text(event.Venue)].filter(Boolean).join(' · ');
  const description = document.createElement('p'); description.textContent = text(event.Description);
  body.append(title, meta, description);
  const bookingLink = text(event['Booking Link']);
  if (bookingLink) { const booking = document.createElement('a'); booking.className = 'btn btn-primary'; booking.href = bookingLink; booking.textContent = 'Reserve your free ticket'; body.append(booking); }
  const imageName = text(event.Image);
  if (imageName && !imageName.includes('/') && !imageName.includes('\\')) {
    const imageWrap = document.createElement('div'); imageWrap.className = 'event-image';
    const image = document.createElement('img'); image.src = `Images/${imageName}`; image.alt = text(event.Title); image.loading = 'lazy'; imageWrap.append(image); card.append(when, body, imageWrap);
  } else { card.append(when, body); }
  return card;
}

async function loadEvents() {
  const container = document.getElementById('events-list');
  if (!container) return;
  container.setAttribute('aria-busy', 'true');
  try {
    const response = await fetch(SHEET_URL);
    if (!response.ok) throw new Error(`Unable to fetch events (${response.status})`);
    const events = await response.json();
    const upcoming = events.filter((event) => text(event.Active).toUpperCase() === 'TRUE' && !Number.isNaN(new Date(event.Date).getTime())).sort((a, b) => new Date(a.Date) - new Date(b.Date));
    container.replaceChildren();
    if (upcoming.length) container.append(...upcoming.map(createEventCard));
    else container.textContent = 'No upcoming events are currently scheduled. Please check back soon.';
  } catch (error) { container.textContent = 'Unable to load events at the moment. Please try again later.'; console.error(error); }
  finally { container.removeAttribute('aria-busy'); }
}
loadEvents();