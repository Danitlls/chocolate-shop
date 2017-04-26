var name;

$(document).ready(function() {
  $("#customer").submit(function(event) {
    event.preventDefault();
    name = $("#name").val();
    var address = $("#address").val();
    var phone = $("#phone").val();
    var flavor = $("input:radio[name=flavor]:checked").val();

  // Show receipt
    $(".name").text(name);
    $(".flavor").text(flavor);
    $(".phone").text(phone);
    $(".address").text(address);

    $("#show-receipt").slideToggle().show();

    $("ul").prepend("<li><strong>Name: </strong>" + name + " <strong>Phone Number:</strong> " + phone +"</li>");
  });
});
