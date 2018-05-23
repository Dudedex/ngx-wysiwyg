import { Component } from '@angular/core';

//Include additional plugin
import '../assets/plugins/save/plugin.min.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public obj = {
    'wysiwyg': '',
    'wysiwygCustom': '',
    'config': {
      selector: '#input_test',
      plugins: ['paste', 'autosave', 'lists', 'autoresize', 'save'],
      theme_js: 'modern',
      width: '100%',
      toolbar1: 'formatselect fontsizeselect  bold italic underline strikethrough | alignleft aligncenter alignright alignjustify',
      fontsize_formats: '8pt 9pt 10pt 11pt 12pt 14pt 18pt 24pt 36pt',
      toolbar2: 'copy cut paste undo redo | bullist numlist | outdent indent | link unlink',
      autoresize_min_height: '160',
      skin_url: '../../assets/skins/lightgray'
    }

  };

  public printCurrentValue() {
    alert(this.obj.wysiwyg);
  }

  public printCurrentCustomValue() {
    alert(this.obj.wysiwygCustom);
  }
}
