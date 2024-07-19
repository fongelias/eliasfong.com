import { FlexBox } from "components/presentational/FlexBox/FlexBox";
import { NAV_LINK_DIRECTION, NavLink } from "components/presentational/NavLink/NavLink";
import { LandingPagePath } from "../LandingPage/LandingPage";
import './ResumePage.scss';
import { ArchitecturePagePath } from "../ArchitecturePage/ArchitecturePage";

export const ResumePagePath = "/resume";

export const ResumePage = () => {
  return <>
    <FlexBox className="ResumePage" justify="center">
      <NavLink text='see how the chat works' path={ArchitecturePagePath} direction={NAV_LINK_DIRECTION.LEFT}/>
      <NavLink text='wanna play with the chat version of this?' path={LandingPagePath} direction={NAV_LINK_DIRECTION.RIGHT}/>
      <FlexBox className="ResumePageInner" direction="column">
        <h1>Elias Fong</h1>
        <span>github.com/fongelias • fongelias@gmail.com</span>
        <h2>Experience</h2>

        <h3>Procore, Senior Software Engineer</h3>
        <h3>Full Stack Development (August2019 - Present)</h3>
        <p>Procore is a real estate and construction management software platform, supporting over $880 billion of construction</p>

        <h4>Relationships Team May 2021-Present</h4>
        <span>Neo4j, Kafka, Kafka Connect, Java, Flink, Docker, Helm, AWS, Cypher, Typescript, NestJS, GraphQL, Postgres</span>
        <ul>
          <li>Pioneered the Constellation Project: a dependency graph built from connections between postgres tables and rails model associations, in order to aid the ongoing effort to break a monolith into microservices</li>
          <li>Integrated the team’s microservice to a completely new environment, enabling testing and experimentation from external teams and subsequent adoption of the service</li>
          <li>Drove consensus through Architecture Design Documents and inter-team discussions to select and implement usage of new graph software</li>
          <li>Measured and improved performance of event processing for graph database ingestion</li>
          <li>Planned and initiated migration of legacy user services (consisting of a monolithic component and microservice) into a single microservice</li>
        </ul>

        <h4>Budgeting Team August 2019-May 2021</h4>
        <span>Java/Spring, Java/Javalin, Ruby, Rails, Typescript, React, Angular, MySQL, Postgres, Docker</span>
        <ul>
          <li>Improved the integration between the two companies' codebases by pioneering development with Procore's frontend libraries and component libraries in Honest Building's application</li>
          <li>Designed and developed two new services that integrated with Ecrion and Docusign API's</li>
          <li>Diagnosed and improved performance for the Budget Detail Report, from seconds to milliseconds</li>
        </ul>

        <h3>Honest Buildings, Software Engineer 2</h3>
        <h3>Full Stack Development (August 2018- Acquisition, August 2019)</h3>
        <span>Honest Buildings (now acquired by Procore) is a project management and procurement platform for real estate owners, managing over $1 billion in capital projects</span>
        <span>Java/Spring, Typescript, React, Angular, MySQL, Docker</span>
        <ul>
          <li>Developed multiple features from tech-specing to shipping</li>
          <li>Reduced development time and code complexity through development of a component library alongside designers and other engineers, and advocacy of the library with product management</li>
          <li>Fixed bugs, including hotfixes that involved production snapshots or cross-team coordination with dev-ops to upgrade database nodes</li>
        </ul>

        <h3>Symantec, Software Developer</h3>
        <h3>Full Stack Development (August 2017-August 2018)</h3>
        <span>Symantec is a the global leader in software security. It is #400 on the Fortune 500 List, and has approximately 13,000 global employees.</span>
        <span>Java/Spring, Python, React, AWS, Azure Analytics, Cassandra, C++</span>
        <ul>
          <li>Streamlined an interview process for hundreds of applicants with an SPA built with React on AWS</li>
          <li>Increased SRE productivity through improvements to node health testing Python framework</li>
          <li>Improved reliability of an app servicing millions of events a day by improving telemetry with Application Insights</li>
        </ul>

        <h2>Education</h2>
        <h3>Boston University</h3>
        <h3>September 2011 - May 2015</h3>
        <span>Finance Major, Biology and Chemistry Minor</span>
      </FlexBox>
    </FlexBox>
  </>
}