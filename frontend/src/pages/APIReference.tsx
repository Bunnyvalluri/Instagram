export default function APIReference() {
  const endpoints = [
    {
      method: "POST",
      path: "/api/v1/analyze",
      description: "Analyze an Instagram account for risk factors",
      auth: "Required",
      rateLimit: "100/hour (Free), Unlimited (Pro)"
    },
    {
      method: "GET",
      path: "/api/v1/analysis/:id",
      description: "Retrieve a specific analysis by ID",
      auth: "Required",
      rateLimit: "1000/hour"
    },
    {
      method: "GET",
      path: "/api/v1/history",
      description: "Get analysis history for your account",
      auth: "Required",
      rateLimit: "500/hour"
    },
    {
      method: "POST",
      path: "/api/v1/batch",
      description: "Analyze multiple accounts in a single request",
      auth: "Required (Pro+)",
      rateLimit: "10/hour (Pro), Unlimited (Enterprise)"
    },
    {
      method: "GET",
      path: "/api/v1/stats",
      description: "Get usage statistics and quota information",
      auth: "Required",
      rateLimit: "100/hour"
    },
    {
      method: "POST",
      path: "/api/v1/webhooks",
      description: "Configure webhook endpoints for real-time notifications",
      auth: "Required (Pro+)",
      rateLimit: "50/hour"
    }
  ]

  const requestExample = `POST /api/v1/analyze
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "username": "instagram_username",
  "options": {
    "includeHistory": true,
    "detailedReport": true,
    "factors": ["all"]
  }
}`

  const responseExample = `{
  "success": true,
  "data": {
    "id": "analysis_abc123",
    "username": "instagram_username",
    "riskScore": 75,
    "riskLevel": "high",
    "confidence": 92,
    "timestamp": "2026-02-05T08:00:00Z",
    "factors": {
      "suspiciousActivity": {
        "detected": true,
        "severity": "high",
        "details": "Unusual posting patterns detected"
      },
      "accountAge": {
        "detected": false,
        "severity": "low",
        "details": "Account created recently"
      },
      "followerRatio": {
        "detected": true,
        "severity": "medium",
        "details": "Abnormal follower/following ratio"
      }
    },
    "recommendations": [
      "Exercise caution when interacting",
      "Verify identity through other channels",
      "Report if suspicious activity continues"
    ]
  }
}`

  const sdks = [
    { name: "JavaScript/TypeScript", icon: "🟨", status: "Stable", version: "v2.1.0" },
    { name: "Python", icon: "🐍", status: "Stable", version: "v2.0.5" },
    { name: "Ruby", icon: "💎", status: "Stable", version: "v1.8.2" },
    { name: "PHP", icon: "🐘", status: "Stable", version: "v1.7.0" },
    { name: "Go", icon: "🔵", status: "Beta", version: "v0.9.1" },
    { name: "Java", icon: "☕", status: "Beta", version: "v0.8.0" }
  ]

  return (
    <div className="min-h-screen section-spacing">
      <div className="container-mobile mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeIn">
          <div className="inline-block bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6">
            <span className="text-sm sm:text-base text-slate-900 dark:text-white font-semibold">🔌 API Reference</span>
          </div>
          <h1 className="text-hero-mobile font-black text-slate-900 dark:text-white mb-4 sm:mb-6 px-2">
            API Reference
          </h1>
          <p className="text-body-mobile text-slate-600 dark:text-white/70 max-w-3xl mx-auto px-4">
            Complete REST API documentation for InstaGuard. Build powerful integrations with our risk detection platform.
          </p>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 max-w-6xl mx-auto">
          <div className="glass-mobile rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center">
            <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🚀</div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">Base URL</h3>
            <code className="text-xs sm:text-sm text-purple-600 dark:text-pink-500 bg-white/40 dark:bg-black/40 px-2 sm:px-3 py-1 rounded break-all">
              https://api.instaguard.io/v1
            </code>
          </div>
          <div className="glass-mobile rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center">
            <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">🔐</div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">Authentication</h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-white/70">Bearer Token (API Key)</p>
          </div>
          <div className="glass-mobile rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center">
            <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">📊</div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">Response Format</h3>
            <p className="text-sm text-slate-600 dark:text-white/70">JSON (UTF-8)</p>
          </div>
        </div>

        {/* Endpoints */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 px-2">API Endpoints</h2>
          <div className="space-y-3 sm:space-y-4">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="glass-mobile rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:scale-[1.02] transition-apple cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 md:mb-0 flex-wrap">
                    <span className={`px-2 sm:px-3 py-1 rounded-lg font-bold text-xs sm:text-sm ${endpoint.method === 'GET' ? 'bg-blue-500 text-white' :
                      endpoint.method === 'POST' ? 'bg-green-500 text-white' :
                        endpoint.method === 'PUT' ? 'bg-yellow-500 text-white' :
                          'bg-red-500 text-white'
                      }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-sm sm:text-base md:text-lg font-mono text-purple-600 dark:text-pink-500 break-all">
                      {endpoint.path}
                    </code>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">
                      {endpoint.auth}
                    </span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-700 dark:text-white/80 mb-2">{endpoint.description}</p>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-white/60">
                  <strong>Rate Limit:</strong> {endpoint.rateLimit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Request/Response Examples */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Request */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 px-2">Request Example</h2>
              <div className="glass-mobile rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-white/70">cURL</span>
                  <button className="text-xs sm:text-sm text-purple-600 dark:text-pink-500 hover:underline font-semibold">
                    Copy
                  </button>
                </div>
                <pre className="bg-slate-900 dark:bg-black/40 rounded-xl p-3 sm:p-4 overflow-x-auto">
                  <code className="text-xs text-green-400 font-mono whitespace-pre">{requestExample}</code>
                </pre>
              </div>
            </div>

            {/* Response */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 px-2">Response Example</h2>
              <div className="glass-mobile rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-slate-600 dark:text-white/70">JSON</span>
                  <button className="text-sm text-purple-600 dark:text-pink-500 hover:underline font-semibold">
                    Copy
                  </button>
                </div>
                <pre className="bg-slate-900 dark:bg-black/40 rounded-xl p-4 overflow-x-auto max-h-96">
                  <code className="text-xs text-blue-400 font-mono whitespace-pre">{responseExample}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* SDKs */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 text-center px-4">Official SDKs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {sdks.map((sdk, index) => (
              <div key={index} className="glass-mobile rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:scale-105 transition-apple">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{sdk.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">{sdk.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs px-2 py-1 rounded ${sdk.status === 'Stable' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                    'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
                    }`}>
                    {sdk.status}
                  </span>
                  <span className="text-xs text-slate-600 dark:text-white/60">{sdk.version}</span>
                </div>
                <button className="btn-touch w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-apple text-sm sm:text-base">
                  View Docs
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Error Codes */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8 px-2">Common Error Codes</h2>
          <div className="glass-mobile rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <div className="space-y-3 sm:space-y-4">
              {[
                { code: 400, message: "Bad Request", desc: "Invalid request parameters" },
                { code: 401, message: "Unauthorized", desc: "Invalid or missing API key" },
                { code: 403, message: "Forbidden", desc: "Insufficient permissions" },
                { code: 429, message: "Too Many Requests", desc: "Rate limit exceeded" },
                { code: 500, message: "Internal Server Error", desc: "Something went wrong on our end" }
              ].map((error, index) => (
                <div key={index} className="flex items-start p-3 sm:p-4 rounded-xl bg-white/20 dark:bg-white/5">
                  <code className="text-red-500 font-bold mr-3 sm:mr-4 text-base sm:text-lg flex-shrink-0">{error.code}</code>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">{error.message}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-white/70">{error.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="glass-mobile rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Ready to Get Started?</h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-white/70 mb-6 sm:mb-8 px-2">
            Get your API key and start building in minutes.
          </p>
          <button className="btn-touch bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-apple transform hover:scale-105">
            Get API Key
          </button>
        </div>
      </div>
    </div>
  )
}
