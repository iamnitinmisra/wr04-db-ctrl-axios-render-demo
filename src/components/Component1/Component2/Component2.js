import React, {Component} from "react";

class Component2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>This is Component 2</div>
        <div>
          {this.props.firstName} {this.props.lastName}
        </div>
        <form>
          <input
            onChange={(e) => this.props.changeHandler(e)}
            value={this.props.lastName}
            name="lastName"
          ></input>
          <input type="button" onClick={()=>this.props.changeNameFn()}></input>
        </form>
      </div>
    );
  }
}

export default Component2;
