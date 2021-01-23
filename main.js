canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

Car1_width = 100;
Car1_height = 90;
Car1_image = "car1.png";
Car1_x = 10;
Car1_y = 10;

Car2_width = 100;
Car2_height = 90;
Car2_image = "car1 (1).png";
Car2_x = 10;
Car2_y = 10;

function add() {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
    background_imgTag.src = background_image;   // load image

    Car1_imgTag = new Image(); //defining a variable with a new image
    Car1_imgTag.onload = uploadrover; // setting a function, onloading this variable
    Car1_imgTag.src = Car1_image;   // load image

    Car2_imgTag = new Image(); //defining a variable with a new image
    Car2_imgTag.onload = uploadrover; // setting a function, onloading this variable
    Car2_imgTag.src = Car2_image;   // load image
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(Car1_imgTag, Car1_x, Car1_y, Car1_width, Car1_height);
}

function uploadcar2() {
        ctx.drawImage(Car2_imgTag, Car2_x, Car2_y, Car2_width, Car2_height);
    }
window.addEventListener("keydown",mykeydown);
function mykeydown(e)
{
    keypressed= e.keyCode;
    if (keypressed == "38")
    {
            car1_up();
    }
    if (keypressed == "40")
    {
            car1_down();
    }
    if (keypressed == "37")
    {
            car1_left();
    }
    if (keypressed == "39")
    {
            car1_right();
    }

    if (keypressed == "87")
    {
            car2_up();
    }
    if (keypressed == "83")
    {
            car2_down();
    }
    if (keypressed == "65")
    {
            car2_left();
    }
    if (keypressed == "68")
    {
            car2_right();
    }
}
