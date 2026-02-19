import { BoxSvg, RegisterSvg, TrolleySvg, TruckSvg } from '../types';

const styles = {
  icon: { marginBottom: 28 },
};

export const data = [
  {
    index: 0,
    headline: 'Welcome to Grocerya',
    text: 'Get your grocery needs at your service within a minute. Fast, efficient, and convenient',
    Img: <TrolleySvg style={styles.icon} />,
  },
  {
    index: 1,
    headline: 'Get any packages delivered',
    text: 'Get all your items conveniently, ensuring everything you need arrives without any hassle.',
    Img: <TruckSvg style={styles.icon} />,
  },
  {
    index: 2,
    Img: <BoxSvg style={styles.icon} />,
    headline: 'Protected package delivery',
    text: 'Your groceries are carefully packaged to ensure they arrive safely and in perfect condition',
  },
  {
    index: 3,
    Img: <RegisterSvg style={styles.icon} />,
    headline: 'Best price guaranteed',
    text: 'Allowing you to stock up on your favorite items while staying withing your budget',
  },
];
