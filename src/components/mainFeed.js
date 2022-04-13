import axios from "axios";
import {useEffect, useState} from "react";
import './mainFeed.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollToTop from "react-scroll-to-top";
import ProfileBanner from "./mainFeed/profileBanner/profileBanner";
import Post from "./mainFeed/post/image";
import ButtonSelector from "./mainFeed/profileBanner/buttonSelector";
function MainFeed() {
    let [useHasMore, setHasMore] = useState(true);
    let [usePostData, setPostData] = useState('');
    let [useContentDisplayed, setContentDisplayed] = useState([]);
    let [usePostLimit, setPostLimit] = useState(5);
    let [useCurrentMode, setCurrentMode] = useState("posts");

    const fetchData = async () => {
        await axios.get('http://api.onlydans.danlee.uk/getContent').then(result => {
            setPostData(result.data);
            console.log(usePostData)
            setContentDisplayed(result.data.map((p, index) => {
                let image = p.location;
                if (p.location === null) {
                    image = null;
                }
                if (index < usePostLimit) {
                    if (p.image === null) {
                        setPostLimit(usePostLimit ++);
                        return null;
                    } else {
                        return <Post content={
                                p.description
                            }
                            image={image}
                            date={
                                p.date
                            }/>;
                    }
                } else {
                    return null;
                }
            }))
        })
    }
    useEffect(() => {
        console.log(1)
        fetchData();
    }, [])

    function fetchMoreData() {
        if (usePostLimit >= usePostData.length) {
            setHasMore(false);
            return;
        }
        setPostLimit(usePostLimit + 5);
        handleToUpdate(useCurrentMode)
        // setContentDisplayed(usePostData.map((p, index) => {
        //     let image = p.location;
        //     if (p.location === null) {
        //         image = null;
        //     }
        //     if (index < usePostLimit+5) {
        //         if (p.image === null) {
        //             setPostLimit(usePostLimit ++);
        //             return null;
        //         } else {
        //             return <Post key={p.id} content={
        //                     p.description
        //                 }
        //                 image={image}
        //                 date={
        //                     p.date
        //                 }/>;
        //         }
        //     } else {
        //         return null;
        //     }
        // }))
    };

    const handleToUpdate = (mode) => {
        console.log(mode)
        setCurrentMode(mode);
        if (mode === "posts") {
            console.log("ping");
            setContentDisplayed(usePostData.map((p, index) => {
                let image = p.location;
                if (p.location === null) {
                    image = null;
                }
                if (index < usePostLimit+5) {
                    if (p.image === null) {
                        setPostLimit(usePostLimit ++);
                        return null;
                    } else {
                        return <Post key={p.id} content={
                                p.description
                            }
                            image={image}
                            date={
                                p.date
                            }/>;
                    }
                } else {
                    return null;
                }
            }))
        }
        // else if(someArg==="media"){
        //     this.setState({display:postData.map((p, index) => {if(index < limit){if(p.image==="NULL"){limit++; return null;}else{return <PostImage d_location={p.download_location} d_name={p.download_name} content={p.description} image={p.image} date={p.date}/>;}}else{return null;}})});
        // }
        else if (mode === "media") {
            console.log("ping");
            setContentDisplayed(usePostData.map((p, index) => {
                let image = p.location;
                if (p.location === null) {
                    setPostLimit(usePostLimit++)
                    return null
                }
                if (index < usePostLimit+5) {
                    if (p.image === null) {
                        setPostLimit(usePostLimit ++);
                        return null;
                    } else {
                        return <Post key={p.id} content={
                                p.description
                            }
                            image={image}
                            date={
                                p.date
                            }/>;
                    }
                } else {
                    return null;
                }
            }))
        }
        else if(mode==="archive"){
            setContentDisplayed(<div></div>);
        }
    }


    return (
        <div><ScrollToTop smooth/>
            <div className="content">
                <ProfileBanner name="Dan Lee" username="@dan-lee76" description="The onlydans exclusive site owner ;)"
                    post_amount={
                        usePostData.length
                    }/>
                <ButtonSelector handleToUpdate={handleToUpdate}/>
                <InfiniteScroll dataLength={usePostLimit}
                    next={fetchMoreData}
                    hasMore={useHasMore}
                    loader={
                        <h4>Loading...</h4>
                    }
//                     endMessage={<p
//                         style={
// {textAlign: "center"}}>
//                     <b>Yay! You have seen it all</b></p>}
>

                    {useContentDisplayed} </InfiniteScroll>
            </div>
        </div>
    )
}

export default MainFeed;
