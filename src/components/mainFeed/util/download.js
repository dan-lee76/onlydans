import styles from "./download.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { saveAs } from "file-saver";

function Download(props){
    const downloadFile = () => {
        let name = "https://cdn.danlee.uk/content/posts/"+props.location;
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

    return(
        <button onClick={downloadFile}><FontAwesomeIcon className={styles.icon} icon={['fas', 'download']}/></button>
 )
}

export default Download;