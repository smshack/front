import React from "react";
import { Route, Link } from "react-router-dom";

const Home = () => {
  const layoutlist = [
    {
      title: "레이아웃1",
      path: "layout1",
    },
  ];
  return (
    <div className="home">
      <h1>scss 연습</h1>
      <div>
        <Link to={`/`}>Go to Website</Link>
      </div>
      <hr />
      <section>
        <h1>section headline</h1>
        <div className="section-inner">
          <div className="items">
            <div className="item">item1</div>
            <div className="item">item2</div>
            <div className="item">item3</div>
          </div>
        </div>
      </section>
      <h1>CSS3 Checkbox Styles</h1>
      <em>Click any button below</em>

      <div className="ondisplay">
        <section title=".slideOne">
          {/* <!-- .slideOne --> */}
          <div className="slideOne">
            <input
              type="checkbox"
              value="None"
              id="slideOne"
              name="check"
              checked
            />
            <label for="slideOne"></label>
          </div>
          {/* <!-- end .slideOne --> */}
        </section>

        <section title=".slideTwo">
          {/* <!-- .slideTwo --> */}
          <div className="slideTwo">
            <input
              type="checkbox"
              value="None"
              id="slideTwo"
              name="check"
              checked
            />
            <label for="slideTwo"></label>
          </div>
          {/* <!-- end .slideTwo --> */}
        </section>

        <section title=".slideThree">
          {/* <!-- .slideThree --> */}
          <div className="slideThree">
            <input
              type="checkbox"
              value="None"
              id="slideThree"
              name="check"
              checked
            />
            <label for="slideThree"></label>
          </div>
          {/* <!-- end .slideThree --> */}
        </section>

        <section title=".roundedOne">
          {/* <!-- .roundedOne --> */}
          <div className="roundedOne">
            <input
              type="checkbox"
              value="None"
              id="roundedOne"
              name="check"
              checked
            />
            <label for="roundedOne"></label>
          </div>
          {/* <!-- end .roundedOne --> */}
        </section>

        <section title=".roundedTwo">
          {/* <!-- .roundedTwo --> */}
          <div className="roundedTwo">
            <input
              type="checkbox"
              value="None"
              id="roundedTwo"
              name="check"
              checked
            />
            <label for="roundedTwo"></label>
          </div>
          {/* <!-- end .roundedTwo --> */}
        </section>

        <section title=".squaredOne">
          {/* <!-- .squaredOne --> */}
          <div className="squaredOne">
            <input
              type="checkbox"
              value="None"
              id="squaredOne"
              name="check"
              checked
            />
            <label for="squaredOne"></label>
          </div>
          {/* <!-- end .squaredOne --> */}
        </section>

        <section title=".squaredTwo">
          {/* <!-- .squaredTwo --> */}
          <div className="squaredTwo">
            <input
              type="checkbox"
              value="None"
              id="squaredTwo"
              name="check"
              checked
            />
            <label for="squaredTwo"></label>
          </div>
          {/* <!-- end .squaredTwo --> */}
        </section>

        <section title=".squaredThree">
          {/* <!-- .squaredThree --> */}
          <div className="squaredThree">
            <input
              type="checkbox"
              value="None"
              id="squaredThree"
              name="check"
              checked
            />
            <label for="squaredThree"></label>
          </div>
          {/* <!-- end .squaredThree --> */}
        </section>

        <section title=".squaredFour">
          {/* <!-- .squaredFour --> */}
          <div className="squaredFour">
            <input
              type="checkbox"
              value="None"
              id="squaredFour"
              name="check"
              checked
            />
            <label for="squaredFour"></label>
          </div>
          {/* <!-- end .squaredFour --> */}
        </section>
      </div>

      <div id="instructions">
        <video
          id="my_video_1"
          className="video-js vjs-default-skin"
          width="640px"
          height="267px"
          controls
          preload="none"
          poster="http://video-js.zencoder.com/oceans-clip.jpg"
          data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'
        >
          <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
          <source
            src="https://vjs.zencdn.net/v/oceans.webm"
            type="video/webm"
          />
        </video>

        <p>
          Custom skin for{" "}
          <Link href="http://www.videojs.com" target="_blank">
            video.js
          </Link>
          . Requires v5.0.0 or higher.
        </p>

        <h2>HOW TO CUSTOMIZE:</h2>
        <ol>
          <li>
            Click the CodePen <strong>Fork</strong> link above to create a new
            copy
          </li>
          <li>Change the CSS (SCSS) as desired</li>
          <li>
            Click <strong>Save</strong> to save your changes
          </li>
          <li>
            Click <strong>Settings</strong> to name and describe your skin
          </li>
          <li>
            Click the <strong>Share</strong> link to tweet your skin, and
            include @videojs so we know about it
          </li>
        </ol>
        <h2>HOW TO USE:</h2>
        <ol>
          <li>Click "Refresh" if you made any changes</li>
          <li>Copy the CSS contents of the following box</li>
          <li>
            Include it in the page with your player in a &lt;style&gt; tag or
            with a{" "}
            <a href="https://www.w3schools.com/css/css_howto.asp">
              stylesheet include
            </a>
          </li>
        </ol>
        <textarea id="css_result"></textarea>
        <button id="refresh">Refresh</button>
      </div>
    </div>
  );
};

export default Home;
