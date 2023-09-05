import { useEffect } from 'react';

export const useAnimateCategoryNamesOnScroll = () => {
  useEffect(() => {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__bounceInRight');
          var textElement = entry.target.parentElement.previousElementSibling;
          textElement.classList.add('squeeze-animation');
          observer.unobserve(entry.target);
        }
      });
    });

    // Start observing an element
    observer.observe(document.querySelector('.fa-sharp'));
    observer.observe(document.querySelector('.fa-envelopes-bulk'));
    observer.observe(document.querySelector('.fa-lightbulb-o'));

  }, []);
};
