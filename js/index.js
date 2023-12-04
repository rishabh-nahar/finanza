function openPopup(n) {
    let title = n.querySelector('.title').innerHTML;
    let descrition = n.querySelector('.description').innerHTML;
    document.getElementById('popup_title').innerHTML = title ;
    document.getElementById('popup_desc').innerHTML = descrition; 
    document.getElementById('popup-container').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }

  function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }