$(document).ready(function(){
    $("#signup-form").validate({
      
        errorClass: 'errors',
        rules:{
           fname:{
           required:true,
           minlength:4 },
           lname:{ 
            required:true,
            minlength:4 },
           Email:{
            required:true,
            email:true
           },
           emailconf:{
            email:true,
            required:true
           },
           passwordconf:{
            required:true,
            minlength:8,
            maxlength:10
           },
           year:{
            required:true
           },
           gender:{
            required:true
           }
          
      
   },
  
   messages:{
    fname:{
       required:"Enter first name"
    },
    lname:{
        required:"Enter last name"
    }
   }
  
  
})
    

})

 
