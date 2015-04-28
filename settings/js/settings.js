function init() {
  $("#logout").click(function() {
    Trello.deauthorize();
    location.reload();
  });

  $("#authorize").click(function() {
    Trello.setKey(APP_KEY);
    Trello.authorize({
      name: "Trello Dependencies Addon",
      type: "redirect",
      expiration: "never",
      interactive: "ture",
      scope: {read: true, write: false},
      success: function() {},
      error: function() {
        alert("Authorization failed.");
      }
    });
  });

  if (HashSearch.keyExists('token')) {
    Trello.authorize({
      name: "Trello Dependencies Addon",
      expiration: "never",
      interactive: "false",
      scope: {read: true, write: false},
      success: function() {},
      error: function() {
        alert("Authorization failed; post redirect");
      }
    });
  }

  if (localStorage.trello_token) {
    $("#authorized").show();
    $("#notauthorized").hide();
  } else {
    $("#authorized").hide();
    $("#notauthorized").show();
  }
}

$(document).ready(init);
