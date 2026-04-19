# Next.js + shadcn/ui + Hono + Drizzle Starter
[中文](README_CN.md) | English

## Quick Start
### 1. Prerequisites
- [Bun](https://bun.com/docs/installation)

### 2. Install Dependencies
Install dependencies using Bun:
```bash
bun install
```

### 3. Start the Development Server
Run the following command to start the development server:
```bash
bun dev
```

Once started, you can visit http://localhost:3000 in your browser to view the result.

---

## Project Configuration
### Database Connection
This project uses **Drizzle ORM** for database management, with **PostgreSQL** as the default database.
* Edit the `.env` file to set your `DATABASE_URL` connection string.
* Edit `drizzle.config.ts` to configure Drizzle settings.
* Edit `store/schema.ts` to define your table structures, then run the following command to push changes to the database:
```bash
bun db:push
```

### API Endpoints
**Hono** is used to handle Next.js API routes.
* Modify the logic within the `server` folder.
* The entry point is located in the `app/api/[[...route]]` folder, which exports the GET and POST methods by default.