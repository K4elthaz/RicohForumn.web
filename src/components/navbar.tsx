import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button"
// import { Github } from "lucide-react"
import { ModeToggle } from "./theme-toggle";


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
        <img src="/2.png" alt="Ricoh" className="h-9 w-100" />
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link to="/gallery" className="transition-colors hover:text-primary">
            Video Presentations
          </Link>
          <Link to="/comingsoon" className="transition-colors hover:text-primary">
            DW Configurator
          </Link>
          <Link to="/comingsoon" className="transition-colors hover:text-primary">
            Documentations
          </Link>
          <Link to="/comingsoon" className="transition-colors hover:text-primary">
            Forumn
          </Link>
          <Link to="/comingsoon" className="transition-colors hover:text-primary">
            CS Teams
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          {/* <Link to="https://github.com/amanesoft" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Button variant="ghost" size="sm">
            Contact
          </Button> */}
          <Button size="sm">Get a Demo</Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

