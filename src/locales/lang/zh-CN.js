import { locales } from 'ant-design-vue'
import momentCN from 'moment/locale/zh-cn'
const zhCN = locales.zh_CN
const components = {
  antLocale: zhCN,
  momentName: 'zh-cn',
  momentLocale: momentCN
}

const locale = {
  'message': '-',
  'menu.home': '首页',
  'menu.dashboard': '仪表盘',
  'menu.dashboard.analysis': '分析页',
  'menu.dashboard.weclome': '欢迎页',
  'menu.dashboard.monitor': '监控页',
  'menu.dashboard.workplace': '工作台',
  'menu.form': '表单页',
  'menu.form.basic': '基础表单',
  'menu.form.step': '分步表单',
  'menu.form.advanced': '高级表单',
  'menu.form.edit': '富文本',
  'menu.list': '列表页',
  'menu.list.table': '查询表格',
  'menu.list.standard': '标准列表',
  'menu.list.card': '卡片列表',
  'menu.list.search': '搜索列表',
  'menu.list.search.article': '搜索列表（文章）',
  'menu.list.search.project': '搜索列表（项目）',
  'menu.list.search.application': '搜索列表（应用）',
  'menu.profile': '详情页',
  'menu.profile.basic': '基础详情页',
  'menu.profile.advanced': '高级详情页',
  'menu.result': '结果页',
  'menu.result.succ': '成功',
  'menu.result.err': '失败',
  'menu.exception': '异常页',
  'menu.exception.403': '403',
  'menu.exception.404': '404',
  'menu.exception.500': '500',
  'menu.account': '个人页',
  'menu.account.center': '个人中心',
  'menu.account.settings': '个人设置',
  'menu.account.settings.base': '基本设置',
  'menu.account.settings.security': '安全设置',
  'menu.account.settings.custom': '个性化设置',
  'menu.account.settings.binding': '账户绑定',
  'menu.account.settings.notification': '新消息通知',

  'layouts.usermenu.dialog.title': '提示',
  'layouts.usermenu.dialog.content': '你真的要离开了嘛',

  'app.setting.pagestyle': '整体风格设置',
  'app.setting.pagestyle.light': '亮色菜单风格',
  'app.setting.pagestyle.dark': '暗色菜单风格',
  'app.setting.pagestyle.realdark': '暗黑菜单风格',
  'app.setting.themecolor': '主题色',
  'app.setting.navigationmode': '导航模式',
  'app.setting.content-width': '内容区域宽度',
  'app.setting.fixedheader': '固定 Header',
  'app.setting.fixedsidebar': '固定侧边菜单',
  'app.setting.sidemenu': '侧边栏导航',
  'app.setting.topmenu': ' 顶部栏导航',
  'app.setting.content-width.fixed': '固定',
  'app.setting.content-width.fluid': '流式',
  'app.setting.othersettings': '其他设置',
  'app.setting.weakmode': '色弱模式',
  'app.setting.copy': '拷贝设置',
  'app.setting.loading': '主题加载中',
  'app.setting.copyinfo': '复制成功，替换src/config/defaultSettings.js文件中的配置',
  'app.setting.production.hint': '配置栏只在开发环境用于预览，生产环境不会展现，请手动修改配置文件。',

  'app.setting.themecolor.daybreak': '拂晓蓝（默认）',
  'app.setting.themecolor.dust': '薄暮',
  'app.setting.themecolor.volcano': '火山',
  'app.setting.themecolor.sunset': '日暮',
  'app.setting.themecolor.cyan': '明青',
  'app.setting.themecolor.green': '极光绿',
  'app.setting.themecolor.geekblue': '极客蓝',
  'app.setting.themecolor.purple': '酱紫'
}

export default {
  ...components,
  ...locale
}
