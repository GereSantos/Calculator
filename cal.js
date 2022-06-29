let choice = window.prompt('Insira o tipo de operação: \n'
                    + ' 1 - Adição \n'
                    + ' 2 - Subtração \n'
                    + ' 3 - Multiplicação \n'
                    + ' 4 - Divisão \n ')

if(choice == 1){
    let x = window.prompt('Insira o primeiro valor: ')
    let y = window.prompt('Insira o segundo valor: ')
    let sum = (x,y) => x + y
    alert(sum('O Resultado da Adição é : '  + x,y))
}else if(choice == 2){
    let x = window.prompt('Insira o primeiro valor: ')
    let y = window.prompt('Insira o segundo valor: ')
    let sub = (x,y) => x - y
    alert(sub('O Resultado da Subtração é : ' + x,y))
}else if(choice == 3){
    let x = window.prompt('Insira o primeiro valor: ')
    let y = window.prompt('Insira o segundo valor: ')
    let mul = (x, y) => x * y
    alert(mul('O Resultado da Multiplicação é : ' + x,y))
}else if(choice == 4){
    let x = window.prompt('Insira o primeiro valor: ')
    let y = window.prompt('Insira o segundo valor: ')
    let div = (x,y) => x / y
    alert(div('O Resultado da Divisão é : ' + x,y))
}

