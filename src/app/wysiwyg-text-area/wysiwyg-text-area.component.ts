import {Component, AfterViewInit, OnDestroy, forwardRef, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

//Tinymce stuff
import '../../assets/theme.min.js';
import '../../assets/plugins/paste/plugin.min.js';
import '../../assets/plugins/autosave/plugin.min.js';
import '../../assets/plugins/lists/plugin.min.js';
import '../../assets/plugins/autoresize/plugin.min.js';
import '../../assets/plugins/link/plugin.min.js';

let ngx_wysiwyg_uuid:number = 0;
let firstInit = false;

@Component({
  selector: 'app-wysiwyg-text-area',
  templateUrl: './wysiwyg-text-area.component.html',
  styleUrls: [
    './wysiwyg-text-area.component.scss',
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => WysiwygTextAreaComponent),
    multi: true
  }]
})
export class WysiwygTextAreaComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {

  private _value:string;
  private _ownUuid:number;
  private editor:any;
  private initialized = false;

  @Input() configObject: any;
  @Input() customCss = 'input-block-level tall';

  onChange = (value:string) => {
  }

  onTouched = () => {
  }

  ngAfterViewInit():void {
    if (tinymce) {
      if (this.configObject) {
        this.configObject.selector = '#input_' + this._ownUuid;
        this.configObject.setup = editor => {
          editor.on('keyup change', () => {
            const content = editor.getContent();
            this.onChange(content);
          });
          this.editor = editor;
        };
        this.configObject.init_instance_callback = () => {
          firstInit = true;
        };
        tinymce.init(this.configObject);
      } else {
        tinymce.init({
          selector: '#input_' + this._ownUuid,
          plugins: ['paste', 'autosave', 'lists', 'link', 'autoresize'],
          theme_js: 'modern',
          width: '100%',
          toolbar1: 'formatselect fontsizeselect  bold italic underline strikethrough | alignleft aligncenter alignright alignjustify',
          fontsize_formats: '8pt 9pt 10pt 11pt 12pt 14pt 18pt 24pt 36pt',
          toolbar2: 'copy cut paste undo redo | bullist numlist | outdent indent | link unlink',
          autoresize_min_height: '160',
          skin_url: '../../assets/skins/lightgray',
          setup: editor => {
            editor.on('keyup change', () => {
              const content = editor.getContent();
              this.onChange(content);
            });
            this.editor = editor;
          },
          init_instance_callback: () => {
            firstInit = true;
          }
        });
      }
    }
  }

  ngOnDestroy():void {
    tinymce.remove(this.editor);
  }

  get ownUuid():number {
    return this._ownUuid;
  }

  get value():string {
    return this._value;
  }

  set value(value:string) {
    this._value = value;
  }

  writeValue(value:string):void {
    this._value = value;
    if (this.editor && firstInit) {
      this.editor.setContent(this._value);
    }
    this.onChange(this._value);
  }

  registerOnChange(fn:(value:string) => void):void {
    this.onChange = fn;
  }

  registerOnTouched(fn:() => void):void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled:boolean):void {
    // needed?
  }

  constructor() {
    ngx_wysiwyg_uuid += 1;
    this._ownUuid = ngx_wysiwyg_uuid;
  }

}
