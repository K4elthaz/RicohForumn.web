import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/components/theme-provider'
import { ToastProvider } from '@/components/ui/toast'
import { Toaster } from '@/components/ui/toaster'
import HomePage from './Pages/Home'
import "./App.css";

function AppContent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <div className="content">
      <Router>
        <ThemeProvider>
          <ToastProvider>
            <AppContent />
            <Toaster />
          </ToastProvider>
        </ThemeProvider>
      </Router>
      </div>
    </main>
  )
}

export default App
