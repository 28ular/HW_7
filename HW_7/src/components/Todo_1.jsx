import styles from '../module.module.scss';
import {use, useState} from "react";
export const Todo_1 = ({ name , id , info , tags , dislikes , likes , views , reposts}) => {
    const [add,setAdd] = useState('add');

    return (
    <>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h3>{"#" + id}</h3>
                    <button onClick={() => setAdd('Added')}>{add}</button>
                </div>

                <p className={styles.nam}>{`NAME: '${name}'`}</p>
                INFO:
                <p className={styles.info}>{info || 'нет информации'}</p>
                ЖАНР:
                <div className={styles.type}>
                    <p>{tags[0]}</p>
                    <p>{tags[1]}</p>
                    <p>{tags[2]}</p>
                </div>

                REACTION:
                <div className={styles.react}>
                    <span className={styles.reactions}>{likes}💕 ?? 0</span>
                    <span className={styles.reactions}>{dislikes}👎 ?? 0</span>
                    <span className={styles.reactions}>{views}👀 ?? 0</span>
                    <span className={styles.reactions}>{reposts}🙌 ?? 0</span>
                </div>


            </div>

        </>
    )

}