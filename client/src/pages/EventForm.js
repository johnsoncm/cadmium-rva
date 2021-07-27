import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
} from "semantic-ui-react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import datePicker from "../utils/helpers";

const options = [
  { key: "g", text: "Gallery/Museum Opening", value: "gallery/museum opening" },
  { key: "a", text: "Artist Talk", value: "artist talk" },
  { key: "o", text: "Open Studios", value: "open studios" },
  { key: "f", text: "Film Screening", value: "film screening" },
  { key: "p", text: "Performance", value: "performance" },
];

function FormExampleFieldControl() {
  const [dateValue, setDateValue] = useState("");

  return (
    <div className="form-container">
      <Form>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Event Name"
            placeholder="Event Name"
          />
          <Form.Field
            control={Input}
            label="Location Name"
            placeholder="Location Name"
          />
          <Form.Field
            control={Select}
            label="Event Type"
            options={options}
            placeholder="Event Type"
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            label="Street address"
            placeholder="Enter a Location"
            width={10}
          />
          <Form.Input
            label="Address 2"
            placeholder="Building, Suite or Apt. Number"
            width={8}
          />
          <Form.Input label="City" placeholder="City" width={8} />
          <Form.Input label="State" placeholder="State" width={8} />
        </Form.Group>
        <Form.Group>
          <Form.Field>
            <label>Date / Time</label>
            <DatePicker
              selected={dateValue}
              onChange={(date) => setDateValue(date)}
              showTimeSelect
              className="date-picker"
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Input label="Link" placeholder="Link" width={12} />
        </Form.Group>
        <Form.Group>
          <Form.Input label="Image Link" placeholder="Image Link" width={12} />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label="Event Description"
          placeholder="Tell us more about your event..."
        />
        <Form.Field
          control={Checkbox}
          label="I agree to the Terms and Conditions"
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    </div>
  );
}

export default FormExampleFieldControl;

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
