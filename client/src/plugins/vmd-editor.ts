import VMdEditor from '@cpaanalytics/v-md-editor/lib/codemirror-editor';
import '@cpaanalytics/v-md-editor/lib/style/codemirror-editor.css';
import vuepressTheme from '@cpaanalytics/v-md-editor/lib/theme/vuepress';
import '@cpaanalytics/v-md-editor/lib/theme/style/vuepress.css';
import enUS from '@cpaanalytics/v-md-editor/lib/lang/en-US';
import createTodoListPlugin from '@cpaanalytics/v-md-editor/lib/plugins/todo-list/index';
import '@cpaanalytics/v-md-editor/lib/plugins/todo-list/todo-list.css';
import Prism from 'prismjs';


import Codemirror from 'codemirror';
// mode
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/yaml/yaml';
import 'codemirror/mode/vue/vue';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/shell/shell';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/python/python';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/vue/vue';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint';
// edit
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/matchbrackets';
// placeholder
import 'codemirror/addon/display/placeholder';
// active-line
import 'codemirror/addon/selection/active-line';
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
// style
import 'codemirror/lib/codemirror.css';

export default function registerVMdEditor() {
  VMdEditor.Codemirror = Codemirror;
  VMdEditor.use(vuepressTheme, {
    Prism
  });
  VMdEditor.use(createTodoListPlugin());

  VMdEditor.lang.use('en-US', enUS)
  return VMdEditor;
}
