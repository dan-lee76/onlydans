import { useEffect, useState } from "react";
import ZoomedImage from "../util/zoomedImage";
import styles from "./mediaPost.module.css";
function ImageMedia(props) {
  let [useZoomed, setZoomed] = useState(false);
  let [useImageZoomed, setImageZoomed] = useState(<div></div>);
  let [useImage, setImage] = useState(<div></div>);

  function makeImgBig() {
    setZoomed(!useZoomed);
  }
  useEffect(() => {
    if (props.image !== null && props.image.substring(props.image.length - 3) !== "mp4") {
      setImage(
        <div onClick={makeImgBig} className={styles.imgArea}>
          <img
            className={styles.imgStandard}
            src={"https://cdn.danlee.uk/content/posts/" + props.image}
            alt={props.image}
          />
        </div>
      );
      if (useZoomed === true) {
        document.body.style.overflow = "hidden";
        console.log(props.postData);
        setImageZoomed(
          <ZoomedImage
            id={parseInt(props.id)}
            postData={props.postData}
            makeImgBig={makeImgBig}
          />
        );
      } else {
        document.body.style.overflow = "unset";
        setImageZoomed(<div></div>);
      }
    }
  }, [useZoomed]);

  return (
    <div>
      {useImage}
      {useImageZoomed}
    </div>
  );
}

export default ImageMedia;
