import { useEffect, useState } from 'react';
import styles from "./postFooter.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { saveAs } from "file-saver";

function PostFooter(props){
    const [useDownload, setDownload] = useState()
    const downloadFile = () => {
        let name = "http://cdn.onlydans.danlee.uk/content/posts/"+props.location;
        console.log(props.location.substring(0,3));
        if(props.location.substring(0,3) === "QdF"){
            name = "http://cdn.onlydans.danlee.uk/original/posts/"+props.location;
        }
        saveImg(name);
    }
    function saveImg(urlArr){
        (async () => {
           let name = 'img' + 0 + '.jpg';
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