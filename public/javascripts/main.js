"use strict";

async function getTodos(){
    return (await fetch('/api')).json();
}

function renderTodos(todos, container){
    const tbody = todos
    .slice()
    .sort((a, b) => a.completed - b.completed || a.createdAt - b.createdAt)
    .reduce((tbody, todo) => {
        const row = document.createElement('tr');

        const completedCheckbox = document.createElement('input');
        completedCheckbox.setAttribute('type', 'checkbox');
        if (todo.completed){
            completedCheckbox.setAttribute('checked', '');
        }
        const completedTd = document.createElement('td');
        completedTd.appendChild(completedCheckbox);
        row.appendChild(completedTd);

        const descriptionTd = document.createElement('td');
        descriptionTd.innerText = todo.description;
        row.appendChild(descriptionTd);

        tbody.appendChild(row);
        return tbody;
    }, document.createElement('tbody'));

    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th>Completed</th>
            <th>Task</th>
        </tr>
    `;

    const table = document.createElement('table');
    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);
}

async function main(){
    const todos = await getTodos();
    const container = document.getElementById('main-content');
    renderTodos(todos, container);
}

document.addEventListener('DOMContentLoaded', main);
