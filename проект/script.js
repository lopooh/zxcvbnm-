const switchElement = document.getElementById('mySwitch');
const currentState = 0
  switchElement.addEventListener('click', function() {
    let currentState = parseInt(this.getAttribute('data-state')); 
    let nextState = (currentState + 1) % 3; 

    this.setAttribute('data-state', nextState); 


    this.classList.remove('state-0', 'state-1', 'state-2'); 
    this.classList.add('state-' + nextState); 

    switch (nextState) {
      case 0:
        this.textContent = 'Состояние 0';
        document.body.classList.remove('theBeach');
        break;
      case 1:
        this.textContent = 'Состояние 1';
        document.body.classList.remove('theSity');
        document.body.classList.add('thePole');
        break;
      case 2:
        this.textContent = 'Состояние 2';
        document.body.classList.remove('thePole');
        document.body.classList.add('theBeach');
        break;
    }
  });