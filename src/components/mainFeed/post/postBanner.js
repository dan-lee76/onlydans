import { useEffect, useState } from 'react';
import styles from './postBanner.module.css';
function PostBanner(props){
    let [useDate, setDate] = useState();


    useEffect(() =>{
        let date = props.date;
        var months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        var year = parseInt(date.substring(0,date.indexOf("-")))
        if(isNaN(year)){
            setDate(date)
        }
        var month = parseInt(date.substring(date.indexOf("-")+1,date.lastIndexOf("-")))
        var day = parseInt(date.substring(date.lastIndexOf("-")+1,date.length))
        var wordMonth = months[month-1].substring(0,3)
        var currentYear = new Date().getFullYear()
        console.log(day,wordMonth,year, currentYear)
        if(year !== currentYear){
            year = parseInt(year.toString().substring(2,4))
            setDate(wordMonth+' '+day+' '+year)
        }
        else{
            setDate(wordMonth+' '+day)
        }}, [])

    return ( 
        <div>
        <div className={styles.banner}>
            <div className={styles.left}>
            <img className={styles.image} src="http://cdn.onlydans.danlee.uk/content/assets/userProfile.png" alt="Logo"/>
            <div className={styles.userText}>
            <h1 className={styles.name}>Dan Lee</h1>
            <h1 className={styles.secondaryText}>@dan-lee76</h1>
            </div>
            </div>
            <div className={styles.right}>
            <h1 className={styles.secondaryText}>{useDate}</h1>
            </div>
            </div>
        </div>

     )
}

export default PostBanner;