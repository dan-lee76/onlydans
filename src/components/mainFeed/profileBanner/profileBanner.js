import styles from "./profileBanner.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
function ProfileBanner(props){

    return(
        <div>
            <div className={styles.banner}>
                    <div className={styles.bannerImg} style={{backgroundImage:"url(http://cdn.onlydans.danlee.uk/content/assets/banner.jpg)"}}></div>
                    <div className={styles.stickyName}>
                        <a href="https://danlee.uk"><FontAwesomeIcon className={styles.backButton} icon={faArrowLeft} /></a>
                    <div className={styles.textArea}>
                        <h1 className={styles.topName}>{props.name}</h1>
                        <h1 className={styles.underTopName}>{props.post_amount} Posts</h1>
                    </div>
                    </div>
                </div>
                <div className={styles.userSection}>
                <img className={styles.profilePic} src={'http://cdn.onlydans.danlee.uk/content/assets/userProfile.png'} alt="Dans Face"/>
                <h1 className={styles.name}>{props.name}</h1>
                <h1 className={styles.username}>{props.username}</h1>
                <p className={styles.userText}>{props.description}</p>
                </div>
            </div>
    )
}
export default ProfileBanner;