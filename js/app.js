// Application ****************** //
// ****************************** //

// Sticky navbar from https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
// When the page get scrolled, use the stickyNav function.
window.onscroll = () => stickyNav();

const navigation = document.querySelector(".navigation--sidebar");
const sticky = navigation.offsetTop;
const mainContent = document.querySelector(".main-content");

// When the window gets scrolled to the right position, the sticky navbar gets activated.
// The sticky-nav class gets removed when it's not in the right position.
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navigation.classList.add("sticky-nav");

    if(window.innerWidth >= 1024) {
      mainContent.style.paddingLeft = "75px";
      }
  } else {
    navigation.classList.remove("sticky-nav");

    if(window.innerWidth >= 1024) {
      mainContent.style.paddingLeft = "0px";
      }
  }
  if(window.innerWidth < 1024) {
    mainContent.style.paddingLeft = "0px";
  }
}

// Open / Close Notification box
const bell = document.querySelector('.bell');
const exitNote = document.querySelector('.exit-box');
const numbersNote = document.querySelector('.number');

function openCloseNotifications() {
    const box = document.querySelector(".box");
    if (box.style.display === "none") {
        box.style.display = "block";
        numbersNote.style.display = "none";
    } else {
        box.style.display = "none";
    }
}

bell.addEventListener("click", function(e) {
  openCloseNotifications();
});

exitNote.addEventListener("click", function(e) {
  openCloseNotifications();
});

// Close alert
const times = document.querySelector('.alert .fas');
const divAlert = document.querySelector('.alert');

times.addEventListener('click', () => {
  divAlert.style.display = 'none';
});

// Send button, use JS to submit the form and display a success message.
let counter = 0;
const searchUser = document.querySelector("#searchuser");
const textArea = document.querySelector("#message");
const form = document.querySelector("form.message--user");
let p = document.createElement('p');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  // Keep track of number of missed form fields with counter.
  counter = 0;

  // If no name or no message is entered make the input borders go red.
  if (searchUser.value === "") {
    counter++;
    searchUser.style.borderColor = "red";
  } else {
    searchUser.style.borderColor = "lightgrey";
  }

  if ( textArea.value === "" ) {
    counter++;
    textArea.style.borderColor = "red";
  } else {
    textArea.style.borderColor = "lightgrey";
  }

  // If the user name or a message is missing in the form, display an error message under the form.
   if( searchUser.value === "" ||
   			 textArea.value === "" ) {

           p.textContent = `${counter} field(s) requires input. Please fill out and try again.`;
           p.className = "error-alert";
           form.appendChild(p);
  }

  // Add a success message if form is complete.
  if (searchUser.value !== ""
      &&
        textArea.value !== "") {
        if(document.querySelector(".message-settings fieldset p")) {
          form.removeChild(p);
        }
    searchUser.value = "";
    textArea.value = "";
    form.appendChild(p);
    p.className = "success-alert";
    p.textContent = `Message was successfully sent!`;
  }

});

// Members array for autocomplete functionality.
const users = [
  'Dale Byrd',
  'Victoria Chambers',
  'Dawn Wood',
  'Dan Oliver'
];

// Autocomplete functionality from:
// https://www.w3schools.com/howto/howto_js_autocomplete.asp

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  let currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      let div, divMatch, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) {
        return false;
      }
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      div = document.createElement("DIV");
      div.setAttribute("id", this.id + "autofill-list");
      div.setAttribute("class", "autofill-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(div);
      /*for each item in the array...*/
      for ( let i = 0; i < arr.length; i++ ) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substring(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          divMatch = document.createElement("DIV");
          /*make the matching letters bold:*/
          divMatch.innerHTML = "<strong>" + arr[i].substring(0, val.length) + "</strong>";
          divMatch.innerHTML += arr[i].substring(val.length);
          /*insert a input field that will hold the current array item's value:*/
          divMatch.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              divMatch.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
                closeAllLists();
              });
              div.appendChild(divMatch);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      let x = document.getElementById(this.id + "autofill-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.key == "ArrowDown") {
        /*If the arrow DOWN key is pressed,
                increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.key == "ArrowUp") {
        /*If the arrow UP key is pressed,
                decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.key == "Enter") {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length -1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autofill-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for ( let i = 0; i < x.length; i++ ) {
      x[i].classList.remove("autofill-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
    let x = document.getElementsByClassName("autofill-items");
    for ( let i = 0; i < x.length; i++ ) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function(e) {
    closeAllLists(e.target);
  });
}

autocomplete(searchUser, users);
// Autocomplete end.

// Use local storage to save settings
const settings = document.querySelector('.settings');
let savedP = document.createElement("p");
let onoffOne = document.querySelector('.switch-one input');
let onoffTwo = document.querySelector('.switch-two input');
let timezone = document.querySelector('.settings select');

// Save localStorage with #save button, onclick in index.html
function saveSettings() {
  localStorage.setItem('onoffOne', JSON.stringify(onoffOne.checked));
  localStorage.setItem('onoffTwo', JSON.stringify(onoffTwo.checked));
  localStorage.setItem('select', JSON.stringify(timezone.selectedIndex));
  const saved = settings.appendChild(savedP);
  saved.className = "settings-saved";
  saved.textContent = "Settings saved!";
}

// Load localStorage and get values
function loadStorage() {
  const checked = JSON.parse(localStorage.getItem('onoffOne'));
  const checkedTwo = JSON.parse(localStorage.getItem('onoffTwo'));
  const selectValue = JSON.parse(localStorage.getItem('select'));

  if (checked == false) {
    onoffOne.removeAttribute("checked");
  }
  if (checkedTwo == false) {
    onoffTwo.removeAttribute("checked");
  }
  if (selectValue > 0) {
    timezone.selectedIndex = selectValue;
  }
}

// Load localStorage
loadStorage();

// Clear storage with #cancel button, onclick in index.html
function removeStorage() {
  localStorage.clear();
}
