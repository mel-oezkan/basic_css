var pages = document.getElementsByClassName("pages");
var page = 0;

document.getElementById("page_number").innerHTML = page;

function up(){
    if(page > 0 && page < pages.length -2){
        pages[page].style.display = "none";
        page++;
        pages[page].style.display = "inherit";
        document.getElementById("subtract").style.display = "inline-block"
    }
    else if(page == 0){
        pages[page].style.display = "none";
        page++;
        pages[page].style.display = "inherit";
        document.getElementById("subtract").style.display = "inline-block"
    }
    else if(page == pages.length -2){
        document.getElementById("add").style.display = "none";
        pages[page].style.display = "none";
        page++;
        pages[page].style.display = "inherit";
    }
    console.log(page);

    document.getElementById("page_number").innerHTML = page;
};

function down(){
    if(page == pages.length-1){
        page--;
        pages[page].style.display = "inherit";
        pages[page+1].style.display = "none";
        document.getElementById("add").style.display = "inline-block"
    }
    else{
        page--;
        pages[page].style.display = "inherit";
        pages[page+1].style.display = "none";
    }

    if(page == 0){
        document.getElementById("subtract").style.display = "none"
    }
    console.log(page);
    document.getElementById("page_number").innerHTML = page;
};

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;  
    if (e.keyCode == '38' || e.keyCode == '39') {
        // 38 up arrow 39 right
        console.log("up");
        if (page.length > page > -1){
            console.log(page)
            up();
        }
    }
    else if (e.keyCode == '40' || e.keyCode == '37') {
        // down arrow and left
        console.log("down");
        console.log(page)
        if (page > 0){
            console.log("change")
            down();
        };
    }
}