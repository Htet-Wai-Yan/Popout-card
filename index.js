var item = document.querySelectorAll('.grid-item')
var modal = document.getElementById('modal')
var modalImg = document.querySelector('#modalImg')
var modalText = document.querySelector('.modal-name')

item.forEach(element => {
  element.addEventListener('click', () => {
    modal.style.display = "block"

    // get the clicked div id with element.id
    // then the tag name and img source of that tag name
    modalImg.src = document.getElementById(element.id).querySelector('img').src
    modalText.innerHTML = document.getElementById(element.id).querySelector('h2').innerHTML
    console.log(modalText.innerHTML)
  })

  var span = document.getElementsByTagName('span')[0]
  span.onclick = function(){
    modal.style.display = "none"
  }
});