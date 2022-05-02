var myfile="";
        $('#resume_link').click(function() {
            $('#resume').trigger('click');
            myfile=$('#resume').val();
            var ext = myfile.split('.').pop();
            //var extension = myfile.substr( (myfile.lastIndexOf('.') +1) );

            if(ext=="pdf" || ext=="docx" || ext=="doc"){
                alert(ext);
            }
            else{
                alert(ext);
            }
         })