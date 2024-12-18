

## Introduction

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites

Before running this project, make sure you have the following software installed on your system:

- Node.js (v22.12.0 or higher)
- pnpm (v9.15 or higher)

## Get Started

To get started with the app, 
1. Create a Kinde account for auth and Supabase postgresql
3. You will need to clone this repository and install the dependencies. You can do this by running the following commands in your terminal:

```sh
git clone https://github.com/edwinmoncy/server-actions.git
cd server-actions
```

## Setting Environment Variables

In root directory, create a file `.env`

Add the following in the file.

```sh
DATABASE_URL = YOUR_TRANSACTION_POOLER_URL?pgbouncer=true&connection_limit=1
DIRECT_URL= YOUR_SESSION_POOLER_URL

KINDE_CLIENT_ID=*******************
KINDE_CLIENT_SECRET=*******************
KINDE_ISSUER_URL=*******************
KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/monitors
```

## Installation

**To install pnpm globally on your device**:

```sh
npm install -g pnpm@latest
```

1. Install the dependencies by running the following commands in your terminal:

```sh
pnpm install
```

2. Set up the Prisma ORM

```
npx prisma generate
npx prisma migrate dev --name init
```

## Usage

Once you have installed the dependencies and set the environment variables, you can run the program by running the following command from the root directory:

```sh
pnpm run dev
```

This will start the project and open the app in your default browser at localhost:3000 .
