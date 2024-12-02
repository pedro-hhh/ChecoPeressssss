canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.



background_image = "pista.png";

auto_image = "auto.png";

auto_x = 10;
auto_y = 10;

function add(){
    background_imgTag= new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src=background_image;

    auto_imgTag= new Image();
    auto_imgTag.onload = uploadauto;
    auto_imgTag.src=auto_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadauto(){
    ctx.drawImage(auto_imgTag, auto_x, auto_y, 100, 90)
}

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed=="38")
        {
            up();
        }
        if(keyPressed=="40")
        {
            down();
        }
        if(keyPressed=="37")
        {
            left();
        }
        if(keyPressed=="39")
        {
            right();
        }
}
window.addEventListener("keydown", my_keydown)

function up()
{
    if(auto_y >=0)
    {
        auto_y = auto_y - 10;
            uploadBackground();
            uploadauto();
    }
}
function down()
{
    if(auto_y <=500)
        {
            auto_y = auto_y + 10;
                uploadBackground();
                uploadauto();
        }
}
function right()
{
    if(auto_x <= 500)
        {
            auto_x = auto_x + 10;
                uploadBackground();
                uploadauto();
        }
}
function left()
{
    if(auto_x >= 0)
        {
            auto_x = auto_x - 10;
                uploadBackground();
                uploadauto();
        }
}

