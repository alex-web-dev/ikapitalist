const $fileForms = document.querySelectorAll('.file');

$fileForms.forEach($form => {
  const $input = $form.querySelector('.file__input');
  const $btn = $form.querySelector('.file__btn');
  const $deleteBtn = $form.querySelector('.file__delete');
  const $changeBtn = $form.querySelector('.file__reload');
  
  $input.addEventListener('change', () => {
    handleFiles($input.files, $form);
  });

  $btn.addEventListener('drop', (e) => {
    handleDrop(e, $form);
  }, false);

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    $btn.addEventListener(eventName, preventDefaults, false);
  });
  
  ['dragenter', 'dragover'].forEach(eventName => {
    $btn.addEventListener(eventName, () => {
      $btn.classList.add('file__btn_highlight');
    }, false);
  });
  
  ['dragleave', 'drop'].forEach(eventName => {
    $btn.addEventListener(eventName, () => {
      $btn.classList.remove('file__btn_highlight');
    }, false);
  });

  $deleteBtn.addEventListener('click', () => {
    clearFile($form);
  });

  $changeBtn.addEventListener('click', () => {
    clearFile($form);
    $btn.click();
  });
});

function handleDrop(e, $form) {
  let dt = e.dataTransfer;
  let files = dt.files;
  
  handleFiles(files, $form);
}

function handleFiles(files, $form) {
  const fileType = $form.dataset.type;
  let callbackFunction;

  console.log(fileType);
  
  if (fileType === 'file') {
    ([...files]).forEach(file => uploadFile(file, $form, callbackFunction));

    fileLoadingAnimate($form, files[0].name);

  } else if (fileType === 'image') {
    ([...files]).forEach(file => uploadImage(file, $form, callbackFunction));
  }
}

function uploadFile(file, $form, fn) {
  let url = './load-file-handler.php'; //Изменить на файл обработчик
  let formData = new FormData()
  formData.append('file', file)

  /**Убрать после добавления функционала отправки файлов на сервер */
  setTimeout(() => fileLoadedAnimate($form), 1100);
  return;

  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then(() => { 
    setTimeout(() => fileLoadedAnimate($form), 1100);
   })
  .catch(() => { 'error' });
}

function uploadImage(file, $form, fn) {
  let url = './load-image-handler.php'; //Изменить на файл обработчик
  let formData = new FormData()
  formData.append('image', file)

  console.log('image load');
  
  return;

  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then(() => { 'success' })
  .catch(() => { 'error' });
}

function fileLoadedAnimate($form) {
  $form.classList.remove('file_loading');
  $form.classList.add('file_loaded');
}

function fileLoadingAnimate($form, fileName = '') {
  const fileType = getFileType(fileName);

  const $fileName = $form.querySelector('.file__result-name');
  const $fileType = $form.querySelector('.file__result-type');

  $fileName.innerHTML = fileName;
  $fileType.innerHTML = fileType;

  $form.classList.add('file_loading');

  const $progressBar = $form.querySelector('.file__progress .progress-bar');
  const $progressNum = $form.querySelector('.file__progress-num');

  let num = 0;
  $progressNum.innerHTML = `${num}%`;

  setTimeout(() => {
    $progressBar.style.width = '100%';

    const numUpInterval = setInterval(() => {
      num += 10;
      $progressNum.innerHTML = `${num}%`;
  
      if (num >= 100) {
        clearInterval(numUpInterval);
      }
    }, 90);
  }, 100);
}

function getFileType(fileName) {
  return fileName.split(".").splice(-1,1)[0];
}

function clearFile($form) {
  $form.classList.remove('file_loading');
  $form.classList.remove('file_loaded');

  const $formInput = $form.querySelector('.file__input');
  const $progressNum = $form.querySelector('.file__progress-num');
  const $progressBar = $form.querySelector('.file__progress .progress-bar');
  const $fileName = $form.querySelector('.file__result-name');
  const $fileType = $form.querySelector('.file__result-type');

  $fileName.innerHTML = '';
  $fileType.innerHTML = '';

  $progressNum.innerHTML = '0%';
  $progressBar.style.width = '0%';
  
  $formInput.value = '';
}

function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}