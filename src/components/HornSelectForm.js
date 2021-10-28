import { Component } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form';


export default class hornSelectForm extends Component {

    render(){
        return(
            <>
            <FloatingLabel controlId="floatingSelect" label="How many horns you need??">
            <Form.Select aria-label="Floating label select example">
              <option>Open this select menu</option>
              <option value="1">One 🦄</option>
              <option value="2">Two 🦄🦄</option>
              <option value="3">Three 🦄🦄🦄</option>
              <option value="100">Much Horns! 💯</option>
              <option value="All">See All Beasts</option>
            </Form.Select>
          </FloatingLabel>
          </>
        )
    }
}
    