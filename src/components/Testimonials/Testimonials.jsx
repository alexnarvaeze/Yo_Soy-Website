import React from "react";
import "./Testimonials.css";

const VideoCard = ({ title, videoId }) => {
  const videoUrl = `https://www.youtube.com/shorts/${videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="video-card"
    >
      <div>
        <img src={thumbnailUrl} alt={title} className="video-thumbnail" />
        <h3 className="video-title">{title}</h3>
      </div>
    </a>
  );
};

function Testimonials() {
  const videos = [
    { id: "J5axNb26k8I", title: "Testimonial 1" },
    { id: "TU5xnYqDlag", title: "Testimonial 2" },
  ];

  return (
    <div className="testimonials-container">
      <h1 id="testimonials" className="title">
        Testimonials
      </h1>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.id} videoId={video.id} title={video.title} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
