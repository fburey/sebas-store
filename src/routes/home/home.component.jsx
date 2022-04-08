import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

const Home = () => {
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
    <div>
      <Directory categories={categories} />;
    </div>
  );
};

export default Home;
