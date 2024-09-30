import "./Main.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context.jsx";

const Main = () => {
  const { onSent, recentPrompt, result, loading, resultData, setInput, input } =
    useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Hades</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!result ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Aneesh</span>
              </p>
              <p>How Can I help you today ?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to visit</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Briefly Summarize the concept: Urban Planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, and this is just a visula demonstration of the
            original Gemini therfore it is called Hades.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
