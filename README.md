# Muhammad Trinanda 3D Portfolio

A sophisticated, modern, and performant 3D portfolio website built with React, Vite, and Three.js.

## 🚀 Features

- **3D Interactive Avatar**: Chibi character model with smooth animations
- **Modern Design**: Dark theme with yellow accent colors (#FFC800)
- **Responsive Layout**: Two-column desktop layout, mobile-optimized
- **Smooth Animations**: Framer Motion powered transitions
- **Fast Performance**: Vite build system with code splitting
- **Contact Integration**: EmailJS for contact form functionality
- **SEO Optimized**: Meta tags and social media cards

## 🛠️ Technologies

- **Frontend**: React 18, Vite 5
- **3D Graphics**: Three.js, React-Three-Fiber, @react-three/drei
- **Styling**: TailwindCSS 3
- **Routing**: React Router DOM 6
- **Animations**: Framer Motion 11
- **Forms**: EmailJS
- **Icons**: Heroicons React

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Website_Portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your EmailJS credentials:

   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   ├── layout/          # Layout components (Sidebar, Navbar)
│   └── three/           # 3D components
├── pages/               # Route components
├── utils/               # Constants and utilities
└── styles/              # Global styles
```

## 🎨 Design System

- **Background**: #1E1E1E (primary-bg)
- **Cards**: #282828 (card-bg)
- **Text**: #FFFFFF (primary-text)
- **Accent**: #FFC800 (accent-yellow)
- **Font**: Inter (Google Fonts)

## 📱 Responsive Design

- **Desktop**: Two-column layout with static sidebar
- **Mobile**: Single column with collapsible navigation
- **Tablet**: Adaptive layout with optimized spacing

## 🔧 Customization

### Adding New Projects

Edit `src/utils/constants.js` and add to `portfolioProjects` array:

```javascript
{
  id: 4,
  title: "New Project",
  category: "Web design",
  image: "/images/project.jpg",
  description: "Project description"
}
```

### Updating Personal Information

Modify the `personalInfo` object in `src/utils/constants.js`

### Adding 3D Model

1. Place GLB file in `public/models/`
2. Update `src/components/three/ChibiModel.jsx`
3. Use `useGLTF("/models/your-model.glb")`

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Vercel

1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`

### GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run deploy`

## 📊 Performance

- **Bundle Size**: < 250KB (gzipped)
- **First Load**: < 2s on 3G
- **Mobile Performance**: 60fps target
- **Lighthouse Score**: 90+ target

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Muhammad Trinanda**

- Email: m.3rd.nanda@gmail.com
- LinkedIn: [mtrinanda](https://www.linkedin.com/in/mtrinanda/)
- GitHub: [mtrinanda](https://github.com/mtrinanda)
