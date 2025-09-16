# Solace Candidate Assignment

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup

Install dependencies

```bash
npm i
```

Run the development server:

```bash
npm run dev
```

### Database

The app is configured to return a default list of advocates. This will allow you to get the app up and running without needing to configure a database. If you’d like to configure a database, you’re encouraged to do so. You can uncomment the url in `.env` and the line in `src/app/api/advocates/route.ts` to test retrieving advocates from the database.

1. Feel free to use whatever configuration of postgres you like. The project is set up to use docker-compose.yml to set up postgres. The url is in .env.

```bash
docker compose up -d
```

2. Create a `solaceassignment` database.

3. Push migration to the database

```bash
npm run db:migrate
```

4. Seed the database

```bash
npm run db:seed
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
