var elem_opacity = 0;
var count =-1;
var setInterval_id = setInterval(function(){ fade_in("game") },30);
setTimeout(page_explain,660);
setTimeout(button_appear,1200);
window.onclick = counter;
function counter()
{count++
    if(count>0)
        {
           document.getElementById("front_bar").style.width = (count/10) + '%'; 
           document.getElementById("count").innerHTML = count; 
        }
}
function fade_in(elem)
{
    if(elem_opacity<=1)
    {
        var object = document.getElementById(elem);
        object.style.opacity=elem_opacity;
        elem_opacity+=0.05;
    }
    else
    {
        clearInterval(setInterval_id);  
        
    }
      
}

function page_explain()
{   
    elem_opacity = 0;
    setInterval_id = setInterval(function(){ fade_in("explain") },25);
}

function button_appear()
{   
    elem_opacity = 0;
    setInterval_id = setInterval(function(){ fade_in("start") },25);
}
function fade_out_toggle()
{
    elem_opacity = 1;
    setInterval_id = setInterval(function(){ fade_out() },25);
    setTimeout(hide_all,520);
}
function fade_out()
{
    if(elem_opacity>-0.05)
    {
        var object = document.getElementById("all");
        object.style.opacity=elem_opacity;
        elem_opacity-=0.05;
    }
    else{
        clearInterval(setInterval_id);
    }
}
function hide_all()
{
    var object = document.getElementById("all");
    object.style.display = "none";
    elem_opacity = 0;
    bar_display();
}
function bar_display()
{
    if(elem_opacity<=1.05)
    {
        document.getElementById("back_bar").style.opacity=elem_opacity;
        document.getElementById("count").style.opacity=elem_opacity;
        elem_opacity+=0.05;
        setTimeout(bar_display,25);
    }
}
