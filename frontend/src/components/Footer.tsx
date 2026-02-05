import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="glass border-t border-slate-800 dark:border-white/10 mt-12 sm:mt-20">
            <div className="container-mobile mx-auto py-8 sm:py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="text-3xl sm:text-4xl mr-3">
                                🛡️
                            </div>
                            <div>
                                <h3 className="text-slate-900 dark:text-white font-bold text-lg sm:text-xl">InstaGuard</h3>
                                <p className="text-slate-500 dark:text-white/60 text-xs">Risk Detection AI</p>
                            </div>
                        </div>
                        <p className="text-slate-600 dark:text-white/70 text-sm leading-relaxed max-w-md">
                            Advanced AI-powered Instagram account risk detection system.
                            Protect yourself from scams, fake accounts, and phishing attempts with cutting-edge technology.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-slate-500 hover:text-slate-900 dark:text-white/70 dark:hover:text-white transition-colors text-sm py-1 block">Home</Link></li>
                            <li><a href="/#features" className="text-slate-500 hover:text-slate-900 dark:text-white/70 dark:hover:text-white transition-colors text-sm py-1 block">Features</a></li>
                            <li><a href="/#how-it-works" className="text-slate-500 hover:text-slate-900 dark:text-white/70 dark:hover:text-white transition-colors text-sm py-1 block">How It Works</a></li>
                            <li><Link to="/pricing" className="text-slate-500 hover:text-slate-900 dark:text-white/70 dark:hover:text-white transition-colors text-sm py-1 block">Pricing</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-slate-900 dark:text-white font-bold mb-4">Resources</h4>
                        <ul className="space-y-3">
                            <li><Link to="/documentation" className="text-slate-500 hover:text-slate-900 dark:text-white/70 dark:hover:text-white transition-colors text-sm py-1 block">Documentation</Link></li>
                            <li><Link to="/api-reference" className="text-slate-500 hover:text-slate-900 dark:text-white/70 dark:hover:text-white transition-colors text-sm py-1 block">API Reference</Link></li>
                            <li><Link to="/privacy-policy" className="text-slate-500 hover:text-slate-900 dark:text-white/70 dark:hover:text-white transition-colors text-sm py-1 block">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service" className="text-slate-500 hover:text-slate-900 dark:text-white/70 dark:hover:text-white transition-colors text-sm py-1 block">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 dark:text-white/60 text-xs sm:text-sm text-center md:text-left">
                        © 2026 InstaGuard. All rights reserved. Built with ❤️ for your safety.
                    </p>
                    <div className="flex items-center space-x-6">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-white/60 dark:hover:text-white transition-colors p-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:text-white/60 dark:hover:text-white transition-colors p-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
