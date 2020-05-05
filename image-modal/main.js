$("body").on("click", "a.img", function (e) {
  e.preventDefault();

  const this_a = e.target;
  const img_src = $(this_a).attr("src");
  const caption = $(this_a).data("caption");

  $(".modal img").attr("src", img_src);
  $(".modal .caption").text(caption);

  $(".modal").addClass("active");
});

$("body").on("click", ".modal.active, .modal .close", function (e) {
  e.preventDefault();
  e.stopPropagation();

  $(".modal.active").removeClass("active");
});