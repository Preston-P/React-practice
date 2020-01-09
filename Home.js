import React from "react";
import Background from "./Home-components/background";
import FlavorProfile from "./state/flavor";
import DataCoffee from "./state/datacoffee";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {}
    };

    //  this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.co/api/starships/9")
      .then(Response => Response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        });
      });
  }

  render() {
    const text = this.state.loading ? "loading" : this.state.character.name;
    return (
      <Background>
        <h2>Have a cup</h2>
        <h3>
          Best way to enjoy a cup of coffee,
          <br />
          {text}
        </h3>
      </Background>
    );
  }
}

/* const Home = () => {
  return (
    <Background>
      <typeWriter> </typeWriter>
      <h2>Have a cup</h2>
      <h3>
        Best way to enjoy a cup
        <br />
        espresso
      </h3>
    </Background>
  );
}; */

export default Home;
