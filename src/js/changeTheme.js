const refs = {
  body: document.querySelector('body'),
  switchToggle: document.querySelector('.theme-switch__toggle'),
};

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

refs.switchToggle.addEventListener('change',handleSwitchToggle)
refs.switchToggle.addEventListener('change',handleLocalStorage)

function handleSwitchToggle (event) {
  event.preventDefault();

  const checked = refs.switch.checked;
  if (checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    } else { 
      refs.body.classList.add(Theme.LIGHT);
      refs.body.classList.remove(Theme.DARK);
    }
}



function handleLocalStorage (event) {
  event.preventDefault();

  const checked = refs.switch.checked;
  if (checked) {
    localStorage.setItem('theme', Theme.DARK);
    } else {
      localStorage.removeItem('theme'); 
      localStorage.setItem('theme', Theme.LIGHT);
    }
}
  
const activeTheme = localStorage.getItem('theme');
if(activeTheme === Theme.DARK) {
  refs.body.classList.add(Theme.DARK);
  refs.switch.checked = true;
}