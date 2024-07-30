// skryvanie obsahu carty
module.exports = function (){
    $(document).ready(function() {
        $('a[data-toggle="card-toggle"]').on('click', function (e) {
            $(this).parent().parent().parent().children('.card-body').toggle(300);
        })
    });
};
