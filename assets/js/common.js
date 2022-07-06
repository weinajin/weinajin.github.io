$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        $(this).parent().parent().find(".bibtex.hidden").toggleClass("open", false);
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass("open", false);
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
  // Open abstract when targeted (#bibkey in url)
  $("div.row.publication-row:target").find(".abstract.hidden").addClass("open");
});
