var is_started = true;
var t_start;
var t_pause;
var t_play;
var p_diff=0;
var is_timer_running=true;//to break timer recursive loop from running
var is_paused=false;//to toggle between pause/play button
var is_reset=0;//to toggle between reset/start button
var timer_initialized=0;// to see if timer has been initialized
function timer_initializer()
{
    timer_initialized++;
    if(timer_initialized!=1)
           is_reset=1;
    
    if(is_started)
        {	
        is_started=false;
        t_start=new Date();
        timer_calc();
        }
}
function timer_calc()
{
    if(is_reset==1)
        {			
        document.getElementById("button1").innerHTML = "START";
        document.getElementById("timer").innerHTML = 0 + " : " + 0 + " : " + 00 + " : " + 00 + " : " + 000;
        is_started = true;
        p_diff=0;
        is_timer_running=true;
        is_paused=0;//to compare betwen pause and play state
        is_reset=0;//to compare between reset and start state
        timer_initialized=0;// to compare wether timer has been started the first time or not

        }
    

        else
            {
            document.getElementById("button1").innerHTML= "RESET";
            var t_end = new Date();
                
            var time_diff = t_end-t_start;
            time_diff = time_diff - p_diff;
            var t_ms = time_diff%1000;
            var t_sec = Math.floor((time_diff/1000)%60);
            var t_min = Math.floor(((time_diff/60000)%60));
            var t_hour = Math.floor((time_diff/3600000)%24);
            var t_day = Math.floor((time_diff/86400000));
                
            if(is_timer_running)
                {	
                if(t_sec>=30)
                {
                    document.getElementById("timer").style.color ='green';
                }
                document.getElementById("timer").innerHTML =t_day+ " : " + t_hour + " : " + t_min + " : " + t_sec + " : " + t_ms;
                setTimeout(timer_calc,0);
                }

            }


}

function timer_pauser()
{	
    if(!is_paused)
        {
        is_paused=true;
        is_timer_running=false;
        document.getElementById("button2").innerHTML= "PLAY";
        t_pause = new Date();
        }
    
    else
        {
        is_timer_running=true;
        is_paused=false;
        t_play = new Date();
        p_diff += (t_play-t_pause);
        document.getElementById("button2").innerHTML= "PAUSE";
        timer_calc();
        }
}