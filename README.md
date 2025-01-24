# NextAuth unstable_getServerSession Issue

This repository demonstrates a problem encountered when using `unstable_getServerSession` from the `next-auth` package in a Next.js application. The issue occurs when attempting to access the session on the client-side; the session remains undefined.

## Problem Description
The code in `bug.js` attempts to obtain the user session using `unstable_getServerSession`.  While this functions correctly on the server, it consistently returns `undefined` on the client, even when the server successfully retrieves the session.

## Solution
The solution provided in `bugSolution.js` shows how to successfully retrieve the session data on both the server and the client using `getSession` from the `next-auth/react` package. This approach correctly handles session retrieval in the client-side environment.

## Setup Instructions
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Follow the setup instructions from the `next-auth` documentation to configure the authentication providers.
4. Run the application with `npm run dev`.
5. Observe the console logs to see the difference between the two approaches.