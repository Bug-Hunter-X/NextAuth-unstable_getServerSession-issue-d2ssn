```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from './api/auth/[...nextauth]';

export default async function Home({props}) {
  const session = await unstable_getServerSession(authOptions);
  console.log('session', session);

  return (
    <div>
      <h1>Home Page</h1>
      <p>This is a protected route.</p>
    </div>
  );
}
```