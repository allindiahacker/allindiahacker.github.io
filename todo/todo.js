var i;
if (localStorage.num) 
{
    for(i=1;i<=Number(localStorage.num);i++)
	{
		var temp_task = document.createElement('h1');
		document.body.appendChild(temp_task);
		temp_task.id='a'+i;
		document.getElementById("a"+i).innerHTML = JSON.parse(localStorage.getItem( 'task' + i )); 
		temp_task.className = "tasks";
		if(Number(localStorage.getItem('a'+i))==-1)
		{
			document.getElementById("a"+i).style.textDecoration = "line-through";
		}
	}	
}               
document.getElementById("a1").onclick = function() {myFunction("a1")};
document.getElementById("a2").onclick = function() {myFunction("a2")};
document.getElementById("a3").onclick = function() {myFunction("a3")};
document.getElementById("a4").onclick = function() {myFunction("a4")};
document.getElementById("a5").onclick = function() {myFunction("a5")};
document.getElementById("a6").onclick = function() {myFunction("a6")};
document.getElementById("a7").onclick = function() {myFunction("a7")};
document.getElementById("a8").onclick = function() {myFunction("a8")};

function myFunction(obj) {
    document.getElementById(obj).style.textDecoration = "line-through";
     for(i=1;i<=Number(localStorage.num);i++)
     {
     	if(obj=="a"+i)
     	{
     		localStorage.setItem('a'+i,-1);
     	}
     }
}
function add()
{	var task;
	if (localStorage.num) 
	{
        localStorage.num= Number(localStorage.num)+1;
    } 
    else 
    {
        localStorage.num = 1;
    }
	var form = document.getElementById("frm1");
    task = form.elements[0].value;
	var temp_task = document.createElement('h1');
	document.body.appendChild(temp_task);
	temp_task.innerHTML = task;
	temp_task.className = "tasks";
	localStorage.setItem( 'task' + Number(localStorage.num), JSON.stringify(task));
	return false;
}

