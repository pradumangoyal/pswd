import React, { Component } from "react";
import { Segment, Grid, Container, Button, Form } from "semantic-ui-react";

import { generatePassword } from "./utils";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      site: "",
      pswd: "",
      pswdGen: "hi"
    };
  }
  handleInputChange = (e, { name, value }) => {
    this.setState({
      [name]: value
    });
  };
  handleSubmit = () => {
    this.setState(
      {
        pswdGen: generatePassword(
          this.state.site.toUpperCase(),
          this.state.pswd
        )
      },
      () => {
        let range = document.createRange();
        range.selectNodeContents(this.textArea);
        let sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        document.execCommand("copy");
        sel.removeAllRanges();
      }
    );
  };
  render() {
    return (
      <div className="App">
        <Container textAlign="center">
          <Grid.Column width={16}>
            <Segment attached="top" textAlign="left">
              pswd
            </Segment>
            <Segment size="big" attached textAlign="left">
              <Form>
                <Form.Field>
                  <label>Site name(in CAPITAL letters)</label>
                  <Form.Input
                    name="site"
                    onChange={this.handleInputChange}
                    value={this.state.site.toUpperCase()}
                    autoComplete="off"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Secret Password</label>
                  <Form.Input
                    name="pswd"
                    type="password"
                    onChange={this.handleInputChange}
                    value={this.state.pswd}
                    autoComplete="off"
                  />
                </Form.Field>
              </Form>
            </Segment>
            <Segment size="big" attached="bottom" textAlign="right">
              <Button
                content="Generate"
                basic
                positive
                icon="unlock alternate"
                onClick={this.handleSubmit}
              />
            </Segment>
            {
              <code
                ref={textarea => (this.textArea = textarea)}
                className="code"
              >
                {this.state.pswdGen}
              </code>
            }
          </Grid.Column>
        </Container>
      </div>
    );
  }
}

export default App;
