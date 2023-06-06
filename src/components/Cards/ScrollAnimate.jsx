import { motion } from "framer-motion";
import './ScrollAnimate.css'
import Card from 'react-bootstrap/Card';
import pic from '../../assets/bags/10.jpg'
export default function ScrollAnimate({ image, hueA, hueB }) {
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 0.8,
      },
    },
  };
 

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.9 }}
    >
      <div className="splash"  />
      <motion.div className="card" variants={cardVariants}>
      <Card >
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
      </motion.div>
    </motion.div>
  );
}
