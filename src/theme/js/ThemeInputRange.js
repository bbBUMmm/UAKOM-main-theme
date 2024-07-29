$(document).ready(function() {
    let $customRange = $('.custom-range');
    // inicializacia zobrazenia aktualnej hodnoty (ak je kam)
    $customRange.each(function() {
        let $textBox = $(this).siblings('.input-group-append').children('.input-group-text');
        if ($textBox.length > 0) {
            $textBox.html(this.value);
        }
    });

    // pri zmene vypisuj hodnotu (ak je kam)
    $customRange.on('input', function () {
        let $textBox = $(this).siblings('.input-group-append').children('.input-group-text');
        if ($textBox.length > 0) {
            $textBox.html(this.value);
        }
    });
});