const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
      randomSelect();
    }, 10);
  }
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

function randomSelect() {
  // Time to pick a random choice
  const times = 30;

  // Randomly highlight vlaues
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    // Hights
    highlightTag(randomTag);
    // Unhighight after 100ms
    setTimeout(() => {
      unhighlightTag(randomTag);
    }, 100);
  }, 100);

  // Executes after 3 sec
  // Clears random hightlight and finally select a result
  setTimeout(() => {
    // Stops Random highlighting
    clearInterval(interval);
    // Finally  highlights one random value at the end
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

// Retuns any random tag
function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unhighlightTag(tag) {
  tag.classList.remove('highlight');
}
