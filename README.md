# Todo List CRUD and OAuth with Firebase

Esta es una app hecha con React y Firebase en la que puedas crear, leer, actualizar y borrar tareas dentro de una lista de tareas. El usuario solo pude crear, leer, actualizar y borrar las tareas que le pertenecen. Para eso el usuario debe estar logueado con Google, Facebook o Github.

## Features

- Login con Google
- Login con Facebook
- Login con GitHub
- Crear tareas
- Leer tareas
- Actualizar tareas
- Borrar tareas

## Screenshots

![image](https://user-images.githubusercontent.com/58638286/168086679-63a7d8a9-fd3e-4a16-acd7-f83adb56b6bd.png)

![image](https://user-images.githubusercontent.com/58638286/168086758-b1771a38-170b-40ea-beba-790f03baa8d1.png)


## Demo

- [https://todo.adonys.me](https://todo.adonys.me)

## Corre en local

Clona el repositorio

```bash
  git clone https://github.com/adonyssantos/cic-evaluation-app.git
```

Ve a la carpeta del proyecto

```bash
  cd cic-evaluation-app
```

Instala las dependencias

```bash
  npm install
```

Ejecuta la app

```bash
  npm run start
```

## Funcionamiento

### Autenticación

El usuario debe estar logueado para poder crear, leer, actualizar y borrar tareas. Para eso se utiliza una autenticación con Firebase. Se utilizan 3 providers para el login: Google, Facebook y Github.

Dentro de la carpeta `src/utils/firebase-auth.js` se encuentra toda la lógica de autenticación.

**Funciones:**

- `loginWithGoogle`
- `loginWithFacebook`
- `loginWithGithub`
- `logout`

Se almacenara en un state la información del usuario logueado. (email, photoUrl, uid...)

### Base de datos

La base de datos utilizada es Firestore. Solo existe una colección llamada `todos`. Aquí se va a guardar toda la información.

- `id`: Es el identificador de la tarea.
- `title`: Es el título de la tarea.
- `completed`: Es un booleano que indica si la tarea está completada o no.
- `userRef`: Id del usuario que creó la tarea.

Dentro de la carpeta `src/utils/firebase-db.js` se encuentra toda la lógica de base de datos.

**Funciones:**

- `createTodo`
- `readTodos`
- `updateTodo`
- `deleteTodo`

Al momento de leer la colección, se va a filtrar utilizando el id del usuario que está logueado. Ejemplo: `userRef == user.uid`.

## Hosting

La aplicación esta alojada en Firebase.

**Comando para alojar la app:**

```bash
  firebase deploy
```

## Autores

- [@adonyssantos](https://www.github.com/adonyssantos)
