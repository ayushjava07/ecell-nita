const cursor=document.querySelectorAll(".cursor");
const links= document.querySelectorAll(" #pages h2")
window.addEventListener("mousemove",(e)=>{
    let x=e.pageX;
    let y=e.pageY;
    cursor.forEach(el=>{
        el.style.left=`${x}px`;
        el.style.top=`${y}px`;
        links.forEach(link=>{
            link.addEventListener("mouseenter",()=>{
                el.classList.add("hover");
            })
            link.addEventListener("mouseleave",()=>{
                el.classList.remove("hover");
            })
        })
    })
})