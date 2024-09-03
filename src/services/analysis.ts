import type { YAMLData, CodeSmell } from '../types';

export const fetchYAML = async (url: string): Promise<YAMLData> => {
  // Mock response simulating a merged YAML configuration
  return {
    stages: ['build', 'test', 'deploy'],
    build: {
      script: ['npm install', 'npm run build'],
      artifacts: {
        paths: ['dist/'],
      },
      only: ['main'],
    },
    test: {
      script: ['npm test'],
      dependencies: ['build'],
      only: ['main', 'develop'],
    },
    deploy: {
      script: ['npm run deploy'],
      environment: 'production',
      only: ['main'],
    },
  };
};

export const analyzeYAML = (yamlData: YAMLData): CodeSmell[] => {
  // Mock response simulating code smell detection in the YAML configuration
  return [
    {
      description: "Stage 'test' has no timeout specified",
      severity: 'medium',
    },
    {
      description:
        "The 'deploy' stage is missing an 'after_script' for cleanup",
      severity: 'low',
    },
    {
      description:
        "The 'build' stage runs as root user, which is a potential security risk",
      severity: 'high',
    },
  ];
};
