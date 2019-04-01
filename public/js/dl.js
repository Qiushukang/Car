function dl(){
	var xhr=new XMLHttpRequest();
	xhr.open("post","/user/login",true);
	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
	var formdata="cname="+cname.value+"&cpwd="+cpwd.value;
	xhr.send(formdata)
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			var result=xhr.responseText;
			alert(result);
			if (result=="登陆成功") {
				window.location.href="./index.html";
			}
		}
	}
}
function zc(){
	var a=document.getElementById("zcname").value;
	var b=document.getElementById("zcpwd").value;
	var xhr= new XMLHttpRequest();
	xhr.open("get","/user/regist?cname="+a+"&cpwd="+b+"&cphone="+cphone.value+"&email="+email.value,true);
	xhr.setRequestHeader("content-type","application/x-www-form-urlencoded")
	xhr.send(null);
	xhr.onreadystatechange=function(){
		if (xhr.readyState==4) {
			var result=xhr.responseText;
			alert(result)
			if (result=="注册成功") {
				window.location.href="./index.html";
			}			
		}
	}
}