import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../services';

export const createTodo = todo => addDoc(collection(db, 'todos'), todo);

export const readTodos = async userId => {
  const result = [];
  const q = query(collection(db, 'todos'), where('userRef', '==', userId));

  await getDocs(q).then(todos =>
    todos.forEach(todo => {
      result.push(todo.data());
    }),
  );

  return result;
};

export const updateTodo = () => null;

export const deleteTodo = () => null;
