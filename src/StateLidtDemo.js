import React, { useState, useEffect } from "react";

const ParentComp = () => {
  const [persons, setPersons] = useState([]);
  const [count, setCount] = useState(1);
  const [person, setPerson] = useState({name:""});

  const addPerson = (name) => {
      const person = {name: name, id: count};
      setPersons([...persons, person]);
      setCount(count + 1);
  };

  const deletePerson = (event) => {
      console.log("delete");
      const target = event.target;
      const id = Number(target.id);
      console.log(id);
      const oneLess = persons.filter((person) => person.id !== id);
      console.log(oneLess);
      setPersons(oneLess);
  }

  const updatePerson = (person) => {
      console.log("update");
      console.log(person);
      const id = Number(person.id);
      persons.forEach(p => {
          if(p.id===id){
              p.name = person.name;
          }
      });
      setPersons([...persons]); //Mangler der noget??
  };

  const editPerson = (event) => {
      console.log("edit");
      const target = event.target;
      const id = Number(target.id);
      console.log(id);
      setPerson({id: id});
  };

  // ParentComp return
  return (
    <div>
      {/* <h3>Total Persons: {count}</h3> */}
      {/* 
        ParentComp = Persons
        InputComp = InputPerson
        ShowComp = ListPersons
        */}
      <InputComp
        addPerson={addPerson}
        person={person}
        updatePerson={updatePerson}
      />
      <ShowComp
        persons={persons}
        deletePerson={deletePerson}
        editPerson={editPerson}
      />
    </div>
  );
};

const InputComp = (props) => {
    const [name, setName] = useState(props.person.name);

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        setName(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(props.person.id);
        if(props.person.id) {
            props.updatePerson({name:name, id:props.person.id});
        } else {
            props.addPerson(name);
        }
    };

    return(
        <div>
            <p>Add Person</p>
            <form>
                {props.person.id}
                <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleChange}
                />
                <input type="submit" onClick={handleSubmit}/>
            </form>
        </div>
    );
};

const ShowComp = (props) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                    {props.persons.map((person) => (
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>
                                <a href="#" id={person.id} onClick={props.deletePerson}>Delete</a>
                                /{" "}
                                <a href="#" id={person.id} onClick={props.editPerson}>
                                    edit
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export { ParentComp };

/* 
Answer the following questions before you continue
What is meant by the react term “Lifting State Up”?
- At en child class kan sende information og objekter til sin parent class, 
  som så kan arbejde videre med det eller vise det på siden.
Where do you lift it up to?
- Til parent klassen.
Which way does React recommend data to flow: From sibling to sibling, from bottom to top or from top to bottom?
- Sibling to sibling eller bottom to top.
Lifting state up, involves a great deal of boilerplate code, what’s the benefit we get from doing “things” like this?
- I'm not sure.
*/