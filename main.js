imagesArray = ["Me.jpg", "My Mother.jpg", "My Father.jpg", "My Sister.jpg"];
namesArray = ["Me", "My Mother", "My Father", "My Sister"];
var i = 0;
function update()
{
    i++;
    number = 3;
    if (i>number)
    {
        i = 0;
    }
    document.getElementById("names").innerHTML = namesArray[i];
    document.getElementById("images").src = imagesArray[i];
}