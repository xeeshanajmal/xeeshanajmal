// Mapping of skills to their icon names (for simple-icons CDN) and documentation URLs
export interface SkillInfo {
  iconName: string;
  docUrl: string;
  displayName: string;
}

export const skillMappings: Record<string, SkillInfo> = {
  // Languages
  TypeScript: {
    iconName: "typescript",
    docUrl: "https://www.typescriptlang.org/docs/",
    displayName: "TypeScript",
  },
  "JavaScript (Node.js)": {
    iconName: "javascript",
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    displayName: "JavaScript",
  },
  Javascript: {
    iconName: "javascript",
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    displayName: "JavaScript",
  },
  Typescript: {
    iconName: "typescript",
    docUrl: "https://www.typescriptlang.org/docs/",
    displayName: "TypeScript",
  },
  Go: {
    iconName: "go",
    docUrl: "https://go.dev/doc/",
    displayName: "Go",
  },
  Python: {
    iconName: "python",
    docUrl: "https://docs.python.org/",
    displayName: "Python",
  },
  SQL: {
    iconName: "postgresql",
    docUrl: "https://www.w3schools.com/sql/",
    displayName: "SQL",
  },

  // Backend & APIs
  "Node.js": {
    iconName: "nodedotjs",
    docUrl: "https://nodejs.org/docs/",
    displayName: "Node.js",
  },
  Nodejs: {
    iconName: "nodedotjs",
    docUrl: "https://nodejs.org/docs/",
    displayName: "Node.js",
  },
  " Node.js": {
    iconName: "nodedotjs",
    docUrl: "https://nodejs.org/docs/",
    displayName: "Node.js",
  },
  NestJS: {
    iconName: "nestjs",
    docUrl: "https://docs.nestjs.com/",
    displayName: "NestJS",
  },
  Nestjs: {
    iconName: "nestjs",
    docUrl: "https://docs.nestjs.com/",
    displayName: "NestJS",
  },
  Express: {
    iconName: "express",
    docUrl: "https://expressjs.com/",
    displayName: "Express",
  },
  GraphQL: {
    iconName: "graphql",
    docUrl: "https://graphql.org/learn/",
    displayName: "GraphQL",
  },
  REST: {
    iconName: "code",
    docUrl: "https://restfulapi.net/",
    displayName: "REST",
  },

  // Frontend
  React: {
    iconName: "react",
    docUrl: "https://react.dev/",
    displayName: "React",
  },
  "Next.js": {
    iconName: "nextdotjs",
    docUrl: "https://nextjs.org/docs",
    displayName: "Next.js",
  },
  "Vue.js": {
    iconName: "vuedotjs",
    docUrl: "https://vuejs.org/guide/",
    displayName: "Vue.js",
  },
  Vue: {
    iconName: "vuedotjs",
    docUrl: "https://vuejs.org/guide/",
    displayName: "Vue.js",
  },
  Vuejs: {
    iconName: "vuedotjs",
    docUrl: "https://vuejs.org/guide/",
    displayName: "Vue.js",
  },
  "Vue 3": {
    iconName: "vuedotjs",
    docUrl: "https://vuejs.org/guide/",
    displayName: "Vue.js",
  },
  "Tailwind CSS": {
    iconName: "tailwindcss",
    docUrl: "https://tailwindcss.com/docs",
    displayName: "Tailwind CSS",
  },

  // Databases
  PostgreSQL: {
    iconName: "postgresql",
    docUrl: "https://www.postgresql.org/docs/",
    displayName: "PostgreSQL",
  },
  MongoDB: {
    iconName: "mongodb",
    docUrl: "https://www.mongodb.com/docs/",
    displayName: "MongoDB",
  },
  Mongodb: {
    iconName: "mongodb",
    docUrl: "https://www.mongodb.com/docs/",
    displayName: "MongoDB",
  },
  DynamoDB: {
    iconName: "amazondynamodb",
    docUrl: "https://docs.aws.amazon.com/dynamodb/",
    displayName: "DynamoDB",
  },
  Redis: {
    iconName: "redis",
    docUrl: "https://redis.io/docs/",
    displayName: "Redis",
  },
  Firestore: {
    iconName: "googlecloud",
    docUrl: "https://firebase.google.com/docs/firestore",
    displayName: "Firestore",
  },

  // ORM
  TypeORM: {
    iconName: "typeorm",
    docUrl: "https://typeorm.io/",
    displayName: "TypeORM",
  },
  Prisma: {
    iconName: "prisma",
    docUrl: "https://www.prisma.io/docs",
    displayName: "Prisma",
  },

  // Additional Technologies
  Directus: {
    iconName: "directus",
    docUrl: "https://docs.directus.io/",
    displayName: "Directus",
  },
  Redux: {
    iconName: "redux",
    docUrl: "https://redux.js.org/",
    displayName: "Redux",
  },
  Stripe: {
    iconName: "stripe",
    docUrl: "https://stripe.com/docs",
    displayName: "Stripe",
  },
  WebRTC: {
    iconName: "webrtc",
    docUrl: "https://webrtc.org/",
    displayName: "WebRTC",
  },
  Socket: {
    iconName: "socketdotio",
    docUrl: "https://socket.io/docs/",
    displayName: "Socket.io",
  },
  Vercel: {
    iconName: "vercel",
    docUrl: "https://vercel.com/docs",
    displayName: "Vercel",
  },
  "Turbo Monorepo": {
    iconName: "turborepo",
    docUrl: "https://turbo.build/repo/docs",
    displayName: "Turbo",
  },
  Firebase: {
    iconName: "firebase",
    docUrl: "https://firebase.google.com/docs",
    displayName: "Firebase",
  },
  "Google App Engine": {
    iconName: "googlecloud",
    docUrl: "https://cloud.google.com/appengine/docs",
    displayName: "Google App Engine",
  },
  Auth0: {
    iconName: "auth0",
    docUrl: "https://auth0.com/docs",
    displayName: "Auth0",
  },
  I18n: {
    iconName: "code",
    docUrl: "https://www.i18next.com/",
    displayName: "i18n",
  },
  "Nx Monorepo": {
    iconName: "nx",
    docUrl: "https://nx.dev/",
    displayName: "Nx",
  },
  Serverless: {
    iconName: "serverless",
    docUrl: "https://www.serverless.com/framework/docs",
    displayName: "Serverless",
  },
  "AWS Amplify Gen 2": {
    iconName: "amazonaws",
    docUrl: "https://docs.amplify.aws/",
    displayName: "AWS Amplify",
  },
  "AWS Lambda": {
    iconName: "amazonaws",
    docUrl: "https://docs.aws.amazon.com/lambda/",
    displayName: "AWS Lambda",
  },
  "AWS AppSync": {
    iconName: "amazonaws",
    docUrl: "https://docs.aws.amazon.com/appsync/",
    displayName: "AWS AppSync",
  },
  "AWS Cognito": {
    iconName: "amazonaws",
    docUrl: "https://docs.aws.amazon.com/cognito/",
    displayName: "AWS Cognito",
  },
  "AWS Secrets Manager": {
    iconName: "amazonaws",
    docUrl: "https://docs.aws.amazon.com/secretsmanager/",
    displayName: "AWS Secrets Manager",
  },
  "AWS Amplify UI React": {
    iconName: "amazonaws",
    docUrl: "https://ui.docs.amplify.aws/react/",
    displayName: "AWS Amplify UI",
  },
  "Google Cloud Platform": {
    iconName: "googlecloud",
    docUrl: "https://cloud.google.com/docs",
    displayName: "GCP",
  },
  "Cloud Run": {
    iconName: "googlecloud",
    docUrl: "https://cloud.google.com/run/docs",
    displayName: "Cloud Run",
  },
  "Cloud SQL": {
    iconName: "googlecloud",
    docUrl: "https://cloud.google.com/sql/docs",
    displayName: "Cloud SQL",
  },
  Supabase: {
    iconName: "supabase",
    docUrl: "https://supabase.com/docs",
    displayName: "Supabase",
  },
  "Supabase Auth": {
    iconName: "supabase",
    docUrl: "https://supabase.com/docs/guides/auth",
    displayName: "Supabase Auth",
  },
  VSCE: {
    iconName: "visualstudiocode",
    docUrl: "https://code.visualstudio.com/api",
    displayName: "VS Code Extension",
  },
  Mau: {
    iconName: "code",
    docUrl: "https://www.google.com/search?q=mau+framework",
    displayName: "MAUI",
  },

  // Cloud & DevOps
  "AWS (Lambda, RDS, S3, API Gateway, EKS, Cognito and more)": {
    iconName: "amazonaws",
    docUrl: "https://docs.aws.amazon.com/",
    displayName: "AWS",
  },
  "GCP (Cloud Run, Cloud SQL, BigQuery and more)": {
    iconName: "googlecloud",
    docUrl: "https://cloud.google.com/docs",
    displayName: "GCP",
  },
  Docker: {
    iconName: "docker",
    docUrl: "https://docs.docker.com/",
    displayName: "Docker",
  },
  "GitHub Actions": {
    iconName: "githubactions",
    docUrl: "https://docs.github.com/en/actions",
    displayName: "GitHub Actions",
  },
  "GitLab CI/CD": {
    iconName: "gitlab",
    docUrl: "https://docs.gitlab.com/ee/ci/",
    displayName: "GitLab CI/CD",
  },

  // IaC
  Terraform: {
    iconName: "terraform",
    docUrl: "https://developer.hashicorp.com/terraform/docs",
    displayName: "Terraform",
  },
  "AWS CDK": {
    iconName: "amazonaws",
    docUrl: "https://docs.aws.amazon.com/cdk/",
    displayName: "AWS CDK",
  },

  // Quantum Computing
  Qiskit: {
    iconName: "ibm",
    docUrl: "https://docs.quantum.ibm.com/",
    displayName: "Qiskit",
  },
  "Quantum Circuits": {
    iconName: "ibm",
    docUrl: "https://docs.quantum.ibm.com/build/circuit-construction",
    displayName: "Quantum Circuits",
  },
  QML: {
    iconName: "ibm",
    docUrl: "https://qiskit-community.github.io/qiskit-machine-learning/",
    displayName: "QML",
  },
  "Quantum Security": {
    iconName: "ibm",
    docUrl: "https://www.ibm.com/quantum/quantum-safe",
    displayName: "Quantum Security",
  },

  // Cybersecurity Tools
  "Penetration Testing": {
    iconName: "kalilinux",
    docUrl: "https://www.kali.org/docs/",
    displayName: "Penetration Testing",
  },
  Nmap: {
    iconName: "nmap",
    docUrl: "https://nmap.org/docs.html",
    displayName: "Nmap",
  },
  "Burp Suite": {
    iconName: "portswigger",
    docUrl: "https://portswigger.net/burp/documentation",
    displayName: "Burp Suite",
  },
  Wireshark: {
    iconName: "wireshark",
    docUrl: "https://www.wireshark.org/docs/",
    displayName: "Wireshark",
  },
  Shodan: {
    iconName: "shodan",
    docUrl: "https://help.shodan.io/",
    displayName: "Shodan",
  },
  Metasploit: {
    iconName: "metasploit",
    docUrl: "https://docs.metasploit.com/",
    displayName: "Metasploit",
  },
  Nessus: {
    iconName: "tenable",
    docUrl: "https://docs.tenable.com/nessus/",
    displayName: "Nessus",
  },
  Wazuh: {
    iconName: "wazuh",
    docUrl: "https://documentation.wazuh.com/",
    displayName: "Wazuh",
  },

  // Data & Analytics
  "Power BI": {
    iconName: "powerbi",
    docUrl: "https://learn.microsoft.com/en-us/power-bi/",
    displayName: "Power BI",
  },
  Tableau: {
    iconName: "tableau",
    docUrl: "https://help.tableau.com/",
    displayName: "Tableau",
  },
  Pandas: {
    iconName: "pandas",
    docUrl: "https://pandas.pydata.org/docs/",
    displayName: "Pandas",
  },
  "Shell Scripting": {
    iconName: "gnubash",
    docUrl: "https://www.gnu.org/software/bash/manual/",
    displayName: "Shell Scripting",
  },

  // Testing & Monitoring
  Jest: {
    iconName: "jest",
    docUrl: "https://jestjs.io/docs/getting-started",
    displayName: "Jest",
  },
  Cypress: {
    iconName: "cypress",
    docUrl: "https://docs.cypress.io/",
    displayName: "Cypress",
  },
  CloudWatch: {
    iconName: "amazonaws",
    docUrl: "https://docs.aws.amazon.com/cloudwatch/",
    displayName: "CloudWatch",
  },
  "GCP Monitoring": {
    iconName: "googlecloud",
    docUrl: "https://cloud.google.com/monitoring/docs",
    displayName: "GCP Monitoring",
  },
  Sentry: {
    iconName: "sentry",
    docUrl: "https://docs.sentry.io/",
    displayName: "Sentry",
  },
};

// Helper function to get skill info or return defaults
export function getSkillInfo(skill: string): SkillInfo {
  return (
    skillMappings[skill] || {
      iconName: "code",
      docUrl: `https://www.google.com/search?q=${encodeURIComponent(skill + " documentation")}`,
      displayName: skill,
    }
  );
}
