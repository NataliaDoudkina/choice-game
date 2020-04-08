import React, { Component } from "react";
import "./Character.css";
import CheckBox from "./CheckBox";

class CharacterForm extends Component {
  static defaultProps = {
    characters: ["human", "elf", "dwarf"],
    jobs: ["warrior", "wizard", "ranger", "cleric"],
    gender: ["male", "female"]
  };

  constructor(props) {
    super(props);
    this.state = {
      character: "human",
      job: "warrior",
      gender: "male",
      username: "",
      charStatus: false
        };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(st => ({
      charStatus: !st.charStatus
    }));

    this.props.changeState(
      this.state.character,
      this.state.job,
      this.state.gender,
      this.state.username,
      this.state.charStatus
    );

    this.setState({
        character: "human",
        job: "warrior",
        gender: "male",
        username: "",
        charStatus: false
    })
  }

  render() {
    return (
      <div>
        <h2>Choose your character first:</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <h2>Choose a race:</h2>

          {this.props.characters.map((option, index) => (
            <CheckBox
              label={option}
              name="character"
              id={index}
              value={option}
              checked={option === this.state.character}
              key={index}
              handleChange={this.handleChange}
            />
          ))}

          <h2>Choose a job:</h2>

          {this.props.jobs.map((option, index) => (
            <CheckBox
              label={option}
              name="job"
              value={option}
              checked={option === this.state.job}
              key={index}
              handleChange={this.handleChange}
            />
          ))}
          <h2>Choose a gender:</h2>
          {this.props.gender.map((option, index) => (
            <CheckBox
              label={option}
              name="gender"
              value={option}
              key={index}
              checked={option === this.state.gender}
              handleChange={this.handleChange}
            />
          ))}
          <button>Create a character</button>
        </form>
      </div>
    );
  }
}

export default CharacterForm;
