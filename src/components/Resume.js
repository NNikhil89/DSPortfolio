import React from 'react';

function Resume() {
  return (
    <div className="container mx-auto p-6 max-w-4xl text-sm md:text-base">
      {/* Header */}
      <section className="text-center py-12 animate-fadeInUp rounded-xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold">Nikhil Nyamatabad</h1>
        <p className="mt-4 text-base md:text-lg">
          AI/ML Engineer & Data Scientist | 12+ Years of Experience
        </p>
        <p className="text-base md:text-lg">
          MS in Artificial Intelligence (Expected 2025), Yeshiva University
        </p>
      </section>

      {/* Professional Summary */}
      <section className="animate-fadeIn delay-200 p-6 md:p-10 rounded-xl shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-4 border-b pb-2 border-gray-300">Professional Summary</h2>
        <p>
          A seasoned AI/ML Specialist and Data Scientist with over 12 years of
          experience in developing innovative solutions across various industries
          such as banking, finance, healthcare, and retail. I specialize in
          building scalable machine learning models, data pipelines, and delivering
          AI-driven business solutions that have significantly increased operational
          efficiency and business growth.
        </p>
      </section>

      {/* Work Experience */}
      <section className="py-8 animate-fadeInLeft delay-300 rounded-xl shadow-lg p-6 md:p-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4 border-b pb-2 border-gray-300">Work Experience</h2>

        {/* Accenture */}
        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-bold">Accenture</h3>
          <p className='italic text-gray-800'>Application Development Team Lead | Jan 2016 - Jan 2024</p>
          <ul className="space-y-3 mt-2">
            <li className="flex items-start">
                <span className="text-cyan-600 mr-2 mt-1">•</span>
                <p>Led the development of a pricing model for custom-made hearing devices,
                improving pricing accuracy by 30% and reducing manual pricing time by
                40%.
                </p> 
            </li>
            <li className="flex items-start">
                <span className="text-cyan-600 mr-2 mt-1">•</span>
                <p>Spearheaded a customer churn prediction model with an accuracy of 85%,
                resulting in a 20% increase in customer retention.
                </p> 
            </li>
            <li className="flex items-start">
                <span className="text-cyan-600 mr-2 mt-1">•</span>
                <p>Developed and deployed defect detection models using computer vision,
              reducing defective product returns by 25% and saving over 200+ hours of
              manual inspection per month.
                </p> 
            </li>
            <li className="flex items-start">
                <span className="text-cyan-600 mr-2 mt-1">•</span>
                <p>Designed AI-powered insurance and payment solutions using React, Next.js, WebSockets and PubSubs enabling business
              operations in over 1000 stores, significantly increasing profit margins
              and user satisfaction.
                </p> 
            </li>  
            <li className="flex items-start">
                <span className="text-cyan-600 mr-2 mt-1">•</span>
                <p>Recognized for exemplary performance with client appreciation and awarded the prestigious Orange Award for Distinctive Contribution.
                </p> 
            </li>             
          </ul>
        </div>

        {/* Cognizant */}
        <div className="mb-6 animate-fadeInLeft delay-400">
          <h3 className="text-lg md:text-xl font-bold">Cognizant</h3>
          <p className="text-gray-800 italic">Associate | August 2011 - Jan 2016</p>
          <ul className="space-y-3 mt-2">
            <li className="flex items-start">
                    <span className="text-cyan-600 mr-2 mt-1">•</span>
                    <p>Developed both WinForms and web-based applications using .NET technologies, catering to the Banking, Financial, and Insurance sectors. This work encompassed robust application design, development, and deployment.                    
                    </p> 
                </li>
                <li className="flex items-start">
                    <span className="text-cyan-600 mr-2 mt-1">•</span>
                    <p>Actively involved in all stages of the Software Development Life Cycle (SDLC), from requirements gathering to deployment, while adhering to Agile methodologies to ensure iterative progress and timely delivery.
                    </p> 
                </li>
                <li className="flex items-start">
                    <span className="text-cyan-600 mr-2 mt-1">•</span>
                    <p>Worked extensively on AX2012 ERP, focusing on managing and optimizing operations for large-scale datasets, including customer, product, and inventory information.
                    </p> 
                </li>  
                <li className="flex items-start">
                    <span className="text-cyan-600 mr-2 mt-1">•</span>
                    <p>Leveraged SQL Server and Oracle Databases to maintain and handle over 10 million records, ensuring data integrity, performance, and scalability across critical business processes.
                    </p> 
                </li> 
                <li className="flex items-start">
                    <span className="text-cyan-600 mr-2 mt-1">•</span>
                    <p>Earned client recognition through the prestigious Kudos Award for outstanding contribution to project success and delivery excellence.
                    </p> 
                </li>                          
          </ul>
        </div>
      </section>                            

        {/* Education */}
        <section className="py-8 animate-fadeInLeft delay-300 rounded-xl shadow-lg p-6 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold mb-4 border-b pb-2 border-gray-300">Education</h2>
            <div className="mb-6">
                <h3 className="text-lg md:text-xl font-semibold">Yeshiva University</h3>
                <p>
                    Master of Science in Artificial Intelligence | 2024 - Present (Expected
                    2025)
                </p>
            </div>
            <div className="mb-6 animate-fadeInRight delay-600">
            <h3 className="text-lg md:text-xl font-semibold">
                Osmania University
            </h3>
            <p>
                Bachelor of Engineering in Computer Science | 2006 - 2010
            </p>
            </div>
        </section>                

      {/* Technical Skills */}
        <div className="p-6 md:p-10 rounded-lg shadow-lg">
            {/* Technical Skills */}
            <h2 className="text-xl md:text-2xl font-bold border-b pb-2 border-gray-300 mb-6">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Machine Learning</h3>
                        <ul className="space-y-1">
                            <li className="flex items-start">
                                <span className="text-cyan-600 mr-2 mt-1">•</span>
                                <p>Generative AI, LLMs, Computer Vision, NLP</p>                                 
                            </li> 
                            <li className="flex items-start">
                                <span className="text-cyan-600 mr-2 mt-1">•</span>
                                <p>Transformers, RNN, CNN, LSTM, GRU, DL</p>                                 
                            </li>                             
                            <li className="flex items-start">
                                <span className="text-cyan-600 mr-2 mt-1">•</span>
                                <p>Python, PyTorch, Tensorflow, MLOps</p>                                 
                            </li>  
                            <li className="flex items-start">
                                <span className="text-cyan-600 mr-2 mt-1">•</span>
                                <p>AWS, Azure, Docker, Kubernetes, DevOps</p>                                 
                            </li>                                         
                        </ul>
                </div>
                <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Web Development</h3>    
                    <ul className="space-y-1">
                        <li className="flex items-start">
                            <span className="text-cyan-600 mr-2 mt-1">•</span>
                            <p>React.js, Next.js, Vue.js ASP.NET Core</p>                                 
                        </li> 
                        <li className="flex items-start">
                            <span className="text-cyan-600 mr-2 mt-1">•</span>
                            <p>JavaScript, TypeScript, Node.js, Go, C#, Java</p>                                 
                        </li>                             
                        <li className="flex items-start">
                            <span className="text-cyan-600 mr-2 mt-1">•</span>
                            <p>WebAPI, WebSockets, PubSubs, Kafka, Redis</p>                                 
                        </li>  
                        <li className="flex items-start">
                            <span className="text-cyan-600 mr-2 mt-1">•</span>
                            <p>HTML, Tailwind, MUI, CSS, Hono</p>                                 
                        </li>  
                        <li className="flex items-start">
                            <span className="text-cyan-600 mr-2 mt-1">•</span>
                            <p>GraphQL, Trpc, TurboRepo, Hasura, Grafana</p>                                 
                        </li>                                         
                    </ul>                        
                </div>
                <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">ERP</h3>
                    <ul className="space-y-1">
                        <li className="flex items-start">
                            <span className="text-cyan-600 mr-2 mt-1">•</span>
                            <p>Dynamics 365 Finance & Operations, Power Apps</p>                                 
                        </li> 
                        <li className="flex items-start">
                            <span className="text-cyan-600 mr-2 mt-1">•</span>
                            <p>CRM, Business Central, Retail POS</p>                                 
                        </li>                             
                        <li className="flex items-start">
                            <span className="text-cyan-600 mr-2 mt-1">•</span>
                            <p>AX 2012, X++, SSRS, Lasernet, PowerBI</p>                                 
                        </li>                                                                 
                    </ul>                           
                </div>
                <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">Database</h3>  
                    <ul className="space-y-1">
                        <li className="flex items-start">
                            <span className="text-cyan-600 mr-2 mt-1">•</span>
                            <p>SQL Server, Oracle,PostGres, MySql</p>                                 
                        </li> 
                        <li className="flex items-start">
                            <span className="text-cyan-600 mr-2 mt-1">•</span>
                            <p>MongoDB, Cassandra, NoSQL</p>                                 
                        </li>                             
                        <li className="flex items-start">
                            <span className="text-cyan-600 mr-2 mt-1">•</span>
                            <p>Amazon S3, Spark</p>                                 
                        </li>                                                                 
                    </ul>                              
                </div>
            </div>
        </div>

        {/* Certification */}
      <section className="py-8 animate-fadeInLeft delay-300 rounded-xl shadow-lg p-6 md:p-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4 border-b pb-2 border-gray-300">Certification</h2>                                 
            <ul className="space-y-3 mt-2">
                <li className="flex items-start">
                    <span className="text-cyan-600 mr-2 mt-1">•</span>
                    <p><span className='font-semibold'>Machine Learning</span> from Coursera
                    </p> 
                </li>
                <li className="flex items-start">
                    <span className="text-cyan-600 mr-2 mt-1">•</span>
                    <p><span className='font-semibold'>PL200</span> - Power Apps from Microsoft 2021
                    </p> 
                </li>
                <li className="flex items-start">
                    <span className="text-cyan-600 mr-2 mt-1">•</span>
                    <p><span className='font-semibold'>MB300</span>, Dynamics F&O from Microsoft - 2019
                    </p> 
                </li>
                <li className="flex items-start">
                    <span className="text-cyan-600 mr-2 mt-1">•</span>
                    <p><span className='font-semibold'>AZ900</span>, Microsoft Azure from Microsoft - 2017
                    </p> 
                </li>
            </ul>
        </section>
    </div>
  );
}

export default Resume;
