var name;

$(document).ready(function() {
  $("#customer").submit(function(event) {
    event.preventDefault();
    name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var flavor = $("input:radio[name=flavor]:checked").val();

  // Show receipt
    $(".name").text(name);
    $(".flavor").text(flavor);
    $(".phone").text(phone);
    $(".email").text(email);

    $("#show-receipt").show();

    $("ul").prepend("<li>" + name +"</li>");
  });
});
