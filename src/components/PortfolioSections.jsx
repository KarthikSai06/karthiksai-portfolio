import { Link, useParams } from 'react-router-dom';
import { projects, skills } from '../portfolio';

export function ProjectList() {
  return <section className="engineering project-index" aria-label="Project case studies">
    <h2>Selected projects</h2>
    {projects.map(p => <Link className="project-entry" key={p.slug} to={'/projects/' + p.slug}>
      <span><small>{p.area}</small>{p.name}</span><span aria-hidden="true">↗</span>
    </Link>)}
  </section>;
}

export function Skills() {
  return <section className="engineering" id="services"><h2>Technical skills</h2>
    {skills.map(([name, tools]) => <details key={name}><summary>{name}</summary><p>{tools}</p></details>)}
  </section>;
}

export function Background() {
  return <section className="engineering background">
    <div><h2>Education</h2><dl>
      <dt>Dayananda Sagar College of Engineering</dt><dd>B.E. in Computer Science &amp; Engineering · Bengaluru<br/>2023–2027</dd>
      <dt>Narayan Junior College</dt><dd>Classes 11 and 12 · Tirupati<br/>2021–2023 · 98%</dd>
      <dt>Kings EM High School</dt><dd>Class 10 · Chittoor<br/>2020–2021 · 100%</dd>
    </dl></div>
    <div><h2>Achievements</h2><dl>
      <dt>Computer Networks and Internet Protocol</dt><dd>NPTEL Elite, IIT Kharagpur · Jan–Apr 2026. Scored 75% and ranked in the top 5% of 10,927 certified candidates.</dd>
      <dt>Google Cloud Career Launchpad</dt><dd>Computing Foundations · Certificate biq3NGw8</dd>
      <dt>Introduction to Model Context Protocol</dt><dd>Anthropic · <a href="https://verify.skilljar.com/c/a2j4zwxe2oq8">View credential ↗</a></dd>
      <dt>Open models</dt><dd>Published debate-debater-1.7b on Hugging Face, with 300+ downloads.</dd>
    </dl></div>
  </section>;
}

export function Contact() {
  return <section className="engineering contact-panel" id="connect"><h2>Get in touch</h2>
    <p>I’m looking for a software developer role. For opportunities or questions about my projects, reach me by email.</p>
    <a href="mailto:kammala2006@gmail.com">kammala2006@gmail.com ↗</a></section>;
}

export function CaseStudy() {
  const { slug } = useParams();
  const p = projects.find(item => item.slug === slug);
  if (!p) return <MissingPage/>;
  return <main className="engineering case-study"><a href="/#works">← All projects</a>
    <small>{p.area}</small><h1>{p.name}</h1><p className="case-intro">{p.intro}</p>
    <p className="stack">{p.stack}</p>
    <img className="case-diagram" src={'/img/projects/' + p.slug + '.png'} alt={p.name + ' workflow diagram'}/>
    <dl>{p.details.map(([heading, detail]) => <div key={heading}><dt>{heading}</dt><dd>{detail}</dd></div>)}</dl>
    <a className="repo-link" href={p.repo}>View source on GitHub ↗</a>
  </main>;
}

export function MissingPage() {
  return <main className="engineering case-study"><h1>Page not found</h1><a href="/#works">Browse Karthik’s projects ↗</a></main>;
}
