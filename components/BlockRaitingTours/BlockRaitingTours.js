import styles from './BlockRaitingTours.module.css';
import cn from 'classnames';
import { InfoBlock} from '../InfoBlock/InfoBlock';
import { Htag } from '../Htag/Htag';
import { CardCollection } from '../CardCollection/CardCollection';

export const BlockRaitingTours = ({ block_style, children, className, ...props }) => {    
    return (
        <div
            className={ cn(styles.block_viewed, className, {
                [styles.viewed_block]: block_style == 'viewed_block',
            })}
            {...props}
        >
            
            <div className={styles.wrapper} {...props}>
                {children}
                    <InfoBlock border_color='blue_left_border'>
                        <Htag tag='h2'>
                            Путешествия на основании оценок и отзывов 
                        </Htag>
                        <Htag tag='h4'>
                            Самое популярное среди наших клиентов
                        </Htag>
                    </InfoBlock> 
                    <CardCollection name_block='rating' />
            </div> 
            
        </div>
    );
};