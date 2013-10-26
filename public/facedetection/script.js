function biauth(token) {
	biauthWindow = window.open(
	'http://biauthorize.azurewebsites.net/facedetection/dialog.html','biauthorize','height=700,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=no');
}

function biauthorize(text){
	document.write("<span><a id=\"biauth_authlink\" href=\"JavaScript:biauth();\">"+Text+"</a></span><br/>");

}