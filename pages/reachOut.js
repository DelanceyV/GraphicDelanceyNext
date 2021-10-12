import { Component } from 'react';
import { Col, Form, FormGroup, Input, Card, CardTitle, CardText, CardBody } from 'reactstrap';
import { INFO } from '../shared/reachOutInfo';

class ReachOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: INFO
    };
  }

  render() {

    const ReachOut = (this.state.info.map(info => {
      return(
        <div>
          <Form>
            <FormGroup row>
              <Col>
                <Input
                  type="string"
                  name="name"
                  id="name"
                  placeholder="What is your Name?"
                  className="form rainbow"
                />
              </Col>
              <Col>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Please"
                  className="form rainbow"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col className="message">
                <Input 
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Have fun typing in RAINBOW! :)"
                  className="form rainbow"
                />
              </Col>
            </FormGroup>
            <Card>
              <CardBody>
                <CardTitle tag="h3">Send It! (but don't)</CardTitle>
                <CardText>This GIANT button does nothing yet. o.o</CardText>
              </CardBody>
            </Card>
          </Form>
          
        </div>
      )
    }))
    return (
      <>
        {ReachOut}
      </>
    );
  }
}

export default ReachOut;
