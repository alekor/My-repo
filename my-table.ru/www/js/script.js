 setTimeout ( function () {

	 var xmlhttp, data,
	      row = "",
	      table = document.getElementById("table");

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
	                row+="<tr>";
	                row+="<td>"+data[i].company+"</td>";
	                row+="<td>"+data[i].name+"</td>";
	                row+="<td>"+data[i].position+"</td>";
	                row+="<td>"+data[i].email+"</td>";
	                row+="<td>tel. "+data[i].tel+"</td>";
	                row+="</tr>";
	      }
	            table.innerHTML = row;
 }, 0)
