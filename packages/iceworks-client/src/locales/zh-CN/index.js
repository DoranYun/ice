export default {
  // global
  'iceworks.global.connect': '已连接',
  'iceworks.global.disconnect': '断开连接',
  'iceworks.global.button.yes': '确定',
  'iceworks.global.button.no': '取消',
  'iceworks.global.fallback.title': '加载错误',

  // menu
  'iceworks.menu.project': '项目',
  'iceworks.menu.task': '工程',
  'iceworks.menu.task.dev': 'dev',
  'iceworks.menu.task.dev.desc': '启动服务(用于开发环境)',
  'iceworks.menu.task.build': 'build',
  'iceworks.menu.task.build.desc': '构建项目(用于生产环境)',
  'iceworks.menu.task.lint': 'lint',
  'iceworks.menu.task.lint.desc': '语法检查(用于开发环境)',
  'iceworks.menu.task.configuration': 'configuration',
  'iceworks.menu.task.configuration.desc': '自定义项目配置',
  'iceworks.menu.material': '物料',
  'iceworks.menu.setting': '设置',
  'iceworks.menu.setting.general': '通用设置',
  'iceworks.menu.setting.general.desc': '设置主题和语言',
  'iceworks.menu.setting.panel': '面板设置',
  'iceworks.menu.setting.panel.desc': '项目面板的展示',
  'iceworks.menu.setting.advanced': '高级设置',
  'iceworks.menu.setting.advanced.desc': '设置编辑器和 npm 源',

  // setting
  'iceworks.setting.title': '设置',
  'iceworks.setting.general.title': '通用设置',
  'iceworks.setting.general.language.title': '语言',
  'iceworks.setting.general.language.zh': '中文',
  'iceworks.setting.general.language.en': '英文',
  'iceworks.setting.general.theme.title': '主题',
  'iceworks.setting.general.theme.dark': '深色',
  'iceworks.setting.general.theme.light': '浅色',
  'iceworks.setting.general.editor.title': '编辑器',

  // project
  'iceworks.project.title': '项目管理',
  'iceworks.project.create.init.title': '初始化项目',
  'iceworks.project.create.init.content': '当前项目依赖尚未安装，安装过程可能需要几分钟，是否立即安装？',
  'iceworks.project.submenu.opts.openProject': '打开项目',
  'iceworks.project.submenu.opts.createProject': '创建项目',

  // project panel
  'iceworks.project.panel.page.title': '页面管理',
  'iceworks.project.panel.fallback.title': '面板',
  'iceworks.project.panel.fallback.desc': '面板加载出错',

  // project page
  'iceworks.project.panel.page.create.title': '创建页面',
  'iceworks.project.panel.page.create.progress.start': '开始创建页面...',
  'iceworks.project.panel.page.delete.title': '删除页面',
  'iceworks.project.panel.page.delete.content': '确定移除页面 {name} ？',
  'iceworks.project.panel.page.save.title': '填写页面信息',
  'iceworks.project.panel.page.save.name.label': '页面目录名：',
  'iceworks.project.panel.page.save.name.placeholder': '请输入页面目录名，字母与数字组合，字母开头',
  'iceworks.project.panel.page.save.routePath.label': '路由路径：',
  'iceworks.project.panel.page.save.routePath.placeholder': '请输入小写字母数字组合，支持二级路由以 `/` 分隔',
  'iceworks.project.panel.page.save.menuName.label': '页面导航名：',
  'iceworks.project.panel.page.save.menuName.placeholder': '为空则不生成导航项',

  // project dependency
  'iceworks.project.panel.dependency.title': '依赖管理',
  'iceworks.project.panel.dependency.main.refresh': '刷新',
  'iceworks.project.panel.dependency.main.download': '重装依赖',
  'iceworks.project.panel.dependency.main.add': '添加依赖',
  'iceworks.project.panel.dependency.main.upgrade': '可升级到 {wantedVestion}',
  'iceworks.project.panel.dependency.main.reset.title': '安装项目依赖',
  'iceworks.project.panel.dependency.main.reset.content': '将重置安装项目所有依赖，安装期间无法进启动调试服务、新建页面、构建项目操作，请耐心等待。',
  'iceworks.project.panel.dependency.main.incompatible.title': '不兼容提醒',
  'iceworks.project.panel.dependency.main.incompatible.content': '新添加的依赖 {setDependencyText} 主版本号与项目依赖 {projectDependencyText} 主版本号发生改变可能存在不兼容的 API 修改，确定要继续吗？',
  'iceworks.project.panel.dependency.create.title': '添加依赖',
  'iceworks.project.panel.dependency.create.placeholder': '请输入 npm 包名以及版本号，例如：lodash@latest。按回车输入多个依赖。',

  // project layout
  'iceworks.project.panel.layout.title': '布局列表',
  'iceworks.project.panel.layout.none': '暂无布局',

  'iceworks.project.panel.todo.title': 'TODO',
  'iceworks.project.panel.def.title': 'DEF 发布',
  'iceworks.project.panel.git.title': 'Git',
  'iceworks.project.panel.oss.title': 'OSS',

  // task
  'iceworks.task.title': '工程管理',
  'iceworks.task.dev.title': '启动服务',
  'iceworks.task.dev.desc': '编译和热更新(用于开发环境)',
  'iceworks.task.start': '运行',
  'iceworks.task.stop': '停止',
  'iceworks.task.setting': '设置',
  'iceworks.task.build.title': '构建项目',
  'iceworks.task.build.desc': '编译并压缩(用于生产环境)',
  'iceworks.task.lint.title': '检查语法',
  'iceworks.task.lint.desc': '检查代码规范并进行修复',

  // material
  'iceworks.material.title': '物料管理',
  'iceworks.material.scaffold': '模版',
  'iceworks.material.block': '区块',
  'iceworks.material.component': '组件',
  'iceworks.material.add': '添加物料',
  'iceworks.material.all': '全部',
  'iceworks.material.preview': '效果预览',
  'iceworks.material.source': '查看源码',
  'iceworks.material.download': '使用该模版',
  'iceworks.material.doc': '文档',
  'iceworks.material.install': '安装',
  'iceworks.material.install.component.title': '组件下载',
  'iceworks.material.install.component.pacakgeName': '组件包名：',
  'iceworks.material.install.component.packageVersion': '组件版本：',
  'iceworks.material.noDesc': '暂无描述',
  'iceworks.material.sourceUrl': '物料源地址',

  // global bar
  'iceowrks.global.bar.project': '当前项目名称',
  'iceowrks.global.bar.terminal': '终端',
  'iceowrks.global.bar.folder': '文件夹',
  'iceowrks.global.bar.editor': '编辑器',
  'iceowrks.global.bar.theme': '主题',
  'iceowrks.global.bar.feedback': '反馈',
};
