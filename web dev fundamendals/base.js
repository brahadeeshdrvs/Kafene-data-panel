if(localStorage.getItem("loginStatus")){
    location.replace = "./index.html"
    }
else{
    location.replace("./login.html")
}
$("#logout > a").click(()=>{
    localStorage.removeItem('loginStatus')
})