function showDate(){
    let out = document.getElementById('current-date');
    let out2 = document.getElementById('current-date2')
    let out3 = document.getElementById('current-date3')
    let out4 = document.getElementById('current-date4')
    let out5 = document.getElementById('current-date5')
    let out6 = document.getElementById('current-date6')
    let today = new Date();
    out.innerHTML =  "Дата и время для русской локали: "+today.toLocaleString("ru-RU");
    out2.innerHTML =  "Дата и время для английской локали: "+today.toLocaleString("en");
    out3.innerHTML =  "Дата и время для египитской локали: "+today.toLocaleString("ar-EG");
    out4.innerHTML =  "Дата и время для французской локали: "+today.toLocaleString("fr");
    out5.innerHTML =  "Дата и время для греческой локали: "+today.toLocaleString("el-GR");
    out6.innerHTML =  "Дата и время для японской локали: "+today.toLocaleString("ja");
    
    let year = document.getElementById('outputYear');
    let month = document.getElementById('outputMonth');
    let day = document.getElementById('outputDay');
    let weak = document.getElementById('outputWeak');
    dt = new Date()
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const weakk = ['Воскресенье', "Понедельник", "Вторник","Среда","Четверг","Пятница","Суббота"]
    year.innerHTML = "Текущий год: " + dt.getFullYear()
    month.innerHTML = "Текущий месяц: " + months[dt.getMonth()];
    day.innerHTML = "Текущий день: " + dt.getDate();
    weak.innerHTML = "Текущий день недели: " + weakk[dt.getDay()];
}


function showWeak(){
    let day = document.getElementById('day1').value 
    let month = document.getElementById('month1').value - 1
    let year = document.getElementById('year1').value
    if(day < 1 || day > 31 || month < 1 || month > 12 || year < 0){
        alert('Пожалуйста, введите корректные дату!') 
        return; 
    }
    let output = document.getElementById('outputweak2')
    let dt = new Date(year,month,day);
    let days = ['Воскресенье','Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    output.innerHTML = days[dt.getDay()]
}