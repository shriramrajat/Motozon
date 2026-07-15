# Motozon

Motozon is a premium, modern web platform designed for individuals and businesses looking to purchase commercial vehicles (like the Ertiga, Innova, and Swift Dzire) with complete end-to-end support—including finance, permits, fleet attachment, and insurance. 

## 🚀 Features

### For Customers
*   **Dynamic Inventory:** Browse a curated selection of commercial vehicles.
*   **Premium Aesthetics:** A beautifully designed interface with modern UI elements, smooth micro-animations, and responsive design.
*   **Enquiry & Lead Generation:** Easy-to-use forms for customers to request quotes or finance details directly from the vehicle page.
*   **Quick Connect:** Floating WhatsApp button for instant support and communication.

### For Administrators
*   **Secure Admin Dashboard:** A locked-down, password-protected portal to manage your business.
*   **Lead Management:** Track, update, and manage incoming leads with a robust status workflow (`NEW`, `CONTACTED`, `CONVERTED`, `DEAD`).
*   **Inventory Control:** (Coming soon/In progress) Add, update, and remove vehicles directly from the dashboard.

## 🛠 Tech Stack

*   **Framework:** [Next.js 16+](https://nextjs.org/) (App Router)
*   **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) & custom CSS animations
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Database:** SQLite via [better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
*   **ORM:** [Prisma](https://www.prisma.io/)
*   **Authentication:** [NextAuth.js (Auth.js v5)](https://authjs.dev/)

## 💻 Getting Started

Follow these steps to run Motozon locally on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/shriramrajat/Motozon.git
cd Motozon
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory and add the following variables:
```env
# Database configuration
DATABASE_URL="file:./dev.db"

# NextAuth Configuration
AUTH_SECRET="your-generated-secret" # Generate using `openssl rand -base64 32`
ADMIN_PASSWORD="your-admin-password" # E.g., motozon2026
```

### 4. Database Setup
Run the Prisma migrations to set up your SQLite database structure, and then seed it with initial vehicles.
```bash
npx prisma db push
npx tsx seed-cars.ts
```

### 5. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application. 
To access the Admin Dashboard, go to [http://localhost:3000/admin](http://localhost:3000/admin) and log in with the username `admin` and the password you set in your `.env` file.

## 🚢 Deployment

Motozon is configured to be deployed on [Vercel](https://vercel.com/). 
The `package.json` includes a `postinstall` script (`prisma generate`) to ensure the Prisma Client is correctly built during the Vercel deployment process.

*(Note: SQLite is used as the database. For long-term production use on Vercel's serverless architecture, it is recommended to migrate to a persistent PostgreSQL database like Supabase or Neon to prevent data resets on cold starts).*
