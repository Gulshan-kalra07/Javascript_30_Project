

const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const QR_button = document.getElementById("QR_button");

QR_button.addEventListener('click', function () {  
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    if (!qrText.value <= 0) {
        imgBox.classList.add("show-img");
    } else if (qrText.value <= 0) {
        imgBox.classList.remove("show-img");
        alert("Enter Something in inputBox")
    }

});