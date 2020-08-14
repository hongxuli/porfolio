const projects = [
  'mt-ecommerce',
  'trello-clone',
  'blog',
  'project',
]

export default projects.map((id) =>
  Object.assign({ id }, require(`./${id}/meta.json`))
)

