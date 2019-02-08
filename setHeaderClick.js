function liwasclick(self) {
  other = document.getElementsByClassName('navigationLi')
  
  console.log(other)
  for (var i = 0; i < other.length; i++) {
    other[i].style.backgroundColor = 'white';
    other[i].style.color = 'black';
    
  }
  // self.style.backgroundColor='#BBB';
  // self.style.color = 'white';
}