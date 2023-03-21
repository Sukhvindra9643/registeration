import React, { Fragment} from "react";
import "./Home.css";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";



const Home = () => {
const loading =false
  return (
    <Fragment>
    {loading ? (
      <Loader />
    ) : (
      <Fragment>
        <MetaData title="Coaching Center" />

        <div className="banner">
          <a href="https://forms.gle/fjjzGfUcrdi4wTFJA" target="_blank" rel="noreferrer">
            <button>
              Registration Form
            </button>
          </a>
        </div>
      </Fragment>
    )}
  </Fragment>
  );
};

export default Home;
