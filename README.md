# Solace Candidate Assignment

[solace-screen-recording.webm](https://github.com/user-attachments/assets/c57cd6a5-4b6b-4bb9-957b-dfc3b132f5ed)


## Tech Stack

- **Frontend**: Next.js 15 with React 19
- **UI Library**: Chakra UI v3 with dark/light mode support
- **Language**: TypeScript with strict mode
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Chakra UI components and theme system
- **Search**: Full-text search with PostgreSQL search vectors
- **Development**: ESLint, GitHub Actions CI/CD

## Setup

Install dependencies

```bash
npm i
```

### Environment Setup

The project uses two environment files:
- `.env` - General environment variables and database configuration
- `.env.development` - Development-specific overrides used by database scripts

If you want to customize things locally, you can utilize `.env.local` or `.env.development.local`

Run the development server:

```bash
npm run dev
```

### Database

1. Start docker compose

This should setup your database with credentials defined in the docker-compose.yml file.

```bash
docker compose up -d
```

2. Push migration to the database

```bash
npm run db:migrate
```

3. Seed the database

```bash
npm run db:seed
```

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Apply database migrations
- `npm run db:seed` - Seed database with sample data
- `npm run db:reset` - Reset and truncate database tables

## Project Structure

```
src/
├── app/               # Next.js App Router
│   ├── api/           # API routes
│   └── page.tsx       # Home page
├── components/        # React components
│   ├── home/          # Home page components
│   ├── pagination/    # Pagination components
│   └── ui/            # Chakra UI setup
├── db/                # Database layer
│   ├── schema/        # Drizzle schema definitions
│   └── seed/          # Database seeders
└── lib/               # Utilities and services
    ├── api/           # API client SDK
    └── repositories/  # Data access layer
```

## Code Quality

This project uses several tools to maintain code quality:

- **ESLint**: Configured with Next.js rules for code linting
- **TypeScript**: Strict mode enabled for type safety
- **GitHub Actions**: Automated CI/CD workflow for code quality checks
- **Pull Request Template**: Structured PR reviews

Run quality checks:
```bash
npm run lint        # Check for linting issues
npm run type-check  # Verify TypeScript types
```

## Development

### Seeding

When adding new database schemas to the project, we should make sure a related seeder is also created, unless
it is somehow not applicable to that data.

> You can also reset the database, and truncate tables using `npm run db:reset`

### Migrations

Ensure that you generate and commit the generated sql migration files during development.

With Drizzle this should be really straight forward, and done in a couple small steps.

1. `npm run db:generate`
2. `npm run db:migrate`

Generate will create the new sql migrations, and migrate will apply them!

### New Schema Checklist

Creating a new schema for the database? Here is a little checklist as a reminder of what is expected with
each new schema.

1. Create new schema file with export types and table
2. Create seeder, if applicable
3. Generate migration
4. Create new repository class

### API Endpoints

When creating a new endpoint for the client to consume, here are some reminders for what is expected for this new
endpoint.

1. The endpoint itself should NEVER use the database directly, but some abstraction. Either a repository or service class.
2. Update/Create a wrapper for this endpoint in the API SDK at `lib/api` namespace. These should be logically grouped
by resource or purpose.
