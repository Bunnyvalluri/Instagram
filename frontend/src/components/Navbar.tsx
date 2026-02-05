import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const scrollToSection = (id: string) => {
        setIsOpen(false)
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className="sticky top-0 z-50 border-b transition-colors duration-300 bg-white/80 backdrop-blur-md border-slate-200/50 dark:bg-black/20 dark:border-white/10">
            <div className="container-mobile mx-auto py-3 sm:py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl shadow-lg">
                            🛡️
                        </div>
                        <div>
                            <h1 className="text-slate-900 dark:text-white font-bold text-lg sm:text-xl">InstaGuard</h1>
                            <p className="text-slate-500 dark:text-white/60 text-[10px] sm:text-xs">Risk Detection AI</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <button
                            onClick={() => scrollToSection('features')}
                            className="text-slate-600 hover:text-purple-600 dark:text-white/80 dark:hover:text-white transition-colors font-medium text-sm lg:text-base"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection('how-it-works')}
                            className="text-slate-600 hover:text-purple-600 dark:text-white/80 dark:hover:text-white transition-colors font-medium text-sm lg:text-base"
                        >
                            How It Works
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-slate-600 hover:text-purple-600 dark:text-white/80 dark:hover:text-white transition-colors font-medium text-sm lg:text-base"
                        >
                            About
                        </button>
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
                        <ThemeToggle />
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 dark:text-white/80 dark:hover:text-white transition-colors text-sm font-medium"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            <span>GitHub</span>
                        </a>
                        <button className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 border border-transparent dark:border-white/20 shadow-lg shadow-purple-500/20 text-sm">
                            Sign In
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center space-x-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-600 dark:text-white/80 hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                        >
                            {!isOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 p-4 space-y-4 shadow-xl animate-fadeIn">
                        <div className="flex flex-col space-y-3">
                            <button
                                onClick={() => scrollToSection('features')}
                                className="text-left px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-white/90 font-medium transition-colors"
                            >
                                Features
                            </button>
                            <button
                                onClick={() => scrollToSection('how-it-works')}
                                className="text-left px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-white/90 font-medium transition-colors"
                            >
                                How It Works
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="text-left px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-white/90 font-medium transition-colors"
                            >
                                About
                            </button>
                        </div>
                        <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-3">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center space-x-2 w-full px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-white/90 font-medium transition-colors"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                                <span>GitHub</span>
                            </a>
                            <button className="w-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white px-4 py-3 rounded-xl font-bold transition-all duration-300 border border-transparent dark:border-white/20 shadow-lg shadow-purple-500/20">
                                Sign In
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
