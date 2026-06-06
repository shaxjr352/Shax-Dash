# The Shax Dash

A premium SaaS-style personal empire dashboard for Shaxjr, Evolv3, and Cleanie.

## Stack

- Next.js 15 App Router
- Tailwind CSS
- Framer Motion
- Firebase Authentication and Firestore
- shadcn-style local UI primitives
- Lucide React
- Recharts

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Firebase Setup

Copy `.env.example` to `.env.local` and fill in your Firebase web app keys.

Create two Firebase Auth email/password users:

- `administrator@theshaxdash.local` or `NEXT_PUBLIC_ADMIN_EMAIL`
- `shaxjr@theshaxdash.local` or `NEXT_PUBLIC_SHAXJR_EMAIL`

Until Firebase env vars are present, the app runs in local demo-session mode so the UI can be explored.

Local demo passwords:

- Administrator: `3520`
- shaxjr: `7283`

## Firestore Shape

```txt
users
brands
tasks
orders
instagram
youtube
notifications
```

The Firestore helpers live in `src/firebase/firestore.ts`; sample app data lives in `src/data/sample-data.ts`.

## App Routes

- `/login` luxury account login
- `/` protected landing command center
- `/dashboard/shaxjr`
- `/dashboard/evolv3`
- `/dashboard/cleanie`

Dashboard sections are controlled with `?view=dashboard|tasks|orders|instagram|youtube|revenue|calendar|notifications|settings`.

## Deploy To Vercel

1. Push this project to GitHub.
2. Import the GitHub repository in Vercel.
3. Add the Firebase environment variables from `.env.example`.
4. Set the build command to `npm run build`.
5. Set the output preset to Next.js, which Vercel detects automatically.
6. Deploy.
