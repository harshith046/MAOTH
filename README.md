# MAOTH – Onboarding Dashboard

**A polished multi-step user onboarding experience** built with React and Tailwind CSS. MAOTH offers a sleek, professional interface designed to guide users through registration or setup flows with an intuitive progress bar, seamless transitions, and responsive layouts.

---

## 🚀 Tech Stack

* **Frontend**: React.js, React Router DOM, Context API for global state
* **Styling**: Tailwind CSS (v3)
* **Build Tool**: Create React App (CRA)

---

## ✨ Key Features

1. **Multi-Step Registration Form**

2. **Dynamic Progress Bar**

3. **Global State Management**

4. **Responsive & Accessible Design**

5. **Theming & Customization**
6. 
---

## 🛠️ Installation & Setup

Follow these steps to get MAOTH running locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/harshith046/MAOTH.git
   cd MAOTH
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open in your browser**

   * Visit [http://localhost:3000]

---

## 📸 Screenshots & Demo

### Landing Page

![Landing](./screenshots/landing.png)

### Onboarding Steps

|       Step 1: Personal Info       |        Step 2: Preferences        |        Step 3: Confirmation       |
| :-------------------------------: | :-------------------------------: | :-------------------------------: |
| ![Step1](./screenshots/step1.png) | ![Step2](./screenshots/step2.png) | ![Step3](./screenshots/step3.png) |

### Progress Bar Animation

![Progress Bar](./screenshots/progress-bar.gif)

💻 [Watch a 1–2 min walkthrough on Loom](https://loom.com/your-demo-link)

---

## 📁 Project Structure

```text
MAOTH/
├── public/                   # Static HTML template
│   └── index.html
├── src/
│   ├── components/           # Reusable UI elements (ProgressBar, FormStep, etc.)
│   ├── context/              # Context API providers & custom hooks
│   ├── pages/                # Page-level components (OnboardingFlow)
│   ├── styles/               # Tailwind CSS configuration & custom styles
│   ├── assets/               # Images, icons, and media
│   └── App.jsx               # Main application entry point
├── screenshots/              # Demo images & animations
├── .gitignore
├── package.json
└── README.md
```

---

## 🤝 Contributing

We welcome contributions to improve MAOTH!

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m "feat: add your feature description"`.
4. Push to your fork: `git push origin feature/your-feature`.
5. Open a Pull Request and describe your updates.

Please follow the [code of conduct](CODE_OF_CONDUCT.md) and ensure all commits are well-documented.

---

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.
