# Ecommerce App

This is a full-featured ecommerce web application built using **Next.js**, **Prisma** with **PostgreSQL**, and **Tailwind CSS** for styling. The app supports features such as product listing, filters, shopping cart, size/color variants, and more. It's deployed on **Vercel** for seamless scaling and performance.

## Tech Stack

- **Next.js** (v14.2.13) - Framework for server-side rendering and React-based application
- **Prisma** (v5.19.1) - ORM for PostgreSQL integration
- **PostgreSQL** - Relational database for storing app data
- **Tailwind CSS** (v3.4.12) - Utility-first CSS framework for styling
- **Vercel** - Hosting and deployment platform

## Features

- User-friendly product listing page with color and size filters
- Shopping cart functionality with the ability to select product variants
- Backend integration with PostgreSQL for product data storage
- Tailwind CSS for fully responsive and modern UI
- Environment variable support for secure database credentials

## Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.x or above)
- **PostgreSQL** (Database setup)
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/username/ecommerce-app.git
cd ecommerce-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup PostgreSQL Database

Ensure that you have a PostgreSQL database setup and note the connection string. Create a `.env` file in the root directory with the following environment variables:

```bash
# PostgreSQL connection strings
POSTGRES_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
POSTGRES_PRISMA_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public
POSTGRES_URL_NO_SSL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?sslmode=disable
POSTGRES_URL_NON_POOLING=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
```

### 4. Prisma Configuration

Run Prisma commands to generate the client and apply migrations:

#### Migrate the database:

```bash
npx prisma migrate dev --name init
```

This command applies the initial migrations to your database.

#### Generate Prisma Client:

```bash
npx prisma generate
```

This will generate the Prisma client, allowing you to interact with your PostgreSQL database in your code.

### 5. Seed the Database

You can use Prisma to seed the database with the initial product data. Add your seed logic in the `prisma/seed.js` file and then run:

```bash
npx prisma db seed
```

### 6. Start the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

### 7. Deploy on Vercel

To deploy your project on Vercel:

1. Push your changes to a Git repository.
2. Go to [Vercel](https://vercel.com/) and connect your GitHub or GitLab repository.
3. Add your environment variables (from `.env`) in the Vercel project settings.
4. Deploy the project.

## Prisma Commands

Here are some useful Prisma commands for managing your database:

- **Migrate the database:**

  ```bash
  npx prisma migrate dev --name <migration_name>
  ```

- **Generate Prisma client:**

  ```bash
  npx prisma generate
  ```

- **Seed the database:**

  ```bash
  npx prisma db seed
  ```

- **Open Prisma Studio (for database inspection):**

  ```bash
  npx prisma studio
  ```

## Environment Variables

Make sure to set the following environment variables in your `.env` file for local development and in Vercel for production:

```bash
# PostgreSQL connection details
POSTGRES_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
POSTGRES_PRISMA_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public

# Other environment variables
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

## Tailwind CSS

Tailwind CSS is already configured for the project. You can use the utility classes provided by Tailwind for building responsive and modern UIs efficiently. You can find the Tailwind configuration in the `tailwind.config.js` file.

## Project Structure

```
├── public/               # Public assets like images, icons
├── prisma/               # Prisma schema and migrations
├── src/                  # Source code for the app
│   ├── components/       # React components
│   ├── pages/            # Next.js pages (API routes and app pages)
│   ├── lib/              # Prisma client setup
│   └── styles/           # Global and component styles (Tailwind)
├── .env                  # Environment variables
├── tailwind.config.js     # Tailwind CSS configuration
├── prisma/schema.prisma   # Prisma schema for database models
└── package.json          # Project configuration and scripts
```

## License

This project is licensed under the MIT License.