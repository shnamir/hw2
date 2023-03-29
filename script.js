let name = 'Alex'
let money = 10000
let account = 7777

let nAsk = prompt('Как вас зовут')
if (nAsk === name){
    let code =  +prompt('Номер счета')
    if(code === account){
        let cash = +prompt('Сколько обналичить')
        if (cash <= money){
            alert('Все хорошо')
        }else{alert('недостаточно средств')}
        
    }else{alert('Неправильный номер счета')}
}else {alert('Пользователь недайден, досвидули')}



