import React, { useState } from "react";
 
function ReservationForm() {
  const initialValue = {
    payByCreditCard: true,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    country: ""
  };
  const [reservation, setReservation] = useState(initialValue);
 
  const handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    alert(""+JSON.stringify(reservation));
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Pay by Credit Card: </label>
          <input
            name="payByCreditCard"
            type="checkbox"
            checked={reservation.payByCreditCard}
            onChange={handleChange}
          />
        <br />
        <input
          name="firstName"
          value={reservation.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <br />
        <input 
        name="lastName"
        value={reservation.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        />
        <br />
        <input 
        name="email"
        value={reservation.email}
        onChange={handleChange}
        placeholder="Email"
        />
        <br />
        <input 
        name="phone"
        value={reservation.phone}
        onChange={handleChange}
        placeholder="Phone"
        />
        <br />
        <input 
        name="street"
        value={reservation.street}
        onChange={handleChange}
        placeholder="Street"
        />
        <br />
        <input 
        name="city"
        value={reservation.city}
        onChange={handleChange}
        placeholder="City"
        />
        <br />
        <input 
        name="zip"
        value={reservation.zip}
        onChange={handleChange}
        placeholder="Zip"
        />
        <br />
        <input 
        name="country"
        value={reservation.country}
        onChange={handleChange}
        placeholder="Country"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p>{JSON.stringify(reservation)}</p>
    </div>
  );
}

export default ReservationForm;

/* In a Controlled Component React state is made the "Single source of truth", so how:
Do we ensure that input controls like text, textarea or select always present the value found in the components state?
- No idea.

Do we ensure that a controls’ state, always matches the value found in an input control?
- Navnene skal matche?

What is the purpose of doing event.preventDefault() in an event handler?
- Så siden ikke reloader sig selv og smider al den information der er blevet indtastet, ofte i en form.

What would be the effect of NOT doing event.preventDefault in a submit handler
- Siden vil reloade og højst sandsynligt miste alle input gemt på siden.

Why don't we want to submit the traditional way, in a single page application?
- Mere kode for det samme resultat.
*/