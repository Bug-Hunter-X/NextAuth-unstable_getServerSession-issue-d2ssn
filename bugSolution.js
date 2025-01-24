```javascript
import {getSession} from 'next-auth/react';

export default async function Home() {
  const session = await getSession();
  console.log('session', session);

  return (
    <div>
      <h1>Home Page</h1>
      <p>This is a protected route.</p>
      {session && <p>User is logged in: {session.user.email}</p>}
    </div>
  );
}
```