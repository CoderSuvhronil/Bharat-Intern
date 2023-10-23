const content = document.getElementById('content');
const edit = document.getElementById('edit');
const save = document.getElementById('save');
const cancel = document.getElementById('cancel');

edit.addEventListener('click', () => {
content.style.display = 'block';
edit.style.display = 'none';
save.style.display = 'inline-block';
cancel.style.display = 'inline-block';
});

save.addEventListener('click', () => {
content.style.display = 'none';
edit.style.display = 'inline-block';
save.style.display = 'none';
cancel.style.display = 'none';
});

cancel.addEventListener('click', () => {
content.style.display = 'none';
edit.style.display = 'inline-block';
save.style.display = 'none';
cancel.style.display = 'none';
});