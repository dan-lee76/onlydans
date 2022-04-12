import { useEffect, useState } from 'react';
import styles from './post.module.css';
import PostBanner from './postBanner';
import PostFooter from './postFooter';
function Post(props){
    let [useZoomed, setZoomed] = useState(false);
    let [useImageZoomed, setImageZoomed] = useState(<div></div>);
    let [useImage, setImage] = useState(<div></div>);
    let [useFooter, setFooter] = useState()

    function makeImgBig(){
        setZoomed(!useZoomed);
        
    }

    useEffect( () => {
        if(props.image !== null){
            setImage(<div onClick={makeImgBig} className={styles.imgArea}><img className={styles.imgStandard} src={"http://cdn.onlydans.danlee.uk/content/posts/"+props.image} alt={props.image}/></div>)
            setFooter(<PostFooter location={props.image}/>)
            if(useZoomed === true){
                document.body.style.overflow = 'hidden'
                setImageZoomed(<div onClick={makeImgBig} className={styles.imageZoomedBG}><span className={styles.close}>&times;</span><img className={styles.imageZoomed} src={"http://cdn.onlydans.danlee.uk/content/posts/"+props.image} alt={props.image}/></div>)
            }
            else{
                document.body.style.overflow = 'unset'
                setImageZoomed(<div></div>)
            }
        }
        else{
            setFooter(<PostFooter location={null}/>)
        }
    }, [useZoomed])
    
    return (
        <div className={styles.postSection}>
           <div className={styles.banner}><PostBanner date={props.date}/></div>
           <div className={styles.content}>
           <p className={styles.text}>{props.content}</p>
           {useImage}
           {useImageZoomed}
           {useFooter}
           </div>
       </div>
       );
}

export default Post;