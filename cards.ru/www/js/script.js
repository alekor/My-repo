setTimeout( function() {

  var xmlhttp, data,
      output = "",
      body = document.getElementById("body");


    function getXmlHttp(){
      try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
      } catch (e) {
        try {
          xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
          xmlhttp = false;
        }
      }
      if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
        xmlhttp = new XMLHttpRequest();
      }
      return xmlhttp;
    }

    xmlhttp = getXmlHttp();
    xmlhttp.open('GET', '/php/control.php', false);
    xmlhttp.send(null);

    data = JSON.parse(xmlhttp.responseText);

      for (var i in data) {
                output+="<div>";
                output+="<h2>"+data[i].company+"</h2>";
                output+="<h3>"+data[i].name+"</h3>";
                output+="<b>"+data[i].position+"</b>";
                output+="<span>"+data[i].email+"</span>";
                output+="<span>tel. "+data[i].tel+"</span>";
                output+="</div>";
      }
            body.innerHTML = output;

    $("div").click(function() {
        $(this).toggleClass("move");
    });

}, 0)