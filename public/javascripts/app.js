$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "/tasks.json",
    dataType: "json",
    success: function(data) {
      var tasks = data.tasks;
      var importantUrgent = $('.important-urgent');
      var importantNotUrgent = $('.important-not-urgent');
      var notImportantUrgent = $('.not-important-urgent');
      var notImportantNotUrgent = $('.not-important-not-urgent');

      tasks.forEach(function(task) {
        var text = "<li>" + task.text + "</li>";
        if (task.important === true && task.urgent === true){
          importantUrgent.append(text);
        }
        else if (task.important === true && task.urgent === false) {
          importantNotUrgent.append(text);
        }
        else if (task.important === false && task.urgent === true) {
          notImportantUrgent.append(text);
        }
        else if (task.important === false && task.urgent === false) {
          notImportantNotUrgent.append(text);
        }
      });
    },
    error: function() {
      alert("in the error block :( ")
      // do something else
    }
  });

  $("#new-task-button").click(function(e) {
    e.preventDefault();

    var text = $('#task-text-field').val();
    var important = $('#important').val();
    var urgent = $('#urgent').val();
    var importantUrgent = $('.important-urgent');
    var importantNotUrgent = $('.important-not-urgent');
    var notImportantUrgent = $('.not-important-urgent');
    var notImportantNotUrgent = $('.not-important-not-urgent');

    $.ajax({
    type: "POST",
    url: "/tasks",
    data: { text: text, important: important, urgent: urgent },
    dataType: "json",
    success: function(task) {
      var text = "<li>" + task.text + "</li>";
      if (task.important === true && task.urgent === true){
        importantUrgent.append(text);
      }
      else if (task.important === true && task.urgent === false) {
        importantNotUrgent.append(text);
      }
      else if (task.important === false && task.urgent === true) {
        notImportantUrgent.append(text);
      }
      else if (task.important === false && task.urgent === false) {
        notImportantNotUrgent.append(text);
      }
    },
    error: function() {
      alert("Sorry something went wrong");
    }
    });
  });
});
