// components/Presentations.tsx
import React from "react";

const Presentations: React.FC = () => {
  return(
    <div className="layout">
      <h2>Presentations</h2>
       <ul className="presentations__links unstyled">
        <li><a href="https://www.youtube.com/watch?v=8JLEYSqWKb0" rel="noreferrer" target="_blank" title="MyGreat Migrate Experience">My-Great Migrate Experience</a>&nbsp;<span>|&nbsp;Drupal Camp Asheville 2018</span></li>
        <li><a href="https://www.meetup.com/asheville-drupal-user-group/events/243651675/" rel="noreferrer" target="_blank" title="Drupal Frontend Development with Pattern Lab">Drupal Frontend Development with Pattern Lab</a>&nbsp;<span>|&nbsp;ADUG Meetup 2017</span></li>
        <li><a href="/presentations/leveraging-leafletjs-with-drupal8/index.html" rel="noreferrer" target="_blank" title="Leveraging LeafletJS with Drupal 8">Leveraging LeafletJS with Drupal 8</a>&nbsp;<span>|&nbsp;Drupal Camp Asheville 2016</span></li>
      </ul>
    </div>
  )
}

export default Presentations;
