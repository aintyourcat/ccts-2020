//Get the sidebar id
var sidebar = document.getElementById("sidebar");

//Toggle the sidebar display when the icon clicked
function sidebar_open(){
    if (sidebar.style.display === 'block'){
        sidebar_close();
    }else{
        sidebar.style.display = 'block';
    }
}

//Hide the sidebar
function sidebar_close(){
    sidebar.style.display = "none";
}
