import React from "react";

class Search extends React.Component {
  state = { keyWord: "", lat: null, long: null, err: "" };
  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),

      (failure) => this.setState({ errMessage: failure.message })
    );
  }
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.keyWord);
  };
  render() {
    return (
      <div className="card" style={{ borderRadius: "7px" }}>
        <div
          className="jumbotron jumbotron-fluid"
          style={{
            backgroundColor: "dodgerBlue",
            borderRadius: "12px",
            margin: "8px",
          }}
        >
          <div className="container">
            <h1 className="display-3" style={{ textAlign: "center" }}>
              KLIMA
              <br /> <i className="fas fa-cloud"></i>{" "}
              <i className="fas fa-bolt">
                {" "}
                <i className="fas fa-cloud-showers-heavy"></i>
              </i>
            </h1>
            <form onSubmit={this.onFormSubmit}>
              <div className="form-group">
                <label>Provide Your Location</label>
                <input
                  type="text"
                  className="form-control"
                  style={{ borderRadius: "7px" }}
                  value={this.state.keyWord}
                  onChange={(event) =>
                    this.setState({ keyWord: event.target.value })
                  }
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
