import axios from "axios";
import { useEffect, useState } from "react";
import './mainFeed.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import ScrollToTop from "react-scroll-to-top";
import ProfileBanner from "./mainFeed/profileBanner/profileBanner";
import Post from "./mainFeed/post/image";
function MainFeed() {
    const [useHasMore, setHasMore] = useState(true);
    const [usePostData, setPostData] = useState('');
    const [useContentDisplayed, setContentDisplayed] = useState([]);
    const [usePostLimit, setPostLimit] = useState(5);

    // need to do async etc
    useEffect(() => {
        console.log(1)
        axios.get('http://api.onlydans.danlee.uk/getContent').then(result => {
            setPostData(result.data);
            console.log(usePostData)
            setContentDisplayed(result.data.map((p, index) => {
              let image = "http://cdn.onlydans.danlee.uk/content/posts/"+p.location;
              if(p.location === null){
                image = null;
              }
              if(index < usePostLimit){
                if(p.image===null){
                  setPostLimit(usePostLimit++); 
                  return null;
                }else{
                  return <Post content={p.description} image={image} date={p.date}/>;}
                }else{
                  return null;
                }
              }
              )
              )
        })
    }, [])
    
    const fetchMoreData = () => {
        console.log(usePostLimit)
        // if (usePostLimit >= usePostData.length) {
        //   // setHasMore(false);
        //   // this.setState({ hasMore: false });
        //   return;
        // }
        //   // this.setState({
        //   //   limit: this.state.limit+5
        //   // });
        //   setPostLimit(usePostLimit);
        // // this.handleToUpdate();
      };

    return(
        <div><ScrollToTop smooth/>
            <div className="content">
                <ProfileBanner name="Dan Lee" username="@dan-lee76" description="The onlydans exclusive site owner ;)" post_amount={usePostData.length}/>
                <h1>Welcome to ONLY DANS BETA</h1>
                <Post content='Post Test' date='2022-01-01' image='http://cdn.onlydans.danlee.uk/content/posts/final.jpg'/>
                {/* {useContentDisplayed} */}
                <InfiniteScroll
      dataLength={usePostLimit}
      next={fetchMoreData()}
      hasMore={useHasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
    
      {useContentDisplayed}   
    
      </InfiniteScroll>
            </div>
        </div>
    )
}

export default MainFeed;