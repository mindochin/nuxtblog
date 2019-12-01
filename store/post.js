export const actions = {
  async fetchAdmin ({ }) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            title: 'Frozen Yogurt',
            date: new Date(),
            views: 22,
            comments: [1,2],
            _id: Math.random()
          },
          {
            title: 'Ice cream sandwich',
            date: new Date(new Date() - 64000),
            views: 5,
            comments: [],
            _id: Math.random()
          }
        ])
      }, 1000)
    })
  },
  async remove ({ }, id) {}
}
