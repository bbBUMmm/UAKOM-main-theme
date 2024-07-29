let crypto = require('browser-crypto');

module.exports = function () {

    // Ziskat volny toast(skryty) element
    function getToastElement() {
        // snazim sa znovu pouzit uz vytvorene elementy
        let $baseToast = $('#toast-base');
        let $toasts = $('#toast-container').children('.toast');

        // prejdem existujuce elementy a zistim, ci je niektory skryty
        for (let i = 0; i < $toasts.length; i++) {
            $toast = $toasts.eq(i);
            if ($toast.hasClass('hide')) {
                Logger.debug('Znovu pouzijem vytvoreny toast');
                return $toast;
            }
        }

        // ak sa nenasiel volny skryty toast, vytvorim kopiu a tu pouzijem
        // po pouziti ostane v DOM a je mozne ju vyuzit neskor
        Logger.debug('Vytvaram novy toast');
        let $toast = $baseToast.clone().appendTo('#toast-container');

        $toast.attr('id', 'toast-' + crypto.randomBytes(8).toString('hex'));

        return $toast;
    }

    function showToast($toast, message, severity) {
        let currentTime = (new Date()).toLocaleTimeString();
        let $iconElement = $toast.find('.toast-header > i.material-icons');
        $iconElement.attr('class', 'material-icons');

        switch (severity) {
            case 'error':
                $iconElement.addClass('text-danger');
                $iconElement.html('error');
                $toast.find('.toast-header > .toast-heading').html('Error');
                break;
            default:
                $iconElement.addClass('text-primary');
                $iconElement.html('info');
                $toast.find('.toast-header > .toast-heading').html('Info');
                break;
        }

        $toast.find('.toast-header > small').html(currentTime);
        $toast.find('.toast-body').html(message);

        $toast.toast('show');
    }

    return {
        info: function (message) {
            showToast(getToastElement(), message, 'info');
        },
        error: function (message) {
            showToast(getToastElement(), message, 'error');
        }
    }
}();