var start_time = new Date();
var color_toggled = 0;
var time_decrease = 420;//size of timer bar is 420px
var click_time = start_time;
var timer_duration;
var elem_opacity = 0;
var count =0;
var timer_to_start=true;
var page_fade_in_state = 1;
var setInterval_id = setInterval(function(){ fade_in("game") },30);
var setInterval_id_timer = setInterval_id;
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
    }
    else
    {
        clearInterval(setInterval_id_timer);
        click_time = 0;
        elem_opacity = 1;
        page_fade_in_state = 4;
        setInterval_id = setInterval(function(){ fade_out2("timer_page") },25);
        document.getElementById("count3").innerHTML = "Wow, you literally spent all that time just clicking randomly on the screen. Seriously, pls get a life, and like you managed " + count + " clicks, which doesn't really matter"; 
        document.getElementById("count3").style.fontFamily = "raleway";
        document.getElementById("count3").style.fontSize = "60px";
        document.getElementById("count3").style.fontWeight = "200";
        document.getElementById("count3").style.width = "150px;";
        document.getElementById("count3").style.display = 'block';
        
        
    }
    
}
function fade_in(elem)
{
    if(elem_opacity<1)
    {
        var object = document.getElementById(elem);
        elem_opacity+=0.05;
        object.style.opacity=elem_opacity;
        
    }
    else
    {
        clearInterval(setInterval_id);  
        if(page_fade_in_state==1)
        {   
            page_fade_in_state=2;
            elem_opacity = 0;
            setInterval_id = setInterval(function(){ fade_in("explain") },25);
        }
        else if(page_fade_in_state==2)
        {
            page_fade_in_state=3;
            elem_opacity = 0;
            setInterval_id = setInterval(function(){ fade_in("start") },25);
        }
    }
      
}

function fade_out2(elem)
{
    if(elem_opacity>0)
    {
        var object = document.getElementById(elem);
        elem_opacity-=0.05;
        object.style.opacity=elem_opacity;
        
    }
    else{
        clearInterval(setInterval_id);
        if(timer_to_start==true)
        {   timer_to_start = false;
            document.getElementById("all_page1").style.display='none';
            document.getElementById("timer_image").style.display='block';
            elem_opacity = 0;
            setInterval_id = setInterval(function(){ fade_in("timer_page") },25);
            click_time = new Date();
            setInterval_id_timer = setInterval(function(){ timer_decreaser() },25);
            
        }
        if(page_fade_in_state==4)
        {
            elem_opacity = 0;
            setInterval_id_timer = setInterval(function(){ fade_in("count3") },50);
            document.getElementById("timer_page").style.display = 'none';
        }
    }
}
function fade_out_toggle()
{
    elem_opacity = 1;
    setInterval_id = setInterval(function(){ fade_out2("all_page1") },25);
    var form = document.getElementById("frm1");
    timer_duration = form.elements[0].value;
    timer_duration*=1000;
    return false;
}

