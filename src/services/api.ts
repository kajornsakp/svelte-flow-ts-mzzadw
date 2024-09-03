export const fetchRepositoryData = async (url: string) => {
  // Mock response simulating the data you would get from a GitLab API.
  return {
    repositoryName: 'example-repo',
    owner: 'example-owner',
    branches: ['main', 'develop'],
    lastCommit: {
      hash: 'abc123def456',
      message: 'Initial commit',
      date: '2024-09-01T12:00:00Z',
    },
  };
};
