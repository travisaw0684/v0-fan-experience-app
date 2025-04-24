# Football Fan Portal

A Next.js application for football fans to connect, follow teams, and discuss matches.

## Features

- User authentication
- Team profiles and following
- Match schedules and details
- User posts and comments
- Interactive UI with Tailwind CSS

## Tech Stack

- Next.js 15
- React 19
- Tailwind CSS 4
- MySQL with Prisma ORM
- NextAuth.js for authentication

## Getting Started

### Prerequisites

- Node.js 18+ and npm/pnpm
- MySQL database

### Environment Setup

1. Clone the repository
2. Create a `.env` file in the root directory with the following variables:

\`\`\`
# Database connection
DATABASE_URL="mysql://username:password@localhost:3306/football_fan_hub"

# Next Auth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
\`\`\`

### Installation

\`\`\`bash
# Install dependencies
npm install
# or
pnpm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Seed the database
npx prisma db seed

# Start the development server
npm run dev
# or
pnpm dev
\`\`\`

## Database Schema

The application uses the following database models:

- User - User accounts and authentication
- Profile - Extended user information
- Team - Football team information
- Match - Match schedules and results
- Post - User-generated content
- Comment - Responses to posts
- Like - User interactions with posts
- TeamFollow - User following teams

## Development

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio to manage database
- `npm run db:seed` - Seed the database with initial data
