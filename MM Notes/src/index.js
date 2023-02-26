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
  if (ev.target.closest('#new-note-container-button-close')) {
/*     addNewNote() */
    return
  }
  if (newNoteItem.parentElement.contains(ev.target)) {
    newTitle.style.display = 'flex'
    newNoteText.style.margin = '18px 0';
    newNoteIcons.style.display = 'flex'
    newNoteItemIcons.style.display = 'none'
    return
  } else  addNewNote() 
}

function cleanInputs() {
  newTitleInput.value = ''
  newNoteText.value = ''
  newTitle.style.display = 'none'
  newNoteIcons.style.display = 'none'
  newNoteItemIcons.style.display = 'flex'
}

function addNewNote() {
  if (newTitleInput.value !== '' || newNoteText.value !== '') {
    let note = newNoteContainer.cloneNode(true)
    notesItens.appendChild(note)
    note.classList.replace('new-note-container','note-container')
    const title = note.querySelector('.new-title')
    const noteText = note.querySelector('.new-note-item')
    const icons = note.querySelector('.new-note-container-icons')
    if (title.value === '') {title.style.display = 'none'}
    else if (noteText.value === '') {
      noteText.placeholder = '';
    }
    icons.style.display = 'none'
    const newNoteItemIcons = note.querySelector('.new-shortnote-item-icons')
    newNoteItemIcons.classList.remove('hide')
    cleanInputs()
  } else {
    cleanInputs()
  }
}

// Starting Event Listener area
btnCloseNewNote.addEventListener('click', addNewNote)
window.addEventListener('click', changeContainerNew)
