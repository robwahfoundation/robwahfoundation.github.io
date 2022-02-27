$(document).ready(function () {
  $("#submitBtn").on("click", function (e) {
    let gender = $("#gender").val();
    let phone = "6285756354504";
    let success = true;
    // if (gender == "female") {
    //   phone = "6285649751560";
    // }
    let formSubmit = $(".php-email-form .form-control");
    $.each(formSubmit, function (item, index) {
      if (index.value == "") {
        alert(index.name + " Anda Tidak Boleh Kosong!");
        success = false;
      }
    });
    if (success) {
      let url =
        "https://api.whatsapp.com/send?phone=" +
        phone +
        "&text=Nama Pengirim Pesan: " +
        $("#name").val() +
        "%0a" +
        "Email / Kontak WA Pengirim Pesan: " +
        $("#email").val() +
        "%0a" +
        "Topik Perihal: " +
        $("#subject").val() +
        "%0a" +
        "Pesan yang Disampaikan: " +
        $("#message").val();
      location.href = url;
    }

    e.preventDefault();
  });
});
