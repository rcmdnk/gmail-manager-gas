// log all of your labels
function labels(){
 var labels = GmailApp.getUserLabels();
  for (i in labels) {
    Logger.log(labels[i].getName());
  }
}