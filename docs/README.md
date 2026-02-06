# Bilingual Invoice App - Web Version

## 🚀 Live Demo

This app is ready to be deployed on GitHub Pages!

## 📱 How to Deploy on GitHub Pages

### Option 1: Using GitHub Web Interface (Easiest)

1. **Create a new GitHub repository**
   - Go to https://github.com/new
   - Name it: `invoice-app`
   - Make it Public
   - Click "Create repository"

2. **Upload files**
   - Click "uploading an existing file"
   - Drag and drop all files from the `docs` folder
   - Commit the files

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` → `/docs`
   - Click Save

4. **Access your app**
   - Your app will be live at: `https://YOUR-USERNAME.github.io/invoice-app/`
   - Wait 2-3 minutes for deployment

### Option 2: Using Git Command Line

```bash
# Initialize git repository
git init
git add docs/
git commit -m "Initial commit"

# Create GitHub repo and push
git remote add origin https://github.com/YOUR-USERNAME/invoice-app.git
git branch -M main
git push -u origin main

# Enable GitHub Pages in Settings → Pages
```

## 📱 Add to iPhone Home Screen

1. Open the live URL in Safari
2. Tap the Share button (square with arrow)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"
5. The app will open in full-screen mode without Safari UI!

## ✨ Features

- ✅ Full-screen PWA mode
- ✅ Works offline after first load
- ✅ Exact calculation: ¥10,010
- ✅ Dark Navy theme
- ✅ Reset button to clear data
- ✅ Export invoice as PNG image
- ✅ Mobile-optimized for iPhone

## 🎯 Quick Test

Open the app and verify:
1. Settings screen (dark green) - change language/currency
2. Dashboard screen (dark navy) - see revenue chart
3. Invoice screen (light) - check calculation: ¥10,010
4. Export button - downloads invoice image
5. Reset button - clears invoice data

## 🔧 Alternative Hosting Options

### Vercel (Fastest)
1. Go to https://vercel.com
2. Sign in with GitHub
3. Import your repository
4. Deploy!
5. Get instant URL: `https://invoice-app.vercel.app`

### Netlify
1. Go to https://netlify.com
2. Drag and drop the `docs` folder
3. Get instant URL: `https://invoice-app.netlify.app`

## 📞 Support

If you need help deploying, I can:
1. Create the GitHub repository for you
2. Deploy to Vercel/Netlify
3. Provide a ready-to-use URL

Just let me know!
