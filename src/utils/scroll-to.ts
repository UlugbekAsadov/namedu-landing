interface ScrollToElementProps {
  targetId?: string;
  offset?: number;
  top?: number;
}

interface ScrollToProps {
  top: number;
}

export const scrollToTop = ({ top = 0 }: ScrollToProps) => {
  window.scrollTo({
    top: top,
    behavior: 'smooth',
  });
};

export const scrollTo = ({
  top,
  targetId,
  offset = 0,
}: ScrollToElementProps) => {
  if (targetId) {
    // Scroll to the element if targetId is provided
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      if (targetPosition >= 0) {
        window.scrollTo({
          top: targetPosition - offset,
          behavior: 'smooth',
        });
      }
    } else {
      console.error('Target element not found for ID:', targetId);
    }
  } else if (top !== undefined) {
    // Scroll to the specific top position if targetId is not provided
    window.scrollTo({
      top: top,
      behavior: 'smooth',
    });
  } else {
    console.error('Neither top nor targetId was provided');
  }
};
