var start_time = new Date();
var click_time = start_time;
var elem_opacity = 0;
var count =0;
var setInterval_id = setInterval(function(){ fade_in("game") },30);
setTimeout(page_explain,660);
setTimeout(button_appear,1200);
window.onclick = counter;
function counter()
{
    
    if(click_time>(start_time))
    {   count++;   
        if(count>0)
        {
            document.getElementById("front_bar").style.width = (count/10) + '%'; 
            document.getElementById("count").innerHTML = count; 
        }
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
    setTimeout(timer_end,60000);
    setTimeout(score_display,60550);
}
function score_display()
{
    document.getElementById("count").innerHTML = "Wow, you literally spent all that time just clicking randomly on the screen. Seriously, pls get a life, and like you managed " + count + " clicks, which doesn't really matter"; 
    document.getElementById("count").style.fontFamily = "raleway";
    document.getElementById("count").style.fontSize = "60px";
    document.getElementById("count").style.fontWeight = "200";
    document.getElementById("count").style.width = "150px;";
    click_time = 0;
    setInterval_id = setInterval(function(){ fade_in("count") },25);
    
}
function timer_end()
{
    if(elem_opacity>=-0.05)
    {
        document.getElementById("back_bar").style.opacity=elem_opacity;
        document.getElementById("count").style.opacity=elem_opacity;
        elem_opacity-=0.05;
        setTimeout(timer_end,25);
    }
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
    else{
        click_time = new Date();
    }
}
