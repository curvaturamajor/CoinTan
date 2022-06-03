   
   var ch = 0;
   var txt = 'Kur hesaplamak için aşağıdaki hesap makinesini kullanabilrsiniz';
   var speed = 50;
   var pause = 5000;
   
   function typeWriterInit()
   {
      ch = 0; 
      document.getElementById("typewriter").innerHTML = '';
      typeWriter();
   }
   function typeWriter() 
   {
      if (ch < txt.length) 
      {
         document.getElementById("typewriter").innerHTML += txt.charAt(ch);
         ch++;
         setTimeout(typeWriter, speed);
      }
      else
      {
         if (pause > 0)
         {
             setTimeout(typeWriterInit, pause);
         }
      }
   }
   typeWriterInit();
      


   function saat() 
   {
      var digital = new Date();
      var hours = digital.getHours();
      var minutes = digital.getMinutes();
      var seconds = digital.getSeconds();
      if (minutes <= 9) minutes = "0" + minutes;
      if (seconds <= 9) seconds = "0" + seconds;
      dispTime = hours + ":" + minutes + ":" + seconds;
   
      var basicclock = document.getElementById('basicclock');
      basicclock.innerHTML = dispTime;
      setTimeout("saat()", 1000);
   }
   saat();
      
      var now = new Date();
      var days = new Array('Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi');
      var months = new Array('Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Agustos','Eylül','Ekim','Kasım','Aralık');
      var date = ((now.getDate() < 10) ? "0" : "") + now.getDate();
      var year = (now.getYear() < 1000) ? now.getYear() + 1900 : now.getYear();
      today = date +" "+ months[now.getMonth()] +" " + year + ", " + days[now.getDay()];
      var basicdate = document.getElementById('basicdate');
      basicdate.innerHTML = today;
      
   

let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "HATALI"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
   