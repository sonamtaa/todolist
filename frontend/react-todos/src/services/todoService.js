const baseUrl = 'http://localhost:3001/todos'; // Todo: fix this routing issues ASAP

export const loadTodos = () => {
    return fetch(baseUrl).then((response) => response.json());
}

export const getTodo = (id) => {
    return fetch('http://localhost:3001/todos/${id}').then((response) => response.json());
}

export const createTodo = (todo) => {
    return fetch("http://localhost:3001/todos", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ todo: {
            title: todo.title,
            completed: todo.completed
        }})
    }).then((response) => response.json());
}

export const updateTodo = (todo) => {
    return fetch('http://localhost:3001/todos/${todo.id}', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ todo: {
            id: todo.id,
            title: todo.title,
            completed: todo.completed
        }})
    }).then((response) => response.json());
}

export const deleteTodo = (todo) => {
    return fetch("http://localhost:3001/todos/${todo.id}", {
        method: 'DELETE'
    }).then((response) => response.json());
}
