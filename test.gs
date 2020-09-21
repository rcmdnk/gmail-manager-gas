function myFunction(){

// logs all of the names of your labels
 var labels = GmailApp.getUserLabels();
  for (i in labels) {
          　 Logger.log(labels[i].getName());

    if (labels[i].getName().substring(0,3) == "Tmp") {
      
      　 Logger.log(labels[i].getName());
    }
  }
}