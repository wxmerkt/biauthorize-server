function biauth(token) {
	biauthWindow = window.open(
	'http://biauthorize.azurewebsites.net/facedetection/dialog.html?token='+token,'biauthorise','height=700,width=800,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,status=no');
}