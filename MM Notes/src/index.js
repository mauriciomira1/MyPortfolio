// Creating variables 
const newTitle = document.querySelector('.new-title')
const newTitleInput = document.getElementById('new-title-input')
const newNoteText = document.getElementById('new-note-text')
const newNoteContainer = document.getElementById('new-note-container')
const newNoteIcons = document.getElementById('new-note-container-icons')
const newNoteItemIcons = document.getElementById('new-shortnote-item-icons')
const btnCloseNewNote = document.getElementById('new-note-container-button-close')
const notesItens = document.getElementById('notes-itens')
const newNoteItem = document.getElementById('new-note-item')



// Starting functions area
function changeContainerNew(ev) {
  if (newNoteItem.parentElement.contains(ev.target)) {
    newTitle.style.display = 'flex'
    newNoteText.style.margin = '18px 0';
    newNoteIcons.style.display = 'flex'
    newNoteItemIcons.style.display = 'none'
  } else {
    newTitle.style.display = 'none'
    newNoteIcons.style.display = 'none'
    newNoteItemIcons.style.display = 'flex'
  }
}

function cleanInputs() {
  newTitleInput.value = ''
  newNoteText.value = ''
  newTitle.style.display = 'none'
  newNoteIcons.style.display = 'none'
  newNoteItemIcons.style.display = 'none'
}

function addNewNote() {
  if (newTitleInput.value !== '' || newNoteText.value !== '') {
    const note = newNoteContainer.cloneNode(true)
    notesItens.appendChild(note)
    cleanInputs
  } else {
    changeContainerNew
    cleanInputs
  }
}



// Starting Event Listener area
btnCloseNewNote.addEventListener('click', addNewNote)
window.addEventListener('click', changeContainerNew)
