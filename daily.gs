// Move mails received more than equal a week before in *Tmp* labels
function cleanUp() {
  var delayDays = 7 // Enter # of days before messages are moved to trash
  var maxDate = new Date();
  maxDate.setDate(maxDate.getDate()-delayDays);
  
  var labels = GmailApp.getUserLabels();
  for (i in labels) {
    if (labels[i].getName().indexOf("Tmp") != -1) {
      var label = labels[i];
      var threads = label.getThreads();
      for (var j = 0; j < threads.length; j++) {
        if (threads[j].getLastMessageDate()<maxDate){
          threads[j].moveToTrash();
        }
      }
    }
  }
}
