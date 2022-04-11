import { useEffect, useState } from 'react';
import styles from './post.module.css';
import PostBanner from './postBanner';
import PostFooter from './postFooter';
function Post(props){
    let [useZoomed, setZoomed] = useState(true);
    let [useImageZoomed, setImageZoomed] = useState(<div></div>);
    let [useImage, setImage] = useState(<div></div>);
    let [useFooter, setFooter] = useState()

    function makeImgBig(){
        // console.log(useZoomed)
        if(useZoomed === true){
            // console.log("zoom")
            console.log(props.image)
            setZoomed(false);
            // setImageZoomed(<div onClick={makeImgBig} className={styles.imageZoomedBG}><img className={styles.imageZoomed} src={props.image} alt={props.image}/></div>)
        }
        else{
            console.log("unzoom")
            setZoomed(true);
            setImageZoomed(<div></div>)
        }
        
    }

    useEffect( () => {
        if(props.image !== null){
            setImage(<div onClick={makeImgBig} className={styles.imgArea}><img className={styles.imgStandard} src={props.image} alt={props.image}/></div>)
            setFooter(<PostFooter location={props.image}/>)
        }
        else{
            setFooter(<PostFooter location={null}/>)
        }
    }, [])
    

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