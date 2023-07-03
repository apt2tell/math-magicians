import React from 'react';
import './pages.css';

const Home = () => (
  <div className="home-contianer">
    <div className="home-content">
      <h2 className="home-welcome">Welcome to our page!</h2>
      <p className="home-text">
        Mathematics is a discipline that has shaped the very essence of human understanding.
        It has its roots in the ancient civilizations of Mesopotamia, Egypt, and the Indus Valley,
        where people needed to count, measure, and understand the patterns and
        phenomena of the world around them.
        The Sumerians of Mesopotamia devised a numeral system based
        on the concept of place value,
        with a base of 60. This system gave rise to the measurement of time, angles,
        and the division of a circle into 360 degrees.
        The ancient Greeks elevated mathematics to new heights.
        Pythagoras introduced the concept of numbers having both
        quantitative and qualitative properties.
        His theorem, relating the lengths of the sides of a right-angled triangle,
        still stands as one of the fundamental principles of geometry.

      </p>
      <p className="home-text">
        Euclid compiled his magnum opus, Elements,
        which laid down the foundations of rigorous deductive reasoning in mathematics.
        Euclidean geometry provided a framework for understanding spatial
        relationships, shapes, and proofs,
        which would become a cornerstone of mathematical study for centuries to come.
        In the 17th century, the brilliant mathematician Isaac Newton developed calculus,
        a mathematical framework that enabled the study of change and motion. Newtons ideas,
        along with the contributions of other mathematicians like Gottfried Leibniz,
        paved the way for modern physics and engineering.
        Mathematics continues to evolve and expand its reach. It underpins the fields of physics,
        economics, cryptography, and many others.
        It is a powerful tool that allows us to understand the world around us and to solve problems
        in ways that would not be possible without it.
      </p>
    </div>
  </div>
);

export default Home;
