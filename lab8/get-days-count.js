function showDayCount(){
    let answer = document.getElementById('answer');
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    if (inputDate.value === '') {
        answer.innerHTML = 'Пожалуйста, введите дату рождения!';
    } else {
        let birthday = new Date(inputDate.value);
        if (birthday > today) {
            answer.innerHTML = 'Вы еще не родились! Введите корректные данные';
        } else {
            let daysCount = (today - birthday)/1000/60/60/24;
            daysCount = Math.floor(daysCount);
            answer.innerHTML = 'Количество дней с даты рождения: ' + daysCount
        }
    }
}

function clearFields() {
    let inputDate = document.querySelector('input[type=date]');
    let answer = document.getElementById('answer');
    inputDate.value = '';
    answer.innerHTML = '';
}