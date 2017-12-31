var fade_state = 0;
var word;
var elem_opacity = 0;
var count =0;
var timer_to_start=true;
var page_fade_in_state = 1;
var len;
var word_letter_iterator =0;
var setInterval_id = setInterval(function(){ fade_in("opening_page") },25);
var setInterval_id_timer = setInterval_id;



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
        if(fade_state==1)
        {   fade_state=10;
            glower();
        }
        else if(fade_state==2)
        {
            fade_state=3;
            glower();
        }
        else if(fade_state==4||fade_state==5)
        {
            glower();
        }
    }
      
}

function fade_out(elem)
{
    if(elem_opacity>0)
    {
        var object = document.getElementById(elem);
        elem_opacity-=0.05;
        object.style.opacity=elem_opacity;
        
    }
    else
    {
        clearInterval(setInterval_id);
        if(fade_state==0)
        {   fade_state = 1;
            document.getElementById("letter_page").style.display = 'block';
            document.getElementById("opening_page").style.display = 'none';
            elem_opacity=0;
            setInterval_id = setInterval(function(){ fade_in("letter_page") },25);
            
        }   
    }
}
function fade_out_toggle()
{
    elem_opacity = 1;
    setInterval_id = setInterval(function(){ fade_out("opening_page") },25);
    var form = document.getElementById("frm1");
    word = form.elements[0].value;
    if(word=="me")
        document.getElementById("hint").innerHTML = "L O L :D"
    len = word.length;
    return false;
}

function glower()
{   
    if(word=="me"&&fade_state==10)
    {   
        elem_opacity = 0;
        fade_state=2;
        setInterval_id = setInterval(function(){ fade_in("bulb_j1") },100);
                
    }
    else if(word_letter_iterator!=len&&fade_state==10)
    {
        var letter = "bulb_" + word[word_letter_iterator++] + "1";
        elem_opacity = 1;
        setInterval_id = setInterval(function(){ fade_out(letter) },50);
        setTimeout(function() {glower()}, 1200);

    }
    else if(fade_state==3)
    {
        elem_opacity = 0;
        fade_state=4;
        setInterval_id = setInterval(function(){ fade_in("bulb_o1") },100);
    }

    else if(fade_state==4)
    {
        elem_opacity = 0;
        fade_state=5;
        setInterval_id = setInterval(function(){ fade_in("bulb_k1") },100);
    }

    else if(fade_state==5)
    {
        elem_opacity = 0;
        fade_state=6;
        setInterval_id = setInterval(function(){ fade_in("bulb_e1") },100);
    }
    
}

