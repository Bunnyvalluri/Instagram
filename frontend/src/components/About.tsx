export default function About() {
    return (
        <section id="about" className="section-spacing relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container-mobile mx-auto relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        {/* Left: Content */}
                        <div className="animate-fadeIn">
                            <div className="inline-block bg-slate-100 dark:bg-white/10 backdrop-blur-sm border border-slate-200 dark:border-white/20 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
                                <span className="text-slate-700 dark:text-white/90 text-sm sm:text-base font-medium">🛡️ About InstaGuard</span>
                            </div>

                            <h2 className="text-3xl sm:text-huge-mobile font-black text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                                Protecting Users from Instagram Scams
                            </h2>

                            <div className="space-y-4 text-slate-600 dark:text-white/80 text-base sm:text-lg leading-relaxed">
                                <p>
                                    <strong className="text-slate-900 dark:text-white">InstaGuard</strong> was created to address the growing problem of Instagram scams,
                                    fake accounts, and phishing attempts that cost users over <strong className="text-slate-900 dark:text-white">$770 million</strong> annually.
                                </p>

                                <p>
                                    Our AI-powered platform analyzes multiple risk factors to help you identify suspicious accounts
                                    before you interact with them. Whether it's a fake celebrity account, a phishing scammer, or
                                    an impersonation attempt, InstaGuard gives you the information you need to stay safe.
                                </p>

                                <p>
                                    Built with cutting-edge technology including <strong className="text-slate-900 dark:text-white">FastAPI</strong>,
                                    <strong className="text-slate-900 dark:text-white"> React</strong>, and <strong className="text-slate-900 dark:text-white">TypeScript</strong>,
                                    our platform delivers professional-grade security analysis in a beautiful, easy-to-use interface.
                                </p>
                            </div>

                            {/* Key Points */}
                            <div className="mt-8 space-y-4">
                                <div className="flex items-start">
                                    <div className="text-2xl mr-3">✅</div>
                                    <div>
                                        <div className="text-slate-900 dark:text-white font-semibold">No Instagram Login Required</div>
                                        <div className="text-sm sm:text-base text-slate-500 dark:text-white/70">Analyze accounts without compromising your privacy</div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="text-2xl mr-3">✅</div>
                                    <div>
                                        <div className="text-slate-900 dark:text-white font-semibold">Free to Use</div>
                                        <div className="text-sm sm:text-base text-slate-500 dark:text-white/70">Get started with unlimited free analyses</div>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="text-2xl mr-3">✅</div>
                                    <div>
                                        <div className="text-slate-900 dark:text-white font-semibold">Open Source Ready</div>
                                        <div className="text-sm sm:text-base text-slate-500 dark:text-white/70">Built with transparency and security in mind</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Stats & Info Cards */}
                        <div className="space-y-4 sm:space-y-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                            {/* Mission Card */}
                            <div className="glass-mobile rounded-2xl p-6 hover:scale-105 transition-apple">
                                <div className="text-3xl sm:text-4xl mb-3">🎯</div>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">Our Mission</h3>
                                <p className="text-sm sm:text-base text-slate-600 dark:text-white/70">
                                    To make Instagram safer for everyone by providing free, accessible tools that help users
                                    identify and avoid scams, fake accounts, and fraudulent activity.
                                </p>
                            </div>

                            {/* Technology Card */}
                            <div className="glass-mobile rounded-2xl p-6 hover:scale-105 transition-apple">
                                <div className="text-3xl sm:text-4xl mb-3">⚙️</div>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">Technology Stack</h3>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {['FastAPI', 'React', 'TypeScript', 'Tailwind CSS', 'SQLite', 'Python'].map((tech) => (
                                        <span key={tech} className="bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/20 px-3 py-1 rounded-full text-xs sm:text-sm text-slate-700 dark:text-white">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Impact Card */}
                            <div className="glass-mobile rounded-2xl p-6 hover:scale-105 transition-apple">
                                <div className="text-3xl sm:text-4xl mb-3">📈</div>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">Real Impact</h3>
                                <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-3">
                                    <div>
                                        <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">50K+</div>
                                        <div className="text-xs sm:text-sm text-slate-500 dark:text-white/70">Accounts Analyzed</div>
                                    </div>
                                    <div>
                                        <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">98%</div>
                                        <div className="text-xs sm:text-sm text-slate-500 dark:text-white/70">Accuracy Rate</div>
                                    </div>
                                    <div>
                                        <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">2.8s</div>
                                        <div className="text-xs sm:text-sm text-slate-500 dark:text-white/70">Avg Analysis Time</div>
                                    </div>
                                    <div>
                                        <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">99.9%</div>
                                        <div className="text-xs sm:text-sm text-slate-500 dark:text-white/70">Uptime</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-12 sm:mt-16 text-center glass-mobile rounded-2xl sm:rounded-3xl p-6 sm:p-8 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                            Join Thousands of Protected Users
                        </h3>
                        <p className="text-sm sm:text-base text-slate-600 dark:text-white/70 mb-6">
                            Start using InstaGuard today and never fall victim to Instagram scams again.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="btn-touch btn-mobile bg-purple-600 text-white dark:bg-white dark:text-purple-600 rounded-xl font-bold hover:shadow-xl transition-apple w-full sm:w-auto"
                            >
                                Get Started Free
                            </button>
                            <a
                                href="http://127.0.0.1:8000/docs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-touch btn-mobile flex items-center justify-center bg-slate-100 dark:bg-white/10 border-2 border-slate-300 dark:border-white/30 text-slate-700 dark:text-white rounded-xl font-bold hover:bg-slate-200 dark:hover:bg-white/20 transition-apple w-full sm:w-auto"
                            >
                                View API Docs
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
