import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-to-top',
  templateUrl: './btn-to-top.component.html',
  styleUrls: ['./btn-to-top.component.css']
})
export class BtnToTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
//button to top


window.addEventListener("scroll", () => {
  var toTop = document.querySelector(".go-to-top");
  if (window.pageYOffset > 700) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active")
  }
})
