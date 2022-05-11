import { useEffect, useState } from 'react';
import {
  loginWithGoogle,
  loginWithFacebook,
  loginWithGithub,
  logout,
} from './utils/firebase-auth';

const App = () => {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState();

  useEffect(() => {
    setTodos([]);
  }, []);

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(user => {
        setUser({
          uid: user.uid,
          name: user.displayName,
          photoURL: user.photoURL,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleFacebookLogin = () => {
    loginWithFacebook()
      .then(user => {
        setUser({
          uid: user.uid,
          name: user.displayName,
          photoURL: user.photoURL,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleGithubLogin = () => {
    loginWithGithub()
      .then(user => {
        setUser({
          uid: user.uid,
          name: user.displayName,
          photoURL: user.photoURL,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        setUser(null);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return user ? (
    <div>
      <header>
        <h1>Hello {user.name}</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  ) : (
    <div>
      <header>
        <h1>Login</h1>
      </header>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
      <button onClick={handleGithubLogin}>Login with Github</button>
    </div>
  );
};

export default App;
