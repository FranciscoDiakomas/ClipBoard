window.onload = function () {
    
    const copiar = document.getElementById("btn")
    copiar.addEventListener("click",()=>{
        const div1 = document.getElementsByTagName("div")[0].textContent
        navigator.clipboard.write(div1)
        console.log("copiado!")
    })
}