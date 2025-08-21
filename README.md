# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite, showcasing my professional experience and projects.

##  Tech Stack

- **Framework:** React with TypeScript
- **Build Tool:** Vite
- **Styling:** TailwindCSS

## 📁 Project Structure

```
my-portfolio/
├── public/                 # Static files
│   ├── assets/            # CV and other downloadable assets
│   └── vite.svg          # Vite logo
├── src/
│   ├── assets/           # Images and static assets
│   │   └── images/       # Profile and other images
│   ├── components/       # Reusable UI components
│   │   ├── About/       # About section component
│   │   ├── Footer/      # Footer component
│   │   ├── Header/      # Header with profile and CV download
│   │   ├── Icons/       # SVG icons components
│   │   ├── Projects/    # Projects showcase component
│   │   └── Skills/      # Skills section component
│   ├── App.tsx          # Main application component
│   ├── App.css          # Global styles
│   └── main.tsx         # Application entry point
├── index.html           # HTML entry point
└── package.json         # Project dependencies and scripts
```

## 🎯 Features

- **Responsive Design:** Fully responsive layout that works on all screen sizes
- **Interactive UI:** 
  - Profile image zoom on hover
  - Downloadable CV
- **Social Links:** Direct links to GitHub, LinkedIn, and email
- **Modern Architecture:** Component-based structure for better maintainability
- **Type Safety:** Full TypeScript support for robust code

## 🛠️ Components

1. **Header**
   - Profile image with hover effect
   - Name and title
   - CV download button

2. **About**
   - Professional summary
   - Centered layout

3. **Skills**
   - Grid layout
   - Hover effects on skill cards
   - Responsive design

4. **Projects**
   - Project cards with descriptions
   - Clean, modern layout

5. **Footer**
   - Social media links
   - Contact information
   - GitHub and LinkedIn integration

##  Getting Started

1. Clone the repository:
   git clone URl
   

2. Install dependencies:
   npm install
   

3. Start the development server:
   npm run dev

4. Build for production:
   npm run build

## 📝 Customization

1. Update your information in `App.tsx`
2. Replace profile image in `src/assets/images/`
3. Add your CV in `public/assets/`
4. Modify skills and projects data in `App.tsx`
5. Update social links in the Footer component
