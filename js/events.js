const SHEET_URL =
    "https://opensheet.elk.sh/1CFaTiEiO9H3Ev_D0CbX4z1JkQIjo_NlSlr1qf0gYx60/event.schedule";

async function loadEvents() {

    const container = document.getElementById("events-list");

    if (!container) return;

    try {

        const response = await fetch(SHEET_URL);
        const events = await response.json();

        container.innerHTML = "";

        events
            .filter(event => event.Active === "TRUE")
            .sort((a, b) => new Date(a.Date) - new Date(b.Date))
            .forEach(event => {

                const html = `
                <div class="event-card reveal" style="margin-bottom:1.5rem;">

                    <div class="event-when">
                        <span class="dow">${new Date(event.Date).toLocaleDateString('en-GB',{weekday:'short'})}</span>
                        <span class="day">${new Date(event.Date).getDate()}</span>
                        <span class="mon">${new Date(event.Date).toLocaleDateString('en-GB',{month:'long'})}</span>
                    </div>

                    <div class="event-body">

                        <h3>${event.Title}</h3>

                        <p class="event-meta">
                            ${event.Time} · ${event.Venue}
                        </p>

                        <p>${event.Description}</p>

                        <a class="btn btn-primary"
                           href="${event["Booking Link"]}">
                           Reserve your free ticket
                        </a>

                    </div>
                     <div class="event-image">
                           <img src="Images/${event.Image}" alt="${event.Title}">
                    </div>

                </div>
                `;

                container.insertAdjacentHTML("beforeend", html);

            });

    }

    catch (error) {

        container.innerHTML =
            "<p>Unable to load events at the moment.</p>";

        console.error(error);

    }

}

loadEvents();
