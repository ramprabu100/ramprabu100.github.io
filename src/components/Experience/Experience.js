import React from 'react';

const Experience = () => {
  return (
    <section className="experience">
      <h2 className="experience__title">Experience</h2>
      <div className="experience__item">
        <h3 className="experience__item-title">
          Senior Software Engineer, Demandbase
        </h3>
        <p className="experience__item-duration">Nov 2021 - Present</p>
        <p className="experience__item-details">
          Managing Sales Intelligence platform.
        </p>
        <ul className="experience__item-responsibilities">
          <li>Responsible for integration of different CRMs and Demandbase services.</li>
          <li>Played a Role of scrum master and release manager for six months.</li>
          <li>Designed & Developed public API gateway for different Business verticals</li>
          <li>Automated Performance testing for search, fetch APIS using Jenkins and Jmeter</li>
        </ul>
        <p className="experience__item-skills">Skills: Java, Spring Boot, Scala, ZIO, My sql, Elasticsearch</p>
      </div>
      <div className="experience__item">
        <h3 className="experience__item-title">
          Senior Software Engineer, Whitehat Jr
        </h3>
        <p className="experience__item-duration">Mar 2021 - Oct 2021</p>
        <p className="experience__item-details">
          Managing Payments and Orders for customers.
        </p>
        <ul className="experience__item-responsibilities">
          <li>Managing and deploying payments service module.</li>
          <li>Worked in java infra structure and module designing for microservices.</li>
          <li>Responsible for integration of different payment gateways.</li>
        </ul>
        <p className="experience__item-skills">Skills: Java, Node JS, Spring Repository, Spring Boot, SQS, Redis, MySQL</p>
      </div>
      <div className="experience__item">
        <h3 className="experience__item-title">
          Software Engineer, Attivo Networks
        </h3>
        <p className="experience__item-duration">Dec 2019 - Mar 2021</p>
        <p className="experience__item-details">
          Monitoring the various cloud services and notifying the cloud customers
          on malicious activities on production environment using deceptive cloud services(decoys).
        </p>
        <ul className="experience__item-responsibilities">
          <li>Managing and deploying the deceptive cloud services like cosmos DB, s3, azure storage, etc.</li>
          <li>Developed Lambdas to cloud resources and forwarding events to other micro services.</li>
          <li>Developed License management system for customer using Sale force integration.</li>
          <li>Worked on application deployment, Auto scaling & Cloud formation template.</li>
        </ul>
        </div>
        </section>);
}

export default Experience;
