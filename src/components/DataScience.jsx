import React from 'react';
import Image4 from '../dataScience_images/dsforpython.png';
import Image5 from '../dataScience_images/ml.png';
import Image6 from '../dataScience_images/dvwr.png';


const DataScience = () => {
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

  return (
    <div>
      <h1>Data Science Courses</h1>
      <hr></hr>
      <div className="row">
        {Data_Science_course_list.map(course => (
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

export default DataScience;
