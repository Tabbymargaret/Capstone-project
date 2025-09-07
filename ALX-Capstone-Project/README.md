
# 🎵 Melodify - Music Player
A sleek and responsive music player application built with React that allows you to search and play music tracks using the Deezer API. Enjoy 30-second previews of your favorite songs with a beautiful, user-friendly interface.

![React](https://img.shields.io/badge/React-18.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.0-orange)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-purple)
![Deezer API](https://img.shields.io/badge/Deezer_API-1.0-green)

## ✨ Features
- 🔍 **Search Functionality**: Find songs, artists, and albums using Deezer's extensive music library
- ▶️ **Audio Playback**: Play 30-second previews of tracks with built-in HTML5 audio controls
- ❤️ **Like System**: Save your favorite tracks to a personal liked songs collection
- 📱 **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean, intuitive interface built with Tailwind CSS
- ⚡ **Fast Performance**: Built with Vite for quick startup and smooth operation

## 🚀 Quick Start
### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation
Clone the repository
```bash
git clone https://github.com/your-username/melodify.git
cd melodify
```

Install dependencies
```bash
npm install
```

Start the development server
```bash
npm run dev
```

Open your browser  
Navigate to [http://localhost:5173](http://localhost:5173) to view the application

## 🎮 How to Use
- **Search for Music**: Use the search bar to find songs, artists, or albums
- **Play Tracks**: Click on any track to play the 29-second preview
- **Audio Controls**: Use the built-in audio player controls (play, pause, volume)

## 🏗️ Project Structure
```
src/components/
├── search/
│   ├── SearchBar.jsx          # Search input component
│   ├── SearchBar.css
├── tracks/
│   └── TrackList.jsx          # Fetches tracks
├── player/
│   └── Controls.jsx           # Bottom audio player controls
│   └── MusicPlayer.jsx        # Contains the main app content
├── Layout/
│   └── Footer.jsx             # Contains the footer elements
├── utils/
│   └── api.js                 # Deezer API integration
├── App.jsx                    # Root application component
└── main.jsx                   # Application entry point
```

## 🛠️ Built With
- **React 18** - Frontend library  
- **Vite** - Build tool and development server  
- **Tailwind CSS** - Utility-first CSS framework  
- **Deezer API** - Music data and previews  
- **React Router** - Client-side routing  

## 🔧 API Integration
This application uses the Deezer API to:
- Search for tracks, artists, and albums
- Retrieve 30-second audio previews
- Access album artwork and metadata

_No authentication required for basic search functionality_

## 🎨 Customization
### Styling
The application uses Tailwind CSS for styling. You can customize the theme by modifying the `tailwind.config.js` file:
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color-here',
      },
    },
  },
}
```

### Adding New Features
- Create new components in the `src/components/` directory
- Extend API functionality in `src/utils/api.js`

## 📦 Building for Production
```bash
# Create production build
npm run build

# Preview production build locally
npm run preview

# Deploy to your preferred hosting platform
# (Netlify, Vercel, GitHub Pages, etc.)
```

## 🌐 Deployment (TO BE IMPLEMENTED LATER)

## 🐛 Troubleshooting
### Common Issues
- **White Screen on Load**  
  Ensure React Router is properly configured. Check browser console for errors.

- **Audio Not Playing**  
  Deezer provides 30-second previews only. Some tracks might not have preview available.

- **Search Not Working**  
  Check internet connection. Verify Deezer API status.

- **CORS Errors**  
  The app uses JSONP method to avoid CORS issues. If problems persist, check browser console.

### Getting Help
If you encounter issues:
- Check the browser console for error messages
- Ensure all dependencies are installed correctly
- Verify your Node.js version is compatible

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project  
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)  
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)  
4. Push to the branch (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request  

