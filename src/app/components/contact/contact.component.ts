import { AfterContentInit, AfterViewInit, Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit, OnInit {

  constructor() {

  }
ngOnInit(){

}
  ngAfterViewInit() {
    $("#my-form").submit(function(e) {
      e.preventDefault();

      var $form = $(this);
      $.post($form.attr("action"), $form.serialize()).then(function() {
        alert("Thank you!");
      });
    });
  }

}
