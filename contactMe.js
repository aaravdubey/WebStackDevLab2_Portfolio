function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  var templateParams = {
    from_name: formData.get("name"),
    email_id: formData.get("email"),
    message: formData.get("message")
  };
  // console.log(templateParams);

  emailjs.send('service_jpkb7zh', 'template_lq0oqr8', templateParams)
    .then(function (response) {
      document.getElementById('success-msg').style.display = 'block';
      document.getElementById('error-msg').style.display = 'none';
      console.log('SUCCESS!', response.status, response.text);
      
    }, function (error) {
      document.getElementById('success-msg').style.display = 'none';
      document.getElementById('error-msg').style.display = 'block';
      console.log('FAILED...', error);
    });

}


