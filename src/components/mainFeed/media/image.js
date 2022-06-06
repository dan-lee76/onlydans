import { useEffect, useState } from 'react';
import styles from './post.module.css';
function ImageMedia(props){
    let [useZoomed, setZoomed] = useState(false);
    let [useImageZoomed, setImageZoomed] = useState(<div></div>);
    let [useImage, setImage] = useState(<div></div>);
    let [useImageLoc, setImageLoc] = useState(props.image)

    function makeImgBig(){
        setZoomed(!useZoomed);
        
    }

    function nextImage(){
        console.log(props.id)

        let indexOfCurrent = props.postData.findIndex(function(item, i){
            return parseInt(item.id) === props.id
          });
        let idAdd = indexOfCurrent + 1
        console.log(indexOfCurrent)
        setImageLoc(props.postData[indexOfCurrent+1].location)
        console.log(props.postData[indexOfCurrent+1])
        console.log(props.postData[indexOfCurrent])
    }


    useEffect( () => {
        if(props.image !== null){
            setImage(<div onClick={makeImgBig} className={styles.imgArea}><img className={styles.imgStandard} src={"https://cdn.danlee.uk/content/posts/"+useImageLoc} alt={props.image}/></div>)
            if(useZoomed === true){
                document.body.style.overflow = 'hidden'
                setImageZoomed(<div className={styles.imageZoomedBG}>
                    <span className={styles.date}>{props.date}</span>
                    <span onClick={makeImgBig} className={styles.close}>&times;</span>
                    <img className={styles.imageZoomed} src={"https://cdn.danlee.uk/content/posts/"+useImageLoc} alt={props.image}/>
                    <span onClick={nextImage} className={styles.nextImage}>Next</span>
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