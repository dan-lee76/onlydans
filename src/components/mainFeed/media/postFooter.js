import { useEffect, useState } from 'react';
import styles from "./postFooter.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { saveAs } from "file-saver";

function PostFooter(props){
    const [useDownload, setDownload] = useState()
    const downloadFile = () => {
        let name = "https://cdn.danlee.uk/content/posts/"+props.location;
        console.log(props.location.substring(0,3));
        if(props.location.substring(0,3) === "QdF"){
            name = "https://cdn.danlee.uk/original/posts/"+props.location;
        }
        saveImg(name);
    }
    function saveImg(urlArr){
        (async () => {
           let name = props.location;
           let blob = await fetch(urlArr).then((r) => r.blob());
           saveAs(blob, name);
        })();
    }

    useEffect( () => {
        if(props.location !== null){
            setDownload(<button onClick={downloadFile}><FontAwesomeIcon className={styles.icon} icon={['fas', 'download']}/></button>)
        }
    }, [])

    return(
    <div className={styles.footer}>
        {useDownload}
        {/* <button onClick={this.changeHeart} ><FontAwesomeIcon className={styles.icon} icon={this.state.heart}/></button> */}
    </div>
 )
}

export default PostFooter;