# LinkUPI - Instant UPI Payment Link Generator 🚀

A simple tool to generate UPI payment links and QR codes. No payment gateways required.

## ✨ Features

- Generate UPI payment links instantly 🔗
- Create QR codes for easy scanning 📱
- Supports PhonePe, Google Pay, Paytm, and other UPI apps 💰
- Optional amount and note fields 📝
- Copy and share links easily 📤
- Theme toggle for light/dark mode 🌓

## 🛠️ Tech Stack

| Category    | Technologies                               |
| ----------- | ------------------------------------------ |
| Frontend    | React, TypeScript, Radix UI, Tailwind CSS, Next Themes, Lucide React, QRCode.react |
| State Management | TanStack React Query |
| Utilities   | ESLint, Prettier, class-variance-authority, clsx, tailwind-merge, zod |

## 📦 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project_directory>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

   This will start the application in development mode. Open your browser and navigate to the address provided by Vite (usually `http://localhost:5173`).

### Building the Application

1. Build the application for production:

   ```bash
   npm run build
   ```

   This will create an optimized production build in the `dist` directory.

## 💻 Usage

1.  Enter the UPI ID in the provided field.
2.  Enter the amount (optional).
3.  Enter a note (optional).
4.  Click the "Generate Link" button.
5.  Copy the generated link or share it directly.
6.  You can also view and download the QR code.

```typescript
// Example generated UPI link
upi://pay?pa=yourname@okaxis&am=100&cu=INR&tn=Payment%20for%20goods
```

## 📂 Project Structure

```
.
├── .gitignore
├── LICENSE
├── README.md
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── public
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── ThemeToggle.tsx
│   │   └── UPIGenerator.tsx
│   │   └── ui
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       └── breadcrumb.tsx
│   └── main.tsx
│   └── pages
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   └── index.css
└── tailwind.config.ts
```

## 📝 API Documentation

This project is a client-side application and does not have any backend API endpoints.  All logic is handled in the browser.

## 📸 Screenshots

<img width="875" height="787" alt="image" src="https://github.com/user-attachments/assets/fb302bec-cead-4b5a-a37d-3468301fb76e" />


## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to suggest improvements or report bugs.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Copyright (c) 2025 Nishit R Kirani

## 🙏 Acknowledgments

Thanks to everyone who contributes to this project! Your help is greatly appreciated.

This README was generated using [GitRead](https://git-read.vercel.app)
