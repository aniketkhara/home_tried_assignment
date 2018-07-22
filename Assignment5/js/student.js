var $form = $("form"),
  $successMsg = $(".alert");

$.validator.addMethod("checkletters", function(value, element) {
 return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);

});
$form.validate({
  rules: {
    name: {
      required: true,
      minlength: 3,
      checkletters: true
    },
    email: {
      required: true,
      email: true
    },
    phone: {
      required: true,
      maxlength: 10,
      minlength:10,
      phone: true,
    },
    dob: {
      required: true,
      date :true,
    },
    mark1: {
      required: true,
      minlength: 1,
      maxlength: 3,
      mark1: true,
    },
    mark2: {
      required: true,
      minlength: 1,
      maxlength: 3,
      mark1: true,
    },
    mark3: {
      required: true,
      minlength: 1,
      maxlength: 3,
      mark1: true,
    },
  },
  messages: {
    name: "Please specify your name (only letters and spaces are allowed)",
    email: "Please specify a valid email address",
    phone: "Please enter a valid phone no",
      dob: "Please enter a valid birthdate",
    mark1: "Please enter valid marks",
    mark2: "Please enter valid marks",
    mark3: "Please enter valid marks",
  },
  submitHandler: function() {
    $successMsg.show();
  }
});
