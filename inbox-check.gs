function inboxCheck() {
  var threads = GmailApp.search("-label:inbox -label:sent -label:trash label:99_DummyInbox");
  for (var i = 0; i < threads.length; i++) {
    Logger.log("thread: " + i + " " + threads[i].getFirstMessageSubject());
    threads[i].moveToInbox();
  }
}
