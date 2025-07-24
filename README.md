# Ravi Silva - Personal Portfolio

Welcome to my personal portfolio website!  
This project is a modern, multilingual portfolio built with React, showcasing my background, skills, and selected projects as a Software Quality Analyst and Frontend Developer.

---

## Deployment made on Github pages
- [Link](https://ravifel.github.io/)

---

## 🌐 Features

- **Multilingual Support**  
  Available in Portuguese, English, Spanish, French, Chinese (Mandarin), Japanese, and Irish Gaelic.
- **Responsive Design**  
  Works seamlessly across devices (desktop, tablet, mobile).
- **Dark & Light Modes**  
  Instantly switch between dark and light themes.
- **Projects & Technologies**  
  Organized display of repositories and tech stack, with project details, filtering, and direct links to GitHub.
- **Testimonials**  
  Real recommendations and feedback, complete with sorting and pagination.
- **Contact Options**  
  Quick access to email, WhatsApp, LinkedIn, and GitHub.
- **Accessibility**  
  Keyboard navigation, semantic HTML, and ARIA labels for better usability.
- **Pagination and Filtering**  
  For testimonials and repositories, users can easily sort and page through content.
- **Custom Modals**  
  For testimonials and other UI features.

---

## 🚀 Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
npm install 

# (Option 2) If you encounter dependency conflicts, use:
npm install --save --legacy-peer-deps
```

### Running Locally

```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view in your browser.

### Build for Production

```bash
npm run build
```

The app will be built in the `build` folder, optimized for best performance.

---

## 🗂️ Project Structure

The project is organized as follows:

```
src/
│
├── components/         # Reusable React components (Header, Portfolio, TechCard, etc)
├── locales/            # Translation JSON files for each supported language
├── pages/              # Main pages/routes (Home, Repositories, Testimonials, NotFound)
├── styles/             # CSS modules, theme files, and component/page styles
│    ├── base/          # Global and theme CSS
│    ├── components/    # CSS for individual components
│    └── pages/         # CSS for page-level styling
├── data/               # JSON data (e.g., repositories)
├── App.js              # Main App component with router and theme context
├── routes.jsx          # Route definitions
├── i18n.js             # i18n initialization and configuration
└── index.js            # Application entry point
```

- **`src/locales/`** — Translation files for all supported languages.
- **`src/components/`** — React components (Header, Portfolio, TechCard, etc).
- **`src/pages/`** — Main page components (Home, Repositories, Testimonials, NotFound).
- **`src/styles/`** — CSS files, theming, and responsive styles.
- **`src/data/`** — JSON files for static content (like repositories list).
- **`public/`** — Static files and assets (favicon, manifest, etc).

---

## 📦 Dependencies

Your project uses the following main dependencies and tools:

- **React** (`^19.1.0`) — Library for building user interfaces
- **React Router DOM** (`^7.6.3`) — Routing for React apps
- **React Bootstrap** (`^2.10.10`) — Bootstrap components for React
- **Bootstrap** (`^5.3.7`) — Responsive CSS framework
- **React-i18next** (`^15.6.0`) and **i18next** (`^25.3.2`) — Internationalization support
- **React Icons** (`^5.5.0`) — Popular icons as React components
- **Lucide React** (`^0.525.0`) — Modern icon library
- **React Select** (`^5.10.2`) — Select component for React
- **Testing Libraries** (`@testing-library/react`, `@testing-library/user-event`, etc.) — For unit and integration testing
- **gh-pages** (`^6.3.0`) — For deploying to GitHub Pages

> For the full list of dependencies and scripts, see [`package.json`](package.json).

---

## 🌍 Languages Supported

- **Português** (`pt`)
- **English** (`en`)
- **Español** (`es`)
- **Français** (`fr`)
- **中文** (`zh`)
- **日本語** (`ja`)
- **Gaeilge** (`ga`)

> Language selection is available in the website header.

---

## 🖥️ Main Technologies

- **React** (with Hooks and Context API)
- **React-i18next** (for internationalization)
- **React Bootstrap** (UI components and layout)
- **CSS3** (with theme and responsive support)
- **[Create React App](https://create-react-app.dev/)**

---

## ⚙️ Application Structure Details

- **Theme Context**  
  The theme (dark/light) is managed with React Context and is available throughout the app.
- **Routing**  
  Uses `react-router-dom` for client-side routing between Home, Repositories, and Testimonials.
- **Localization**  
  Internationalization is handled with `react-i18next`. All static content is translated via JSON files in `src/locales/`.
- **Components**  
  UI is componentized for modularity and reusability (e.g., Header, TechCard, RepositoryCard, TestimonialCard, CustomButton, CustomModal, Pagination, SortFilter).
- **Data Management**  
  Repositories and testimonials are stored as JSON and loaded dynamically, so adding/removing content is straightforward.
- **Styling**  
  The project uses modular CSS files for components and pages, as well as `theme.css` for global theme support.
- **Accessibility**  
  ARIA labels, keyboard navigation, and color contrast considerations are included for a better user experience.
- **Testing**  
  The project includes configuration for [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to ensure component quality and maintainability.

---

## 📦 Available Scripts

In the project directory, you can run:

- `npm start` — Runs the app in development mode.
- `npm test` — Launches the test runner.
- `npm run build` — Builds the app for production.
- `npm run eject` — Ejects configuration (not reversible).

---

## 📬 Contact

- **Email**: ravifel.contact@gmail.com
- **LinkedIn**: [Ravi Silva](https://www.linkedin.com/in/seulinkedin)
- **GitHub**: [ravisilvafitbank](https://github.com/ravisilvafitbank)

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [Create React App](https://github.com/facebook/create-react-app)
- [React-i18next](https://react.i18next.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- All contributors and open-source libraries!

---

Feel free to fork, open issues, or contribute!