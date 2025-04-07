import { useState } from "react"
import VideoCard from "./video-card"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

// Sample video data - replace with your actual videos
const videos = [
  {
    id: 1,
    title: "Stamping of QR Code and Encryption of PDF",
    src: "/QR-Encrypt-API-Integration.mp4",
    thumbnail: "/docuware.jpg?height=720&width=1280",
  },
//   {
//     id: 2,
//     title: "Ocean Waves",
//     src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
//     thumbnail: "/docuware.jpg?height=720&width=1280",
//   },
//   {
//     id: 3,
//     title: "Mountain View",
//     src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
//     thumbnail: "/docuware.jpg?height=720&width=1280",
//   },
//   {
//     id: 4,
//     title: "City Timelapse",
//     src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
//     thumbnail: "/docuware.jpg?height=720&width=1280",
//   },
//   {
//     id: 5,
//     title: "Wildlife Documentary",
//     src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
//     thumbnail: "/docuware.jpg?height=720&width=1280",
//   },
//   {
//     id: 6,
//     title: "Aerial Footage",
//     src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
//     thumbnail: "/docuware.jpg?height=720&width=1280",
//   },
]

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null)

  const openModal = (video: (typeof videos)[0]) => {
    setSelectedVideo(video)
  }

  const closeModal = () => {
    setSelectedVideo(null)
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onClick={() => openModal(video)} />
        ))}
      </div>

      <Dialog open={selectedVideo !== null} onOpenChange={(open) => !open && setSelectedVideo(null)}>
        {selectedVideo && (
          <DialogContent className="sm:max-w-4xl">
            <DialogTitle>{selectedVideo.title}</DialogTitle>
            <div className="aspect-video w-full mt-2">
              <video src={selectedVideo.src} className="w-full h-full rounded-md" controls autoPlay />
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}

