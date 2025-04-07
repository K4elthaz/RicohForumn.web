import VideoGallery from "@/components/gallery/video-gallery"

export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Video Presentations</h1>
      <VideoGallery />
    </div>
  )
}

