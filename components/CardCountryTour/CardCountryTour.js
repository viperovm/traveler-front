import styles from './CardCountryTour.module.css';
import cn from 'classnames';
import { Tag } from '../Tag/Tag';
import { Htag } from '../Htag/Htag';
    


export const CardCountryTour = ({ block_style, children, className, ...props }) => {    
    return (
        <div
            className={ cn(styles.card_tour, className, {
                [styles.card_tour]: block_style == 'card_tour',
            })}
            {...props}
            
        >    
                  
            {children}
            <Tag size='s'>                
                <div className={styles.card_tour_content}>
                    
                    <Htag tag='h4'>Россия</Htag>
                        
                </div>
            </Tag>     
             
        </div>
    );
};