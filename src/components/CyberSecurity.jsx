import React from 'react';
import Image7 from '../cyberSecurity_images/eh.png';
import Image8 from '../cyberSecurity_images/ns.png';
import Image9 from '../cyberSecurity_images/cti.png';

const CyberSecurity = () => {
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

  return (
    <div>
      <h1>Data Science Courses</h1>
      <hr></hr>
      <div className="row">
        {Cyber_Security_course_list.map(course => (
          <div key={course.id} className="col-lg-4">
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

export default CyberSecurity;
