import React from "react";
import weatherdata from "../api/weathermap";
import Search from "./Search";
import ClimateData from "./CilmateData";
import unsplashapi from "../api/unsplashapi";
import Spinner from "./Spinner";

class App extends React.Component {
  
  state = { temp: null, name: "", tempMin: null,tempMax: null,feelsLike:null, condition: "", image: "" };
  onTermSubmit = async (keyWord) => {
    const response = await weatherdata.get("/weather", {
      params: {
        q: keyWord,
        units: "metric",
        appid: "d5466b290aa7c6e28e44aa7ef11031d5",
      },
    });
    this.setState({
      temp: response.data.main.temp,
      name: response.data.name,
      tempMin: response.data.main.temp_min,
      tempMax:response.data.main.temp_max,
      feelsLike:response.data.main.feels_like,
      condition: response.data.weather[0].description,
    });
    console.log(response.data.main.temp);
    const unsplashresponse = await unsplashapi.get("/api", {
      params: {
        key: "17694690-043474ba0c312d0e3ca9d2edf",
        q: keyWord,
        category: "places",
        safesearch: true,
        image_type: "photo",
      },
    });
    this.setState({ image: unsplashresponse.data.hits[0].largeImageURL });
    console.log(unsplashresponse.data.hits[0]);
  };
  render() {
    return (
      <div>
        <Search onFormSubmit={this.onTermSubmit} />
        <ClimateData
          temparature={this.state.temp}
          location={this.state.name}
          tempMin={this.state.tempMin}
          tempMax={this.state.tempMax}
          feelsLike={this.state.feelsLike}
          condition={this.state.condition}
          image={this.state.image}
        />
      </div>
    );
  }
}

export default App;
