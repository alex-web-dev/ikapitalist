import Quill from 'quill';

const $editors = document.querySelectorAll('.editor');

$editors.forEach($editor => {
  const $toolbar = $editor.querySelector('.editor__toolbar');
  const $main = $editor.querySelector('.editor__main');
  
  const toolbarId = `#${$toolbar.getAttribute('id')}`;
  const mainId = `#${$main.getAttribute('id')}`;

  if (!mainId || !toolbarId) {
    return;
  }

  const quill = new Quill(mainId, {
    theme: 'snow',
    modules: {
        toolbar: toolbarId,
    },
    placeholder: 'Напишите о договоре',
  });

  const $undo = $editor.querySelector('.editor__undo');
  const $redo = $editor.querySelector('.editor__redo');

  $undo.addEventListener('click', () => quill.history.undo());
  $redo.addEventListener('click', () => quill.history.redo());
});