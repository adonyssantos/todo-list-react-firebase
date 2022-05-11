import { collection, addDoc } from 'firebase/firestore';
import { db } from '../services';

export const createTodo = todo => addDoc(collection(db, 'todos'), todo);

export const readTodos = () => null;

export const updateTodo = () => null;

export const deleteTodo = () => null;
