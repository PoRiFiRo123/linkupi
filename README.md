# ⚛️ LinkUPI Web Application (UPI LINK GENERATOR)

This project is a modern web application built with React, TypeScript, and a suite of powerful tools and libraries. It provides a robust and scalable foundation for building complex user interfaces with features like routing, data fetching, theming, and UI component libraries. It leverages cutting-edge technologies to deliver a smooth and efficient user experience.

🚀 **Key Features:**

*   **Component-Based Architecture:** Built with reusable React components for maintainability and scalability.
*   **Modern UI:** Utilizes Radix UI and Tailwind CSS for a visually appealing and accessible user interface.
*   **Data Fetching & Caching:** Implements TanStack React Query for efficient data fetching and caching.
*   **Form Handling:** Uses React Hook Form and Zod for robust form handling and validation.
*   **Theming:** Supports light and dark themes with `next-themes`.
*   **Routing:** Implements client-side routing with `react-router-dom`.
*   **UPI Link Generation:** Includes a component for generating UPI payment links with QR code support.
*   **Responsive Design:** Adapts to different screen sizes using the `useIsMobile` hook.
*   **Notification System:** Utilizes `sonner` and custom `Toaster` components for displaying user notifications.

🛠️ **Tech Stack:**

| Category      | Technology                      | Description                                                                 |
|---------------|---------------------------------|-----------------------------------------------------------------------------|
| **Frontend**  | React                           | JavaScript library for building user interfaces                               |
|               | TypeScript                      | Superset of JavaScript that adds static typing                                |
|               | Radix UI                        | Accessible UI components                                                      |
|               | Tailwind CSS                    | Utility-first CSS framework                                                   |
|               | React Hook Form                 | Library for form handling in React                                            |
|               | Zod                             | Schema validation library                                                     |
|               | TanStack React Query            | Library for data fetching and caching                                         |
|               | next-themes                     | Library for theming support (light/dark mode)                                 |
|               | lucide-react                    | Beautifully simple icons                                                     |
|               | react-router-dom                | Library for routing in React applications                                     |
|               | clsx                            | Utility for constructing className strings conditionally                       |
|               | tailwind-merge                | Utility for resolving Tailwind CSS class conflicts                            |
|               | tailwindcss-animate             | CSS animations for Tailwind CSS                                               |
|               | sonner                          |  Aesthetic toast notifications                                                |
|               | vaul                            |  Accessible and unstyled dialog primitives                                     |
|               | recharts                        |  Composable charting library built on React                                   |
|               | embla-carousel-react            |  Lightweight carousel component for React                                     |
|               | qrcode.react                    |  React component for rendering QR codes                                      |
|               | react-day-picker                |  Date picker component for React                                               |
|               | react-resizable-panels          |  Resizable panels component for React                                          |
|               | input-otp                       |  Input component for OTP (One-Time Password)                                 |
| **Build Tool**| Vite                            | Fast build tool and development server                                        |
| **Linting**   | ESLint                          | JavaScript linting tool                                                       |

📦 **Getting Started:**

### Prerequisites

*   Node.js (version >= 18)
*   npm or yarn or pnpm

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

3.  Install dependencies:

    ```bash
    npm install # or yarn install or pnpm install
    ```

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev # or yarn dev or pnpm dev
    ```

2.  Open your browser and navigate to `http://localhost:8080`.

📂 **Project Structure:**

```
├── .eslintrc.cjs           # ESLint configuration file
├── .gitignore              # Specifies intentionally untracked files that Git should ignore
├── package.json            # Project metadata and dependencies
├── postcss.config.cjs      # PostCSS configuration file
├── src
│   ├── App.tsx             # Main application component
│   ├── components
│   │   ├── ui              # Reusable UI components
│   │   │   ├── button.tsx  # Button component
│   │   │   ├── card.tsx    # Card component
│   │   │   ├── input.tsx   # Input component
│   │   │   ├── label.tsx   # Label component
│   │   │   ├── switch.tsx  # Switch component
│   │   │   ├── textarea.tsx# Textarea component
│   │   │   └── toaster.tsx # Toaster component
│   │   └── UPIGenerator.tsx# UPI Link Generator Component
│   ├── hooks
│   │   └── use-mobile.tsx  # Custom hook to detect mobile devices
│   ├── lib
│   │   └── utils.ts        # Utility functions
│   ├── main.tsx            # Entry point for the React application
│   ├── pages
│   │   ├── Index.tsx       # Index page component
│   │   └── NotFound.tsx    # 404 Not Found page component
│   ├── index.css           # Global CSS styles
├── tsconfig.app.json       # TypeScript configuration for the application
├── tsconfig.json           # Root TypeScript configuration
├── tsconfig.node.json      # TypeScript configuration for Node.js
├── vite.config.ts          # Vite configuration file
```


🤝 **Contributing:**

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, concise messages.
4.  Submit a pull request.

📝 **License:**

This project is licensed under the [MIT License](LICENSE).

📬 **Contact:**

If you have any questions or suggestions, feel free to contact me at [nishitkirani2020@gmail.com](mailto:nishitkirani2020@gmail.com).

💖 **Thanks Message:**

Thank you for checking out this project! I hope it's helpful and inspires you to build amazing things.
