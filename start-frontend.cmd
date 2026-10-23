@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js 20 or newer is required. Install Node.js and reopen this window.
  exit /b 1
)
if not exist "%~dp0node_modules" (
  call npm install
  if errorlevel 1 exit /b %ERRORLEVEL%
)
call npm run dev
exit /b %ERRORLEVEL%
