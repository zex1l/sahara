import { Hero } from './widgets/hero';
import { Preloader } from './widgets/preloader';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SplitText);
gsap.registerPlugin(useGSAP);

type ElementType = {
  key: string;
  selector: string;
  type: 'lines' | 'words' | 'chars';
};

const splitElements: ElementType[] = [
  { key: 'logoChars', selector: '.preloader-logo h1', type: 'chars' },
  { key: 'footerLines', selector: '.preloader-footer p', type: 'lines' },
  { key: 'headerChars', selector: '.header h1', type: 'chars' },
  { key: 'heroFooterH3', selector: '.hero-footer h2', type: 'lines' },
  { key: 'heroFooterP', selector: '.hero-footer p', type: 'lines' },
  { key: 'btnLabels', selector: '.btn-label', type: 'lines' },
];

function App() {
  const createSplitText = (elements: ElementType[]) => {
    const splits: Record<string, SplitText> = {};

    elements.forEach(({ key, selector, type }) => {
      const config: SplitText.Vars = { type, mask: type };

      if (type === 'chars') config.charsClass = 'char';
      if (type === 'lines') config.charsClass = 'line';

      splits[key] = SplitText.create(selector, config);
    });

    return splits;
  };

  const animateProgressBar = () => {
    const tl = gsap.timeline();

    tl.to('.preloader-progress-bar', {
      scaleX: 1,
      ease: 'power1.out',
      duration: 6,
    });

    return tl;
  };

  useGSAP(() => {
    const splits = createSplitText(splitElements);

    gsap.set([splits.logoChars.chars], { x: '100%' });
    gsap.set(
      [
        splits.footerLines.lines,
        splits.heroFooterH3.lines,
        splits.headerChars.chars,
        splits.heroFooterP.lines,
        splits.btnLabels.lines,
      ],
      {
        y: '-100%',
      },
    );

    gsap.set('.btn-circle', { y: '-200%' });

    const tl = gsap.timeline({
      delay: 0.5,
    });

    tl.to([splits.logoChars.chars], {
      x: '0%',
      duration: 1,
      ease: 'power4.inOut',
      stagger: 0.05,
    })
      .to(
        splits.footerLines.lines,
        {
          y: '0%',
          duration: 1,
          ease: 'power4.inOut',
          stagger: 0.1,
        },
        '0.25',
      )
      .add(animateProgressBar(), '<')
      .set('.preloader-progress', { backgroundColor: 'var(--base300)' })
      .to(
        splits.logoChars.chars,
        {
          x: '-100%',
          stagger: 0.1,
          duration: 1,
          ease: 'power4.inOut',
        },
        '-=0.5',
      )
      .to(
        splits.footerLines.lines,
        {
          y: '-100%',
          stagger: 0.1,
          duration: 1,
          ease: 'power4.inOut',
        },
        '<',
      )
      .to(
        '.preloader-progress',
        {
          opacity: 0,
          duration: 0.5,
          ease: 'power4.inOut',
        },
        '-=0.25',
      )
      .to(
        '.preloader-mask',
        {
          scale: 10,
          duration: 2,
          ease: 'power4.inOut',
        },
        '<',
      )
      .to(
        '.hero-img',
        {
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
        },
        '<',
      )
      .to(
        splits.headerChars.chars,
        {
          y: 0,
          stagger: 0.05,
          duration: 1,
          ease: 'power4.out',
        },
        '-=1',
      )
      .to(
        [splits.heroFooterH3.lines, splits.heroFooterP.lines],
        {
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: 'power4.out',
        },
        '-=1',
      )
      .to(
        '.btn',
        {
          scale: 1,
          duration: 1,
          ease: 'power4.out',
          onStart: () => {
            tl.to(splits.btnLabels.lines, {
              y: 0,
              duration: 1,
              ease: 'power2.out',
              delay: -0.5,
            }).to('.btn-circle', {
              y: 0,
              duration: 1,
              ease: 'power2.out',
              delay: -1,
            });
          },
        },
        '-=0.5',
      );
  });

  return (
    <>
      <Preloader />
      <Hero />
    </>
  );
}

export default App;
