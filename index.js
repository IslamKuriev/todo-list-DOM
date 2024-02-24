function getValue () {
const div = document.createElement('div')
const p = document.createElement('p')
const btn = document.createElement('button')
const todoCheckbox = document.createElement('input')
todoCheckbox.type ='checkbox'
const todoList = document.getElementById('todo-list')
const text = document.getElementById('add-input').value

p.textContent = text
btn.textContent = 'X'
div.classList.add('todo-item')
p.classList.add('todo-text')
btn.classList.add('btn-todo')
todoCheckbox.classList.add('todo-checkbox')

div.prepend(p)

div.prepend(btn)

div.append(todoCheckbox)

// todoList.prepend(todoCheckbox)

todoList.prepend(div)

btn.addEventListener('click', () => {
    div.remove()
})
todoCheckbox.addEventListener('click', () => {
     p.classList.toggle('toggle-checkbox')
})
console.log(div)
}

 