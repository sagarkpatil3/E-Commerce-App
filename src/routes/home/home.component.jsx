import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'smartphones',
      imageUrl: 'https://cdn.thewirecutter.com/wp-content/media/2023/09/smartphone-2048px-0778-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024',
    },
    {
      id: 2,
      title: 'laptops',
      imageUrl: 'https://specials-images.forbesimg.com/imageserve/64e4fd4a4cc20fbf5a23ba75/Best-laptops-for-college-students/960x0.png?fit=scale',
    },
    {
      id: 3,
      title: 'fragrances',
      imageUrl: 'https://wwd.com/wp-content/uploads/2022/02/Top-100-B-Inc.jpg?crop=245px%2C809px%2C1162px%2C650px&resize=1000%2C563',
    },
    {
      id: 4,
      title: 'skincare',
      imageUrl: 'https://as2.ftcdn.net/v2/jpg/02/94/36/99/1000_F_294369904_vBB6EBtlApUF2I0MX7tDm5diGrtbLUE6.jpg'},
    {
      id: 5,
      title: 'womens-dresses',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHG_fuOFXqKbdJJmDH8BFAfEb3trpPWraF-g&s',
    },
    {
      id: 6,
      title: 'mens-shirts',
      imageUrl: 'https://cdn.thewirecutter.com/wp-content/media/2022/01/buttonupshirts-2048px-DSCF0788.jpg',
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
