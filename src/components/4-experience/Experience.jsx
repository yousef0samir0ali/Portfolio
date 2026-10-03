import { AnimatedSection } from '../../assets/animation/animation';
import '../4-education/eduction.css';

const experiences = [
  {
    company: 'ITQAN',
    role: 'Front-End Developer',
    location: 'Saudi Arabia (Remote)',
    date: 'Jan 2025 - Present',
    points: [
      'Developed scalable ERPs, dashboards, and web apps using React, Next.js, TypeScript, Tailwind, MUI, and shadcn/ui.',
      'Designed reusable UI components and customized dashboard templates to accelerate development.',
      'Integrated REST APIs, auth, RBAC, Pusher real-time chat/notifications, and Stripe payments.',
      'Built multilingual (i18n), multi-currency applications with responsive, cross-browser UIs.',
      'Boosted performance via code splitting, lazy loading, optimization, and state management.',
      'Deployed Next.js/React apps on cPanel and collaborated with Agile teams for high-quality delivery.',
    ],
  },
  {
    company: 'View Programming Company',
    role: 'Front-End Developer',
    location: 'Syria (Remote)',
    date: 'Mar 2023 - Dec 2024',
    points: [
      'Developed responsive e-commerce sites and web apps using React, Next.js, TypeScript, and Tailwind CSS.',
      'Built key e-commerce features: product catalogs, search, filtering, cart, auth, and secure checkout.',
      'Integrated REST APIs, payment gateways, and Firebase real-time notifications to enhance UX.',
      'Optimized performance using reusable components, code splitting, lazy loading, and Redux Toolkit.',
      'Collaborated with designers and backend developers in Agile teams to deliver quality web apps.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Front-End Developer',
    location: 'Remote',
    date: 'Jan 2022 - Mar 2023',
    points: [
      'Delivered 10+ responsive web applications using React.js, Next.js, TypeScript, and Tailwind CSS.',
      'Collaborated directly with clients to translate business requirements into scalable frontend solutions.',
      'Integrated RESTful APIs and optimized performance to ensure cross-browser compatibility.',
    ],
  },
];

export default function Experience() {
  return (
    <AnimatedSection>
      <div className="boxes-container single">
        <div className="box-container-wrapper">
          <div className="box-container">
            {experiences.map((exp) => (
              <div className="box" key={exp.company}>
                <div className="box-year">
                  <span className="icon-calendar"></span>
                  {exp.date}
                </div>
                <h4 className="box-title">
                  {exp.company} || {exp.role}
                </h4>
                <div className="box-address">{exp.location}</div>
                <p className="box-description">
                  {exp.points.map((point) => (
                    <span key={point}>
                      • {point}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
