document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);



function formvalidate() {
    var sname =document.getElementById("sname");
    var pass=document.getElementById("pass");
    var mailid =document.getElementById("mailid");
    var pnum =document.getElementById("pnum");
    if (validatename(sname)) {
    if (validatephonenum(pnum)) {
    if (validateemail(mailid)) {
    return true;
    }}}
    return false;}

    function validatename(sname) {
    var svalue = sname.value;
    var patt = /^[a-zA-Z]+$/;
    if (svalue.length == 0 ||svalue.length > 30) {
    if (svalue.match(patt) == false) {
    alert("Student name alphabets only/not empty");
    sname.focus();
    return false;}
    } else {
    return true;
    }
    }

    function validatepass(pass) {
        var pass = pass.value;
        var patt = /^[a-zA-Z0-9]+$/;
        if (pass.length == 0 ||pass.length > 8) {
        if (pass.match(patt) == false) {
        alert("password should be minimum 8 letters/not empty");
        sname.focus();
        return false;}
        } else {
        return true;
        }
        }

    function validatephonenum(pnum) {
    var patt = /^\d{10}$/;
    if (pnum.value.match(patt)) {
    return true;
    } else {
    alert('phone number must have numeric characters with 10 digit only');
    pnum.focus();
    return false;
    }
    }

    function validateemail(mailid) {
    var mailformat =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (mailid.value.match(mailformat))
    {
    return true;
    } else {
    alert("You have entered an invalid email address!");
    mailid.focus();
    return false;
    }
    }
    