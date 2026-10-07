const colors = [
    "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7",
    "#DDA0DD", "#98D8C8", "#F7DC6F", "#BB8FCE", "#85C1E9",
    "#F1948A", "#73C6B6", "#F8C471", "#7FB3D5", "#A569BD",
    "#52BE80", "#EC7063", "#5DADE2", "#F4D03F", "#AF7AC5",
    "#48C9B0", "#EB984E", "#5499C7", "#CD6155", "#58D68D",
    "#F5B041", "#7DCEA0", "#5B9BD5", "#C39BD3", "#F0B27A",
    "#76D7C4", "#EC407A", "#26A69A", "#42A5F5", "#AB47BC",
    "#FFA726", "#66BB6A", "#EF5350", "#29B6F6", "#7E57C2",
    "#FF7043", "#26C6DA", "#9CCC65", "#FFCA28", "#8D6E63",
    "#78909C", "#D4AC0D", "#1ABC9C", "#3498DB", "#9B59B6",
    "#E74C3C", "#2ECC71", "#F39C12", "#16A085", "#2980B9",
    "#8E44AD", "#C0392B", "#27AE60", "#D35400", "#2C3E50",
    "#E67E22", "#1ABC9C", "#34495E", "#F1C40F", "#E84393",
    "#00B894", "#0984E3", "#6C5CE7", "#FD79A8", "#00CEC9",
    "#FDCB6E", "#E17055", "#74B9FF", "#A29BFE", "#55EFC4",
    "#81ECEC", "#FAB1A0", "#FF7675", "#636E72", "#B2BEC3",
    "#00A8FF", "#9C88FF", "#FBC531", "#4CD137", "#487EB0",
    "#E84118", "#8C7AE6", "#44BD32", "#0097E6", "#F5F6FA",
    "#273C75", "#C23616", "#7F8FA6", "#718093", "#192A56",
    "#D63031", "#0984E3", "#6C5CE7", "#00B894", "#FDCB6E"
];
// console.log(colors)
let container=document.getElementById("container")


for(let i=0;i<=980;i++)
    {
        let box=document.createElement("div")
        box.className="h-4 w-4 m-0.5 rounded-sm";
       box.style.backgroundColor="black"
       container.appendChild(box)

       box.addEventListener("mouseover", () => {

        box.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
    
        setTimeout(() => {
            box.style.backgroundColor = "black";
        }, 500);
    
    });
}
