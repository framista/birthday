import './scss/style.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function goToSection(i, anim) {
  gsap.to(window, {
    scrollTo: { y: i * innerHeight, autoKill: false },
    duration: 1,
  });

  if (anim) {
    anim.restart();
  }
}

gsap.utils.toArray('.panel').forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    onEnter: () => goToSection(i),
  });

  ScrollTrigger.create({
    trigger: panel,
    start: 'bottom bottom',
    onEnterBack: () => goToSection(i),
  });
});
