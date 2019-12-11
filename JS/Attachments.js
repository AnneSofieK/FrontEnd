$(document).ready(function () {
    //Checks if the information already has been filled out
    if(sessionStorage.getItem("image1") != null)
    {
      var images = document.getElementsByClassName("imagePreview");
      images[0].src = sessionStorage.getItem("image1");
    }
});

function saveImages(params) {
    var images = document.getElementsByClassName("imagePreview");

    for (let i = 0; i < images.length; i++) {
        alert(images[i]); 
    }

    location.href = "TicketInfo.html";
}

function addImg(){
    var img = document.getElementsByClassName("imgAdd");
    var pictures = document.getElementsByClassName("imagePreview");
    img[0].insertAdjacentHTML("beforebegin",'<div class="col-3 imgUp"><img class="imagePreview"><label class="btn btn-primary" id="upload">Upload<input type="file" class="uploadFile img" value="Upload Photo" style="width:0px;height:0px;overflow:hidden;"></label><i class="fa fa-times del"></i></div>');
}

$(document).on("click", "i.del" , function() {
    $(this).parent().remove();
});

$(function() {
    $(document).on("change",".uploadFile", function()
    {
        var uploadFile = $(this);
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

        if (/^image/.test( files[0].type)){ // only image file
            var reader = new FileReader();
            reader.readAsDataURL(files[0]); // read the local file

            reader.onloadend = function(){ 
                uploadFile.closest(".imgUp").find('.imagePreview').css("content", "url("+this.result+")");
            }
        }
        else{
            alert("You can only upload pictures");
        }
    });
});