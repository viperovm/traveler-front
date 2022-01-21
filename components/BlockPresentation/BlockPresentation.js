import styles from './BlockPresentation.module.css';
import Button from '../Button/Button';
import Htag from '../Htag/Htag';
import FormGetTour from '../FormGetTour/FormGetTour';
import cn from 'classnames';

export const BlockPresentation = ({ block_style, children, className }) => {    
    return (
        <div
            className={ cn(styles.BlockPresentation, className, {
                [styles.presentation_block]: block_style == 'presentation_block',
                [styles.presentation_block_another]: block_style == 'presentation_block_another',
            })}
        >
        
            <div className={styles.wrapper} {...props}>
                {children}
                <Htag tag='h1'>traveler market - Маркетплейс авторских туров</Htag>
                <Button appearance='button_ghost'>Как это работает?</Button>
                <FormGetTour form_style='first_form_get_tour' />                   
            </div> 
            
        </div>
    );
};