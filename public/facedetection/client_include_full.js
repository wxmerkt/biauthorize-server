//The form into which Biautherize fields are added
var biauthorize_form_id = null;
var biauthorize_auth_callback = null;

//Initialize Biautherize on given form
function biauthorize_init(form_id){
    biauthorize_form_id = form_id;
}

//Biautherize
function biauthorize(callback) {
    
    //Set the callback
    biauthorize_auth_callback = callback;

    //Open the dialog
	biauthWindow = window.open(
	'dialog.html',
    'Biauthorize',
    'height=600,width=800,'+
    'resizable=no,scrollbars=yes,'+
    'toolbar=no,menubar=no,'+
    'location=no,directories=no,status=no'
    );
}

//Listen for feedback from Biauthorize dialog
window.addEventListener("message", modifyDOM, false);

//When the dialog feeds back to the client, add hidden forms to the DOM.
function modifyDOM(auth_json) {

    //Run client callback function if it exists
    try {
        biauthorize_auth_callback();
    } catch(err) {
        alert("boo");
        //No Callback defined
    }

    //Get Form Node
    var form_node = document.getElementById(biauthorize_form_id);

    //Only attempt this with a working form
    if (form_node != null) {

        //Get the authentication data
    	var auth_data = auth_json.data;

        //Create a hidden field for each element returned from the server
        for (var auth_part in auth_data) {

            //Create field
        	var hidden_field = document.createElement('input');
        	hidden_field.value = auth_data[auth_part];
        	hidden_field.name = "biauth_" + auth_part;
            hidden_field.type = "hidden";
            hidden_field.id = hidden_field.name;

            //Insert into Form
            form_node.insertBefore(hidden_field, form_node.firstChild);
        }
    } else {
        alert("Could not add Biautherize fields to the Form!");
    }
}