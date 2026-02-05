import { useEffect, useState, useRef } from 'react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)
  const [showReplay, setShowReplay] = useState(false)

  const timerRef = useRef<any>(null)

  const TOTAL_DURATION = 14000 // 14 seconds
  const UPDATE_INTERVAL = 50 // ms

  const SLIDES = [
    { id: 0, duration: 3000, title: "Welcome to InstaGuard", sub: "The Advanced Instagram Risk Detector" },
    { id: 1, duration: 4000, title: "Step 1: Analyzes Profile", sub: "Checking followers, posts, and bio patterns..." },
    { id: 2, duration: 4000, title: "Step 2: AI Detection", sub: "Scanning for bot behavior and scam links..." },
    { id: 3, duration: 3000, title: "Instant Results", sub: "Get a clear Risk Score & Safety Advice!" },
  ]

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  // Reset when opened
  useEffect(() => {
    if (isOpen) {
      restart()
    } else {
      pause()
    }
  }, [isOpen])

  // Timer Logic
  useEffect(() => {
    if (!isPlaying) return

    timerRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          pause()
          setShowReplay(true)
          return 100
        }

        // Calculate progress increment
        const increment = (UPDATE_INTERVAL / TOTAL_DURATION) * 100
        const newProgress = prev + increment

        // Update active slide
        const currentTime = (newProgress / 100) * TOTAL_DURATION
        let accumulated = 0
        for (let i = 0; i < SLIDES.length; i++) {
          accumulated += SLIDES[i].duration
          if (currentTime < accumulated) {
            setActiveSlide(i)
            break
          }
        }

        return newProgress
      })
    }, UPDATE_INTERVAL)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPlaying])

  const play = () => {
    if (progress >= 100) {
      setProgress(0)
      setActiveSlide(0)
    }
    setIsPlaying(true)
    setShowReplay(false)
  }

  const pause = () => {
    setIsPlaying(false)
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const restart = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    setProgress(0)
    setActiveSlide(0)
    setShowReplay(false)
    setIsPlaying(true)
  }

  const togglePlay = () => {
    if (isPlaying) pause()
    else play()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl transform transition-apple scale-100 border border-white/10 flex flex-col">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 p-4 z-20 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
          <div className="flex items-center space-x-2 pointer-events-auto">
            <span className={`text-red-500 ${isPlaying ? 'animate-pulse' : ''}`}>●</span>
            <span className="text-white/80 text-sm font-medium">Demo Preview</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-colors pointer-events-auto"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cinematic "Video" Area */}
        <div
          className="relative pt-[56.25%] bg-slate-900 overflow-hidden cursor-pointer"
          onClick={togglePlay}
        >
          <div className="absolute inset-0 flex items-center justify-center">

            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black opacity-50"></div>
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            {/* Slides - CENTERED CONTENT */}
            <div className="relative z-10 text-center px-4 w-full transition-opacity duration-300">

              {/* Slide 0: Intro */}
              {activeSlide === 0 && (
                <div className="animate-slideUp">
                  <div className="text-6xl sm:text-7xl mb-6">🛡️</div>
                  <h2 className="text-4xl sm:text-6xl font-black text-white mb-4 tracking-tight">InstaGuard</h2>
                  <p className="text-xl sm:text-2xl text-purple-300 font-light">{SLIDES[0].sub}</p>
                </div>
              )}

              {/* Slide 1: Input */}
              {activeSlide === 1 && (
                <div className="animate-slideUp w-full max-w-lg mx-auto">
                  <div className="text-left bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mb-8 shadow-2xl transform scale-100 sm:scale-110">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <label className="text-xs text-white/50 block mb-2 uppercase tracking-wider font-bold">Target Profile</label>
                    <div className="text-xl sm:text-2xl text-white font-mono border-b-2 border-purple-500 pb-2 flex items-center">
                      <span className="text-purple-400 mr-1">@</span>
                      <span className="typing-effect">username_check</span>
                      <span className="animate-pulse ml-1 text-purple-500">|</span>
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{SLIDES[1].title}</h3>
                </div>
              )}

              {/* Slide 2: Scanning (Tech style) */}
              {activeSlide === 2 && (
                <div className="animate-slideUp w-full">
                  <div className="relative w-32 h-32 mx-auto mb-8">
                    <div className="absolute inset-0 border-4 border-purple-500/20 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 border-4 border-t-purple-500 border-r-transparent border-b-purple-500 border-l-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-4xl">🤖</div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{SLIDES[2].title}</h3>
                  <div className="inline-block text-left space-y-2 bg-black/40 p-4 rounded-xl border border-white/10 font-mono text-sm sm:text-base text-green-400 w-64">
                    <div className="flex justify-between"><span>API Connect</span><span>[OK]</span></div>
                    <div className="flex justify-between"><span>Bio Analysis</span><span>[OK]</span></div>
                    <div className="flex justify-between"><span>Risk Calc</span><span>...</span></div>
                  </div>
                </div>
              )}

              {/* Slide 3: Result */}
              {activeSlide === 3 && (
                <div className="animate-slideUp">
                  <div className="inline-block bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/50 rounded-3xl p-8 mb-8 backdrop-blur-xl animate-bounce-slow">
                    <div className="text-5xl sm:text-6xl font-black text-white mb-2 drop-shadow-lg">High Risk</div>
                    <div className="text-lg text-red-300 uppercase tracking-widest font-bold">Score: 85/100</div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{SLIDES[3].title}</h3>
                </div>
              )}

            </div>

            {/* END SCREEN OVERLAY (Replay) */}
            {showReplay && (
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-40 flex items-center justify-center animate-fadeIn">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-6">Demo Completed</h3>
                  <div className="flex items-center justify-center space-x-4">
                    <button
                      onClick={(e) => { e.stopPropagation(); restart(); }}
                      className="flex items-center space-x-2 bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" /></svg>
                      <span>Watch Again</span>
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); onClose(); }}
                      className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PLAYER CONTROLS (Always Visible) */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 z-30 flex items-center space-x-4"
            onClick={(e) => e.stopPropagation()} // Prevent click passing to video toggle
          >
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="text-white hover:text-purple-400 transition-colors focus:outline-none"
            >
              {isPlaying ? (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
              ) : (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              )}
            </button>

            {/* Progress Bar Container */}
            <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden relative cursor-pointer group/progress">
              <div
                className="absolute inset-y-0 left-0 bg-red-600 rounded-full transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Time Display (Optional) */}
            <div className="text-white/70 text-xs font-mono w-12 text-right">
              {Math.round((progress / 100) * (TOTAL_DURATION / 1000))}s
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
