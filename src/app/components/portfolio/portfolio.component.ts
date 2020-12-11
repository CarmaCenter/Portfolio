import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var Btn = document.querySelector("#show-hide-id");
    Btn.addEventListener("click",()=>{
    let showHide = document.getElementById("show-hide-portfolio");
    showHide.classList.toggle("show-hide-portfolio")
    })

// Add active class to the current button (highlight it)
var btns = document.querySelectorAll("#myBtnContainer .btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
$(this).addClass("active").siblings().removeClass("active");
  });
}
  }

}
