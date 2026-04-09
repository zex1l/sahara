import css from './hero.module.css';
import HeroImage from '../../assets/hero.jpg';
import cn from 'classnames';

export const Hero = () => {
  return (
    <div className="container">
      <div className={css.hero}>
        <div className={css.hero_inner}>
          <div className={cn(css.hero_img, 'hero-img')}>
            <img src={HeroImage} alt="hero" />
          </div>

          <div className={css.hero_content}>
            <div className={cn(css.header, 'header')}>
              <h1>Sahara</h1>
            </div>

            <div className={css.btn_wrapper}>
              <div className={cn(css.menu_btn)}>
                <button className={cn(css.btn, 'btn')}>
                  <div className={cn(css.btn_label, 'btn-label')}>Contact</div>
                  <div className={cn(css.btn_circle, 'btn-circle')}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40px"
                      height="40px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M10 7L15 12L10 17"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className={cn(css.hero_footer, 'hero-footer')}>
            <h2>Spaces defined through light and silence</h2>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
