import './App.css';
import { useState } from 'react';
import GoblinForm from './GoblinForm';
import GoblinList from './GoblinList';
import Goblin from './Goblin';

function App() {
  const [filteredGoblins, setfilteredGoblins] = useState('');
  const [goblinFormName, setgoblinFormName] = useState('Joe');
  const [goblinFormHp, setgoblinFormHp] = useState('15');
  const [goblinFormColor, setgoblinFormColor] = useState('orange');
  const [allGoblins, setallGoblins] = useState([
    {
      goblinFormName: 'Joe',
      goblinFormHp: '15',
      goblinFormColor: 'purple',
    },
  ]);
  /* 
    track: 
      allGoblins, an array of all goblins
      filteredGoblins, a second array of goblins: this one is the filtered version of the above allGoblins array
      goblinFormName, which is how we track the user input for the current name of the goblin in the form
      goblinFormHP, which is how we track the user input for the current HP of the goblin in the form
      goblinFormColor, which is how we track the user input for the current color of the goblin in the form
*/

  function submitGoblin(e) {
    e.preventDefault();

    const newGoblin = {
      name: goblinFormName,
      hp: goblinFormHp,
      color: goblinFormColor,
    };

    setallGoblins([...allGoblins, newGoblin]);

    setgoblinFormName('');
    setgoblinFormHp('');
    setgoblinFormColor('');

    // on submit, make a new goblin object with a random id, a name that comes from the form state, an hp that comes from the form state, and a color that comes from the form state

    // update the allGoblins array. Add the new goblin to the allGoblins array immutably.

    // clear out the goblin form state items by setting them to empty strings. This will cause the form to reset in the UI.
  }

  function handleDeleteGoblin(goblinFormName) {
    // find the index of the goblin in allGoblins with this id
    const indexToRemove = allGoblins.findIndex((goblin) => goblin.name === name);
    // use splice to delete the goblin object at this index
    allGoblins.splice(indexToRemove, 1);
    // update the allGoblins array immutably to this new, smaller array
    setallGoblins([...allGoblins]);
  }

  function handleFilterGoblins(search) {
    if (search) {
      const matchingGoblins = allGoblins.filter((goblin) =>
        goblin.name.toLowercase().includes(search.toLowercase())
      );

      setfilteredGoblins([...matchingGoblins]);
    } else {
      setfilteredGoblins([...allGoblins]);
    }
  }
  // use the filter method to get an array of goblins whose name includes this search argument
  // if there is a search argument, set the filtered goblins to the filtered goblins
  // if the search argument is undefined, set the filtered goblins in state to just be the array of all goblins

  return (
    <div className="App">
      <div className="current-goblin quarter">
        <Goblin
          goblin={
            {
              // goblinFormName,
              // goblinFormHp,
              // goblinFormColor,
              /* 
            use the goblin form state to make a goblin object and to display it. 
            This will let the user see the current form state 
          */
            }
          }
        />
      </div>
      <div className="goblin-filter quarter">
        Filter Goblins
        {/* note that handleFilterGoblins is defined upstairs. This is where the allGoblins array gets filtered */}
        <input onChange={(e) => handleFilterGoblins(e.target.value)} />
      </div>
      <GoblinForm
      /*
        This component takes in a ton of props! 
        Here is the list of props to pass:
          submitGoblin,
          goblinFormName, 
          setGoblinFormName,
          goblinFormColor, 
          setGoblinFormColor,
          goblinFormHP, 
          setGoblinFormHP,
        */
      />
      <GoblinList
        goblins={[]} // this takes in an array of goblins. If the filteredGoblins has a length, use that array. Otherwise, use the allGoblins array
        handleDeleteGoblin={handleDeleteGoblin} // note that the goblin list has access to the ability to delete
      />
    </div>
  );
}

export default App;
