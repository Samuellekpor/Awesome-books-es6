export function displayBook(books) {
  const bookContainer = document.querySelector('.book-container');
  books.forEach((book) => {
    const bookDiv = document.createElement('tr');
    bookDiv.className = 'book';
    const bookInfo = document.createElement('td');
    const removeBtn = document.createElement('button');
    bookInfo.className = 'book-info';
    removeBtn.className = 'remove-btn';
    bookInfo.innerHTML = `"<strong class = "book-title">${book.title}</strong>" by <strong class = "book-author">${book.author}</strong>`;
    removeBtn.textContent = 'Remove';
    bookDiv.appendChild(bookInfo);
    bookDiv.appendChild(removeBtn);
    bookContainer.appendChild(bookDiv);
  });
}