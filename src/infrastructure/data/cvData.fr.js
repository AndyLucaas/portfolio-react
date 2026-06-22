/**
 * cvData.fr.js — Source de données brute (FR), extraite fidèlement du CV
 * d'Andy Lucas ANDRIAMANANA. Aucune information inventée.
 */
export const cvDataFr = {
  profile: {
    fullName: 'Andy Lucas ANDRIAMANANA',
    title: 'Ingénieur DevOps Junior',
    summary:
      "Passionné par le DevOps, l'automatisation et l'environnement cloud. Bonnes compétences en administration Linux, CI/CD, Ansible, conteneurisation avec Docker, orchestration Kubernetes et déploiement sur AWS (EC2).",
    email: 'andylucas.js@gmail.com',
    phone: '+261 38 34 252 71',
    location: 'Antananarivo, Madagascar',
    resumeUrl: '/documents/Andy_Lucas_ANDRIAMANANA_CV.pdf',
    socialLinks: [
      { id: 'github', label: 'GitHub', url: 'https://github.com/AndyLucaas', icon: 'github' },
      { id: 'linkedin', label: 'LinkedIn', url: '#', icon: 'linkedin' },
      { id: 'email', label: 'Email', url: 'mailto:andylucas.js@gmail.com', icon: 'mail' },
      { id: 'phone', label: 'Téléphone', url: 'tel:+261383425271', icon: 'phone' },
    ],
    languages: [
      { id: 'mg', name: 'Malagasy', level: 'Natif' },
      { id: 'fr', name: 'Français', level: 'Intermédiaire' },
      { id: 'en', name: 'Anglais', level: 'Intermédiaire' },
    ],
  },

  skills: [
    { id: 'linux', name: 'Linux', category: 'Systèmes & Virtualisation' },
    { id: 'proxmox', name: 'Proxmox', category: 'Systèmes & Virtualisation' },
    { id: 'vagrant', name: 'Vagrant', category: 'Systèmes & Virtualisation' },
    { id: 'docker', name: 'Docker', category: 'Conteneurisation & Orchestration' },
    { id: 'kubernetes', name: 'Kubernetes', category: 'Conteneurisation & Orchestration' },
    { id: 'gitlab-cicd', name: 'Gitlab CI/CD', category: 'CI/CD & Collaboration' },
    { id: 'github', name: 'GitHub', category: 'CI/CD & Collaboration' },
    { id: 'github-projects', name: 'GitHub Projects', category: 'CI/CD & Collaboration' },
    { id: 'agile-scrum', name: 'Agile/Scrum', category: 'CI/CD & Collaboration' },
    { id: 'shell', name: 'Shell', category: 'Scripting & Automatisation' },
    { id: 'python', name: 'Python', category: 'Scripting & Automatisation' },
    { id: 'ansible', name: 'Ansible', category: 'Scripting & Automatisation' },
    { id: 'prometheus', name: 'Prometheus', category: 'Supervision & Monitoring' },
    { id: 'grafana', name: 'Grafana', category: 'Supervision & Monitoring' },
    { id: 'aws', name: 'AWS (EC2, EKS)', category: 'Cloud' },
  ],

  projects: [
    {
      id: 'microservices-aws-k8s',
      title: "Déploiement d'une application microservices sur AWS EC2 et Kubernetes",
      description:
        "Conteneurisation d'une application microservices avec Docker et orchestration des services sur un cluster Kubernetes déployé sur AWS EC2.",
      highlights: [
        'Conteneurisation avec Docker.',
        'Orchestration avec Kubernetes.',
      ],
      stack: ['Docker', 'Kubernetes', 'AWS EC2'],
      links: {},
    },
    {
      id: 'infra-automation-monitoring',
      title: "Automatisation et supervision d'infrastructure",
      description:
        "Déploiement d'une infrastructure Linux sécurisée et hautement disponible, avec automatisation de la configuration des serveurs et supervision complète.",
      highlights: [
        "Déploiement d'une infrastructure Linux sécurisée et hautement disponible.",
        'Automatisation de la configuration des serveurs avec Ansible.',
        'Mise en œuvre du monitoring avec Prometheus et Grafana.',
      ],
      stack: ['Linux', 'Ansible', 'Prometheus', 'Grafana'],
      links: {},
    },
  ],

  experiences: [
    {
      id: 'stage-devops-odity',
      role: 'Stage DevOps',
      organization: 'ODITY Andraharo',
      location: 'Antananarivo',
      period: { start: 'Octobre 2024', end: 'Décembre 2024' },
      responsibilities: [
        "Déploiement d'une infrastructure sécurisée et hautement disponible.",
        'Automatisation des configurations avec Ansible.',
        'Mise en œuvre de solutions de supervision via Grafana et Prometheus.',
      ],
    },
    {
      id: 'stage-support-bfm',
      role: 'Stage en support technique',
      organization: "Banky Foiben'i Madagasikara",
      location: 'Antaninarenina, Antananarivo',
      period: { start: 'Août 2023', end: 'Octobre 2023' },
      responsibilities: [
        'Résolution des problèmes réseau en temps réel pour garantir la continuité des opérations.',
        'Assistance aux utilisateurs pour les problèmes de connexion et de configuration réseau.',
        "Mise en place d'un système d'authentification sécurisé du réseau WIFI.",
      ],
    },
  ],

  educations: [
    {
      id: 'master-asr',
      degree: 'Master professionnel en Administration des Systèmes et Réseaux',
      institution: "École Nationale d'Informatique Fianarantsoa",
      period: { start: '2025', end: 'Présent' },
    },
    {
      id: 'licence-asr',
      degree: 'Licence professionnelle en Administration des Systèmes et Réseaux',
      institution: "École Nationale d'Informatique Fianarantsoa",
      period: { start: '2021', end: '2024' },
    },
  ],

  certifications: [
    {
      id: 'ibm-agile-scrum',
      title: 'Introduction to Agile Development and Scrum',
      issuer: 'IBM',
      date: 'Juin 2026',
      url: null,
    },
    {
      id: 'ibm-devops-essentials',
      title: 'DevOps Essentials',
      issuer: 'IBM',
      date: 'Juin 2026',
      url: null,
    },
  ],
};
