
var container = document.createElement('div')
var h1=document.createElement('h1')
h1.innerText = 'Dom manipulation'
container.append(h1)
var ul = document.createElement('ul')
container.append(ul)
var li = document.createElement('li')
li.innerText = 'div'
ul.append(li)
var li = document.createElement('li')
li.innerText = 'ul'
ul.append(li)
var li = document.createElement('li')
li.innerText = 'li'
ul.append(li)
console.log(container)