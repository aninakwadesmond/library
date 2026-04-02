import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import ImageDetails from "../DetailsComponent/ImageDetails";
import Navigation from "../HomeComponent/Navigation";

function Details() {
  return (
    <div className=" ">
      <Navigation name="LibRoom" icon={faLeftLong} iconEnd={faLeftLong}/>
      <ImageDetails />
    </div>
  );
}

export default Details;
