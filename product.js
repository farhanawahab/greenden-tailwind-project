//selecting side navbar, menu icon
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")

var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function(){
    sidenav.style.right=0;
})

closenav.addEventListener("click", function(){
    sidenav.style.right = "-50%";
})

//Product search functionality
var productcontainer = document.getElementById("productcontainer")
var search = document.getElementById("search")
var productList = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUpperCase();
    for(count=0; count<productList.length; count++){
        //selecting only the h1 tag (product name)
        var productName = productList[count].querySelector("h1").textContent

        if(productName.toUpperCase().indexOf(enteredValue)<0){
            productList[count].style.display="none"
        }else{
            productList[count].style.display="block"
        }
    }
})