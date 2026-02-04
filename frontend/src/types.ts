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
