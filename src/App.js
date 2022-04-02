import './categories.styles.scss';

const App = () => {

  const categories = [
    {
      id:1,
      title:'Firenze'
    },
    {
      id:2,
      title:'Lakme'
    },
    {
      id:3,
      title:'BBCOS'
    },
    {
      id:4,
      title:'Sorme'
    },
    {
      id:5,
      title:'Headshot'
    }
  ]

  return (
    <div className="categories-container">
      {categories.map(({id,title}) => (
          <div key={id} className="category-container">
          <div className="background-image"></div>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Compra ahora</p>
          </div>
          </div>
        ))}
      </div>
  );
}

export default App;
