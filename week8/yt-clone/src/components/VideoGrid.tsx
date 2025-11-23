import { VideoCard } from "./VideoCard";

// Dummy video list
const VIDEOS = [
  {
    title: "How to learn coding in 30 days",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Rupesh Sahani",
    views: "100k",
    timestamp: "2 days ago",
  },
  {
    title: "Master React in 7 Days",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Rupesh Sahani",
    views: "90k",
    timestamp: "1 week ago",
  },
  {
    title: "Build Full Stack Apps",
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    author: "Rupesh Sahani",
    views: "150k",
    timestamp: "5 days ago",
  },
];

export function VideoGrid() {
  return (
    // Creates a 4-column responsive grid
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {VIDEOS.map((video, index) => (
        <VideoCard
          key={index}
          title={video.title}
          image={video.image}
          thumbImage={video.thumbImage}
          author={video.author}
          views={video.views}
          timestamp={video.timestamp}
        />
      ))}
    </div>
  );
}
