
const navigateTo = require("../utils/navigation-utils").navigateTo;
const Observable = require("tns-core-modules/data/observable").Observable;
var viewModel;
function onNavigatingTo(args) {
    const page = args.object;
    initViewModel(page);
}

function initViewModel(page){
  viewModel = new Observable();
  viewModel.counter = 42;
  viewModel.message = getMessage(viewModel.counter);
  viewModel.onTap = () => {
    doTap();
  };
  page.bindingContext = viewModel;
}

function doTap(){
  viewModel.counter--;
  viewModel.set("message", getMessage(viewModel.counter));
}

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return `${counter} taps left`;
    }
}


function goToSecondView(args)
{
  navigateTo("second-view");
}
exports.onNavigatingTo = onNavigatingTo;
exports.goToSecondView = goToSecondView
