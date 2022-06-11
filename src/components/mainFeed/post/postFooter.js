import { useEffect, useState } from 'react';
import Download from '../util/download';

function PostFooter(props){
    const [useDownload, setDownload] = useState()
    useEffect( () => {
        if(props.location !== null){
            setDownload(<Download location={props.location}/>)
        }
    }, [])

    return(
    <div style={{padding: '2%'}}>
        {useDownload}
        {/* <button onClick={this.changeHeart} ><FontAwesomeIcon className={styles.icon} icon={this.state.heart}/></button> */}
    </div>
 )
}

export default PostFooter;