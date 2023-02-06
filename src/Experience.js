import React from "react";

const Experience = () => {
  return (
    <div class="body">
      <h2>Experience</h2>
      <div class="contentStyle">
        <ul>
          
          <li>
            <h3>NetFore Systems Inc.</h3>
              <p>
                Intermediate Software Developer | Sep 2020 - Current | Ottawa
              </p>
            <ul>
              <li>
                Led the development and deployment of multilingual Intelligent
                Virtual Agents (IVAs); AI-powered voice and chatbot solutions
                for enterprise clients, serving over 100,000 daily active users,
                with high efficiency.
              </li>
              <li>
                Improved real-time interactions by fine-tuning and optimizing
                the NLP engine, resulting in a 19% reduction in failure rates,
                significant cost savings for the organization, and a marked
                increase in customer satisfaction.
              </li>
              <li>
                Participated in full SDLC, including customer requirements
                gathering, addressing UAT and production support issues, and
                utilizing Jira for project management and progress tracking in
                an agile environment.
              </li>
              <li>
                Delivered projects on time and within budget, while mentoring
                junior developers to improve their skills and knowledge.
              </li>
            </ul>
          </li>

          <br />

          <li>
            <h3>Oculus VR by Facebook</h3>
            <div class="courier">
              <p>Technical Advisor | Jan 2020 – Aug 2020 | Toronto</p>
            </div>
            <ul>
              <li>
                Identified, researched, and resolved questions and issues raised
                by Oculus external users, while consistently maintaining an
                average customer satisfaction rate of 95%.
              </li>
              <li>
                Collaborated with cross-functional teams to enhance product
                usability and optimize the user experience.
              </li>
            </ul>
          </li>

          <br />

          <li>
            <h3>NeST Technologies</h3>
            <div class="courier">
              <p>Software Developer | Sep 2017 – Sep 2018 | Kochi, India</p>
            </div>
            <ul>
              <li>
                Contributed to the development of web applications using HTML,
                CSS, JavaScript, Java, MySQL, and Git.
              </li>
              <li>
                Resolved production issues and improvements in existing software
                and performed code reviews and unit testing.
              </li>
              <li>
                Developed a highly available NFS utilizing Java, Swing, AES,
                2FA, and complex keys, resulting in a 54% reduction in server
                workload.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;

// import React from 'react';

// const Experience = () => (
//   <section>
//     <h2>Work Experience</h2>
//     <div class="body">
//     <ul>
//       <li>
//         NetFore Systems Inc.
//         <ul>
//           <li>Intermediate Software Developer, Sep 2020 - Current, Ottawa</li>
//           <li>
//             Led the development and deployment of multilingual Intelligent Virtual Agents (IVAs); AI-powered voice and chatbot solutions for enterprise clients, serving over 100,000 daily active users, with high efficiency.
//           </li>
//           <li>
//             Improved real-time interactions by fine-tuning and optimizing the NLP engine, resulting in a 19% reduction in failure rates, significant cost savings for the organization, and a marked increase in customer satisfaction.
//           </li>
//           <li>
//             Participated in full SDLC, including customer requirements gathering, addressing UAT and production support issues, and utilizing Jira for project management and progress tracking in an agile environment.
//           </li>
//           <li>
//             Delivered projects on time and within budget, while mentoring junior developers and contributing to technical design and code reviews.
//           </li>
//         </ul>
//       </li>
//     </ul>
//     </div>
//   </section>
// );

// export default Experience;

// import React from "react";
// import { useInView } from "react-intersection-observer";
// import { motion, useAnimation } from "framer-motion";
// import "./App.css";

// const Experience = () => {
//   const [experienceRef, inView] = useInView({
//     triggerOnce: true,
//     rootMargin: "100px 0px",
//   });
//   const experienceControls = useAnimation();
//   const experienceVariants = {
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         damping: 15,
//       },
//     },
//     hidden: {
//       opacity: 0,
//       y: 50,
//     },
//   };

//   React.useEffect(() => {
//     if (inView) {
//       experienceControls.start("visible");
//     }
//   }, [experienceControls, inView]);

//   return (
//     <section ref={experienceRef} className="experience">
//       <motion.h2
//         className="experience-title"
//         variants={experienceVariants}
//         animate={experienceControls}
//       >
//         Experience
//       </motion.h2>
//       <div className="experience-timeline">
//         <div className="experience-item">
//           <div className="hexagonal-symbol"></div>
//           <div className="experience-info">
//             <motion.h3
//               variants={experienceVariants}
//               animate={experienceControls}
//             >
//               NetFore Systems Inc.
//             </motion.h3>
//             <motion.p
//               variants={experienceVariants}
//               animate={experienceControls}
//             >
//               Intermediate Software Developer <br />
//               Sep 2020 - Current, Ottawa
//             </motion.p>
//             <motion.ul
//               variants={experienceVariants}
//               animate={experienceControls}
//             >
//               <li>
//               •	Led the development and deployment of multilingual Intelligent Virtual Agents (IVAs); AI-powered voice and chatbot solutions for enterprise clients, serving over 100,000 daily active users, with high efficiency..
//               </li>
//               <li>
//               •	Improved real-time interactions by fine-tuning and optimizing the NLP engine, resulting in a 19% reduction in failure rates, significant cost savings for the organization, and a marked increase in customer satisfaction.
//               </li>

//               <li>
//               •	Participated in full SDLC, including customer requirements gathering, addressing UAT and production support issues, and utilizing Jira for project management and progress tracking in an agile environment.
//               </li>
//               <li>
//               •	Delivered projects on time and within budget, while mentoring junior developers to improve their skills and knowledge.
//               </li>
//             </motion.ul>
//           </div>
//         </div>
//       </div>

//       <div className="experience-timeline">
//         <div className="experience-item">
//           <div className="hexagonal-symbol"></div>
//           <div className="experience-info">
//             <motion.h3
//               variants={experienceVariants}
//               animate={experienceControls}
//             >
//               Oculus VR by Facebook
//             </motion.h3>
//             <motion.p
//               variants={experienceVariants}
//               animate={experienceControls}
//             >
//               Technical Advisor	 <br />
//               Jan 2020 – Aug 2020, Toronto
//             </motion.p>
//             <motion.ul
//               variants={experienceVariants}
//               animate={experienceControls}
//             >
//               <li>
//               •	Identified, researched, and resolved questions and issues raised by Oculus external users, while consistently maintaining an average customer satisfaction rate of 95%.
//               </li>
//               <li>
//               •	Collaborated with cross-functional teams to enhance product usability and optimize the user experience.
//               </li>
//             </motion.ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
