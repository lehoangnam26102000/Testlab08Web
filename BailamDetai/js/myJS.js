// JavaScript Document
	/* code JS cho form dangnhap.html */
    function validateform() {
        var name = document.myform.name.value;
        var password = document.myform.password.value;
 
        if (name == null || name == "") {
            alert("Tên không du?c tr?ng");
            return false;
        } else if (password.length < 8) {
            alert("Password ph?i 8 ký t? tr? lên.");
            return false;
        }
	}
	

