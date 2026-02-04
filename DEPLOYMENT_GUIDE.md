# 🚀 DEPLOYMENT GUIDE - InstaGuard

## 📋 **Deployment Options**

Your application can be deployed to various platforms. Here are the best options:

---

## 🎯 **Option 1: Vercel (Frontend) + Railway (Backend)** ⭐ **RECOMMENDED**

### **Why This Combo:**
- ✅ Free tier available
- ✅ Easy deployment
- ✅ Auto-deploy from GitHub
- ✅ Custom domains
- ✅ SSL certificates included

---

### **A. Deploy Frontend to Vercel**

#### **Step 1: Prepare Frontend**
1. Make sure `package.json` has build script:
```json
{
  "scripts": {
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

2. Update API URL in frontend code:
```typescript
// In AnalysisForm.tsx, replace:
const response = await axios.post('http://127.0.0.1:8000/api/analyze', apiData)

// With:
const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'
const response = await axios.post(`${API_URL}/api/analyze`, apiData)
```

#### **Step 2: Deploy to Vercel**
1. Go to: https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Vite
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Add Environment Variable:
   - Name: `VITE_API_URL`
   - Value: (your Railway backend URL - add after deploying backend)
7. Click "Deploy"

**Done!** Your frontend is live! 🎉

---

### **B. Deploy Backend to Railway**

#### **Step 1: Prepare Backend**
1. Create `requirements.txt` in backend folder:
```txt
fastapi==0.104.1
uvicorn==0.24.0
sqlalchemy==2.0.23
pydantic==2.5.0
```

2. Create `Procfile` in backend folder:
```
web: uvicorn main:app --host 0.0.0.0 --port $PORT
```

3. Update CORS in `main.py`:
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with your Vercel URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

#### **Step 2: Deploy to Railway**
1. Go to: https://railway.app
2. Sign in with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Configure:
   - Root Directory: `backend`
   - Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
7. Click "Deploy"
8. Copy the generated URL (e.g., `https://your-app.railway.app`)

#### **Step 3: Update Frontend**
1. Go back to Vercel
2. Settings → Environment Variables
3. Update `VITE_API_URL` with your Railway URL
4. Redeploy frontend

**Done!** Your backend is live! 🎉

---

## 🎯 **Option 2: Render (Full Stack)**

### **Deploy Both Frontend and Backend**

#### **Step 1: Create render.yaml**
```yaml
services:
  # Backend
  - type: web
    name: instaguard-backend
    env: python
    buildCommand: pip install -r backend/requirements.txt
    startCommand: cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT
    
  # Frontend
  - type: web
    name: instaguard-frontend
    env: node
    buildCommand: cd frontend && npm install && npm run build
    startCommand: cd frontend && npm run preview
```

#### **Step 2: Deploy**
1. Go to: https://render.com
2. Sign in with GitHub
3. Click "New" → "Blueprint"
4. Connect your repository
5. Render will auto-detect the `render.yaml`
6. Click "Apply"

**Done!** Both services deployed! 🎉

---

## 🎯 **Option 3: Heroku (Classic)**

### **Deploy Backend**

#### **Step 1: Prepare**
1. Install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
2. Create `Procfile` in root:
```
web: cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT
```

3. Create `runtime.txt`:
```
python-3.11.0
```

#### **Step 2: Deploy**
```bash
heroku login
heroku create instaguard-backend
git push heroku main
```

---

## 🎯 **Option 4: AWS (Production-Grade)**

### **Frontend: S3 + CloudFront**
1. Build frontend: `npm run build`
2. Upload `dist/` to S3 bucket
3. Enable static website hosting
4. Create CloudFront distribution
5. Point domain to CloudFront

### **Backend: EC2 or Lambda**
1. Launch EC2 instance
2. Install Python and dependencies
3. Run with systemd or PM2
4. Configure nginx as reverse proxy

---

## 🗄️ **Database Options**

### **Development:**
- SQLite (current) ✅

### **Production:**
1. **PostgreSQL** (recommended)
   - Railway: Built-in PostgreSQL
   - Heroku: Heroku Postgres
   - AWS: RDS

2. **MySQL**
   - PlanetScale
   - AWS RDS

3. **MongoDB**
   - MongoDB Atlas
   - Railway MongoDB

---

## 🔐 **Environment Variables**

### **Frontend (.env)**
```env
VITE_API_URL=https://your-backend-url.com
```

### **Backend (.env)**
```env
DATABASE_URL=postgresql://user:pass@host:5432/db
CORS_ORIGINS=https://your-frontend-url.com
```

---

## 📊 **Post-Deployment Checklist**

- [ ] Frontend loads correctly
- [ ] API endpoints accessible
- [ ] CORS configured properly
- [ ] Database connected
- [ ] Environment variables set
- [ ] SSL certificate active (HTTPS)
- [ ] Custom domain configured (optional)
- [ ] Error monitoring setup (optional)

---

## 🔍 **Testing Deployed App**

1. Open frontend URL
2. Click "Start Free Analysis"
3. Enter test data:
   - Username: test_user
   - Followers: 100
   - Following: 200
4. Click "Analyze"
5. Verify results appear

---

## 🚨 **Common Issues**

### **CORS Error:**
```python
# In backend/main.py, update:
allow_origins=["https://your-frontend-url.vercel.app"]
```

### **API URL Not Found:**
```typescript
// In frontend, check:
const API_URL = import.meta.env.VITE_API_URL
console.log('API URL:', API_URL)  // Debug
```

### **Database Connection:**
```python
# For PostgreSQL:
pip install psycopg2-binary
# Update database.py with PostgreSQL connection
```

---

## 📈 **Monitoring & Analytics**

### **Recommended Tools:**
- **Vercel Analytics** (frontend)
- **Railway Metrics** (backend)
- **Sentry** (error tracking)
- **Google Analytics** (user tracking)

---

## 💰 **Cost Estimate**

### **Free Tier:**
- Vercel: Free (hobby)
- Railway: $5/month (after free trial)
- **Total: ~$5/month**

### **Production:**
- Vercel Pro: $20/month
- Railway Pro: $20/month
- Database: $10-50/month
- **Total: ~$50-90/month**

---

## 🎯 **Quick Deploy Commands**

### **Vercel (Frontend):**
```bash
cd frontend
npm install -g vercel
vercel
```

### **Railway (Backend):**
```bash
# Use Railway dashboard or CLI
railway login
railway init
railway up
```

---

## 📝 **Custom Domain Setup**

### **Vercel:**
1. Go to Project Settings
2. Domains → Add Domain
3. Enter your domain
4. Update DNS records

### **Railway:**
1. Go to Service Settings
2. Networking → Custom Domain
3. Add domain
4. Update DNS CNAME

---

## ✅ **Deployment Success!**

After deployment, your app will be accessible at:
- **Frontend**: https://instaguard.vercel.app
- **Backend**: https://instaguard-api.railway.app
- **API Docs**: https://instaguard-api.railway.app/docs

---

## 🎉 **YOU'RE LIVE!**

Your application is now:
- ✅ Deployed to production
- ✅ Accessible worldwide
- ✅ Running 24/7
- ✅ Auto-scaling
- ✅ SSL secured

**Share your live URL with the world! 🌍**
