import { useEffect, useState } from 'react';
import {
  loginWithGoogle,
  loginWithFacebook,
  loginWithGithub,
  logout,
} from './utils/firebase-auth';
import { createTodo, readTodos, updateTodo } from './utils/firebase-db';

const App = () => {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (user) {
      readTodos(user.uid).then(todos => setTodos(todos));
    }
  }, [user, todos]);

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

  const handleTodoAdd = event => {
    const todoTitle = event.target.title.value;
    event.preventDefault();

    if (todoTitle) {
      const newTodo = {
        title: todoTitle,
        completed: false,
        userRef: user.uid,
      };

      createTodo(newTodo).then(todoId => {
        setTodos([
          ...todos,
          {
            id: todoId,
            ...newTodo,
          },
        ]);
      });
    }

    event.target.title.value = '';
  };

  return user ? (
    <div>
      <header>
        <h1>Hello {user.name}</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <form onSubmit={handleTodoAdd}>
        <input type='text' placeholder='Enter todo' name='title' id='title' />

        <button type='submit'>Add</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.title}</s> : <span>{todo.title}</span>}
            <button
              onClick={() => {
                updateTodo(todo.id, { completed: !todo.completed });
              }}
            >
              {todo.completed ? 'Uncomplete' : 'Complete'}
            </button>
            <button
              onClick={() => {
                setTodos(todos.filter(t => t.id !== todo.id));
              }}
            >
              Delete
            </button>
          </li>
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
