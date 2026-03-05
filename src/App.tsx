import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Menu, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Technical Program Manager with experience driving execution across 2+ concurrent engineering programs, coordinating timelines, vendor deliverables, and budget inputs to deliver 100% on-time launch readiness. Strengthened program governance through standardized dashboards, automated tracking workflows, recurring status cadences, and decision logs, reducing status reporting turnaround time by 30% and improving milestone, risk, and readiness visibility. Directed data-driven vendor and architecture evaluations for $1M+ initiatives using cost, performance, and risk frameworks, improving selection accuracy, enabling 18% lower estimated outsourcing costs, and delivering 25% higher estimated operational efficiency with 40% lower estimated operating costs.";

  const experience = [
    {
      company: "Artiligent Solutions Pvt Ltd",
      role: "Technical Program & Operations Analyst",
      location: "India",
      dates: "Nov. 2021 – Feb. 2023",
      highlights: [
        "Directed execution governance for 2 concurrent hardware product launch programs, aligning program schedules, vendor commitments, cost baselines, and cross-vendor dependencies across 5+ external partners, delivering launches on schedule against all readiness criteria.",
        "Compressed program reporting cycle time by 30% by deploying automated dashboards, standardized status cadences, and structured decision logs, strengthening milestone visibility and accelerating executive launch reviews.",
        "Governed RAID (risks, assumptions, issues, dependencies) frameworks and stakeholder communications, driving cross-functional alignment and preventing schedule variance across critical path deliverables."
      ]
    },
    {
      company: "Power Electronical Pvt Ltd",
      role: "Engineering Program Coordinator (Power Electronics & High-Voltage Systems)",
      location: "India",
      dates: "Jan. 2021 – Oct. 2021",
      highlights: [
        "Maintained validation and test execution trackers for high-voltage and power system workflows, ensuring 100% test records, issue logs, and readiness documentation remained audit-ready and stakeholder-visible.",
        "Coordinated execution across power electronics and high-voltage projects by aligning engineering tasks, supplier inputs, and technical documentation across 3+ cross-functional teams, improving milestone schedule adherence across tracked workstreams."
      ]
    }
  ];

  const projects = [
    {
      title: "Autonomous Delivery Systems Platform",
      subtitle: "Technical Program Manager (USC)",
      category: "Engineering Program Management",
      introduction: "Led end-to-end program planning and architecture evaluation for an autonomous delivery systems platform, driving execution readiness and stakeholder alignment.",
      problem: "Need to evaluate multiple system architectures and deployment scenarios to select optimal configuration balancing cost, performance, and operational efficiency.",
      objective: "Evaluate system architectures using cost/performance analysis and define end-to-end program milestones to secure stakeholder approval and launch readiness.",
      methodology: [
        "Evaluated 3+ system architectures and deployment scenarios using cost/performance analysis frameworks.",
        "Defined end-to-end program milestones, validation checkpoints, and readiness gates across the design lifecycle.",
        "Conducted stakeholder alignment sessions to secure approval of execution roadmap and launch criteria."
      ],
      results: [
        "Selected target configuration that improved estimated operational efficiency by 25%.",
        "Reduced estimated operating costs by 40% through optimized architecture selection.",
        "Secured 100% stakeholder approval of execution roadmap and launch criteria."
      ],
      conclusion: "Demonstrated expertise in technical program management, architecture evaluation, and stakeholder-driven execution planning for complex engineering initiatives."
    },
    {
      title: "Multi-Vendor Platform Implementation Program",
      subtitle: "Technical Program Manager (USC)",
      category: "Vendor & Supply Chain Coordination",
      introduction: "Directed execution planning for a $1M+ platform initiative, coordinating vendor evaluation and selection to optimize outsourcing costs and implementation readiness.",
      problem: "Complex vendor landscape with multiple options requiring structured evaluation to improve selection accuracy and reduce projected outsourcing costs.",
      objective: "Align scope, budget, timeline, and implementation risks across vendor options while establishing implementation readiness for selected vendor.",
      methodology: [
        "Directed execution planning for $1M+ platform initiative across 5 vendor options.",
        "Built weighted vendor evaluation and technical scoring framework across capability and risk metrics.",
        "Aligned scope, budget, timeline, and implementation risks to improve selection accuracy."
      ],
      results: [
        "Improved selection accuracy and lowered projected outsourcing costs by 18%.",
        "Narrowed solutions from 5 to 1 using structured evaluation framework.",
        "Established implementation readiness for selected vendor."
      ],
      conclusion: "Showcased ability to drive data-driven vendor evaluations and coordinate multi-stakeholder platform implementations for large-scale initiatives."
    }
  ];

  const skillCategories = [
    {
      icon: Target,
      title: 'Technical Program Management',
      skills: ['Program scheduling', 'Milestone planning', 'Execution tracking', 'Cross-functional coordination', 'RAID tracking', 'Blocker management', 'Change control']
    },
    {
      icon: TrendingUp,
      title: 'Engineering & Validation Support',
      skills: ['Design lifecycle support', 'Validation/test tracking', 'Requirements coordination', 'Technical documentation management', 'Issue log maintenance']
    },
    {
      icon: Users,
      title: 'Analytics & Reporting',
      skills: ['Program dashboards', 'Status reporting', 'KPI tracking', 'Cost modeling', 'Scenario analysis', 'Decision frameworks']
    },
    {
      icon: Lightbulb,
      title: 'Vendor & Supply Chain',
      skills: ['Supplier coordination', 'Vendor evaluation', 'Technical and cost comparisons', 'Delivery tracking', 'Stakeholder alignment']
    }
  ];

  const certifications = [
    'CAPM® (Certified Associate in Project Management)',
    'Google Project Management Certificate'
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="text-xl md:text-2xl font-display text-black tracking-wide">
              NAKUL PAWAR
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">

              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}

            </div>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="mb-12">
              <img 
                src="images/image.png"
                alt="Nakul Pawar"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              NAKUL PAWAR
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Technical Program Manager | Project & Operations Execution | Vendor & Supply Chain Coordination | Engineering Analytics
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              LOS ANGELES, CA, USA · HYBRID/REMOTE READY
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                📋 VIEW EXPERIENCE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'PROGRAMS MANAGED', value: '2+', detail: 'Concurrent Engineering Programs' },
              { label: 'REPORTING EFFICIENCY', value: '30%', detail: 'Reduction in Cycle Time' },
              { label: 'COST SAVINGS', value: '18%', detail: 'Lower Outsourcing Costs' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown 
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Technical Program Manager driving execution across engineering programs, coordinating vendor deliverables, and optimizing program governance through data-driven frameworks.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Program Governance',
                detail: 'Directed execution governance for concurrent hardware product launches, aligning schedules, vendor commitments, and cost baselines across 5+ external partners.'
              },
              {
                icon: Rocket,
                title: 'Process Optimization',
                detail: 'Compressed program reporting cycle time by 30% through automated dashboards, standardized status cadences, and structured decision logs.'
              },
              {
                icon: Lightbulb,
                title: 'Vendor & Architecture Evaluation',
                detail: 'Directed data-driven evaluations for $1M+ initiatives using cost, performance, and risk frameworks to improve selection accuracy and operational efficiency.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Technical program management and engineering coordination across hardware product launches and power electronics systems.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Engineering program management initiatives demonstrating architecture evaluation, vendor selection, and execution planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                <div className="mt-4 flex items-center text-brown hover:text-black transition-colors">
                  <span className="text-sm font-light">View Details</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed methodology or program documentation?
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project documentation.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Technical program management, engineering validation support, and vendor coordination
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-xl font-display text-black mb-6 tracking-wide">TOOLS</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {['Excel', 'Google Sheets', 'PowerPoint', 'Jira', 'Confluence', 'Microsoft Project', 'Smartsheet', 'Tableau', 'Power BI'].map((tool, index) => (
                <span key={index} className="bg-white px-4 py-2 text-sm text-brown border border-brown/20 rounded-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">CERTIFICATIONS</h2>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Professional credentials in project management and program execution.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-cream p-6 rounded-sm border border-brown/10 shadow-sm">
                <Award className="w-6 h-6 text-brown mr-4" />
                <span className="text-brown font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">LEADERSHIP & ACHIEVEMENTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
              <div className="flex items-start">
                <Award className="w-6 h-6 text-brown mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-display text-black tracking-wide">Course Producer</h3>
                  <p className="text-brown font-light">Engineering Management of Systems Engineering (USC)</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
              <div className="flex items-start">
                <Users className="w-6 h-6 text-brown mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-display text-black tracking-wide">Vice President</h3>
                  <p className="text-brown font-light">Engineering Management Student Association (USC)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            <div className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-display text-black tracking-wide">University of Southern California</h3>
                  <p className="text-brown font-medium">Master of Science, Engineering Management</p>
                </div>
                <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                  Jan. 2024 – Dec. 2025
                </div>
              </div>
              <p className="text-brown leading-relaxed font-light">
                Los Angeles, CA
              </p>
            </div>
            <div className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-display text-black tracking-wide">University of Mumbai</h3>
                  <p className="text-brown font-medium">Bachelor of Technology, Electronics and Telecommunication Engineering</p>
                </div>
                <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                  Aug. 2019 – May. 2023
                </div>
              </div>
              <p className="text-brown leading-relaxed font-light">
                India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss technical program management, engineering operations, or vendor coordination initiatives.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a 
                href="tel:+12136812295"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (213) 681-2295
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://www.linkedin.com/in/nakulpawar107/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a 
                href="mailto:pawarnakul16@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                pawarnakul16@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Nakul Pawar · Technical Program Management & Engineering Operations.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;