const images = document.getElementById('images');
images.onclick = function() {
  if (
    images.innerHTML ==
    ` <img src="https://sun9-14.userapi.com/c857232/v857232186/80c0d/7UNzLM-liW4.jpg" width="40%" height="40%">`
  ) {
    images.innerHTML = ` <img src="https://sun9-68.userapi.com/c200616/v200616948/cf2f/aLhXDxxiozk.jpg" width="40%" height="40%">`;
  } else {
    images.innerHTML = ` <img src="https://sun9-14.userapi.com/c857232/v857232186/80c0d/7UNzLM-liW4.jpg" width="40%" height="40%">`;
  }
};
