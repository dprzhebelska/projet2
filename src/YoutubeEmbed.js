import React from "react";
import PropTypes from "prop-types";

// source code: https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive" style={{marginTop:'50px'}}>
        <iframe width="912" height="513" src="https://www.youtube.com/embed/FTUWCr3IXxw" title="Bach - Violin Sonata No. 1 in G minor, BWV 1001{Grumiaux}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
