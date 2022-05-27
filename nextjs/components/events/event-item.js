import Link from "next/link";
import React from "react";

export default function EventItem(props) {
  const { image, title, date, location, id } = props;

  const humanReadablaDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: numeric,
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/event/${id}`;

  return (
    <li>
      <img src="" alt="" />
      <div>
        <div>
          <h2>title</h2>
        </div>
        <div>
          <time>Date</time>
        </div>
        <div>
          <address>ADRESS</address>
        </div>
        <Link href={exploreLink}>Explore Event</Link>
      </div>
    </li>
  );
}
