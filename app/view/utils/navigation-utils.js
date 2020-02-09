const Frame = require("tns-core-modules/ui/frame");


function navigateTo(pageName){
  Frame.getFrameById("root").navigate("view/"+pageName+"/"+pageName);
}

exports.navigateTo = navigateTo
 
