import { useState } from 'react'
import VideoModal from './VideoModal'

interface HeroProps {
    onGetStarted: () => void
}

export default function Hero({ onGetStarted }: HeroProps) {
    const [isVideoOpen, setIsVideoOpen] = useState(false)

    return (
        <header className="relative overflow-hidden min-h-screen flex items-center justify-center section-spacing pt-32 pb-20" role="banner">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="container-mobile mx-auto relative z-10 w-full">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="flex justify-center mb-6 sm:mb-8 animate-fadeIn">
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 sm:px-6 sm:py-2.5 shadow-lg">
                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                            <span className="text-slate-700 dark:text-white/90 text-xs sm:text-sm font-semibold tracking-wide">Free Instagram Safety Checker • No Login Required</span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-hero-mobile font-black text-slate-900 dark:text-white text-center mb-6 sm:mb-8 leading-tight sm:leading-tight animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                        Is This Instagram Account
                        <br />
                        <span className="gradient-text">Safe or a Scam?</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-body-mobile text-slate-600 dark:text-white/80 text-center max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                        Check any Instagram account for scam signs in 3 seconds.
                        <br className="hidden md:block" />
                        Get instant risk score, detailed warnings, and safety tips.
                    </p>

                    {/* How it works - Simple */}
                    <div className="max-w-2xl mx-auto mb-10 sm:mb-16 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                        <div className="glass-mobile rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center text-slate-800 dark:text-white">
                            <p className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
                                🔍 How It Works (3 Easy Steps)
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
                                <div className="p-2">
                                    <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">1️⃣</div>
                                    <div className="text-sm sm:text-base font-medium">Enter Instagram username</div>
                                </div>
                                <div className="p-2">
                                    <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">2️⃣</div>
                                    <div className="text-sm sm:text-base font-medium">Add account details</div>
                                </div>
                                <div className="p-2">
                                    <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">3️⃣</div>
                                    <div className="text-sm sm:text-base font-medium">Get instant safety report</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 sm:mb-20 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                        <button
                            onClick={onGetStarted}
                            className="btn-touch btn-mobile group relative bg-white text-purple-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-purple-500/50 transition-apple hover:scale-105 active:scale-95 w-full sm:w-auto"
                        >
                            <span className="relative z-10">Start Free Analysis</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                                Start Free Analysis →
                            </span>
                        </button>
                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="btn-touch btn-mobile bg-slate-200/50 dark:bg-white/10 backdrop-blur-sm border-2 border-slate-300 dark:border-white/30 text-slate-700 dark:text-white rounded-2xl font-bold text-lg hover:bg-slate-200 dark:hover:bg-white/20 transition-apple active:scale-95 w-full sm:w-auto"
                        >
                            Watch Demo
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                        <div className="glass-mobile rounded-2xl p-6 hover:scale-105 transition-apple">
                            <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-1 sm:mb-2">50K+</div>
                            <div className="text-sm sm:text-base text-slate-500 dark:text-white/70 font-medium">Accounts Analyzed</div>
                        </div>
                        <div className="glass-mobile rounded-2xl p-6 hover:scale-105 transition-apple">
                            <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-1 sm:mb-2">98%</div>
                            <div className="text-sm sm:text-base text-slate-500 dark:text-white/70 font-medium">Accuracy Rate</div>
                        </div>
                        <div className="glass-mobile rounded-2xl p-6 hover:scale-105 transition-apple">
                            <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-1 sm:mb-2">&lt;3s</div>
                            <div className="text-sm sm:text-base text-slate-500 dark:text-white/70 font-medium">Analysis Time</div>
                        </div>
                    </div>
                </div>
            </div>

            <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
        </header>
    )
}
