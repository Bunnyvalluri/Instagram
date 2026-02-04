# 🚀 Deploying to Vercel

This project is configured for easy deployment on **Vercel** as a full-stack application (React Frontend + FastAPI Backend).

## ✅ Prerequisites

1.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com).
2.  **GitHub Repository**: Ensure this project is pushed to GitHub (which you just did!).

## 🛠️ Deployment Steps

1.  **Go to Vercel Dashboard**
    *   Click **"Add New..."** -> **"Project"**.

2.  **Import Git Repository**
    *   Select your repository: `Fake-social-media-`.
    *   Click **Import**.

3.  **Configure Project**
    *   **Framework Preset**: Vercel might auto-detect `Vite` or `Other`.
        *   If it detects Vite, that's fine.
        *   If not, select **Vite**.
    *   **Root Directory**: Leave as `./` (default).
    *   **Build Command**: Leave default (or ensure it matches `cd frontend && npm install && npm run build` if overriding).
    *   **Output Directory**: `frontend/dist`.
    *   **Environment Variables**:
        *   Expand the "Environment Variables" section.
        *   Add any custom variables if needed (e.g., `DATABASE_URL` if you upgrade to Postgres later).
        *   *Note: For this demo, the app uses an ephemeral SQLite database in `/tmp` on Vercel, so no complex DB setup is required for the hackathon.*

4.  **Deploy**
    *   Click **Deploy**.
    *   Wait ~1 minute for the build to complete.

## 🌍 Environment Variables

You can set these in Vercel Project Settings -> Environment Variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `VERCEL` | System variable (auto-set) | `1` |
| `DB_PATH`| Optional custom DB path | `/tmp/risk_detector.db` |

## 🐛 Troubleshooting

*   **Backend 404?**
    *   Check deployment logs. Ensure `backend/requirements.txt` was installed.
    *   The `vercel.json` file in the root handles the routing. Ensure it was pushed.
*   **Database Reset?**
    *   Since Vercel functions are serverless and ephemeral, the SQLite database in `/tmp` might reset between cold starts. This is expected behavior for serverless SQLite. For a persistent production app, use Vercel Postgres or Supabase.

## 🎉 Success!

Your app will be live at `https://your-project-name.vercel.app`.
