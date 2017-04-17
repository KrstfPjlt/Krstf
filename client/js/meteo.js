/* global React*/
/* global ReactDOM*/
/* global axios*/


class Meteo extends React.Component {
  
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: {}
    }
  }
  
  // Lifecycle method
  componentDidMount(){
    // Make HTTP reques with Axios
    axios.get("https://raspws-krstf.c9users.io/meteo")
      .then((res) => {
        // Set state with result
        this.setState({data:res.data});
      });
  }
  
  render() {
    return (
      <div className="container"><h2>{this.props.city}</h2>
      { "weather" in this.state.data && 
      <div> 
        <p>Tendance : {this.state.data.weather[0].description}</p>
        <p>Minimale : {this.state.data.main.temp_min}°C</p>
        <p>Maximale : {this.state.data.main.temp_max}°C</p>
        <p>Vent : {Math.ceil(Number(this.state.data.wind.speed)*1.60934)} km/h</p>
        <img src={"https://openweathermap.org/img/w/"+this.state.data.weather[0].icon+".png"}></img>
      </div>
      }
      </div>
      // <div className="container">
      //   <div className="row">
      //     <div className="col">
      //       <h2>{this.props.data.name}</h2>
      //     </div>
      //   </div>
      //   <div className="row">
      //     <div class="col">
      //       //icon
      //     </div>
      //     <div className="col">
      //       <div className="row">
      //         <p>Tendance : {this.props.data.weather[0].description}</p>
      //       </div>
      //       <div className="row">
      //         <p>Min : {this.props.data.main.temp_min}</p>
      //       </div>
      //       <div className="row">
      //         <p>Max : {this.props.data.main.temp_min}</p>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

ReactDOM.render(
  <Meteo city="Toulouse"/>,
  document.getElementById('meteo')
);