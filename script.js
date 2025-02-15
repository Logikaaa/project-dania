let ans_true = document.querySelector('.ans-true')
let ans_false_1 = document.querySelector('.ans-false_1')
let ans_false_2 = document.querySelector('.ans-false_2')
let ans_false_3 = document.querySelector('.ans-false_3')

ans_true.addEventListener('click', function(){
    ans_true.style.backgroundColor='green'
    console.log('Правильно')
})

ans_false_1.addEventListener('click', function(){
    ans_false_1.style.backgroundColor='#E94D4E'
    console.log('Неправильно')
})

ans_false_2.addEventListener('click', function(){
    ans_false_2.style.backgroundColor='#E94D4E'
    console.log('Неправильно')
})

ans_false_3.addEventListener('click', function(){
    ans_false_3.style.backgroundColor='#E94D4E'
    console.log('Неправильно')
})
