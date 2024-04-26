import React from 'react';
import Image1 from '../fullStack_images/react.png';
import Image2 from '../fullStack_images/angular.png';
import Image3 from '../fullStack_images/vue.png';

const FullStackWebDevelopment = () => {
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
      price: 180,
      image:Image3  
    }
  ];

  return (
    <div>
      <h1>Full Stack Web Development Courses</h1>
      <hr></hr>
      <div className="row">
        {Front_end_course_list.map(course => (
          <div key={course.id} className="col-md-4">
            <div className="card mb-4 h-100">
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
    </div>
  );
};

export default FullStackWebDevelopment;
