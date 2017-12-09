var start_time = new Date();
var color_toggled = 0;
var time_decrease = 420;//size of timer bar is 420px
var click_time = start_time;
var timer_duration;
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
        if(count>(timer_duration/1000)*2)
        {    
            document.getElementById("front_bar").style.backgroundColor = 'teal';
            if(color_toggled==1)
            {
                document.getElementById("checkpoint1").style.color = 'teal';
                document.getElementById("checkpoint4").style.color = 'teal';  
                document.getElementById("timer_image2").style.backgroundColor = 'teal';
            }
        }
        if(count>(timer_duration/1000)*4)
        {    
            document.getElementById("front_bar").style.backgroundColor = 'coral';
            document.getElementById("checkpoint1").style.color = 'coral';
            document.getElementById("checkpoint2").style.color = 'coral';
            document.getElementById("checkpoint4").style.color = 'coral';
            document.getElementById("timer_image2").style.backgroundColor = 'coral';
        }
        if(count>0)
        {   var width_increaser = (count/10)*(60/(timer_duration/1000));
            if(color_toggled==0)
            {
                document.getElementById("checkpoint4").style.color = 'lightcoral';
                color_toggled=1;
            }
            document.getElementById("front_bar").style.width = width_increaser + '%'; 
            document.getElementById("count2").innerHTML = count; 
        }
    }
}
function timer_decreaser()
{
    if(time_decrease>=0)
        {
            document.getElementById("timer_image2").style.width = time_decrease + 'px';
            time_decrease-=(0.175)*(60/(timer_duration/1000));
            setTimeout(timer_decreaser,25);
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
    var form = document.getElementById("frm1");
    timer_duration = form.elements[0].value;
    timer_duration*=1000;
    return false;
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
    setTimeout(timer_end,timer_duration+1000);
    setTimeout(score_display,timer_duration+1750);
}
function score_display()
{
    document.getElementById("count3").innerHTML = "Wow, you literally spent all that time just clicking randomly on the screen. Seriously, pls get a life, and like you managed " + count + " clicks, which doesn't really matter"; 
    document.getElementById("count3").style.fontFamily = "raleway";
    document.getElementById("count3").style.fontSize = "60px";
    document.getElementById("count3").style.fontWeight = "200";
    document.getElementById("count3").style.width = "150px;";
    document.getElementById("count3").style.display = 'block';
    document.getElementById("count").style.display = 'none';
    click_time = 0;
    setInterval_id = setInterval(function(){ fade_in("count3") },25);
    
}
function timer_end()
{
    if(elem_opacity>=-0.05)
    {
        document.getElementById("back_bar").style.opacity=elem_opacity;
        document.getElementById("count").style.opacity=elem_opacity;
        document.getElementById("timer_image").style.opacity=elem_opacity;
        elem_opacity-=0.05;
        setTimeout(timer_end,25);
    }
}
function bar_display()
{    document.getElementById("timer_image").style.display = 'block';
    if(elem_opacity<=1.05)
    {   
        document.getElementById("back_bar").style.opacity=elem_opacity;
        document.getElementById("count").style.opacity=elem_opacity;
        document.getElementById("count2").style.opacity=elem_opacity;
        document.getElementById("timer_image").style.opacity=elem_opacity;
        elem_opacity+=0.05;
        setTimeout(bar_display,25);
    }
    else{
        click_time = new Date();
        timer_decreaser();
    }
}
