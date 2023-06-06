import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Col, Row } from "react-bootstrap";
export default function Page({ id, title, style, children, image }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };
  useEffect(() => {
    // console.log(isInView);
  }, [isInView]);

  return (
    <motion.section
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate="visible"
      id={id}
    >
      <Row
        className="content-body"
        xs={1}
        md={2}
        style={{
          transform: isInView ? "none" : "translateY(30px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s ease-in-out 0.4s",
        }}
      >
        <Col className={` content-description ${style}`}>
          <h1>
           {title}
          </h1>
          <motion.div
          className="content-body">
            {children}
          </motion.div>
        </Col>

        <Col className="content-container">
          <img className="content-img" src={image} alt="" />
        </Col>
      </Row>
    </motion.section>
  );
}
