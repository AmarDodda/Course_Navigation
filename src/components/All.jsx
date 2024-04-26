import React from 'react';
import Image1 from '../fullStack_images/react.png';
import Image2 from '../fullStack_images/angular.png';
import Image3 from '../fullStack_images/vue.png';
import Image4 from '../dataScience_images/dsforpython.png';
import Image5 from '../dataScience_images/ml.png';
import Image6 from '../dataScience_images/dvwr.png';
import Image7 from '../cyberSecurity_images/eh.png';
import Image8 from '../cyberSecurity_images/ns.png';
import Image9 from '../cyberSecurity_images/cti.png';


const AllCourses = ({ courses }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {courses.map((course, index) => (
        <div key={index} className="col-md-4">
          <div className="card mb-8 h-100">
          <img src={course.image} className="card-img-top" alt={course.title} />

            <div className="card-body">
              <h5 className="card-title">{course.title}</h5>
              <p className="card-text">{course.description}</p>
              <p className="card-text">Price: ${course.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const All = () => {
  const Front_end_course_list = [
    {
      id: 1,
      title: "React",
      description: "React is a JavaScript library for building user interfaces.",
      price: 100,
      image:Image1
    },
    {
      id: 2,
      title: "Angular",
      description: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
      price: 150,
      image:Image2
    },
    {
      id: 3,
      title: "Vue",
      description: "Vue is a progressive framework for building user interfaces.",
      price: 200,
      image:Image3
    }
  ];

  const Data_Science_course_list = [
    {
      id: 4,
      title: "Python for Data Science",
      description: "Learn Python programming for data analysis and machine learning.",
      price: 120,
      image:Image4
    },
    {
      id: 5,
      title: "Machine Learning",
      description: "Master the concepts and techniques of machine learning.",
      price: 180,
      image:Image5
    },
    {
      id: 6,
      title: "Data Visualization with R",
      description: "Explore data visualization techniques using R programming language.",
      price: 150,
      image:Image6
    }
  ];

  const Cyber_Security_course_list = [
    {
      id: 7,
      title: "Ethical Hacking",
      description: "Learn the fundamentals of ethical hacking and penetration testing.",
      price: 200,
      image:Image7
    },
    {
      id: 8,
      title: "Network Security",
      description: "Understand the principles and practices of securing computer networks.",
      price: 160,
      image:Image8
    },
    {
      id: 9,
      title: "Cyber Threat Intelligence",
      description: "Explore techniques for identifying and analyzing cyber threats.",
      price: 220,
      image:Image9
    }
  ];

  const allCourses = [
    ...Front_end_course_list,
    ...Data_Science_course_list,
    ...Cyber_Security_course_list
  ];// spread operator is used in combining multiple arrays to a single array allCourses

  return (
    <div>
      <h1>All Courses</h1>
      <AllCourses courses={allCourses} />
    </div>
  );
};

export default All;
