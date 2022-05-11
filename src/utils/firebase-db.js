import {
  collection,
  doc,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../services';

export const createTodo = async data => {
  let todoId = '';

  await addDoc(collection(db, 'todos'), data).then(result => {
    todoId = result.id;
  });

  return todoId;
};

export const readTodos = async userId => {
  const result = [];
  const q = query(collection(db, 'todos'), where('userRef', '==', userId));

  await getDocs(q).then(todos =>
    todos.forEach(todo => {
      result.push({
        id: todo.id,
        ...todo.data(),
      });
    }),
  );

  return result;
};

export const updateTodo = async (id, data) => {
  const todoRef = doc(db, 'todos', id);

  await updateDoc(todoRef, data).then(() => {
    console.log('Todo updated');
  });
};

export const deleteTodo = () => null;
