const copyright = document.getElementById("copyDate")
    
const copyDate = new Date().getFullYear()
copyright.innerText = copyDate


//Get the button
    let mybutton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }


// sidebar
const sidebar_info = document.querySelector(".sidebar_info")
const open_sidebar = document.getElementById("open_sidebar")

open_sidebar.addEventListener("click", (e) => {
    // sidebar_info.style.right = 0
    sidebar_info.style.transform = "translate(0)"

    e.preventDefault()
})

const close_sidebar = document.getElementById("close_sidebar")

close_sidebar.addEventListener("click", (e) => {
    // sidebar_info.style.right = "-400px"
    sidebar_info.style.transform = "translate(-430px)"
    sidebar_info.style.transition = ".5s"

    e.preventDefault()
})


// // Cursor
// window.addEventListener("mousemove", (e)=>{
//     let cursor = document.getElementById("cursor");
//     setTimeout(()=>{
//         cursor.style.top = `${e.clientY}px`;
//         cursor.style.left = `${e.clientX}px`;
//     },50)

//     if(e.target.id === "box") {
//         cursor.classList.add("active");
//     }
//     else {
//         cursor.classList.remove("active");
//     }
// })

