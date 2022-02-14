var time=0;
var dupt=0;
var timer;

function startTime(){
    time=document.getElementById("time").value*60;
    dupt=time;
    clearTimeout(timer);
    document.getElementById("count").className="col-12 text-center"
    document.getElementById("box").className="alert alert-danger d-none";
    document.getElementById("progress").className="progress";
    document.getElementById("progress-bar").className="progress-bar";
    startT();
}

function startT(){
    time=time-1;

    document.getElementById("min").innerText=doubleDigit(Math.floor(time/60));
    document.getElementById("sec").innerText=doubleDigit(time-Math.floor(time/60)*60);

    var perc= time*100/dupt;
    document.getElementById("progress-bar").style.width=Math.floor(perc)+"%";
    document.getElementById("progress-bar").ariaValueNow = Math.floor(perc);

    if(perc<=20)
        document.getElementById("progress-bar").className="progress-bar bg-danger";

    if(time<=0){
        stopT();
        document.getElementById("box").className="alert alert-danger";
        document.getElementById("progress").className="progress d-none";
    }
    else
        timer = setTimeout("startT()",1000);
}

function stopT(){
    clearTimeout(timer);
}

function doubleDigit(x){
    if(x<10)
        return 0+""+x;
    else
        return x;
}