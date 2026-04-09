import css from './preloader.module.css';
import cn from 'classnames'
export const Preloader = () => {
  return (
    <>
      <div className={cn(css.preloader_progress, "preloader-progress")}>
        <div className={cn(css.preloader_progress_bar, 'preloader-progress-bar')}></div>
        <div className={cn(css.preloader_logo, 'preloader-logo')}>
          <h1 >Sahara</h1>
        </div>
      </div>
      <div className={cn(css.preloader_mask, 'preloader-mask')}></div>
      <div className={css.preloader_content}>
        <div className={cn(css.preloader_footer, 'preloader-footer')}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </>
  );
};
