import React, {useState} from "react";

const NameForm = () => {
  const [name,setName] = useState("");
  function handleChange(event) {
      const val = event.target.value;
      setName(val);
  }
  function handleSubmit(event) {
    event.preventDefault();
      alert("Name was submitted: " + name);
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {name}
    </div>
  );
};
 
export default function FormDemo() {
  return (
    <div style={{marginTop:25}}>
      <NameForm />
    </div>
  );
}