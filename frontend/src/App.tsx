import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useLayoutEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import AnalysisForm from './components/AnalysisForm'
import ResultDashboard from './components/ResultDashboard'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'
import { AnalysisResult } from './types'

// Lazy Load Pages for Performance
const Pricing = lazy(() => import('./pages/Pricing'))
const Documentation = lazy(() => import('./pages/Documentation'))
const APIReference = lazy(() => import('./pages/APIReference'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))

// ScrollToTop Component
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

function HomePage() {
    const [result, setResult] = useState<AnalysisResult | null>(null)
    const [loading, setLoading] = useState(false)
    const [showForm, setShowForm] = useState(false)

    const handleAnalysisComplete = (analysisResult: AnalysisResult) => {
        setResult(analysisResult)
        setLoading(false)
    }

    const handleStartAnalysis = () => {
        setShowForm(true)
        // Smooth scroll to form
        setTimeout(() => {
            document.getElementById('analysis-section')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }, 100)
    }

    const handleNewAnalysis = () => {
        setResult(null)
        setShowForm(true)
    }

    return (
        <>
            {!showForm && !result && (
                <>
                    <Hero onGetStarted={handleStartAnalysis} />
                    <Features />
                    <HowItWorks />
                    <About />
                </>
            )}

            {(showForm || result) && (
                <div id="analysis-section" className="container mx-auto px-4 py-12 max-w-7xl animate-fadeIn">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left: Form */}
                        <div className="order-2 lg:order-1">
                            <AnalysisForm
                                onAnalysisComplete={handleAnalysisComplete}
                                setLoading={setLoading}
                            />
                        </div>

                        {/* Right: Results */}
                        <div className="order-1 lg:order-2">
                            {loading && (
                                <div className="h-full flex items-center justify-center p-12">
                                    <LoadingSpinner />
                                </div>
                            )}
                            {result && !loading && (
                                <ResultDashboard
                                    result={result}
                                    onNewAnalysis={handleNewAnalysis}
                                />
                            )}
                            {!result && !loading && (
                                <div className="glass rounded-3xl p-8 text-slate-900 dark:text-white text-center h-full flex flex-col items-center justify-center min-h-[400px]">
                                    <div className="text-6xl mb-6 animate-bounce-slow">🛡️</div>
                                    <h3 className="text-2xl font-bold mb-3">Ready to Analyze</h3>
                                    <p className="text-slate-600 dark:text-white/80 max-w-md mx-auto">
                                        Fill out the form to get a comprehensive risk assessment of any Instagram account using our advanced AI engine.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <Suspense fallback={
                        <div className="min-h-screen flex items-center justify-center">
                            <LoadingSpinner />
                        </div>
                    }>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/pricing" element={<Pricing />} />
                            <Route path="/documentation" element={<Documentation />} />
                            <Route path="/api-reference" element={<APIReference />} />
                            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                            <Route path="/terms-of-service" element={<TermsOfService />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />
            </div>
        </Router>
    )
}

export default App
