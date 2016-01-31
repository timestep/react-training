import topics from './mock/topics';

export function getTopics() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Convert to map for easier access
      const data = topics.reduce((acc, i) => {
        acc[i.id.toString()] = i;

        return acc;
      }, {});

      resolve(data);
    }, 2000);
  });
}
