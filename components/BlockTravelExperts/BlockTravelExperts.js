import styles from './BlockTravelExperts.module.css';
import cn from 'classnames';
import { InfoBlock } from '../InfoBlock/InfoBlock';
import { Htag, } from '../Htag/Htag';
import { CardCollection } from '../CardCollection/CardCollection';

export const BlockTravelExperts = ({ block_style, children, className, ...props }) => {    
    return (
        <div
            className={ cn(styles.block_viewed, className, {
                [styles.viewed_block]: block_style == 'viewed_block',
            })}
            {...props}
        >
            
            <div className={styles.wrapper} {...props}>
                {children}
                    <InfoBlock border_color='orange_left_border'>
                        <Htag tag='h2'>
                            Популярные тревел-эксперты
                        </Htag>
                        <Htag tag='h4'>
                            Лучшие из лучших
                        </Htag>
                    </InfoBlock>                     
            </div> 
            <CardCollection name_block='experts' />
            
        </div>
    );
};