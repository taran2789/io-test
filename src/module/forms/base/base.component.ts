/**
 * Created by dattaram on 15/11/18.
 */


import { Renderer2, ChangeDetectorRef, ElementRef } from "@angular/core";

export abstract class  ListBaseComponent<T>{

  self : boolean  = false;
  itemClick : boolean  = false;
  dropdownstyle : any;
  documentClickListener : any;

  constructor(public renderer : Renderer2, public element: ElementRef,public cd: ChangeDetectorRef){
    this.hide();
  }

  baseFocus(event : any){
    this.self = true;
    this.dropdownstyle = {'visibility': 'visible'};
    this.bindDocumentClickListener();
  }

  baseBlur(event: any){
    this.itemClicked();
  }


  itemClicked(){
    this.itemClick = true;
    this.hide();
    this.unbindDocumentClickListener();
    this.clearClicks();
  }

  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.documentClickListener = this.renderer
        .listen('document', 'click', (event:any) => this.handleDocumentListener(event));

    }

  }

  handleDocumentListener(event : any){
    if (!this.self && !this.itemClick) {
      this.hide();
      this.unbindDocumentClickListener();
    }

    this.clearClicks();
    this.cd.markForCheck();
  }

  clearClicks(){
    this.self = false;
    this.itemClick = false;
  }

  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }

  }

  hide() {
    this.dropdownstyle = {'visibility': 'hidden'};
  }
}
