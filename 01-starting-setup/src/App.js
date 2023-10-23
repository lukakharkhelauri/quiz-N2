import keyConceptsImage from './assets/images/key-concepts.png';
import componentsImage from './assets/images/components.png';
import stateImage from './assets/images/state.png';
import eventsImage from './assets/images/events.png';


const concepts = [
  {
    title: 'Components',
    image: componentsImage,
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  },
];





// const Cards = ({ concepts }) => (
//   <ul id="concepts">
//     {concepts.map((each) => (
//       <li className="concept">
//         <img src={each.image} alt={each.title} />
//         <h2>{each.title}</h2>
//         <p>{each.description}</p>
//       </li>
//     ))}
//   </ul>
// );

// export default Cards;

export function Cards(props) {
  return (
    <div className='concept-item'>
      <div className='concept'>
        <img src={props.image} alt="TODO:TITLE" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <header>
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
  
      <ul id="concepts">
    <Cards
      title={concepts[0].title}
      image={concepts[0].image}
      description={concepts[0].description} 
    />
    <Cards
      title={concepts[1].title}
      image={concepts[1].image}
      description={concepts[1].description} 
    />
    <Cards
      title={concepts[2].title} 
      image={concepts[2].image} 
      description={concepts[2].description} 
    />
  </ul>
  
    </div>
  );
  }

export default App;


