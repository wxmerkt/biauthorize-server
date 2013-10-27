function biauth(token) {
	biauthWindow = window.open(
	'http://biauthorize.com/biauthorize','Biauthorize','height=800,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=no');
}

function biauthorize(linktext){
	document.write("<a class=\"btn btn-info\" id=\"biauth_authlink\" href=\"JavaScript:biauth();\">"+linktext+"</a><br/>");

}

window.addEventListener("message", addToken, false);

function addToken(tokenval) {

	var tokendata = JSON.parse(tokenval.data);

	var authLink = document.getElementById("biauth_authlink");

	var tokenField = document.createElement('input');
	tokenField.value = tokendata.ba_token;
	tokenField.name = "biauth_token";
    tokenField.type = "hidden";
    tokenField.id = tokenField.name;

    var userField = document.createElement('input');
	userField.value = tokendata.ba_user;
	userField.name = "biauth_user";
    userField.type = "hidden";
    userField.id = userField.id;

    var verifyField = document.createElement('input');
	verifyField.value = tokendata.ba_verified;
	verifyField.name = "biauth_verified";
    verifyField.type = "hidden";
    verifyField.id = verifyField.id;

    var textLabel = document.createElement('div');
	textLabel.id = "biauth_textlabel";
	textLabel.className = "alert alert-dismissable alert-success";
    textLabel.innerHTML = "Your face has been approved.";

    authLink.parentNode.insertBefore(tokenField, authLink);
    authLink.parentNode.insertBefore(userField, authLink);
    authLink.parentNode.insertBefore(verifyField, authLink);
    authLink.parentNode.insertBefore(textLabel, authLink);
    authLink.parentNode.removeChild(authLink);
}
