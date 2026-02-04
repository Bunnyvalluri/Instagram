# 📱 UI GUIDE - What You'll See

## 🎯 **Simple Explanation of Your App**

Your app checks if Instagram accounts are safe or scams. It's like a "safety checker" for Instagram!

---

## 🌐 **When You Open http://localhost:3000**

### **Page 1: Home Page (Landing Page)**

```
┌────────────────────────────────────────────────────────┐
│  🛡️ InstaGuard    Features  How It Works  About      │ ← Top Menu
├────────────────────────────────────────────────────────┤
│                                                        │
│  🟢 Free Instagram Safety Checker • No Login Required │
│                                                        │
│         Is This Instagram Account                     │
│         Safe or a Scam?                               │ ← Big Title
│                                                        │
│  Check any Instagram account for scam signs in 3      │
│  seconds. Get instant risk score, detailed warnings,  │
│  and safety tips.                                     │
│                                                        │
│  ┌──────────────────────────────────────────────┐    │
│  │  🔍 How It Works (3 Easy Steps)              │    │
│  │  1️⃣ Enter Instagram username                 │    │
│  │  2️⃣ Add account details                      │    │
│  │  3️⃣ Get instant safety report                │    │
│  └──────────────────────────────────────────────┘    │
│                                                        │
│  [Start Free Analysis]  [Watch Demo]                  │ ← Click Here!
│                                                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐           │
│  │  50K+    │  │   98%    │  │   <3s    │           │
│  │ Analyzed │  │ Accuracy │  │ Analysis │           │
│  └──────────┘  └──────────┘  └──────────┘           │
│                                                        │
└────────────────────────────────────────────────────────┘
```

**What to do:** Click the **"Start Free Analysis"** button

---

### **Page 2: Check Account Page**

After clicking "Start Free Analysis", you'll see:

```
┌────────────────────────────────────────────────────────┐
│  🛡️ InstaGuard    Features  How It Works  About      │
├──────────────────────┬─────────────────────────────────┤
│                      │                                 │
│  Check Instagram     │   🛡️ Ready to Analyze          │
│  Account             │                                 │
│                      │   Fill out the form on the left │
│  Fill in what you    │   to get started!               │
│  know. Only username │                                 │
│  is required.        │                                 │
│                      │                                 │
│  💡 Tip: Find this   │                                 │
│  info on Instagram   │                                 │
│  profile without     │                                 │
│  following them.     │                                 │
│                      │                                 │
│  ┌────────────────┐  │                                 │
│  │ Username *     │  │                                 │
│  │ @instagram     │  │                                 │
│  ├────────────────┤  │                                 │
│  │ Followers      │  │                                 │
│  │ Following      │  │                                 │
│  │ Posts          │  │                                 │
│  ├────────────────┤  │                                 │
│  │ Account Age    │  │                                 │
│  │ Verified       │  │                                 │
│  │ Profile Pic    │  │                                 │
│  ├────────────────┤  │                                 │
│  │ Bio Text       │  │                                 │
│  │ Bio Links      │  │                                 │
│  │ DM Activity    │  │                                 │
│  ├────────────────┤  │                                 │
│  │ [🔍 Analyze]   │  │                                 │
│  └────────────────┘  │                                 │
│                      │                                 │
└──────────────────────┴─────────────────────────────────┘
```

**What to do:** 
1. Type Instagram username (required)
2. Fill in other details if you know them (optional)
3. Click **"🔍 Analyze Account Risk"** button

---

### **Page 3: Results Page**

After clicking "Analyze", you'll see:

```
┌────────────────────────────────────────────────────────┐
│  🛡️ InstaGuard    Features  How It Works  About      │
├──────────────────────┬─────────────────────────────────┤
│                      │                                 │
│  [Same Form]         │   Risk Analysis Results         │
│                      │                                 │
│                      │   ┌──────────────────────────┐  │
│                      │   │      Risk Score          │  │
│                      │   │   ┌──────────────┐      │  │
│                      │   │   │              │      │  │
│                      │   │   │      75      │      │  │
│                      │   │   │              │      │  │
│                      │   │   └──────────────┘      │  │
│                      │   │   🔴 High Risk           │  │
│                      │   └──────────────────────────┘  │
│                      │                                 │
│                      │   ⚠️ Risk Indicators:           │
│                      │   • Account not verified        │
│                      │   • Very new account            │
│                      │   • No profile picture          │
│                      │   • Suspicious bio links        │
│                      │   • Suspicious DM activity      │
│                      │                                 │
│                      │   💡 Safety Recommendations:    │
│                      │   • DO NOT interact             │
│                      │   • Block this account          │
│                      │   • Report to Instagram         │
│                      │                                 │
│                      │   Confidence: 95% (High)        │
│                      │                                 │
│                      │   [Check Another Account]       │
│                      │                                 │
└──────────────────────┴─────────────────────────────────┘
```

---

## 🎨 **What Each Color Means**

### **Risk Levels:**
- 🟢 **Green** = Low Risk (Safe account)
- 🟡 **Yellow** = Moderate Risk (Be careful)
- 🔴 **Red** = High Risk (Dangerous - avoid!)

### **Risk Scores:**
- **0-39** = Low Risk (Safe)
- **40-64** = Moderate Risk (Caution)
- **65-100** = High Risk (Danger!)

---

## 📝 **What Each Form Field Means**

### **Required:**
- **Username** ⭐ - The Instagram @ name (MUST fill this)

### **Optional (but helps accuracy):**
- **Followers** - How many people follow them
- **Following** - How many people they follow
- **Posts** - How many posts they have
- **Account Age** - How old the account is (in days)
- **Verified** - Do they have a blue checkmark?
- **Visibility** - Is the account Public or Private?
- **Profile Picture** - Do they have a profile pic?
- **Bio Text** - What's in their bio/description
- **Bio Links** - Do they have links in bio?
- **DM Activity** - Did they send you weird messages?

---

## 🎯 **How to Use (Step by Step)**

### **Step 1: Open the App**
```
1. Make sure backend is running (python backend/main.py)
2. Make sure frontend is running (npm run dev in frontend folder)
3. Open browser: http://localhost:3000
```

### **Step 2: Start Analysis**
```
1. You'll see the home page
2. Click "Start Free Analysis" button
3. Form appears on the left side
```

### **Step 3: Fill the Form**
```
1. Type Instagram username (required)
   Example: @instagram or instagram

2. Add other details if you know them (optional)
   - Followers: 100
   - Following: 500
   - Posts: 20
   - etc.

3. Click "🔍 Analyze Account Risk" button
```

### **Step 4: See Results**
```
1. Wait 2-3 seconds (you'll see loading animation)
2. Results appear on the right side
3. You'll see:
   - Big number (risk score)
   - Color (green/yellow/red)
   - List of warnings
   - Safety tips
```

---

## 🎬 **Example Test**

### **Test a "Scam" Account:**

Fill in the form like this:
```
Username: scammer_test
Followers: 25
Following: 1500
Posts: 0
Account Age: 20
Verified: No
Profile Pic: No
Bio Links: Suspicious
DM Activity: Suspicious
```

**Expected Result:**
- Risk Score: **100/100**
- Risk Level: **🔴 High Risk**
- Warnings: 9+ risk factors
- Recommendation: **DO NOT interact!**

---

### **Test a "Safe" Account:**

Fill in the form like this:
```
Username: legitimate_user
Followers: 5000
Following: 500
Posts: 200
Account Age: 730
Verified: Yes
Profile Pic: Yes
```

**Expected Result:**
- Risk Score: **0/100**
- Risk Level: **🟢 Low Risk**
- Warnings: No major risks
- Recommendation: **Account appears safe**

---

## 💡 **Simple Summary**

**What the app does:**
1. You enter Instagram username
2. You add details about the account
3. App checks if it's safe or a scam
4. You get a score (0-100) and warnings

**Colors:**
- 🟢 Green = Safe
- 🟡 Yellow = Be careful
- 🔴 Red = Dangerous!

**What you need:**
- Just the Instagram username (everything else is optional)

---

## 🎯 **Quick Reference**

| What You See | What It Means |
|--------------|---------------|
| Purple-pink gradient background | Your app's theme |
| Glass-like boxes | Form and results containers |
| 🛡️ Shield icon | InstaGuard logo |
| * Red star | Required field |
| 0-100 number | Risk score |
| Green/Yellow/Red badge | Risk level |
| List with • bullets | Risk warnings |
| List with 💡 | Safety tips |

---

**YOUR APP IS SIMPLE AND EASY TO USE!** ✅

Just enter username → Click analyze → See if it's safe! 🎯
