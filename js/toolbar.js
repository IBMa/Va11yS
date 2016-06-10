/* 7. A toolbar widget
-----------------------------------------------------------------------------------------
*/



$('[role="toolbar"] [data-sort]').on('click', function() {

    if ($(this).attr('aria-pressed', 'false')) {

        var listToSort = $('#' + $(this).parent().attr('aria-controls'));
        var listItems = listToSort.children();
        var array = [];

        for (var i = 0, l = $(listItems).length; i < l; i++) {
            array.push($(listItems[i]).text());
        }

        if ($(this).attr('data-sort') === 'ascending') {
            array.sort();
            console.log(array);
        }

        if ($(this).attr('data-sort') === 'descending') {
            array.sort();
            array.reverse();
            console.log(array);
        }

        for (var i = 0, l = $(listItems).length; i < l; i++) {
            listItems[i].innerHTML = array[i];
        }

        $(this).siblings().attr('aria-pressed', 'false');
        $(this).attr('aria-pressed', 'true');

    }

});

$('[role="toolbar"] [data-sort]').on('keydown', function(e) {

    var $newButton;
    var $nextButton = $(this).next();
    var $prevButton = $(this).prev();
    var $listToSort = $('#' + $(this).parent().attr('aria-controls'));

    switch (e.keyCode) {
        case 37:
            $newButton = $prevButton;
            break;
        case 39:
            $newButton = $nextButton;
            break;
        default:
            $newButton = false;
            break;
    }

    if ($newButton.length) {
        $newButton.focus();
    }

    if (e.keyCode === 9) {
        if (!e.shiftKey) {
            e.preventDefault();
            $listToSort.focus();
        }
    }

});
