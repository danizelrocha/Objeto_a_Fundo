


/* const menu = document.querySelector("#menu");

menu?.addEventListener("click", (event) => {
    const { target } = event;
    const body = document.querySelector('body')

    switch (target.getAttribute("class")) {
        case "home":
            body.style.background = "red"
            break;

        case "sobre":
            body.style.background = "blue"
            break;

        case "contato":
            body.style.background = "pink"
            break;
    }

}); */

const menu = document.querySelector("#menu")

if(menu) {

    menu.addEventListener("click", (event) => {
        const { target } = event;
        const body = document.querySelector('body')
    
        switch (target.getAttribute("class")) {
            case "home":
                body.style.background = "red"
                break;
    
            case "sobre":
                body.style.background = "blue"
                break;
    
            case "contato":
                body.style.background = "pink"
                break;
        }
    
    });

} 
