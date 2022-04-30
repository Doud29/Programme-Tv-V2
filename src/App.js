import "./App.scss";
import programme from "./programme.json";
import Header from "./compenant/Header";
import Programmes from "./compenant/Programmes";
import img from "./img/logom6.jpg";

function App() {
  return (
    <div className="App">
      <Header logoUrl={img} />
      <div className="programme">
        {programme.map((item, index) => {
          console.log(item);
          return (
            <div className="bloc-programme">
              <div className="bloc1">
                <p> {item.time}</p>
                <img src={item.image} alt="photo programme" />
              </div>

              <div className="bloc2">
                <p> {item.title}</p>
                <p> {item.type}</p>
                <p> {item.duration}</p>
                <div className="importance">
                  {item.isUnseen === true ? (
                    <p className="inedit">Inédit</p>
                  ) : (
                    <p>{""}</p>
                  )}

                  {item.direct === true ? (
                    <p className="inedit">Inédit</p>
                  ) : (
                    <p>{""}</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
