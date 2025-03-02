export const gene_name = () => Math.random().toString(36).substring(2, 10).toUpperCase()

var installed = localStorage.getItem("installed")
if (!installed) installed = "[]"

installed = JSON.parse(installed)

var apps = [{
  name: 'Start',
  icon: 'home',
  type: 'action',
  action: 'STARTMENU'
},
{
  name: 'Search',
  icon: 'search',
  type: 'action',
  action: 'SEARCHMENU'
},
{
  name: 'Widget',
  icon: 'widget',
  type: 'action',
  action: 'WIDGETS'
},
{
  name: 'Settings',
  icon: 'settings',
  type: 'app',
  action: 'SETTINGS'
},
{
  name: 'Task Manager',
  icon: 'taskmanager',
  type: 'app',
  action: 'TASKMANAGER'
},
{
  name: 'File Explorer',
  icon: 'explorer',
  type: 'app',
  action: 'EXPLORER'
},
{
  name: 'Browser',
  icon: 'edge',
  type: 'app',
  action: 'MSEDGE'
},
{
  name: 'Store',
  icon: 'store',
  type: 'app',
  action: 'WNSTORE'
},
{
  name: 'Recycle Bin',
  icon: 'bin0',
  type: 'app'
},
{
  name: 'Blue',
  icon: 'win/user',
  type: 'short'
}, {
  name: 'Alarms',
  icon: 'alarm',
  type: 'app'
},
{
  name: 'Calculator',
  icon: 'calculator',
  type: 'app',
  action: 'CALCUAPP'
},
{
  name: 'Calendar',
  icon: 'calendar',
  type: 'app'
},
{
  name: 'Camera',
  icon: 'camera',
  type: 'app',
  action: 'CAMERA'
},
{
  name: 'Your Phone',
  icon: 'yphone',
  type: 'app'
},
{
  name: 'Help',
  icon: 'help',
  type: 'app',
  action: 'EXTERNAL',
  payload: 'https://async-it.ch/support'
},
{
  name: 'Office',
  icon: 'msoffice',
  type: 'app'
},
{
  name: 'Narrator',
  icon: 'narrator',
  type: 'app'
},
{
  name: 'News',
  icon: 'news',
  type: 'app'
},
{
  name: 'Notepad',
  icon: 'notepad',
  type: 'app',
  action: 'NOTEPAD'
},
{
  name: 'Sticky Notes',
  icon: 'notes',
  type: 'app'
},
{
  name: 'OneDrive',
  icon: 'oneDrive',
  type: 'app'
},
{
  name: 'OneNote',
  icon: 'onenote',
  type: 'app'
},
{
  name: 'Outlook',
  icon: 'outlook',
  type: 'app'
},
{
  name: 'People',
  icon: 'people',
  type: 'app'
},
{
  name: 'Photos',
  icon: 'photos',
  type: 'app'
},
{
  name: 'Security',
  icon: 'security',
  type: 'app'
},
{
  name: 'Share',
  icon: 'share',
  type: 'app'
},
{
  name: 'Skype',
  icon: 'skype',
  type: 'app'
},
{
  name: 'Snipping Tool',
  icon: 'snip',
  type: 'app'
},
{
  name: 'Teams',
  icon: 'teams',
  type: 'app'
},
{
  name: 'Terminal',
  icon: 'terminal',
  type: 'app',
  action: 'TERMINAL'
},
{
  name: 'Tips',
  icon: 'tips',
  type: 'app'
},
{
  name: 'To Do',
  icon: 'todo',
  type: 'app'
},
{
  name: 'Maps',
  icon: 'maps',
  type: 'app'
},
{
  name: 'Voice Recorder',
  icon: 'voice',
  type: 'app'
},
{
  name: 'Weather',
  icon: 'weather',
  type: 'app'
},
{
  name: 'White Board',
  icon: 'board',
  type: 'app',
  action: 'WHITEBOARD'
}]

for (var i = 0; i < installed.length; i++) {
  installed[i].action = gene_name()
  apps.push(installed[i])
}

export default apps
