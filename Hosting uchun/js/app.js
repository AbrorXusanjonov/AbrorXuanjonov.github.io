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

  // Oldindan belgilangan parol
  const correctPassword = '123456789';

  if (password === correctPassword) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').textContent = 'Login successful!';
      
      // 2 sekunddan so'ng boshqa sahifaga yo'naltirish
      setTimeout(() => {
          window.location.href = '../loged.html'; // Maqsadli URLni o'zgartiring
      }, 2000);
  } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').textContent = 'Invalid password';
  }
});




document.getElementById('bookForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  const bookList = document.getElementById('bookList');
  const li = document.createElement('li');
  li.textContent = `Title: ${title}, Author: ${author}`;

  bookList.appendChild(li);

  // Formani tozalash
  document.getElementById('bookForm').reset();
});




