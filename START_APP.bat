@echo off
echo ========================================
echo   InstaGuard - Instagram Risk Detector
echo   Starting Backend and Frontend...
echo ========================================
echo.

echo [1/2] Starting FastAPI Backend on port 8000...
start cmd /k "cd backend && python main.py"
timeout /t 3 /nobreak >nul

echo [2/2] Starting React Frontend on port 3000...
start cmd /k "cd frontend && npm run dev"

echo.
echo ========================================
echo   Application Started Successfully!
echo ========================================
echo.
echo   Backend API: http://127.0.0.1:8000
echo   API Docs:    http://127.0.0.1:8000/docs
echo   Frontend:    http://localhost:3000
echo.
echo   Press any key to exit this window...
echo   (Backend and Frontend will keep running)
echo ========================================
pause >nul
