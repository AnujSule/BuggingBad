# ReWear – Community Clothing Exchange

## Overview
ReWear is a web-based platform that enables users to exchange unused clothing through direct swaps or a point-based redemption system. The goal is to promote sustainable fashion and reduce textile waste by encouraging users to reuse wearable garments instead of discarding them.

## Features
- User authentication (email/password, JWT)
- Landing page with platform intro, CTAs, and featured items
- User dashboard (profile, points, uploaded items, swaps)
- Item detail page (gallery, description, uploader info, swap/redeem options)
- Add new item (multi-image upload, form validation)
- Admin panel (moderate/approve/reject items, remove spam)
- Real-time notifications (Socket.io)
- Search, filter, pagination
- Responsive, accessible UI
- Dark mode, user badges, analytics

## Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS, React Router, React Query
- **Backend:** Node.js, Express, TypeScript, Prisma ORM
- **Database:** PostgreSQL
- **Auth:** JWT, bcrypt
- **File Storage:** Cloudinary/AWS S3
- **Real-time:** Socket.io
- **Testing:** Jest, Cypress
- **DevOps:** Docker, GitHub Actions

## Project Structure
```
/BuggingBad
  /client         # React frontend
  /server         # Node.js backend
    /src
      /controllers
      /models (Prisma)
      /routes
      /middleware
      /services
      /utils
    /prisma       # DB schema/migrations
    /tests
  README.md
  .env.example
```

## Getting Started
1. **Clone the repo:**
   ```sh
   git clone <repo-url>
   cd BuggingBad
   ```
2. **Install dependencies:**
   - Backend: `cd server && npm install`
   - Frontend: `cd ../client && npm install`
3. **Set up environment variables:**
   - Copy `.env.example` to `.env` in both `server` and `client` as needed.
4. **Database setup:**
   - Update `DATABASE_URL` in `.env`.
   - Run migrations: `npx prisma migrate dev`
5. **Run the app:**
   - Backend: `npm run dev` (in `server`)
   - Frontend: `npm start` (in `client`)

## Development Workflow
- Use feature branches for new features/bugfixes
- Write clear commit messages
- Run tests before pushing
- Use Prettier/ESLint for code style

## Contributing
- Open issues for bugs/feature requests
- Submit pull requests for review

---

*See `/docs` for detailed API and architecture docs (to be added).* 