$(document).ready(function () {

    var deletePhotoMsg = 'Naprawdę chcesz usunąć zdjęcie?';

    var $deletePhotoButton = $("#remove-photo");

    $deletePhotoButton.on("click", function (e) {
        e.preventDefault();
        if (!window.confirm(deletePhotoMsg)) {
           return false;
        }
    });

});
