const items = document.querySelectorAll("#accordeon .item .header");

items.forEach((item) => {
    item.addEventListener("click", (e) => {
        
        const content = e.currentTarget.nextElementSibling;
        console.log(content);
        if(content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

        
        e.currentTarget.closest(".item").classList.toggle("active");
    });
});
