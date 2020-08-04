const projects = [
  'mt-ecommerce',
  'trello-clone',
  'blog',
  'project',
  // 'blog-2019',
  // 'empty-module-loader',
  // 'get-selection-more',
  // 'ext-github-release-notifier',
]

export default projects.map((id) =>
  Object.assign({ id }, require(`./${id}/meta.json`))
)

