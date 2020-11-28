function myFunction21(){
    var x = document.getElementsByClassName("drop-content21")[0];
    x.classList.toggle("show")
}
window.onclick = function(event){
    if(!event.target.matches(".btn21")) {
        var dropdowns = document.getElementsByClassName("drop-content21");
        var i;
        for (i = 0; i < dropdowns.length; i++){
            var openDrop = dropdowns[i];
            if( openDrop.className.contains('show')){
                openDrop.classList.remove("show");
            }
        }
    }
}