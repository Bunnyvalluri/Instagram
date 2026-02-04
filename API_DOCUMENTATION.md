# 📚 API Documentation - Instagram Account Risk Detector

## 🌐 API Overview

**Base URL**: `http://127.0.0.1:8000`  
**API Version**: `2.0.0`  
**OpenAPI Spec**: `3.0.2`  
**Interactive Docs**: http://127.0.0.1:8000/docs  
**Alternative Docs**: http://127.0.0.1:8000/redoc  

---

## 📋 API Endpoints

### **1. Root Endpoint**

```http
GET /
```

**Description**: Get API information and status

**Response** (200 OK):
```json
{
  "message": "Instagram Account Risk Detector API",
  "version": "2.0.0",
  "status": "active",
  "docs": "/docs"
}
```

**Example**:
```bash
curl http://127.0.0.1:8000/
```

---

### **2. Analyze Account** ⭐ **MAIN ENDPOINT**

```http
POST /api/analyze
```

**Description**: Analyze an Instagram account for risk indicators

**Request Headers**:
```
Content-Type: application/json
```

**Request Body** (`InstagramAccountInput`):

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | ✅ Yes | Instagram username |
| `followers` | integer | ❌ No | Number of followers |
| `following` | integer | ❌ No | Number of following |
| `posts` | integer | ❌ No | Number of posts |
| `account_age_days` | integer | ❌ No | Account age in days |
| `verified` | boolean | ❌ No | Verification status |
| `visibility` | string | ❌ No | "public" or "private" |
| `has_profile_pic` | string | ❌ No | "yes", "no", or "suspicious" |
| `bio_text` | string | ❌ No | Bio text content |
| `bio_links` | string | ❌ No | "yes", "no", "suspicious", "multiple" |
| `dm_activity` | string | ❌ No | "normal", "unsolicited", "suspicious" |

**Request Example**:
```json
{
  "username": "test_account",
  "followers": 150,
  "following": 800,
  "posts": 10,
  "account_age_days": 45,
  "verified": false,
  "visibility": "public",
  "has_profile_pic": "yes",
  "bio_text": "DM for prizes!",
  "bio_links": "suspicious",
  "dm_activity": "unsolicited"
}
```

**Response** (200 OK) - `RiskAnalysisResponse`:

| Field | Type | Description |
|-------|------|-------------|
| `username` | string | Instagram username |
| `risk_score` | integer | Risk score (0-100) |
| `risk_level` | string | "Low Risk", "Moderate Risk", or "High Risk" |
| `confidence` | integer | Confidence percentage (0-100) |
| `confidence_label` | string | "Low", "Medium", or "High" |
| `reasons` | array[string] | List of risk indicators |
| `recommendations` | array[string] | Safety recommendations |
| `timestamp` | string | ISO 8601 timestamp |

**Response Example**:
```json
{
  "username": "test_account",
  "risk_score": 65,
  "risk_level": "High Risk",
  "confidence": 85,
  "confidence_label": "High",
  "reasons": [
    "Account is not verified by Instagram",
    "Relatively new account (45 days old)",
    "Following unusually high number of accounts (800)",
    "Bio contains suspicious keywords: promotional language",
    "Bio contains suspicious external links",
    "Sends unsolicited direct messages"
  ],
  "recommendations": [
    "Exercise extreme caution when interacting",
    "Verify account authenticity through official channels",
    "Avoid clicking on external links in bio or messages",
    "Check if mutual friends follow this account",
    "Never click suspicious links - they may be phishing attempts",
    "Unusual follower patterns suggest automated/fake account"
  ],
  "timestamp": "2026-02-04T20:30:00.123456"
}
```

**cURL Example**:
```bash
curl -X POST "http://127.0.0.1:8000/api/analyze" \
  -H "Content-Type: application/json" \
  -d '{
    "username": "test_account",
    "followers": 150,
    "following": 800,
    "posts": 10,
    "account_age_days": 45,
    "verified": false,
    "bio_links": "suspicious",
    "dm_activity": "unsolicited"
  }'
```

**Python Example**:
```python
import requests

data = {
    "username": "test_account",
    "followers": 150,
    "following": 800,
    "posts": 10,
    "account_age_days": 45,
    "verified": False,
    "bio_links": "suspicious",
    "dm_activity": "unsolicited"
}

response = requests.post(
    "http://127.0.0.1:8000/api/analyze",
    json=data
)

result = response.json()
print(f"Risk Score: {result['risk_score']}/100")
print(f"Risk Level: {result['risk_level']}")
```

**JavaScript Example**:
```javascript
const data = {
  username: "test_account",
  followers: 150,
  following: 800,
  posts: 10,
  account_age_days: 45,
  verified: false,
  bio_links: "suspicious",
  dm_activity: "unsolicited"
};

fetch("http://127.0.0.1:8000/api/analyze", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(result => {
    console.log(`Risk Score: ${result.risk_score}/100`);
    console.log(`Risk Level: ${result.risk_level}`);
  });
```

---

### **3. Get Analysis History**

```http
GET /api/history?limit=10
```

**Description**: Get recent analysis history

**Query Parameters**:

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `limit` | integer | ❌ No | 10 | Number of records to return |

**Response** (200 OK):
```json
{
  "history": [
    {
      "username": "test_account",
      "risk_score": 65,
      "risk_level": "High Risk",
      "confidence": 85,
      "confidence_label": "High",
      "reasons": ["..."],
      "recommendations": ["..."],
      "timestamp": "2026-02-04T20:30:00.123456"
    }
  ],
  "count": 1
}
```

**cURL Example**:
```bash
curl "http://127.0.0.1:8000/api/history?limit=5"
```

**Python Example**:
```python
import requests

response = requests.get(
    "http://127.0.0.1:8000/api/history",
    params={"limit": 5}
)

history = response.json()
print(f"Total analyses: {history['count']}")
for item in history['history']:
    print(f"- @{item['username']}: {item['risk_level']}")
```

---

## 🎯 Risk Scoring Algorithm

### **Risk Score Range**
- **0-39**: Low Risk (Safe account patterns)
- **40-64**: Moderate Risk (Exercise caution)
- **65-100**: High Risk (Strong scam indicators)

### **Risk Factors Analyzed** (9 factors)

| Factor | Weight | Description |
|--------|--------|-------------|
| **Account Verification** | ±20 | Verified accounts are safer |
| **Account Age** | 0-25 | Newer accounts are riskier |
| **Follower/Following Ratio** | 0-20 | Suspicious patterns detected |
| **Profile Picture** | 0-15 | Missing or suspicious images |
| **Bio Content** | 0-25 | Suspicious keywords detected |
| **External Links** | 0-20 | Risky links in bio |
| **DM Activity** | 0-30 | Highest risk factor |
| **Post Count** | 0-15 | No posts is suspicious |
| **Account Visibility** | N/A | Affects confidence score |

### **Confidence Score**
- **70-100%**: High confidence (sufficient data)
- **40-69%**: Medium confidence (limited data)
- **0-39%**: Low confidence (very limited data)

---

## 📊 Response Status Codes

| Code | Status | Description |
|------|--------|-------------|
| `200` | OK | Request successful |
| `422` | Unprocessable Entity | Validation error (missing required fields) |
| `500` | Internal Server Error | Server error (analysis failed) |

---

## 🔒 CORS Configuration

The API has CORS enabled for:
- `http://localhost:3000` (React frontend)
- `http://localhost:5173` (Vite default port)

All HTTP methods and headers are allowed.

---

## 📝 Data Models

### **InstagramAccountInput**
```typescript
{
  username: string;           // Required
  followers?: number;         // Optional
  following?: number;         // Optional
  posts?: number;            // Optional
  account_age_days?: number; // Optional
  verified?: boolean;        // Optional
  visibility?: string;       // Optional: "public" | "private"
  has_profile_pic?: string;  // Optional: "yes" | "no" | "suspicious"
  bio_text?: string;         // Optional
  bio_links?: string;        // Optional: "yes" | "no" | "suspicious" | "multiple"
  dm_activity?: string;      // Optional: "normal" | "unsolicited" | "suspicious"
}
```

### **RiskAnalysisResponse**
```typescript
{
  username: string;
  risk_score: number;        // 0-100
  risk_level: string;        // "Low Risk" | "Moderate Risk" | "High Risk"
  confidence: number;        // 0-100
  confidence_label: string;  // "Low" | "Medium" | "High"
  reasons: string[];         // Array of risk indicators
  recommendations: string[]; // Array of safety tips
  timestamp: string;         // ISO 8601 format
}
```

---

## 🧪 Testing Examples

### **Test Case 1: High Risk Account**
```json
{
  "username": "scammer_test",
  "followers": 25,
  "following": 1500,
  "posts": 0,
  "account_age_days": 20,
  "verified": false,
  "has_profile_pic": "no",
  "bio_links": "suspicious",
  "dm_activity": "suspicious"
}
```
**Expected**: Risk Score 75-100, High Risk

### **Test Case 2: Moderate Risk Account**
```json
{
  "username": "suspicious_user",
  "followers": 200,
  "following": 800,
  "posts": 10,
  "account_age_days": 60,
  "verified": false,
  "bio_links": "yes",
  "dm_activity": "unsolicited"
}
```
**Expected**: Risk Score 40-64, Moderate Risk

### **Test Case 3: Low Risk Account**
```json
{
  "username": "legitimate_user",
  "followers": 5000,
  "following": 500,
  "posts": 200,
  "account_age_days": 730,
  "verified": true,
  "has_profile_pic": "yes"
}
```
**Expected**: Risk Score 0-39, Low Risk

---

## 🚀 Rate Limiting

Currently: **No rate limiting** (development mode)

For production, consider:
- 100 requests per minute per IP
- 1000 requests per hour per IP

---

## 🔧 Error Handling

### **Validation Error (422)**
```json
{
  "detail": [
    {
      "loc": ["body", "username"],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```

### **Server Error (500)**
```json
{
  "detail": "Analysis failed: [error message]"
}
```

---

## 📖 Interactive Documentation

### **Swagger UI** (Recommended)
🌐 http://127.0.0.1:8000/docs

Features:
- Interactive API testing
- Try out endpoints directly
- See request/response examples
- Auto-generated from code

### **ReDoc** (Alternative)
🌐 http://127.0.0.1:8000/redoc

Features:
- Clean, readable documentation
- Three-column layout
- Search functionality
- Downloadable OpenAPI spec

---

## 🎯 Best Practices

### **1. Always Provide Username**
```json
{
  "username": "required_field"
}
```

### **2. Provide More Data for Better Accuracy**
```json
{
  "username": "test_account",
  "followers": 150,
  "following": 800,
  "posts": 10,
  "account_age_days": 45,
  "verified": false,
  "has_profile_pic": "yes",
  "bio_text": "Check my link!",
  "bio_links": "suspicious",
  "dm_activity": "unsolicited"
}
```

### **3. Check Confidence Score**
```python
if result['confidence'] >= 70:
    # High confidence - trust the assessment
    print("Reliable assessment")
else:
    # Low confidence - gather more data
    print("Limited data - results may vary")
```

### **4. Use Recommendations**
```python
for rec in result['recommendations']:
    print(f"Safety Tip: {rec}")
```

---

## 📞 Support

- **Documentation**: http://127.0.0.1:8000/docs
- **OpenAPI Spec**: http://127.0.0.1:8000/openapi.json
- **GitHub**: [Your Repository]
- **Issues**: [Your Issues Page]

---

## 📜 License

MIT License - Free to use and integrate

---

**API Version**: 2.0.0  
**Last Updated**: February 4, 2026  
**Status**: ✅ Production Ready
