const preventScrolling = (state: boolean): void => {
  const body = document.querySelector('body');
  if (body) {
    if (state) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }
};

export default preventScrolling;
