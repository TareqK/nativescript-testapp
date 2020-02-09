/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

/*
NativeScript adheres to the CommonJS specification for dealing with
JavaScript modules. The CommonJS require() function is how you import
JavaScript modules defined in other files.
*/
const navigateTo = require("../utils/navigation-utils").navigateTo;
const Observable = require("tns-core-modules/data/observable").Observable;
var viewModel ;
function onNavigatingTo(args) {
    const page = args.object;
    initViewModel(page);
}

function initViewModel(page){
  viewModel  = new Observable();
  viewModel.message = "GENERAL KENOBI"
  page.bindingContext = viewModel;
}


function goToMainPage (args){
  navigateTo("main-page");
}
/*
Exporting a function in a NativeScript code-behind file makes it accessible
to the file’s corresponding XML file. In this case, exporting the onNavigatingTo
function here makes the navigatingTo="onNavigatingTo" binding in this page’s XML
file work.
*/
exports.goToMainPage  = goToMainPage;
exports.onNavigatingTo = onNavigatingTo;
