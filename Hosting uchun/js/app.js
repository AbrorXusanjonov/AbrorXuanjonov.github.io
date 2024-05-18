function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const password = document.getElementById('password').value;
  const correctPassword = '123'; // Replace with your desired password

  if (password === correctPassword) {
      document.getElementById('loginMessage').textContent = 'Login successful!';
      document.getElementById('loginMessage').style.color = 'green';
      setTimeout(() => {
          document.getElementById('loginContainer').style.display = 'none';
          document.getElementById('bookContainer').style.display = 'block';
      }, 1000);
  } else {
      document.getElementById('loginMessage').textContent = 'Invalid password';
      document.getElementById('loginMessage').style.color = 'red';
  }
});

document.getElementById('bookForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  addBookToList(title, author);
  saveBook(title, author);

  document.getElementById('bookForm').reset();
});

document.addEventListener('DOMContentLoaded', function() {
  loadBooks();
});

function addBookToList(title, author) {
  const bookList = document.getElementById('bookList');
  const li = document.createElement('li');
  li.textContent = `Title: ${title}, Author: ${author}`;
  bookList.appendChild(li);
}

function saveBook(title, author) {
  let books;
  if (localStorage.getItem('books') === null) {
      books = [];
  } else {
      books = JSON.parse(localStorage.getItem('books'));
  }
  books.push({ title, author });
  localStorage.setItem('books', JSON.stringify(books));
}

function loadBooks() {
  let books;
  if (localStorage.getItem('books') === null) {
      books = [];
  } else {
      books = JSON.parse(localStorage.getItem('books'));
  }

  books.forEach(function(book) {
      addBookToList(book.title, book.author);
  });
}




