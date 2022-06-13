import React from "react";

import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'
import EventsSearch from "../../components/events/events-search";

function AllEventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export default AllEventsPage;
