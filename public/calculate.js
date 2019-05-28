
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

	var boundsArr = [max,ap,a,am,bp,b,bm,cp,c,cm,d,f];
	for (var i=0; i<11; i++)
	{
		if (boundsArr[i+1] >= boundsArr[i])
		{
			alert("input overlapped!");
			return false;
		}
	}

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
	