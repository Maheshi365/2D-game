function key(event) {
    if (event.which == 13) {
        if (rw == 0) {
            document.getElementById("start").style.visibility="hidden";
            g();
            fid = f();
            bs.play();
            rw = setInterval(run, 100);
            rs.play();
            bw = setInterval(b, 100);
            sw = setInterval(updateScore, 100);
            fw = setInterval(move, 100);
        }




    }
    if (event.which == 32) {

        if (jw == 0) {
            clearInterval(rw);
            rs.pause();
            rw = -1;

            jw = setInterval(jump, 100);
            js.play();
        }
    }
}

var ws = new Audio("endsound.mp3")

var bs = new Audio("backsound.mp3");
bs.loop = true;

var rs = new Audio("run.mp3");
rs.loop = true;

var js = new Audio("jump.mp3")

var ds = new Audio("dead.mp3")

var fid = 0;
var m = 700;

function f() {

    for (var y = 0; y < 10; y++) {
        var i = document.createElement("img");

        i.src = "canal.gif";

        i.className = "f";

        i.style.marginLeft = m + "px";

        i.id = "a" + y;

        if (y <= 4) {
            m = m + 600;
        }

        if (y >= 5) {
            m = m + 400;
        }

        document.getElementById("d").appendChild(i);
        

       
       
        
    }




}

var rw = 0;
var r = 1;

function run() {
    var ring = document.getElementById("boy");

    r = r + 1;

    if (r == 12) {
        r = 2;
    }


    ring.src = "Run (" + r + ").png";


}

var bw = 0;
var x = 0;


function b() {

    x = x - 20;
    document.getElementById("d").style.backgroundPositionX = x + "px";
}

var u = 0;
var sw = 0;
var s = 250;

function updateScore() {

    u = u + 1;
    var s = document.getElementById("score").innerHTML = u;
    if(s==268){
        document.getElementById("win").style.visibility="visible";
        clearInterval(bw);
        clearInterval(rw);
        clearInterval(fw);
        clearInterval(jw);
        clearInterval(sw);
        rs.pause();
        ds.pause();
        js.pause();
        bs.pause();
        ws.play();
       
    }
    if(s ==254){
        document.getElementById("g").style.visibility="hidden";
    }
}

var fw = 0;

function move() {
    for (var y = 0; y < 10; y++) {

        var b = document.getElementById("a" + y);

        var z = getComputedStyle(b);

        var p = parseInt(z.marginLeft);

        p = p - 20;

        b.style.marginLeft = p + "px";


        if (p < 350 & p > 200) {

            if (mt > 250) {

                clearInterval(rw);
                rs.pause();

                clearInterval(jw);
                jw = -1;

                clearInterval(bw);

                clearInterval(sw);

                clearInterval(fw);

                dw = setInterval(dead, 100);
                ds.play();
                bs.pause();
            }


        }
    }
}


var jw = 0;
var j = 1;
var mt = 270;


function jump() {

    var jimg = document.getElementById("boy");

    if (j <= 5) {
        mt = mt - 40;
    
    }

    if (j >= 6) {
        mt = mt + 40;

    }

    jimg.style.marginTop = mt + "px";

    j = j + 1;

    if (j == 11) {
        j = 1;

        clearInterval(jw);
        jw = 0;
        rw = setInterval(run, 100);
        rs.play();

        if (fid == 0) {
            fid = f();
        }

        if (fw == 0) {
            fw = setInterval(move, 100);
        }

        if (bw == 0) {
            bw = setInterval(b, 100);
        }

        if (sw == 0) {

            sw = setInterval(updateScore, 100);
        }
    }


    jimg.src = "Jump (" + j + ").png";

}

var dw = 0;
var d = 1;

function dead() {

    var dimg = document.getElementById("boy");

    d = d + 1;

    if (d == 11) {
        d = 10;
        dimg.style.marginTop = "300px";


        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endscore").innerHTML = u;
    }

    dimg.src = "Dead (" + d + ").png";

}

function re() {
    location.reload();
}


function g() {
    var i = document.createElement("img");

    i.src = "gho.gif";

    i.className = "g";

    i.id="g";

    document.getElementById("d").appendChild(i);
}

