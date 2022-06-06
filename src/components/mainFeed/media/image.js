import { useEffect, useState } from 'react';
import styles from './post.module.css';
function ImageMedia(props){
    let [useZoomed, setZoomed] = useState(false);
    let [useImageZoomed, setImageZoomed] = useState(<div></div>);
    let [useImage, setImage] = useState(<div></div>);
    let [useFooter, setFooter] = useState()

    function makeImgBig(){
        setZoomed(!useZoomed);
        
    }

    useEffect( () => {
        if(props.image !== null){
            setImage(<div onClick={makeImgBig} className={styles.imgArea}><img className={styles.imgStandard} src={"https://cdn.danlee.uk/content/posts/"+props.image} alt={props.image}/></div>)
            if(useZoomed === true){
                document.body.style.overflow = 'hidden'
                setImageZoomed(<div className={styles.imageZoomedBG}>
                    <span className={styles.date}>{props.date}</span>
                    <span onClick={makeImgBig} className={styles.close}>&times;</span>
                    <img className={styles.imageZoomed} src={"https://cdn.danlee.uk/content/posts/"+props.image} alt={props.image}/>
                    <span className={styles.content}>{props.content}</span>
                    </div>)
            }
            else{
                document.body.style.overflow = 'unset'
                setImageZoomed(<div></div>)
            }
        }

    }, [useZoomed])
    
    return (
        <div >
           {useImage}
           {useImageZoomed}
           </div>
       );
}

export default ImageMedia;