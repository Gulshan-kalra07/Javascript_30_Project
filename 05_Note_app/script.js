const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".Create-button");
const notes = document.querySelector(".input-box");


// function for create a notebox when createbutton is clicked
createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = 'images/delete.png';
    notesContainer.appendChild(inputBox).appendChild(img);
})


// function for remove notebox when delete icon is clicked
notesContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
})





