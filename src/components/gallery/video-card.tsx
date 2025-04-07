import { useState, useRef, useEffect } from "react"

interface VideoCardProps {
  video: {
    id: number
    title: string
    src: string
    thumbnail: string
  }
  onClick: () => void
}

export default function VideoCard({ video, onClick }: VideoCardProps) {
  const [isHovering, setIsHovering] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Handle hover state
  const handleMouseEnter = () => {
    setIsHovering(true)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()

      // Set a timer to pause the video after 10 seconds
      hoverTimerRef.current = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.pause()
        }
      }, 10000)
    }
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    if (videoRef.current) {
      videoRef.current.pause()
    }

    // Clear the timer when mouse leaves
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current)
      hoverTimerRef.current = null
    }
  }

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current)
      }
    }
  }, [])

  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-200 hover:scale-[1.02] bg-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="aspect-video relative">
        {isHovering ? (
          <video ref={videoRef} src={video.src} className="w-full h-full object-cover" muted playsInline />
        ) : (
          <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{video.title}</h3>
        <p className="text-sm text-muted-foreground mt-1">Hover to preview • Click to play</p>
      </div>
    </div>
  )
}

