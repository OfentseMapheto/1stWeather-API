//So apparently this used the css file "Weather.css" even though I didn't link it

function HomePage() {
  return (
    <div className="wrapper">
      <div className="top">
        
      </div>
      <div className="inputCentre">
        <div id="welcome">
          Weather App
        </div>
        <div id="instructions">
          Enter a South African zipcode to view the weather for a corresponding area. You can choose to have the weather results displayed in metric or imperial units.
        </div>
        <div className="dataCapture">
          <form id="zipCapture" action="zipPost" method="post">
            <div>
              <input type="text" id="zip" name="zip" required/>
            </div>
            <div id="unitRadio">
              <div className="unitRadioButtons">
                <input type="radio" id="metric" name="unit" value="metric" defaultChecked/>
                <label htmlFor="metric">Metric</label>
              </div>
              <div className="unitRadioButtons">
                <input type="radio" id="imperial" name="unit" value="imperial"/>
                <label htmlFor="imperial">Imperial</label>
              </div>
            </div>
            <div>
              <button id="zipSubmit" type="submit">View Corresponding Weather</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;