import gsap from 'gsap';

/**
 * Initialize the text loader animation
 * @param {HTMLElement} containerRef - The container element
 * @param {NodeListOf<HTMLElement>} letterRefs - NodeList of letter span elements
 * @param {HTMLElement} lineRef - The horizontal loading line element
 */
export function initTextLoader(containerRef, letterRefs, lineRef) {
  const tl = gsap.timeline();

  // Set initial states
  gsap.set(containerRef, { opacity: 0 });
  gsap.set(letterRefs, { opacity: 0, y: 6 });
  gsap.set(lineRef, { width: '0%' });

  // Fade-in the container
  tl.to(containerRef, {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
  });

  // Staggered letter reveal
  tl.to(
    letterRefs,
    {
      opacity: 1,
      y: 0,
      duration: 0.45,
      stagger: 0.08,
      ease: 'power2.out',
    },
    '-=0.4' // Slight overlap with fade-in
  );

  // Line fill - Parallel to letter reveal
  tl.to(
    lineRef,
    {
      width: '100%',
      duration: 2.0,
      ease: 'power2.inOut',
    },
    '<' // Start at the same time as the letter reveal
  );

  return tl;
}

/**
 * Animate the horizontal loading line
 * @param {HTMLElement} lineRef - The loading line element
 * @returns {gsap.core.Tween} The GSAP tween
 */
export function animateLoadingLine(lineRef) {
  return gsap.fromTo(
    lineRef,
    { width: '0%' },
    {
      width: '100%',
      duration: 2.5,
      ease: 'power2.inOut',
    }
  );
}

/**
 * Perform vertical split reveal
 * @param {HTMLElement} topCurtain - The top panel
 * @param {HTMLElement} bottomCurtain - The bottom panel
 * @returns {gsap.core.Timeline} The transition timeline
 */
export function splitReveal(topCurtain, bottomCurtain) {
  const tl = gsap.timeline();

  tl.to(topCurtain, {
    yPercent: -100,
    duration: 1.4,
    ease: 'power4.inOut',
  });

  tl.to(bottomCurtain, {
    yPercent: 100,
    duration: 1.4,
    ease: 'power4.inOut',
  }, '<'); // Start at the same time

  return tl;
}

/**
 * Animate hero content reveal
 * @param {HTMLElement} heroContent - The container for hero content
 */
export function revealHero(heroContent) {
  const elements = heroContent.querySelectorAll('.reveal-element');

  gsap.fromTo(elements,
    {
      opacity: 0,
      y: 30,
      scale: 0.98
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.2
    }
  );
}

