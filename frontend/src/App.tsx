import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import AnalysisForm from './components/AnalysisForm'
import ResultDashboard from './components/ResultDashboard'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'

export interface AnalysisResult {
    username: string
    risk_score: number
    risk_level: string
    confidence: number
    confidence_label: string
    reasons: string[]
    recommendations: string[]
    timestamp: string
}

function App() {
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
        <div className="min-h-screen">
            <Navbar />

            {!showForm && !result && (
                <>
                    <Hero onGetStarted={handleStartAnalysis} />
                    <Features />
                    <HowItWorks />
                    <About />
                </>
            )}

            {(showForm || result) && (
                <div id="analysis-section" className="container mx-auto px-4 py-12 max-w-7xl">
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
                            {loading && <LoadingSpinner />}
                            {result && !loading && (
                                <ResultDashboard
                                    result={result}
                                    onNewAnalysis={handleNewAnalysis}
                                />
                            )}
                            {!result && !loading && (
                                <div className="glass rounded-3xl p-8 text-white text-center h-full flex items-center justify-center">
                                    <div>
                                        <div className="text-6xl mb-4">🛡️</div>
                                        <h3 className="text-2xl font-bold mb-2">Ready to Analyze</h3>
                                        <p className="text-white/80">Fill out the form to get started with your Instagram account risk assessment</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    )
}

export default App
