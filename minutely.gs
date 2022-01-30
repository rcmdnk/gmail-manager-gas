function minutely() {
  inboxCheck();
  updateLabel();
}

function inboxCheck() {
  var threads = GmailApp.search("-label:inbox -label:sent -label:trash label:99_DummyInbox");
  for (var i = 0; i < threads.length; i++) {
    Logger.log("thread: " + i + " " + threads[i].getFirstMessageSubject());
    threads[i].moveToInbox();
  }
}

function updateLabel() {
  var unlabeled = GmailApp.search("has:nouserlabels -label:inbox -label:sent -label:chats -label:draft -label:spam -label:trash");
  for (var i = 0; i < unlabeled.length; i++) {
    Logger.log("thread: " + i + " " + unlabeled[i].getFirstMessageSubject());
    labels = unlabeled[i].getLabels();
    var n_labels = 0;
    for (var j = 0; j < labels.length; j++) {
      n_labels += 1;
      Logger.log("labels: " + i + " " + labels[j].getName());
      labels[j].addToThread(unlabeled[i]);
    }
    if (n_labels == 0){
      Logger.log("Add 00_NoLabel");
      unlabeled[i].addLabel(GmailApp.getUserLabelByName("00_NoLabel"));
    }
  }

}