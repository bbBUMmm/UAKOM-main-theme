// ak chcem aby sa po vybere suboru zobrazilo jeho meno v inpute
module.exports = function (){
    $(document).ready(function() {
        $('.custom-file-input').on('change', function (e) {
            var fileName = this.files[0].name;
            var nextSibling = e.target.nextElementSibling
            nextSibling.innerText = fileName
        })
    });
};
