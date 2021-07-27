import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from 'semantic-ui-react';

// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// import datePicker from '../utils/helpers';



const options = [
  { key: 'g', text: 'Gallery/Museum Opening', value: 'gallery/museum opening' },
  { key: 'a', text: 'Artist Talk', value: 'artist talk' },
  { key: 'o', text: 'Open Studios', value: 'open studios' },
  { key: 'f', text: 'Film Screening', value: 'film screening' },
  { key: 'p', text: 'Performance', value: 'performance' },
]



class FormExampleFieldControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
        <div className="form-container" >
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Event Name'
            placeholder='Event Name'
          />
          <Form.Field
            control={Input}
            label='Location Name'
            placeholder='Location Name'
          />
          <Form.Field
            control={Select}
            label='Event Type'
            options={options}
            placeholder='Event Type'
          />
        </Form.Group>
        <Form.Group>
      <Form.Input label='Street address' placeholder='Enter a Location' width={10} />
      <Form.Input label='Address 2' placeholder='Building, Suite or Apt. Number' width={8} />
      <Form.Input label='City' placeholder='City' width={8} />
      <Form.Input label='State' placeholder='State' width={8} />
      <Form.Input label='Zip Code' placeholder='Zip Code' width={8} />
    </Form.Group>
        <Form.Group>
            <Form.Input label="Date" placeholder="date"/>
        </Form.Group>
   
        {/* <Form.Group inline>
          <label>Event Type</label>
          <Form.Field
            control={Radio}
            label='Gallery/Museum Opening'
            value='1'
            checked={value === '1'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Artist Talk'
            value='2'
            checked={value === '2'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Open Studios'
            value='3'
            checked={value === '3'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Film Screening'
            value='4'
            checked={value === '4'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Performance'
            value='5'
            checked={value === '5'}
            onChange={this.handleChange}
          /> */}
        {/* </Form.Group> */}
        <Form.Field
          control={TextArea}
          label='Event Description'
          placeholder='Tell us more about your event...'
        />
        <Form.Field
          control={Checkbox}
          label='I agree to the Terms and Conditions'
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
      </div>
    )
  }
}

export default FormExampleFieldControl









// import React from "react";
// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";
// import Image from '../images/cadmium-images/logo.png'

// const styles = {
//   backgroundStyle:{
//     backgroundImage: ''
//   }
// }

// const Home = () => {
//   return (
//     <div className="container">
//       {/* <CategoryMenu />
//       <ProductList />
//       <Cart /> */}




//     </div>
//   );
// };

// export default Home;
