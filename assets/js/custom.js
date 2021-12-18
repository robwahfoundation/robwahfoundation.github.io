$(document).on(
  "click",
  "#video_play_button, #video_pause_button",
  setPlayOrPauseBtn
);

var aud = document.getElementById("videoPlayer");
aud.onended = function () {
  $("#video_play_button").removeAttr("hidden");
  $("#video_pause_button").attr("hidden", true);
  $("#videoPlayer").trigger("pause");
};

function setPlayOrPauseBtn() {
  if ($("#video_pause_button").attr("hidden")) {
    $("#video_pause_button").removeAttr("hidden");
    $("#video_play_button").attr("hidden", true);
    $("#videoPlayer").trigger("play");
  } else {
    $("#video_play_button").removeAttr("hidden");
    $("#video_pause_button").attr("hidden", true);
    $("#videoPlayer").trigger("pause");
  }
}
