import "../App.css";

function LoadingScreen(){
  return(
    <div className="loading-screen">
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  );  
}

export default LoadingScreen;