import projects from '../projects'

const msg = {
  expand: '展开全文',
  collapse: '收起全文',
  projectIntro: [
    '求知若饥，虚心若愚',
    '无论是解决实际问题，还是尝试新技术',
    '生命不息，折腾不止',
  ],
  projects: projects.reduce((all, p) => {
    all[p.id] = { title: p.title['zh-CN'] }
    return all
  }, {}),
}

Object.keys(msg.projects).forEach((name) => {
  msg.projects[name].content = require(`../projects/${name}/zh-CN.md`)
})


export default msg
