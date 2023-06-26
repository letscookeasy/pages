var elements = document.getElementsByClassName("elementor-button elementor-size-sm elementor-animation-grow");

for (var i = 0; i < elements.length; i++) {
	
  elements[i].addEventListener("click", kiemTraNoiDung);
}

function kiemTraNoiDung() {
	var emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var phoneRegExp = /^[0-9\-\+\(\)\ ]{10,20}$/;
	var emailValue = document.getElementById('form-field-email').value;
	var phoneValue = document.getElementById('form-field-field_c2eaef6').value;
  
	if (emailRegExp.test(emailValue)) {
	  if(phoneRegExp.test(phoneValue)){
		checkForm()
	  } else {
		alert("Invalid email or phone number. Please try again.");
	  }
	} else {
		alert("Invalid email or phone number. Please try again.");
	}
  }
  

function checkForm(){  
	// Lấy giá trị của các trường và kiểm tra xem chúng có trống không
	var name = document.getElementById('form-field-name').value;
	var email = document.getElementById('form-field-email').value;
	var message = document.getElementById('form-field-message').value;
	var phone = document.getElementById('form-field-field_c2eaef6').value;
    var address = document.getElementById('form-field-field_b58bf22').value;
    var city = document.getElementById('form-field-field_898ee15').value;
	if (!name || !email || !message || !phone|| !address|| !city) {
	  // Nếu bất kỳ trường nào bị thiếu thông tin, thông báo lỗi
	  alert("Missing information! Please complete the form.");
	} else {
	  // Nếu tất cả các trường đều có đầy đủ thông tin, gửi email bằng hàm sendMail()
	  sendMail();
	}
  }

function sendMail() {
	var params = {
	  name: document.getElementById("form-field-name").value,
	  email: document.getElementById("form-field-email").value,
	  message: document.getElementById("form-field-message").value,
	  phone: document.getElementById("form-field-field_c2eaef6").value,
      address: document.getElementById("form-field-field_b58bf22").value,
      city: document.getElementById("form-field-field_898ee15").value,
	};
  
	const serviceID = "service_63snetq";
	const templateID = "template_xvo9vap";
  
	emailjs.send(serviceID, templateID, params)
	.then(res=>alert("Your message sent successfully!!"))
	.catch(err=>console.log(err));
  
  }
  //elementor-button elementor-size-md elementor-animation-grow
  //elementor-field-type-html elementor-field-group elementor-column elementor-field-group-field_f283bbd elementor-col-100