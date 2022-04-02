import CategoryItem from "./components/category-item/category-item.component";
import "./categories.styles.scss";

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

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default App;
