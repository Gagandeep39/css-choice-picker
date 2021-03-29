const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
});

function createTags(input) {
  // Creating an Array
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());
  // Emptying previous choices
  tagsEl.innerHTML = '';
  tags.forEach((tag) => {
    // Crating an Element
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    // Adding element to DOM
    tagsEl.appendChild(tagEl);
  });
}
