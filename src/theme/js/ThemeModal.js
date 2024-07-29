// Inicializacia modalneho dialogu
module.exports = function () {
    function showModal(contentUrl, title, initFormFunction) {
        Logger.debug('Show modal: ' + title);
        $('#modal-window-title').html(title);
        $('#modal-window-content').html(
            '<div class="text-center">' +
            '   <div class="spinner-border text-info" role="status">' +
            '       <span class="sr-only">Prosím čakajte...</span>' +
            '   </div>' +
            '</div>');
        $('#modal-window').modal();
        $.ajax({
                url: contentUrl,
                async: true
            }
        ).done((response) => {
            $('#modal-window-content').html(response);
            initFormFunction();
        }).fail((jqXhr) => {
            Toast.error(jqXhr.responseText);
        });
    }

    return {
        show: function (contentUrl, title, initFormFunction) {
            showModal(contentUrl, title, initFormFunction);
        },
        hide: function () {
            $('#modal-window').modal('hide')
        }
    }
}();