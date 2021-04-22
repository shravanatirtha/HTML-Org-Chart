var today = new Date();
      
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      
      var dateTime = date+' '+time;
      document.getElementById("displayDate").innerHTML=dateTime;
      document.getElementById("displayDate1").innerHTML=dateTime;
      document.getElementById("displayDate2").innerHTML=dateTime;
      document.getElementById("displayDate3").innerHTML=dateTime; 
      document.getElementById("displayDate4").innerHTML=dateTime;
      document.getElementById("displayDate5").innerHTML=dateTime;
      document.getElementById("displayDate6").innerHTML=dateTime;
      document.getElementById("displayDate7").innerHTML=dateTime;
      document.getElementById("displayDate8").innerHTML=dateTime;
      document.getElementById("displayDate9").innerHTML=dateTime;

      document.getElementById("displayDate0").innerHTML=dateTime;
       document.getElementById("displayDate11").innerHTML=dateTime;
       document.getElementById("displayDate22").innerHTML=dateTime;
       document.getElementById("displayDate33").innerHTML=dateTime; 
       document.getElementById("displayDate44").innerHTML=dateTime;

        document.getElementById("displayDate55").innerHTML=dateTime; 
        
        function dontShow() {
  var x = document.getElementById("displayDate");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function showOne() {
    var x = document.getElementById("displayDate");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }