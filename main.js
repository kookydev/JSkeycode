  window.addEventListener("keydown", checkKeyPressed);
  
  const key = document.getElementById("key");
  
  const code = document.getElementById("code");
  
  const which = document.getElementById("which");
  
  const main = document.getElementById("main");
  function checkKeyPressed (e) {
    key.innerText = e.key;
    
    code.innerText = e.code;
    
    which.innerText = e.which;

    main.innerText = e.keyCode;
    
}
  
  