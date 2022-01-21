import styles from './BlockFindTourWhite.module.css';
import cn from 'classnames';
import { FormGetTour } from '../FormGetTour/FormGetTour'

export const BlockFindTourWhite = ({ block_style, children, className, ...props }) => {    
    return (
        <div
            className={ cn(styles.block_viewed, className, {
                [styles.viewed_block]: block_style == 'viewed_block', 
            })}
            {...props}
        >
            
            <div className={styles.wrapper} {...props}>
                {children}
                <div className={styles.findtour_block} {...props}>                    
                    <FormGetTour form_style='third_form_get_tour' />  
                </div>
            </div> 
            
        </div>
    );
};