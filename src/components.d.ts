/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface HcActionsheet {
    'buttons': string;
    'content': string;
    'current': string;
    'init': (option: any) => Promise<HTMLHcActionsheetElement>;
    'titles': string;
  }
  interface HcAffix {}
  interface HcBadge {
    'color': string;
    'renderCss': () => Promise<void>;
    'shape': string;
    'type': string;
  }
  interface HcButton {
    /**
    * 自定义按钮颜色
    */
    'color': string;
    'disabled': boolean;
    'finishloading': () => Promise<void>;
    /**
    * 按钮类型
    */
    'icon': string;
    'loading': () => Promise<void>;
    /**
    * 按钮形状
    */
    'shape': 'default' | 'conner' | 'rounder';
    /**
    * 按钮类型
    */
    'type': 'primary' | 'danger' | 'default';
  }
  interface HcCalendar {
    'choice': number;
    'day': number;
    'end': string;
    'gesture': boolean;
    'init': (option: any) => Promise<HTMLHcCalendarElement>;
    'lunar': boolean;
    'month': number;
    'start': string;
    'type': string;
    'vshape': boolean;
    'watermark': boolean;
    'week': number;
    'weekday': number;
    'year': number;
  }
  interface HcCamera {}
  interface HcCell {
    'arrowDirection': string;
    'iconSize': number;
    'iconUrl': string;
    'label': string;
    'middle': boolean;
    'subject': string;
    'value': string;
  }
  interface HcCheckbox {
    'checked': boolean;
    'color': string;
    'icon': string;
    'shape': string;
    'type': string;
    'value': any;
  }
  interface HcCheckboxGroup {
    'value': string[];
  }
  interface HcCol {
    'flex': number;
    'span': number;
  }
  interface HcCollapse {
    'accordion': boolean;
    'open': any;
  }
  interface HcCollapseItem {
    'arrow': string;
    'name': string;
    'open': boolean;
    'titles': string;
  }
  interface HcDialog {
    /**
    * 内容
    */
    'content': string;
    'destory': (item: any) => Promise<void>;
    'display': () => Promise<void>;
    /**
    * 定时关闭
    */
    'duration': number;
    /**
    * 样式
    */
    'effect': 'zoom' | 'fadeIn';
    /**
    * 底部按钮
    */
    'footer': string;
    /**
    * 已服务的形式调用
    */
    'init': (option: any) => Promise<HTMLHcDialogElement>;
    'placeholder': string;
    /**
    * 标题
    */
    'titles': string;
    /**
    * 类型
    */
    'type': string;
    /**
    * 显示隐藏
    */
    'visible': boolean;
  }
  interface HcDrawer {
    'destory': () => Promise<void>;
    'direction': string;
    'init': () => Promise<void>;
    'mask': boolean;
    'maskClosable': boolean;
    'padding': number;
    'round': boolean;
    'transparent': boolean;
    'visible': boolean;
  }
  interface HcDropdown {}
  interface HcDropdownItem {
    'label': string;
    'option': any;
    'value': any;
  }
  interface HcEcharts {
    'height': number;
  }
  interface HcForm {
    'labelPosition': string;
    'labelWidth': string;
  }
  interface HcFormItem {
    'label': string;
    'labelPosition': string;
    'labelWidth': string;
    'prefixColor': string;
    'prefixIcon': string;
    'prefixSize': number;
    'suffixColor': string;
    'suffixIcon': string;
    'suffixSize': number;
    'tip': string;
    'value': string;
  }
  interface HcIcon {
    'color': string;
    'name': string;
    'size': number;
    'spin': boolean;
  }
  interface HcImage {
    'fit': string;
    'height': string | number;
    'lazy': boolean;
    'src': string;
    'status': number;
    'width': string | number;
  }
  interface HcImagePreview {
    'column': number;
    'current': number;
    'data': any;
    'height': number;
    /**
    * 已服务的形式调用
    */
    'init': () => Promise<void>;
    'space': number;
    'visible': boolean;
    'width': number;
  }
  interface HcImagebox {
    'data': object[];
  }
  interface HcIndexlist {
    'current': string;
    'letters': string;
  }
  interface HcInput {
    'align': string;
    'clearable': boolean;
    'error': string;
    'maxlength': number;
    'minlength': number;
    'placeholder': string;
    'prefixColor': string;
    'prefixIcon': string;
    'suffixColor': string;
    'suffixIcon': string;
    'type': string;
    'value': string;
    'warning': string;
  }
  interface HcKeyboard {
    'init': (option: any) => Promise<HTMLHcKeyboardElement>;
    'tooltip': boolean;
    'type': string;
    'value': string;
    'vibrate': number;
  }
  interface HcNotify {
    'background': string;
    /**
    * (optional) 销毁notify
    */
    'destoryNotify': () => Promise<void>;
    'duration': number;
    'icon': string;
    'iconsize': number;
    /**
    * 已服务的形式调用
    */
    'init': (option: any) => Promise<HTMLHcNotifyElement>;
    'position': string;
    /**
    * (optional) 初始化notify
    */
    'showNotify': () => Promise<void>;
    'spin': boolean;
    'text': string;
    'type': string;
    'visible': boolean;
  }
  interface HcPage {
    'background': string;
    'color': string;
    'headBackground': string;
    'hideHeader': boolean;
    'leftButtons': string;
    'padding': string;
    'rightButtons': string;
    'scrollGo': (pos: number) => Promise<void>;
    'scrolldistance': number;
    'titles': string;
  }
  interface HcPicker {
    'cancelLabel': string;
    'confirmLabel': string;
    'data': any;
    'init': (option: any) => Promise<HTMLHcPickerElement>;
    'itemHeight': number;
    'separate': string;
    'value': string;
    'vis': number;
  }
  interface HcPopover {
    'pos': object;
  }
  interface HcProgress {
    'percent': (percent: number) => Promise<void>;
  }
  interface HcQrcode {}
  interface HcRadio {
    'checked': boolean;
    'color': string;
    'icon': string;
    'name': string;
    'shape': string;
    'type': string;
    'value': any;
  }
  interface HcRadioGroup {
    'name': string;
    'value': string;
  }
  interface HcRefresh_load {}
  interface HcRow {
    'justify': string;
  }
  interface HcSelection {
    'data': string;
    'round': boolean;
    'titles': string;
    'visible': boolean;
  }
  interface HcSignature {
    'backgroundColor': string;
    'penColor': string;
  }
  interface HcSlider {
    'max': number;
    'min': number;
    'step': number;
    'value': number;
  }
  interface HcStepper {
    'max': number;
    'min': number;
    'step': number;
    'value': number;
  }
  interface HcSwiper {
    'autoplay': boolean;
    'current': number;
    'direction': string;
    'duration': number;
    'fit': string;
    'height': number;
    /**
    * 已服务的形式调用
    */
    'init': (option: any) => Promise<HTMLHcSwiperElement>;
    'loop': boolean;
    'width': number;
  }
  interface HcSwiperItem {
    'height': number;
    'width': number;
  }
  interface HcSwitch {
    'value': boolean;
  }
  interface HcTab {
    'align': string;
    'current': number;
    'data': string;
    'indicateWidth': number;
    'show': boolean;
    'showMore': boolean;
  }
  interface HcTabbar {}
  interface HcTag {
    'color': string;
    'renderCss': () => Promise<void>;
    'shape': string;
    'type': string;
  }
  interface HcTextfield {}
  interface HcToast {
    'background': string;
    /**
    * (optional) 销毁toast
    */
    'destoryToast': () => Promise<void>;
    'duration': number;
    /**
    * 已服务的形式调用
    */
    'init': (option: any) => Promise<HTMLHcToastElement>;
    'position': string;
    /**
    * (optional) 初始化toast
    */
    'showToast': () => Promise<void>;
    'text': string;
    'visible': boolean;
  }
}

declare global {


  interface HTMLHcActionsheetElement extends Components.HcActionsheet, HTMLStencilElement {}
  var HTMLHcActionsheetElement: {
    prototype: HTMLHcActionsheetElement;
    new (): HTMLHcActionsheetElement;
  };

  interface HTMLHcAffixElement extends Components.HcAffix, HTMLStencilElement {}
  var HTMLHcAffixElement: {
    prototype: HTMLHcAffixElement;
    new (): HTMLHcAffixElement;
  };

  interface HTMLHcBadgeElement extends Components.HcBadge, HTMLStencilElement {}
  var HTMLHcBadgeElement: {
    prototype: HTMLHcBadgeElement;
    new (): HTMLHcBadgeElement;
  };

  interface HTMLHcButtonElement extends Components.HcButton, HTMLStencilElement {}
  var HTMLHcButtonElement: {
    prototype: HTMLHcButtonElement;
    new (): HTMLHcButtonElement;
  };

  interface HTMLHcCalendarElement extends Components.HcCalendar, HTMLStencilElement {}
  var HTMLHcCalendarElement: {
    prototype: HTMLHcCalendarElement;
    new (): HTMLHcCalendarElement;
  };

  interface HTMLHcCameraElement extends Components.HcCamera, HTMLStencilElement {}
  var HTMLHcCameraElement: {
    prototype: HTMLHcCameraElement;
    new (): HTMLHcCameraElement;
  };

  interface HTMLHcCellElement extends Components.HcCell, HTMLStencilElement {}
  var HTMLHcCellElement: {
    prototype: HTMLHcCellElement;
    new (): HTMLHcCellElement;
  };

  interface HTMLHcCheckboxElement extends Components.HcCheckbox, HTMLStencilElement {}
  var HTMLHcCheckboxElement: {
    prototype: HTMLHcCheckboxElement;
    new (): HTMLHcCheckboxElement;
  };

  interface HTMLHcCheckboxGroupElement extends Components.HcCheckboxGroup, HTMLStencilElement {}
  var HTMLHcCheckboxGroupElement: {
    prototype: HTMLHcCheckboxGroupElement;
    new (): HTMLHcCheckboxGroupElement;
  };

  interface HTMLHcColElement extends Components.HcCol, HTMLStencilElement {}
  var HTMLHcColElement: {
    prototype: HTMLHcColElement;
    new (): HTMLHcColElement;
  };

  interface HTMLHcCollapseElement extends Components.HcCollapse, HTMLStencilElement {}
  var HTMLHcCollapseElement: {
    prototype: HTMLHcCollapseElement;
    new (): HTMLHcCollapseElement;
  };

  interface HTMLHcCollapseItemElement extends Components.HcCollapseItem, HTMLStencilElement {}
  var HTMLHcCollapseItemElement: {
    prototype: HTMLHcCollapseItemElement;
    new (): HTMLHcCollapseItemElement;
  };

  interface HTMLHcDialogElement extends Components.HcDialog, HTMLStencilElement {}
  var HTMLHcDialogElement: {
    prototype: HTMLHcDialogElement;
    new (): HTMLHcDialogElement;
  };

  interface HTMLHcDrawerElement extends Components.HcDrawer, HTMLStencilElement {}
  var HTMLHcDrawerElement: {
    prototype: HTMLHcDrawerElement;
    new (): HTMLHcDrawerElement;
  };

  interface HTMLHcDropdownElement extends Components.HcDropdown, HTMLStencilElement {}
  var HTMLHcDropdownElement: {
    prototype: HTMLHcDropdownElement;
    new (): HTMLHcDropdownElement;
  };

  interface HTMLHcDropdownItemElement extends Components.HcDropdownItem, HTMLStencilElement {}
  var HTMLHcDropdownItemElement: {
    prototype: HTMLHcDropdownItemElement;
    new (): HTMLHcDropdownItemElement;
  };

  interface HTMLHcEchartsElement extends Components.HcEcharts, HTMLStencilElement {}
  var HTMLHcEchartsElement: {
    prototype: HTMLHcEchartsElement;
    new (): HTMLHcEchartsElement;
  };

  interface HTMLHcFormElement extends Components.HcForm, HTMLStencilElement {}
  var HTMLHcFormElement: {
    prototype: HTMLHcFormElement;
    new (): HTMLHcFormElement;
  };

  interface HTMLHcFormItemElement extends Components.HcFormItem, HTMLStencilElement {}
  var HTMLHcFormItemElement: {
    prototype: HTMLHcFormItemElement;
    new (): HTMLHcFormItemElement;
  };

  interface HTMLHcIconElement extends Components.HcIcon, HTMLStencilElement {}
  var HTMLHcIconElement: {
    prototype: HTMLHcIconElement;
    new (): HTMLHcIconElement;
  };

  interface HTMLHcImageElement extends Components.HcImage, HTMLStencilElement {}
  var HTMLHcImageElement: {
    prototype: HTMLHcImageElement;
    new (): HTMLHcImageElement;
  };

  interface HTMLHcImagePreviewElement extends Components.HcImagePreview, HTMLStencilElement {}
  var HTMLHcImagePreviewElement: {
    prototype: HTMLHcImagePreviewElement;
    new (): HTMLHcImagePreviewElement;
  };

  interface HTMLHcImageboxElement extends Components.HcImagebox, HTMLStencilElement {}
  var HTMLHcImageboxElement: {
    prototype: HTMLHcImageboxElement;
    new (): HTMLHcImageboxElement;
  };

  interface HTMLHcIndexlistElement extends Components.HcIndexlist, HTMLStencilElement {}
  var HTMLHcIndexlistElement: {
    prototype: HTMLHcIndexlistElement;
    new (): HTMLHcIndexlistElement;
  };

  interface HTMLHcInputElement extends Components.HcInput, HTMLStencilElement {}
  var HTMLHcInputElement: {
    prototype: HTMLHcInputElement;
    new (): HTMLHcInputElement;
  };

  interface HTMLHcKeyboardElement extends Components.HcKeyboard, HTMLStencilElement {}
  var HTMLHcKeyboardElement: {
    prototype: HTMLHcKeyboardElement;
    new (): HTMLHcKeyboardElement;
  };

  interface HTMLHcNotifyElement extends Components.HcNotify, HTMLStencilElement {}
  var HTMLHcNotifyElement: {
    prototype: HTMLHcNotifyElement;
    new (): HTMLHcNotifyElement;
  };

  interface HTMLHcPageElement extends Components.HcPage, HTMLStencilElement {}
  var HTMLHcPageElement: {
    prototype: HTMLHcPageElement;
    new (): HTMLHcPageElement;
  };

  interface HTMLHcPickerElement extends Components.HcPicker, HTMLStencilElement {}
  var HTMLHcPickerElement: {
    prototype: HTMLHcPickerElement;
    new (): HTMLHcPickerElement;
  };

  interface HTMLHcPopoverElement extends Components.HcPopover, HTMLStencilElement {}
  var HTMLHcPopoverElement: {
    prototype: HTMLHcPopoverElement;
    new (): HTMLHcPopoverElement;
  };

  interface HTMLHcProgressElement extends Components.HcProgress, HTMLStencilElement {}
  var HTMLHcProgressElement: {
    prototype: HTMLHcProgressElement;
    new (): HTMLHcProgressElement;
  };

  interface HTMLHcQrcodeElement extends Components.HcQrcode, HTMLStencilElement {}
  var HTMLHcQrcodeElement: {
    prototype: HTMLHcQrcodeElement;
    new (): HTMLHcQrcodeElement;
  };

  interface HTMLHcRadioElement extends Components.HcRadio, HTMLStencilElement {}
  var HTMLHcRadioElement: {
    prototype: HTMLHcRadioElement;
    new (): HTMLHcRadioElement;
  };

  interface HTMLHcRadioGroupElement extends Components.HcRadioGroup, HTMLStencilElement {}
  var HTMLHcRadioGroupElement: {
    prototype: HTMLHcRadioGroupElement;
    new (): HTMLHcRadioGroupElement;
  };

  interface HTMLHcRefresh_loadElement extends Components.HcRefresh_load, HTMLStencilElement {}
  var HTMLHcRefresh_loadElement: {
    prototype: HTMLHcRefresh_loadElement;
    new (): HTMLHcRefresh_loadElement;
  };

  interface HTMLHcRowElement extends Components.HcRow, HTMLStencilElement {}
  var HTMLHcRowElement: {
    prototype: HTMLHcRowElement;
    new (): HTMLHcRowElement;
  };

  interface HTMLHcSelectionElement extends Components.HcSelection, HTMLStencilElement {}
  var HTMLHcSelectionElement: {
    prototype: HTMLHcSelectionElement;
    new (): HTMLHcSelectionElement;
  };

  interface HTMLHcSignatureElement extends Components.HcSignature, HTMLStencilElement {}
  var HTMLHcSignatureElement: {
    prototype: HTMLHcSignatureElement;
    new (): HTMLHcSignatureElement;
  };

  interface HTMLHcSliderElement extends Components.HcSlider, HTMLStencilElement {}
  var HTMLHcSliderElement: {
    prototype: HTMLHcSliderElement;
    new (): HTMLHcSliderElement;
  };

  interface HTMLHcStepperElement extends Components.HcStepper, HTMLStencilElement {}
  var HTMLHcStepperElement: {
    prototype: HTMLHcStepperElement;
    new (): HTMLHcStepperElement;
  };

  interface HTMLHcSwiperElement extends Components.HcSwiper, HTMLStencilElement {}
  var HTMLHcSwiperElement: {
    prototype: HTMLHcSwiperElement;
    new (): HTMLHcSwiperElement;
  };

  interface HTMLHcSwiperItemElement extends Components.HcSwiperItem, HTMLStencilElement {}
  var HTMLHcSwiperItemElement: {
    prototype: HTMLHcSwiperItemElement;
    new (): HTMLHcSwiperItemElement;
  };

  interface HTMLHcSwitchElement extends Components.HcSwitch, HTMLStencilElement {}
  var HTMLHcSwitchElement: {
    prototype: HTMLHcSwitchElement;
    new (): HTMLHcSwitchElement;
  };

  interface HTMLHcTabElement extends Components.HcTab, HTMLStencilElement {}
  var HTMLHcTabElement: {
    prototype: HTMLHcTabElement;
    new (): HTMLHcTabElement;
  };

  interface HTMLHcTabbarElement extends Components.HcTabbar, HTMLStencilElement {}
  var HTMLHcTabbarElement: {
    prototype: HTMLHcTabbarElement;
    new (): HTMLHcTabbarElement;
  };

  interface HTMLHcTagElement extends Components.HcTag, HTMLStencilElement {}
  var HTMLHcTagElement: {
    prototype: HTMLHcTagElement;
    new (): HTMLHcTagElement;
  };

  interface HTMLHcTextfieldElement extends Components.HcTextfield, HTMLStencilElement {}
  var HTMLHcTextfieldElement: {
    prototype: HTMLHcTextfieldElement;
    new (): HTMLHcTextfieldElement;
  };

  interface HTMLHcToastElement extends Components.HcToast, HTMLStencilElement {}
  var HTMLHcToastElement: {
    prototype: HTMLHcToastElement;
    new (): HTMLHcToastElement;
  };
  interface HTMLElementTagNameMap {
    'hc-actionsheet': HTMLHcActionsheetElement;
    'hc-affix': HTMLHcAffixElement;
    'hc-badge': HTMLHcBadgeElement;
    'hc-button': HTMLHcButtonElement;
    'hc-calendar': HTMLHcCalendarElement;
    'hc-camera': HTMLHcCameraElement;
    'hc-cell': HTMLHcCellElement;
    'hc-checkbox': HTMLHcCheckboxElement;
    'hc-checkbox-group': HTMLHcCheckboxGroupElement;
    'hc-col': HTMLHcColElement;
    'hc-collapse': HTMLHcCollapseElement;
    'hc-collapse-item': HTMLHcCollapseItemElement;
    'hc-dialog': HTMLHcDialogElement;
    'hc-drawer': HTMLHcDrawerElement;
    'hc-dropdown': HTMLHcDropdownElement;
    'hc-dropdown-item': HTMLHcDropdownItemElement;
    'hc-echarts': HTMLHcEchartsElement;
    'hc-form': HTMLHcFormElement;
    'hc-form-item': HTMLHcFormItemElement;
    'hc-icon': HTMLHcIconElement;
    'hc-image': HTMLHcImageElement;
    'hc-image-preview': HTMLHcImagePreviewElement;
    'hc-imagebox': HTMLHcImageboxElement;
    'hc-indexlist': HTMLHcIndexlistElement;
    'hc-input': HTMLHcInputElement;
    'hc-keyboard': HTMLHcKeyboardElement;
    'hc-notify': HTMLHcNotifyElement;
    'hc-page': HTMLHcPageElement;
    'hc-picker': HTMLHcPickerElement;
    'hc-popover': HTMLHcPopoverElement;
    'hc-progress': HTMLHcProgressElement;
    'hc-qrcode': HTMLHcQrcodeElement;
    'hc-radio': HTMLHcRadioElement;
    'hc-radio-group': HTMLHcRadioGroupElement;
    'hc-refresh_load': HTMLHcRefresh_loadElement;
    'hc-row': HTMLHcRowElement;
    'hc-selection': HTMLHcSelectionElement;
    'hc-signature': HTMLHcSignatureElement;
    'hc-slider': HTMLHcSliderElement;
    'hc-stepper': HTMLHcStepperElement;
    'hc-swiper': HTMLHcSwiperElement;
    'hc-swiper-item': HTMLHcSwiperItemElement;
    'hc-switch': HTMLHcSwitchElement;
    'hc-tab': HTMLHcTabElement;
    'hc-tabbar': HTMLHcTabbarElement;
    'hc-tag': HTMLHcTagElement;
    'hc-textfield': HTMLHcTextfieldElement;
    'hc-toast': HTMLHcToastElement;
  }
}

declare namespace LocalJSX {
  interface HcActionsheet {
    'buttons'?: string;
    'content'?: string;
    'current'?: string;
    'onVchange'?: (event: CustomEvent<any>) => void;
    'onVclick'?: (event: CustomEvent<any>) => void;
    'titles'?: string;
  }
  interface HcAffix {}
  interface HcBadge {
    'color'?: string;
    'shape'?: string;
    'type'?: string;
  }
  interface HcButton {
    /**
    * 自定义按钮颜色
    */
    'color'?: string;
    'disabled'?: boolean;
    /**
    * 按钮类型
    */
    'icon'?: string;
    'onVclick'?: (event: CustomEvent<any>) => void;
    /**
    * 按钮形状
    */
    'shape'?: 'default' | 'conner' | 'rounder';
    /**
    * 按钮类型
    */
    'type'?: 'primary' | 'danger' | 'default';
  }
  interface HcCalendar {
    'choice'?: number;
    'day'?: number;
    'end'?: string;
    'gesture'?: boolean;
    'lunar'?: boolean;
    'month'?: number;
    'start'?: string;
    'type'?: string;
    'vshape'?: boolean;
    'watermark'?: boolean;
    'week'?: number;
    'weekday'?: number;
    'year'?: number;
  }
  interface HcCamera {}
  interface HcCell {
    'arrowDirection'?: string;
    'iconSize'?: number;
    'iconUrl'?: string;
    'label'?: string;
    'middle'?: boolean;
    'subject'?: string;
    'value'?: string;
  }
  interface HcCheckbox {
    'checked'?: boolean;
    'color'?: string;
    'icon'?: string;
    'onVchange'?: (event: CustomEvent<any>) => void;
    'shape'?: string;
    'type'?: string;
    'value'?: any;
  }
  interface HcCheckboxGroup {
    'onVichange'?: (event: CustomEvent<any>) => void;
    'value'?: string[];
  }
  interface HcCol {
    'flex'?: number;
    'span'?: number;
  }
  interface HcCollapse {
    'accordion'?: boolean;
    'open'?: any;
  }
  interface HcCollapseItem {
    'arrow'?: string;
    'name'?: string;
    'onVchange'?: (event: CustomEvent<any>) => void;
    'open'?: boolean;
    'titles'?: string;
  }
  interface HcDialog {
    /**
    * 内容
    */
    'content'?: string;
    /**
    * 定时关闭
    */
    'duration'?: number;
    /**
    * 样式
    */
    'effect'?: 'zoom' | 'fadeIn';
    /**
    * 底部按钮
    */
    'footer'?: string;
    'onVdestory'?: (event: CustomEvent<any>) => void;
    'placeholder'?: string;
    /**
    * 标题
    */
    'titles'?: string;
    /**
    * 类型
    */
    'type'?: string;
    /**
    * 显示隐藏
    */
    'visible'?: boolean;
  }
  interface HcDrawer {
    'direction'?: string;
    'mask'?: boolean;
    'maskClosable'?: boolean;
    'padding'?: number;
    'round'?: boolean;
    'transparent'?: boolean;
    'visible'?: boolean;
  }
  interface HcDropdown {}
  interface HcDropdownItem {
    'label'?: string;
    'option'?: any;
    'value'?: any;
  }
  interface HcEcharts {
    'height'?: number;
  }
  interface HcForm {
    'labelPosition'?: string;
    'labelWidth'?: string;
  }
  interface HcFormItem {
    'label'?: string;
    'labelPosition'?: string;
    'labelWidth'?: string;
    'prefixColor'?: string;
    'prefixIcon'?: string;
    'prefixSize'?: number;
    'suffixColor'?: string;
    'suffixIcon'?: string;
    'suffixSize'?: number;
    'tip'?: string;
    'value'?: string;
  }
  interface HcIcon {
    'color'?: string;
    'name'?: string;
    'size'?: number;
    'spin'?: boolean;
  }
  interface HcImage {
    'fit'?: string;
    'height'?: string | number;
    'lazy'?: boolean;
    'src'?: string;
    'status'?: number;
    'width'?: string | number;
  }
  interface HcImagePreview {
    'column'?: number;
    'current'?: number;
    'data'?: any;
    'height'?: number;
    'space'?: number;
    'visible'?: boolean;
    'width'?: number;
  }
  interface HcImagebox {
    'data'?: object[];
  }
  interface HcIndexlist {
    'current'?: string;
    'letters'?: string;
  }
  interface HcInput {
    'align'?: string;
    'clearable'?: boolean;
    'error'?: string;
    'maxlength'?: number;
    'minlength'?: number;
    'placeholder'?: string;
    'prefixColor'?: string;
    'prefixIcon'?: string;
    'suffixColor'?: string;
    'suffixIcon'?: string;
    'type'?: string;
    'value'?: string;
    'warning'?: string;
  }
  interface HcKeyboard {
    'onVchange'?: (event: CustomEvent<any>) => void;
    'onVfinish'?: (event: CustomEvent<any>) => void;
    'onVhide'?: (event: CustomEvent<any>) => void;
    'tooltip'?: boolean;
    'type'?: string;
    'value'?: string;
    'vibrate'?: number;
  }
  interface HcNotify {
    'background'?: string;
    'duration'?: number;
    'icon'?: string;
    'iconsize'?: number;
    'position'?: string;
    'spin'?: boolean;
    'text'?: string;
    'type'?: string;
    'visible'?: boolean;
  }
  interface HcPage {
    'background'?: string;
    'color'?: string;
    'headBackground'?: string;
    'hideHeader'?: boolean;
    'leftButtons'?: string;
    'onVclick'?: (event: CustomEvent<any>) => void;
    'onVscroll'?: (event: CustomEvent<any>) => void;
    'padding'?: string;
    'rightButtons'?: string;
    'scrolldistance'?: number;
    'titles'?: string;
  }
  interface HcPicker {
    'cancelLabel'?: string;
    'confirmLabel'?: string;
    'data'?: any;
    'itemHeight'?: number;
    'onVchange'?: (event: CustomEvent<any>) => void;
    'onVclick'?: (event: CustomEvent<any>) => void;
    'separate'?: string;
    'value'?: string;
    'vis'?: number;
  }
  interface HcPopover {
    'pos'?: object;
  }
  interface HcProgress {}
  interface HcQrcode {}
  interface HcRadio {
    'checked'?: boolean;
    'color'?: string;
    'icon'?: string;
    'name'?: string;
    'onVchange'?: (event: CustomEvent<any>) => void;
    'shape'?: string;
    'type'?: string;
    'value'?: any;
  }
  interface HcRadioGroup {
    'name'?: string;
    'onVichange'?: (event: CustomEvent<any>) => void;
    'value'?: string;
  }
  interface HcRefresh_load {}
  interface HcRow {
    'justify'?: string;
  }
  interface HcSelection {
    'data'?: string;
    'round'?: boolean;
    'titles'?: string;
    'visible'?: boolean;
  }
  interface HcSignature {
    'backgroundColor'?: string;
    'penColor'?: string;
  }
  interface HcSlider {
    'max'?: number;
    'min'?: number;
    'onVchange'?: (event: CustomEvent<any>) => void;
    'step'?: number;
    'value'?: number;
  }
  interface HcStepper {
    'max'?: number;
    'min'?: number;
    'step'?: number;
    'value'?: number;
  }
  interface HcSwiper {
    'autoplay'?: boolean;
    'current'?: number;
    'direction'?: string;
    'duration'?: number;
    'fit'?: string;
    'height'?: number;
    'loop'?: boolean;
    'onVchange'?: (event: CustomEvent<any>) => void;
    'width'?: number;
  }
  interface HcSwiperItem {
    'height'?: number;
    'width'?: number;
  }
  interface HcSwitch {
    'value'?: boolean;
  }
  interface HcTab {
    'align'?: string;
    'current'?: number;
    'data'?: string;
    'indicateWidth'?: number;
    'show'?: boolean;
    'showMore'?: boolean;
  }
  interface HcTabbar {}
  interface HcTag {
    'color'?: string;
    'shape'?: string;
    'type'?: string;
  }
  interface HcTextfield {}
  interface HcToast {
    'background'?: string;
    'duration'?: number;
    'position'?: string;
    'text'?: string;
    'visible'?: boolean;
  }

  interface IntrinsicElements {
    'hc-actionsheet': HcActionsheet;
    'hc-affix': HcAffix;
    'hc-badge': HcBadge;
    'hc-button': HcButton;
    'hc-calendar': HcCalendar;
    'hc-camera': HcCamera;
    'hc-cell': HcCell;
    'hc-checkbox': HcCheckbox;
    'hc-checkbox-group': HcCheckboxGroup;
    'hc-col': HcCol;
    'hc-collapse': HcCollapse;
    'hc-collapse-item': HcCollapseItem;
    'hc-dialog': HcDialog;
    'hc-drawer': HcDrawer;
    'hc-dropdown': HcDropdown;
    'hc-dropdown-item': HcDropdownItem;
    'hc-echarts': HcEcharts;
    'hc-form': HcForm;
    'hc-form-item': HcFormItem;
    'hc-icon': HcIcon;
    'hc-image': HcImage;
    'hc-image-preview': HcImagePreview;
    'hc-imagebox': HcImagebox;
    'hc-indexlist': HcIndexlist;
    'hc-input': HcInput;
    'hc-keyboard': HcKeyboard;
    'hc-notify': HcNotify;
    'hc-page': HcPage;
    'hc-picker': HcPicker;
    'hc-popover': HcPopover;
    'hc-progress': HcProgress;
    'hc-qrcode': HcQrcode;
    'hc-radio': HcRadio;
    'hc-radio-group': HcRadioGroup;
    'hc-refresh_load': HcRefresh_load;
    'hc-row': HcRow;
    'hc-selection': HcSelection;
    'hc-signature': HcSignature;
    'hc-slider': HcSlider;
    'hc-stepper': HcStepper;
    'hc-swiper': HcSwiper;
    'hc-swiper-item': HcSwiperItem;
    'hc-switch': HcSwitch;
    'hc-tab': HcTab;
    'hc-tabbar': HcTabbar;
    'hc-tag': HcTag;
    'hc-textfield': HcTextfield;
    'hc-toast': HcToast;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'hc-actionsheet': LocalJSX.HcActionsheet & JSXBase.HTMLAttributes<HTMLHcActionsheetElement>;
      'hc-affix': LocalJSX.HcAffix & JSXBase.HTMLAttributes<HTMLHcAffixElement>;
      'hc-badge': LocalJSX.HcBadge & JSXBase.HTMLAttributes<HTMLHcBadgeElement>;
      'hc-button': LocalJSX.HcButton & JSXBase.HTMLAttributes<HTMLHcButtonElement>;
      'hc-calendar': LocalJSX.HcCalendar & JSXBase.HTMLAttributes<HTMLHcCalendarElement>;
      'hc-camera': LocalJSX.HcCamera & JSXBase.HTMLAttributes<HTMLHcCameraElement>;
      'hc-cell': LocalJSX.HcCell & JSXBase.HTMLAttributes<HTMLHcCellElement>;
      'hc-checkbox': LocalJSX.HcCheckbox & JSXBase.HTMLAttributes<HTMLHcCheckboxElement>;
      'hc-checkbox-group': LocalJSX.HcCheckboxGroup & JSXBase.HTMLAttributes<HTMLHcCheckboxGroupElement>;
      'hc-col': LocalJSX.HcCol & JSXBase.HTMLAttributes<HTMLHcColElement>;
      'hc-collapse': LocalJSX.HcCollapse & JSXBase.HTMLAttributes<HTMLHcCollapseElement>;
      'hc-collapse-item': LocalJSX.HcCollapseItem & JSXBase.HTMLAttributes<HTMLHcCollapseItemElement>;
      'hc-dialog': LocalJSX.HcDialog & JSXBase.HTMLAttributes<HTMLHcDialogElement>;
      'hc-drawer': LocalJSX.HcDrawer & JSXBase.HTMLAttributes<HTMLHcDrawerElement>;
      'hc-dropdown': LocalJSX.HcDropdown & JSXBase.HTMLAttributes<HTMLHcDropdownElement>;
      'hc-dropdown-item': LocalJSX.HcDropdownItem & JSXBase.HTMLAttributes<HTMLHcDropdownItemElement>;
      'hc-echarts': LocalJSX.HcEcharts & JSXBase.HTMLAttributes<HTMLHcEchartsElement>;
      'hc-form': LocalJSX.HcForm & JSXBase.HTMLAttributes<HTMLHcFormElement>;
      'hc-form-item': LocalJSX.HcFormItem & JSXBase.HTMLAttributes<HTMLHcFormItemElement>;
      'hc-icon': LocalJSX.HcIcon & JSXBase.HTMLAttributes<HTMLHcIconElement>;
      'hc-image': LocalJSX.HcImage & JSXBase.HTMLAttributes<HTMLHcImageElement>;
      'hc-image-preview': LocalJSX.HcImagePreview & JSXBase.HTMLAttributes<HTMLHcImagePreviewElement>;
      'hc-imagebox': LocalJSX.HcImagebox & JSXBase.HTMLAttributes<HTMLHcImageboxElement>;
      'hc-indexlist': LocalJSX.HcIndexlist & JSXBase.HTMLAttributes<HTMLHcIndexlistElement>;
      'hc-input': LocalJSX.HcInput & JSXBase.HTMLAttributes<HTMLHcInputElement>;
      'hc-keyboard': LocalJSX.HcKeyboard & JSXBase.HTMLAttributes<HTMLHcKeyboardElement>;
      'hc-notify': LocalJSX.HcNotify & JSXBase.HTMLAttributes<HTMLHcNotifyElement>;
      'hc-page': LocalJSX.HcPage & JSXBase.HTMLAttributes<HTMLHcPageElement>;
      'hc-picker': LocalJSX.HcPicker & JSXBase.HTMLAttributes<HTMLHcPickerElement>;
      'hc-popover': LocalJSX.HcPopover & JSXBase.HTMLAttributes<HTMLHcPopoverElement>;
      'hc-progress': LocalJSX.HcProgress & JSXBase.HTMLAttributes<HTMLHcProgressElement>;
      'hc-qrcode': LocalJSX.HcQrcode & JSXBase.HTMLAttributes<HTMLHcQrcodeElement>;
      'hc-radio': LocalJSX.HcRadio & JSXBase.HTMLAttributes<HTMLHcRadioElement>;
      'hc-radio-group': LocalJSX.HcRadioGroup & JSXBase.HTMLAttributes<HTMLHcRadioGroupElement>;
      'hc-refresh_load': LocalJSX.HcRefresh_load & JSXBase.HTMLAttributes<HTMLHcRefresh_loadElement>;
      'hc-row': LocalJSX.HcRow & JSXBase.HTMLAttributes<HTMLHcRowElement>;
      'hc-selection': LocalJSX.HcSelection & JSXBase.HTMLAttributes<HTMLHcSelectionElement>;
      'hc-signature': LocalJSX.HcSignature & JSXBase.HTMLAttributes<HTMLHcSignatureElement>;
      'hc-slider': LocalJSX.HcSlider & JSXBase.HTMLAttributes<HTMLHcSliderElement>;
      'hc-stepper': LocalJSX.HcStepper & JSXBase.HTMLAttributes<HTMLHcStepperElement>;
      'hc-swiper': LocalJSX.HcSwiper & JSXBase.HTMLAttributes<HTMLHcSwiperElement>;
      'hc-swiper-item': LocalJSX.HcSwiperItem & JSXBase.HTMLAttributes<HTMLHcSwiperItemElement>;
      'hc-switch': LocalJSX.HcSwitch & JSXBase.HTMLAttributes<HTMLHcSwitchElement>;
      'hc-tab': LocalJSX.HcTab & JSXBase.HTMLAttributes<HTMLHcTabElement>;
      'hc-tabbar': LocalJSX.HcTabbar & JSXBase.HTMLAttributes<HTMLHcTabbarElement>;
      'hc-tag': LocalJSX.HcTag & JSXBase.HTMLAttributes<HTMLHcTagElement>;
      'hc-textfield': LocalJSX.HcTextfield & JSXBase.HTMLAttributes<HTMLHcTextfieldElement>;
      'hc-toast': LocalJSX.HcToast & JSXBase.HTMLAttributes<HTMLHcToastElement>;
    }
  }
}


