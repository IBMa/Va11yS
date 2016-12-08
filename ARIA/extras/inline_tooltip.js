
    function tooltipFocus(obj) {
    var tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = obj.title;
    tooltip.style.display = "block";
    tooltip.style.top = obj.offsetTop - tooltip.offsetHeight + "px";
    tooltip.style.left = obj.offsetLeft + "px";
}
function tooltipMouse(obj) {
    var tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
    tooltip.style.top = "-9999px";
    tooltip.style.left = "-9999px";
}



