const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue','lightblue', 'yellow', 'pink', 'purple','gray','light green','brown']

body.style.backgroundColor = 'violet'
button.addEventListener('click', function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
});