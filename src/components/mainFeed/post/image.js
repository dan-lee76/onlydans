import { useEffect, useState } from 'react';
import styles from './post.module.css';
import PostBanner from './postBanner';
function Post(props){
    let [useZoomed, setZoomed] = useState(true);
    let [useImageZoomed, setImageZoomed] = useState(<div></div>);
    let [useImage, setImage] = useState(<div></div>);

    const makeImgBig = () =>{
        console.log("click");
        console.log(useZoomed)
        if(useZoomed){
            console.log("zoom")
            setZoomed(false);
            console.log(useZoomed)
            setImageZoomed(<div onClick={makeImgBig.bind(this)} className={styles.imageZoomedBG}><img className={styles.imageZoomed} src={props.image} alt={props.image}/></div>)
        }
        else{
            console.log("unzoom")
            setZoomed(true);
            setImageZoomed(<div></div>)
        }
    }

    useEffect( () => {
        console.log(2)
        if(props.image !== null){
            setImage(<div onClick={makeImgBig.bind()} className={styles.imgArea}><img className={styles.imgStandard} src={props.image} alt={props.image}/></div>)
            // footer = <PostFooter location={this.props.image}/>
        }
        else{
            // footer = <PostFooter location="null"/>
        }
    }, [useZoomed])
    

    return (
        <div className={styles.postSection}>
           <div className={styles.banner}><PostBanner date={props.date}/></div>
           <div className={styles.content}>
           <p className={styles.text}>{props.content}</p>
           {useImage}
           {/* {useImageZoomed} */}
           {/* {footer} */}
           </div>
       </div>
       );
}

export default Post;