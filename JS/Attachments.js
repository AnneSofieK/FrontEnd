$(document).ready(function () {
    //Checks if the information already has been filled out
    if(sessionStorage.getItem("images0") != null)
    {
      var images = document.getElementsByClassName("imagePreview");
      images[0].src = sessionStorage.getItem("images0");
    }

    if(sessionStorage.getItem("image2") != null)
    {
      var images = document.getElementsByClassName("imagePreview");
      images[0].src = sessionStorage.getItem("image1");
    }
});

function saveImages(params) {
    var images = document.getElementsByClassName("imagePreview");

    for (let i = 0; i < images.length; i++) {
        let name = "images"+i;
        alert(name);
        sessionStorage.setItem(name, images[0].src);
    }
    
    location.href = "TicketInfo.html";
}

function addImg(){
    var img = document.getElementsByClassName("imgAdd");
    var pictures = document.getElementsByClassName("imagePreview");
    img[0].insertAdjacentHTML("beforebegin",'<div class="col-3 imgUp"><img class="imagePreview"><label class="btn btn-primary" id="upload">Upload<input type="file" class="img" value="Upload Photo" onchange="loadImg(this)" style="width:0px;height:0px;overflow:hidden;"></label><i class="fa fa-times del"></i></div>');
}

$(document).on("click", "i.del" , function() {
    $(this).parent().remove();
});

function loadImg(element) {
    if (element.files[0]) {
        if (/^image/.test( element.files[0].type)){
            var reader = new FileReader();

            reader.onload = function (e) {
                element.parentElement.parentElement.querySelector(".imagePreview").src =  e.target.result;
            }

            reader.readAsDataURL(element.files[0]);
        }
        else{
            alert("You can only upload pictures");
        }
    }
}