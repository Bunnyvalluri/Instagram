# 🎨 Visual Guide: API Documentation Page

## What You See at http://127.0.0.1:8000/docs

---

## 📱 **Swagger UI Interface**

```
┌─────────────────────────────────────────────────────────────────────┐
│  Instagram Account Risk Detector API                    v2.0.0      │
│  Professional API for detecting Instagram account risks             │
│                                                                      │
│  [Authorize]                                    OAS 3.0.2           │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  default                                                             │
│                                                                      │
│  ▼ GET  /                                                           │
│     Root                                                            │
│     [Try it out]                                                    │
│                                                                      │
│  ▼ POST /api/analyze                                                │
│     Analyze Account                                                 │
│     Analyze an Instagram account for risk indicators                │
│     [Try it out]                                                    │
│                                                                      │
│     Request body *                                                  │
│     ┌─────────────────────────────────────────────────────────┐   │
│     │ {                                                        │   │
│     │   "username": "string",                                  │   │
│     │   "followers": 0,                                        │   │
│     │   "following": 0,                                        │   │
│     │   "posts": 0,                                            │   │
│     │   "account_age_days": 0,                                 │   │
│     │   "verified": true,                                      │   │
│     │   "visibility": "string",                                │   │
│     │   "has_profile_pic": "string",                           │   │
│     │   "bio_text": "string",                                  │   │
│     │   "bio_links": "string",                                 │   │
│     │   "dm_activity": "string"                                │   │
│     │ }                                                        │   │
│     └─────────────────────────────────────────────────────────┘   │
│                                                                      │
│     [Execute]                                                       │
│                                                                      │
│     Responses                                                       │
│     ┌─────────────────────────────────────────────────────────┐   │
│     │ Code  Description                                        │   │
│     │ 200   Successful Response                                │   │
│     │ 422   Validation Error                                   │   │
│     └─────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ▼ GET  /api/history                                                │
│     Get History                                                     │
│     Get recent analysis history                                     │
│     [Try it out]                                                    │
│                                                                      │
│     Parameters                                                      │
│     limit  integer  (query)  Default: 10                           │
│                                                                      │
│     [Execute]                                                       │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│  Schemas                                                             │
│                                                                      │
│  ▼ InstagramAccountInput                                            │
│     username*         string                                        │
│     followers         integer                                       │
│     following         integer                                       │
│     posts             integer                                       │
│     account_age_days  integer                                       │
│     verified          boolean                                       │
│     visibility        string                                        │
│     has_profile_pic   string                                        │
│     bio_text          string                                        │
│     bio_links         string                                        │
│     dm_activity       string                                        │
│                                                                      │
│  ▼ RiskAnalysisResponse                                             │
│     username*             string                                    │
│     risk_score*           integer                                   │
│     risk_level*           string                                    │
│     confidence*           integer                                   │
│     confidence_label*     string                                    │
│     reasons*              Array[string]                             │
│     recommendations*      Array[string]                             │
│     timestamp*            string                                    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🎯 **How to Use Swagger UI**

### **Step 1: Click "Try it out"**
```
┌─────────────────────────────────────────┐
│  POST /api/analyze                      │
│  [Try it out]  ← Click this button     │
└─────────────────────────────────────────┘
```

### **Step 2: Edit the Request Body**
```
Request body *
┌─────────────────────────────────────────┐
│ {                                       │
│   "username": "test_scammer",          │ ← Edit here
│   "followers": 25,                      │
│   "following": 1500,                    │
│   "posts": 0,                           │
│   "account_age_days": 20,               │
│   "verified": false,                    │
│   "has_profile_pic": "no",              │
│   "bio_links": "suspicious",            │
│   "dm_activity": "suspicious"           │
│ }                                       │
└─────────────────────────────────────────┘
```

### **Step 3: Click "Execute"**
```
┌─────────────────────────────────────────┐
│  [Execute]  ← Click to send request    │
└─────────────────────────────────────────┘
```

### **Step 4: View Response**
```
Responses

Server response
Code: 200
Details:
┌─────────────────────────────────────────┐
│ {                                       │
│   "username": "test_scammer",           │
│   "risk_score": 100,                    │
│   "risk_level": "High Risk",            │
│   "confidence": 100,                    │
│   "confidence_label": "High",           │
│   "reasons": [                          │
│     "Account is not verified",          │
│     "Very new account (20 days)",       │
│     "Following unusually high (1500)",  │
│     "No profile picture",               │
│     "Suspicious external links",        │
│     "Suspicious DM activity"            │
│   ],                                    │
│   "recommendations": [                  │
│     "DO NOT interact with account",     │
│     "Block immediately",                │
│     "Report to Instagram"               │
│   ],                                    │
│   "timestamp": "2026-02-04T20:30:00"    │
│ }                                       │
└─────────────────────────────────────────┘

Response headers
┌─────────────────────────────────────────┐
│ content-type: application/json          │
│ date: Tue, 04 Feb 2026 15:00:00 GMT     │
│ server: uvicorn                         │
└─────────────────────────────────────────┘
```

---

## 🎨 **Color Scheme in Swagger UI**

- **GET requests**: Blue background
- **POST requests**: Green background
- **PUT requests**: Orange background
- **DELETE requests**: Red background
- **Required fields**: Red asterisk (*)
- **Optional fields**: No asterisk

---

## 📋 **Features of Swagger UI**

### ✅ **Interactive Testing**
- Click "Try it out" on any endpoint
- Edit request parameters directly
- Execute requests and see live responses
- No need for external tools like Postman

### ✅ **Auto-Generated Documentation**
- Automatically created from FastAPI code
- Always up-to-date with latest changes
- Shows all request/response schemas
- Includes descriptions and examples

### ✅ **Schema Exploration**
- View all data models
- See required vs optional fields
- Understand data types
- Check validation rules

### ✅ **Code Examples**
- cURL commands auto-generated
- Copy-paste ready
- Works in any terminal

---

## 🔍 **Example: Testing the API**

### **1. Open Swagger UI**
Navigate to: http://127.0.0.1:8000/docs

### **2. Expand POST /api/analyze**
Click the green POST bar

### **3. Click "Try it out"**
Button appears in top right

### **4. Enter Test Data**
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

### **5. Click "Execute"**
Sends request to API

### **6. View Results**
- Response code: 200
- Response body: Full risk analysis
- Response time: ~0.03 seconds

---

## 📊 **What Each Section Shows**

### **Top Bar**
```
Instagram Account Risk Detector API  v2.0.0
Professional API for detecting Instagram account risks
```
- API title and version
- Description
- OpenAPI version

### **Endpoints Section**
```
▼ GET  /
▼ POST /api/analyze
▼ GET  /api/history
```
- All available endpoints
- HTTP methods (GET, POST, etc.)
- Endpoint paths
- Descriptions

### **Schemas Section**
```
▼ InstagramAccountInput
▼ RiskAnalysisResponse
▼ HTTPValidationError
```
- Data models
- Field types
- Required fields (marked with *)
- Optional fields

---

## 🎯 **Quick Actions**

### **Test High Risk Account**
1. Open http://127.0.0.1:8000/docs
2. Click POST /api/analyze
3. Click "Try it out"
4. Use this data:
```json
{
  "username": "scammer",
  "followers": 20,
  "following": 2000,
  "posts": 0,
  "account_age_days": 15,
  "verified": false,
  "has_profile_pic": "no",
  "bio_links": "suspicious",
  "dm_activity": "suspicious"
}
```
5. Click "Execute"
6. See Risk Score: 100/100

### **Test Low Risk Account**
Same steps, but use:
```json
{
  "username": "legitimate",
  "followers": 5000,
  "following": 500,
  "posts": 200,
  "account_age_days": 730,
  "verified": true,
  "has_profile_pic": "yes"
}
```
Expected: Risk Score: 0/100

---

## 🚀 **Benefits for Hackathon Demo**

### ✅ **Shows Professionalism**
- Auto-generated documentation
- Industry-standard format (OpenAPI)
- Interactive testing interface

### ✅ **Easy to Demonstrate**
- Live API testing
- No need for separate tools
- Visual and interactive

### ✅ **Impresses Technical Judges**
- Shows you understand API design
- Demonstrates best practices
- Production-ready documentation

---

## 📖 **Alternative: ReDoc**

Visit: http://127.0.0.1:8000/redoc

**Features**:
- Three-column layout
- Clean, readable design
- Search functionality
- Downloadable OpenAPI spec
- Better for reading than testing

---

## 🎬 **Demo Script for API Docs**

**During Presentation** (30 seconds):

1. "We also have professional API documentation"
2. Navigate to http://127.0.0.1:8000/docs
3. "This is auto-generated from our FastAPI code"
4. Click POST /api/analyze
5. "You can test the API right here"
6. Click "Try it out"
7. "Just enter data and execute"
8. Show the response
9. "Perfect for developers who want to integrate"

---

**YOUR API DOCUMENTATION IS PRODUCTION-READY! 📚**

Access it at: http://127.0.0.1:8000/docs
