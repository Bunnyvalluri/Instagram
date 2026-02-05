export default function LoadingSpinner() {
    return (
        <div className="glass rounded-3xl p-12 shadow-2xl">
            <div className="flex flex-col items-center justify-center space-y-6">
                {/* Animated Spinner */}
                <div className="relative w-24 h-24">
                    <div className="absolute inset-0 border-4 border-slate-200 dark:border-white/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-transparent border-t-purple-500 border-r-pink-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-2 border-4 border-transparent border-t-pink-500 border-r-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
                </div>

                {/* Loading Text */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Analyzing Account...</h3>
                    <p className="text-slate-600 dark:text-white/70">Our AI is processing the data</p>
                </div>

                {/* Progress Steps */}
                <div className="w-full max-w-sm space-y-3">
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-slate-600 dark:text-white/80 text-sm">Extracting features...</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <span className="text-slate-600 dark:text-white/80 text-sm">Computing risk signals...</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        <span className="text-slate-600 dark:text-white/80 text-sm">Generating report...</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full max-w-sm bg-slate-100 dark:bg-white/10 rounded-full h-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" style={{ width: '70%' }}></div>
                </div>
            </div>
        </div>
    )
}
