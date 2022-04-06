import Directory from "./components/directory/directory.component";
import './App.css';


const App = () => {
  const categories = [
    {
      id: 1,
      title: "Firenze",
      imageUrl: "/assets/Firenze.jpg",
    },
    {
      id: 2,
      title: "Lakme",
      imageUrl: "/assets/Lakme.jpg",
    },
    {
      id: 3,
      title: "BBCOS",
      imageUrl: "/assets/BBCOS.png",
    },
    {
      id: 4,
      title: "Sorme",
      imageUrl: "/assets/Sorme.jpg",
    },
    {
      id: 5,
      title: "Headshot",
      imageUrl: "/assets/No_image_available.png",
    },
  ];

  return <Directory categories={categories} />;
};

export default App;
