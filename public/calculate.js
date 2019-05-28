
var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 
88.33, 9.03, 49.93, 52.34, 53.11, 50.10, 88.88, 
55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];


function setBoundaries(event)
{
	var max = document.forms["gradeForm"]["MAX"].value;
	var ap = document.forms["gradeForm"]["AP"].value;
	var a = document.forms["gradeForm"]["A"].value;
	var am = document.forms["gradeForm"]["AM"].value;
	var bp = document.forms["gradeForm"]["BP"].value;
	var b = document.forms["gradeForm"]["B"].value;
	var bm = document.forms["gradeForm"]["BM"].value;
	var cp = document.forms["gradeForm"]["CP"].value;
	var c = document.forms["gradeForm"]["C"].value;
	var cm = document.forms["gradeForm"]["CM"].value;
	var d = document.forms["gradeForm"]["D"].value;
	var f = document.forms["gradeForm"]["F"].value;
	//var bounds = document.getElementById("gradeForm");
	/*var max = bounds.elements["MAX"].value;
	var ap = bounds.elements["AP"].value;
	var a = bounds.elements["A"].value;
	var am = bounds.elements["AM"].value;
	var bp = bounds.elements["BP"].value;
	var b = bounds.elements["B"].value;
	var bm = bounds.elements["BM"].value;
	var cp = bounds.elements["CP"].value;
	var c = bounds.elements["C"].value;
	var cm = bounds.elements["CM"].value;
	var d = bounds.elements["D"].value;
	var f = bounds.elements["F"].value;
	
	var boundsArr = [max,ap,a,am,bp,b,bm,cp,c,cm,d,f];
	for (i=0; i<11; i++)
	{
		if (boundsArr[i] <= boundsArr[i+1])
		{
			alert("input overlapped!");
			return false;
		}
	}*/
	/*if (max <= ap){ 
		alert("input overlapped!");
		return false;
		}
	if (ap <= a){
		alert("input overlapped!");
		return false;
		}
	if (a <= am){
		alert("input overlapped!");
		return false;
		}
	if (am <= bp){
		alert("input overlapped!");
		return false;
		}
	if (bp <= b){
		alert("input overlapped!");
		return false;
		}
	if (b <= bm){
		alert("input overlapped!");
		return false;
		}
	if (bm <= cp){
		alert("input overlapped!");
		return false;
		}
	if (cp <= c){
		alert("input overlapped!");
		return false;
		}
	if (c <= cm){
		alert("input overlapped!");
		return false;
		}
	if (cm <= d){
		alert("input overlapped!");
		return false;
		}
	if (d <= f){
		alert("input overlapped!");
		return false;
		}
		*/
	document.getElementById("grade1").innerHTML = print(counter(max,ap));
	document.getElementById("grade2").innerHTML = print(counter(ap,a));
	document.getElementById("grade3").innerHTML = print(counter(a,am));
	document.getElementById("grade4").innerHTML = print(counter(am,bp));
	document.getElementById("grade5").innerHTML = print(counter(bp,b));
	document.getElementById("grade6").innerHTML = print(counter(b,bm));
	document.getElementById("grade7").innerHTML = print(counter(bm,cp));
	document.getElementById("grade8").innerHTML = print(counter(cp,c));
	document.getElementById("grade9").innerHTML = print(counter(c,cm));
	document.getElementById("grade10").innerHTML = print(counter(cm,d));
	document.getElementById("grade11").innerHTML = print(counter(d,f));
	/*var numAP = counter(max,ap);
	var numA = counter(ap,a);
	var numAM = counter(a,am);
	var numBP = counter(am,bp);
	var numB = counter(bp,b);
	var numBM = counter(b,bm);
	var numCP = counter(bm,cp);
	var numC = counter(cp,c);
	var numCM = counter(c,cm);
	var numD = counter(cm,d);
	var numF= counter(d,f);
	*/
	event.preventDefault();
}

function counter(bound1, bound2){
	var count = 0;
	for (var i=0; i<25; i++)
		if (grades[i] < bound1 && grades[i] >= bound2)
			count++
	return count;
}

function print(amount){
	var txt = "";
	for (var j=0; j<amount; j++)
		txt += "☺";
	return txt;
}
