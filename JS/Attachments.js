function Add_img(){
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
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file

            reader.onloadend = function(){ // set image data as background of div
                //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
                uploadFile.closest(".imgUp").find('.imagePreview').css("content", "url("+this.result+")");
            }
        }
    
    });
});