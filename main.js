let fullName = prompt("Adınızı ve Soyadınızı Giriniz:")
document.querySelector("#fullName").innerHTML = fullName
function time(){
    let days =['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi'];
    let d = new Date();
    let s = d.getSeconds().toFixed();
    let m = d.getMinutes().toFixed();
    let h = d.getHours().toFixed();
    let dayIndex = d.getDay();
    h.length == 1 ? h = 0 + h : ""; 
    m.length == 1 ? m = 0 + m : "";
    s.length == 1 ? s = 0 + s : "";
    let clock = `${h}:${m}:${s} ${days[dayIndex]}`;
    document.querySelector("#clock").innerHTML = clock
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    if(s % 5 == 0){
        document.body.style.backgroundColor =`rgb(${r},${g},${b}`;
        document.querySelector("#text").style.color =`rgb(${r},${g},${b}`;
    }
}
setInterval(time,1000);




