window.onresize = () =>
{
    UpdateSize();
}

UpdateSize();

function UpdateSize()
{
    let page = document.getElementById("page");

    let width = window.visualViewport.height * 0.5625;
    width *= 1.5;

    let max = window.visualViewport.width - 50;

    if (width > max)
        width = max;

    page.setAttribute("style", "width:" + width + "px");
}