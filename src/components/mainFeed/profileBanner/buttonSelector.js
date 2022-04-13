import styles from "./buttonSelector.module.css";
function ButtonSelector(props){
    return(
        <div>
            <div className={styles.row}>
            <button onClick={() => props.handleToUpdate('posts')} className={styles.text_wrapper}><span className={styles.text}>Posts</span></button>
            <button onClick={() => props.handleToUpdate('media')} className={styles.text_wrapper}><span className={styles.text}>Media</span></button>
            <button onClick={() => props.handleToUpdate('archive')} className={styles.text_wrapper}><span className={styles.text}>Archive</span></button>
            </div>
            </div>
    )
}

export default ButtonSelector;