var start_time = new Date();
var color_toggled = 0;
var time_decrease = 420;//size of timer bar is 420px
var click_time = start_time;
var timer_duration;
var elem_opacity = 0;
var count =0;
var timer_to_start=true;
var page_fade_in_state = 1;
var setInterval_id = setInterval(function(){ fade_in("title1") },30);
var setInterval_id_timer = setInterval_id;
window.onclick = counter;

function fade_in(elem) {
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
        setInterval_id = setInterval(function(){ fade_in("explain1") },50);
    }
    else if(page_fade_in_state==2)
    {
        page_fade_in_state=3;
        elem_opacity = 0;
        setInterval_id = setInterval(function(){ fade_in("explain2") },60);
    }
    else if(page_fade_in_state==3)
    {
        page_fade_in_state=4;
        elem_opacity = 0;
        setInterval_id = setInterval(function(){ fade_in("explain3") },80);
    }
    else if(page_fade_in_state==4)
    {
        page_fade_in_state=5;
        elem_opacity = 0;
        setInterval_id = setInterval(function(){ fade_in("explain4") },80);
    }
    else if(page_fade_in_state==5)
    {
        page_fade_in_state=6;
        elem_opacity = 0;
        setInterval_id = setInterval(function(){ fade_in("show_list_button") },25);
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
    else {
        clearInterval(setInterval_id);
        timer_to_start = false;
        document.getElementById("home_page").style.display='none';
        elem_opacity = 0;
        setInterval_id = setInterval(function(){ fade_in("team_list_page") },25);
    }

}
function fade_out_toggle()
{
    elem_opacity = 1;
    setInterval_id = setInterval(function(){ fade_out2("home_page") },25);
}

