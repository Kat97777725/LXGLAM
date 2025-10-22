# LXGLAM - Beauty Booking Platform

## 🎯 Project Overview
LXGLAM is a complete beauty booking platform with CMS admin panel, featuring a 3D hero section, master filtering, booking system, and Telegram bot integration.

## 📁 Project Structure
```
LXGLAM/
├── booking.html          # Main booking website
├── admin.html            # CMS admin panel
├── index.html            # Redirect to booking.html
├── functions/
│   └── send-booking.js   # Netlify Functions for Telegram
├── README.md             # This documentation
└── [backup files]        # Various backup and test files
```

## 🔑 Access Information

### GitHub Repository
- **URL**: https://github.com/Kat97777725/LXGLAM
- **SSH Remote**: `git@github.com:Kat97777725/LXGLAM.git`
- **Branch**: `main` (tracking `origin/main`)
- **Files**: 20 files, 9,630+ lines of code
- **Status**: ✅ Successfully pushed and connected

### SSH Authentication
- **SSH Key Location**: `~/.ssh/id_ed25519`
- **Public Key**: `ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIIZRXnyQ4nIWZVhj8sgVbR99prDBgcURQM7vOEGeVzGE sparkcaitlin@github`
- **GitHub Account**: Kat97777725
- **Authentication**: ✅ Successfully configured and tested

### Netlify Deployment
- **Current URL**: https://lxglam.netlify.app/
- **Configuration**: Static site with Netlify Functions
- **Functions Directory**: `functions/`
- **Deployment Status**: ✅ Connected to GitHub for automatic deployment

### Telegram Bot Integration
- **Bot Token**: `8466676132:AAHi1-a_KbTrk1KRP90I1iT6Ip4UBLRxUmg`
- **Chat ID**: `5268028095`
- **Integration**: ✅ Working via Netlify Functions

## 🚀 Features

### Main Website (booking.html)
- 3D hero section with Spline integration
- Master filtering system (services, location, language)
- Dynamic master cards with photo carousels
- Booking modal with Telegram integration
- Application form for new masters
- Mobile-responsive design
- Brand carousel showcasing beauty brands

### Admin Panel (admin.html)
- Complete CMS for managing beauty masters
- Add/edit/delete masters functionality
- Photo upload system for master portfolios
- Service tags and language management
- Dashboard with statistics
- Data export/import capabilities
- Master data stored in localStorage

### Backend (functions/send-booking.js)
- Netlify Functions for serverless backend
- Telegram bot integration for booking notifications
- Form validation and error handling
- CORS handling for cross-origin requests

## 👥 Current Master Data
8 pre-loaded masters with complete profiles:
- Julya (Brow & Lash Master)
- Natalia (Manicure & Pedicure Master)
- Kseniya (Hair Transformation Master)
- Dmytro (Haircut & Styling Master)
- Kristina (Facial & Aesthetic Master)
- Anna (Keratin & Hair Botox Master)
- Kayo (Hair & Beauty Master)
- Patricia Alves (Hair & Face Specialist)

## 🔧 Development Commands

### Git Commands
```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main
```

### Local Development
```bash
# Start local server (Python)
python -m http.server 8000

# Or use Live Server in VS Code
# Open index.html and use Live Server extension
```

## 📱 Netlify Configuration
When connecting to Netlify, use these settings:
- **Branch to deploy**: `main`
- **Base directory**: (empty)
- **Build command**: (empty)
- **Publish directory**: (empty)
- **Functions directory**: `functions`

## 🛠️ Technical Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Netlify Functions (Node.js)
- **Database**: localStorage (client-side)
- **3D Graphics**: Spline (3D hero section)
- **Deployment**: Netlify (automatic from GitHub)
- **Version Control**: Git + GitHub
- **Authentication**: SSH keys

## 📞 Support
- **GitHub Issues**: https://github.com/Kat97777725/LXGLAM/issues
- **Netlify Dashboard**: https://app.netlify.com/
- **Telegram Bot**: @lxglambot

## 🔄 Deployment Workflow
1. Make changes locally
2. Commit changes: `git commit -m "Description"`
3. Push to GitHub: `git push origin main`
4. Netlify automatically deploys from GitHub
5. Changes go live at https://lxglam.netlify.app/

## 📝 Notes
- All master data is managed through the admin panel
- Photos are stored as base64 in localStorage
- Telegram notifications work via Netlify Functions
- Mobile-responsive design for all devices
- No build process required (static site)

---
**Last Updated**: January 2025
**Repository**: https://github.com/Kat97777725/LXGLAM
**Live Site**: https://lxglam.netlify.app/
