function biauth(token) {
	biauthWindow = window.open(
	'http://biauthorize.com:3000/biauthorize','Biauthorize','height=700,width=900,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=no');
}

function biauthorize(linktext){
	document.write("<a id=\"biauth_authlink\" href=\"JavaScript:biauth();\">"+linktext+"</a><br/>");

}

window.addEventListener("message", addToken, false);

function addToken(tokenval) {
	var authLink = document.getElementById("biauth_authlink");
	var tokenField = document.createElement('input');
	tokenField.value = tokenval.data;
	tokenField.name = "biauth_token";
    tokenField.type = "hidden";
    tokenField.id = tokenField.name;

    var textLabel = document.createElement('span');
	textLabel.id = "biauth_textlabel";
    textLabel.innerHTML = "Your face has been approved.";

    authLink.parentNode.insertBefore(tokenField, authLink);
    authLink.parentNode.insertBefore(textLabel, authLink);
    authLink.parentNode.removeChild(authLink);
}
