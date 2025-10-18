# React Boilerplate

A modern, production-ready React boilerplate with Webpack 5, Babel, and development tools. This boilerplate provides a solid foundation for building React applications with best practices and modern tooling.

## 🚀 Features

- **React 18** - Latest React with hooks and modern patterns
- **Webpack 5** - Modern bundling with hot reload and optimization
- **Babel** - ES6+ and JSX transformation with presets
- **CSS Support** - CSS modules and modern styling capabilities
- **Development Server** - Fast development with hot module replacement
- **ESLint & Prettier** - Code linting and formatting
- **Responsive Design** - Mobile-first responsive design patterns
- **Modern JavaScript** - ES6+ features and async/await support

## 📁 Project Structure

```
react-boilerplate/
├── public/
│   ├── index.html          # HTML template
│   └── manifest.json       # PWA manifest
├── src/
│   ├── components/         # React components
│   │   ├── Header.js
│   │   ├── Main.js
│   │   └── Footer.js
│   ├── styles/            # CSS styles
│   │   ├── index.css      # Global styles
│   │   ├── App.css        # App component styles
│   │   ├── Header.css
│   │   ├── Main.css
│   │   └── Footer.css
│   ├── utils/             # Utility functions
│   ├── App.js             # Main App component
│   └── index.js           # Application entry point
├── .babelrc               # Babel configuration
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── .gitignore             # Git ignore rules
├── package.json           # Dependencies and scripts
├── webpack.config.js      # Webpack configuration
└── README.md              # This file
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm start
```

This will:
- Start the development server on `http://localhost:3000`
- Enable hot module replacement
- Open the application in your default browser

### Building for Production

Create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Other Scripts

- `npm run dev` - Start development server without opening browser
- `npm run lint` - Run ESLint to check for code issues
- `npm run lint:fix` - Run ESLint and automatically fix issues
- `npm run format` - Format code with Prettier
- `npm run clean` - Remove the dist directory

## 🎨 Customization

### Adding New Components

1. Create your component in the `src/components/` directory
2. Import and use it in your App component or other components
3. Add corresponding CSS files in `src/styles/` if needed

### Styling

- Global styles go in `src/styles/index.css`
- Component-specific styles should be in separate CSS files
- The project uses CSS modules approach with separate files per component

### Webpack Configuration

The `webpack.config.js` file includes:
- Development and production configurations
- CSS and asset loaders
- Path aliases for cleaner imports
- Code splitting for better performance

### Path Aliases

The following aliases are configured for cleaner imports:

- `@` - Points to `src/`
- `@components` - Points to `src/components/`
- `@styles` - Points to `src/styles/`
- `@utils` - Points to `src/utils/`

Example usage:
```javascript
import Header from '@components/Header';
import { utilityFunction } from '@utils/helpers';
```

## 📦 Dependencies

### Production Dependencies
- `react` - React library
- `react-dom` - React DOM rendering

### Development Dependencies
- `@babel/core` - Babel core
- `@babel/preset-env` - Babel environment preset
- `@babel/preset-react` - Babel React preset
- `babel-loader` - Webpack Babel loader
- `css-loader` - CSS loader for Webpack
- `eslint` - JavaScript linter
- `eslint-plugin-react` - React ESLint plugin
- `eslint-plugin-react-hooks` - React hooks ESLint plugin
- `html-webpack-plugin` - HTML plugin for Webpack
- `prettier` - Code formatter
- `style-loader` - Style loader for Webpack
- `webpack` - Module bundler
- `webpack-cli` - Webpack command line interface
- `webpack-dev-server` - Development server

## 🔧 Configuration Files

### Babel (.babelrc)
- Configured for modern JavaScript and React JSX
- Automatic runtime for React 17+ JSX transform

### ESLint (.eslintrc.js)
- React and React hooks rules
- Recommended JavaScript rules
- Custom rules for development

### Prettier (.prettierrc)
- Consistent code formatting
- Single quotes, semicolons, and 2-space indentation

### Webpack (webpack.config.js)
- Development and production modes
- CSS and asset handling
- Hot module replacement
- Code splitting and optimization

## 🚀 Deployment

### Static Hosting

The built files in the `dist/` directory can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect your repository and set build command to `npm run build`
- **GitHub Pages**: Use GitHub Actions to build and deploy
- **AWS S3**: Upload the `dist/` contents to an S3 bucket

### Build Optimization

The production build includes:
- Minified JavaScript and CSS
- Code splitting for better loading performance
- Asset optimization
- Source maps for debugging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and formatting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-username/react-boilerplate/issues) page
2. Create a new issue with detailed information
3. Follow the issue template for better assistance

---

**Happy coding! 🎉**
