$(document).ready(function () {

    var deletePhotoMsg = 'Naprawdę chcesz usunąć zdjęcie?';

    var $deletePhotoButton = $("#remove-photo");

    $deletePhotoButton.on("click", function () {
        if (!window.confirm(deletePhotoMsg)) {
           return false;
        }
    });

});