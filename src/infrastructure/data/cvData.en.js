/**
 * cvData.en.js — Faithful English translation of the source CV content.
 * No information added beyond what appears in the original French CV.
 */
export const cvDataEn = {
  profile: {
    fullName: 'Andy Lucas ANDRIAMANANA',
    title: 'Junior DevOps Engineer',
    summary:
      'Passionate about DevOps, automation, and cloud environments. Strong skills in Linux administration, CI/CD, Ansible, Docker containerization, Kubernetes orchestration, and AWS (EC2) deployment.',
    email: 'andylucas.js@gmail.com',
    phone: '+261 38 34 252 71',
    location: 'Antananarivo, Madagascar',
    resumeUrl: '/documents/Andy_Lucas_ANDRIAMANANA_CV.pdf',
    socialLinks: [
      { id: 'github', label: 'GitHub', url: 'https://github.com/AndyLucaas', icon: 'github' },
      { id: 'linkedin', label: 'LinkedIn', url: '#', icon: 'linkedin' },
      { id: 'email', label: 'Email', url: 'mailto:andylucas.js@gmail.com', icon: 'mail' },
      { id: 'phone', label: 'Phone', url: 'tel:+261383425271', icon: 'phone' },
    ],
    languages: [
      { id: 'mg', name: 'Malagasy', level: 'Native' },
      { id: 'fr', name: 'French', level: 'Intermediate' },
      { id: 'en', name: 'English', level: 'Intermediate' },
    ],
  },

  skills: [
    { id: 'linux', name: 'Linux', category: 'Systems & Virtualization' },
    { id: 'proxmox', name: 'Proxmox', category: 'Systems & Virtualization' },
    { id: 'vagrant', name: 'Vagrant', category: 'Systems & Virtualization' },
    { id: 'docker', name: 'Docker', category: 'Containers & Orchestration' },
    { id: 'kubernetes', name: 'Kubernetes', category: 'Containers & Orchestration' },
    { id: 'gitlab-cicd', name: 'Gitlab CI/CD', category: 'CI/CD & Collaboration' },
    { id: 'github', name: 'GitHub', category: 'CI/CD & Collaboration' },
    { id: 'github-projects', name: 'GitHub Projects', category: 'CI/CD & Collaboration' },
    { id: 'agile-scrum', name: 'Agile/Scrum', category: 'CI/CD & Collaboration' },
    { id: 'shell', name: 'Shell', category: 'Scripting & Automation' },
    { id: 'python', name: 'Python', category: 'Scripting & Automation' },
    { id: 'ansible', name: 'Ansible', category: 'Scripting & Automation' },
    { id: 'prometheus', name: 'Prometheus', category: 'Monitoring' },
    { id: 'grafana', name: 'Grafana', category: 'Monitoring' },
    { id: 'aws', name: 'AWS (EC2, EKS)', category: 'Cloud' },
  ],

  projects: [
    {
      id: 'microservices-aws-k8s',
      title: 'Microservices application deployment on AWS EC2 and Kubernetes',
      description:
        'Containerized a microservices application with Docker and orchestrated the services on a Kubernetes cluster deployed on AWS EC2.',
      highlights: [
        'Containerization with Docker.',
        'Orchestration with Kubernetes.',
      ],
      stack: ['Docker', 'Kubernetes', 'AWS EC2'],
      links: {},
    },
    {
      id: 'infra-automation-monitoring',
      title: 'Infrastructure automation and monitoring',
      description:
        'Deployed a secure, highly available Linux infrastructure, with automated server configuration and full monitoring coverage.',
      highlights: [
        'Deployment of a secure, highly available Linux infrastructure.',
        'Server configuration automation with Ansible.',
        'Monitoring implementation with Prometheus and Grafana.',
      ],
      stack: ['Linux', 'Ansible', 'Prometheus', 'Grafana'],
      links: {},
    },
  ],

  experiences: [
    {
      id: 'stage-devops-odity',
      role: 'DevOps Internship',
      organization: 'ODITY Andraharo',
      location: 'Antananarivo',
      period: { start: 'October 2024', end: 'December 2024' },
      responsibilities: [
        'Deployment of a secure, highly available infrastructure.',
        'Configuration automation with Ansible.',
        'Implementation of monitoring solutions via Grafana and Prometheus.',
      ],
    },
    {
      id: 'stage-support-bfm',
      role: 'Technical Support Internship',
      organization: "Banky Foiben'i Madagasikara",
      location: 'Antaninarenina, Antananarivo',
      period: { start: 'August 2023', end: 'October 2023' },
      responsibilities: [
        'Real-time network troubleshooting to ensure operational continuity.',
        'User assistance for connection and network configuration issues.',
        'Set up a secure authentication system for the WIFI network.',
      ],
    },
  ],

  educations: [
    {
      id: 'master-asr',
      degree: "Professional Master's degree in Systems & Network Administration",
      institution: "École Nationale d'Informatique Fianarantsoa",
      period: { start: '2025', end: 'Present' },
    },
    {
      id: 'licence-asr',
      degree: "Bachelor's degree in Systems & Network Administration",
      institution: "École Nationale d'Informatique Fianarantsoa",
      period: { start: '2021', end: '2024' },
    },
  ],

  certifications: [
    {
      id: 'ibm-agile-scrum',
      title: 'Introduction to Agile Development and Scrum',
      issuer: 'IBM',
      date: 'June 2026',
      url: null,
    },
    {
      id: 'ibm-devops-essentials',
      title: 'DevOps Essentials',
      issuer: 'IBM',
      date: 'June 2026',
      url: null,
    },
  ],
};
