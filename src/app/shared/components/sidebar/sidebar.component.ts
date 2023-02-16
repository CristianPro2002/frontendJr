import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuToggle: any;
  navigation: any;
  list:any;
  constructor() { }

  ngOnInit(): void {
    this.menuToggle = document.querySelector('.menuToggle');
    this.navigation = document.querySelector('.navigation');

    this.menuToggle.addEventListener('click', () => {
      this.menuToggle.classList.toggle('active');
      this.navigation.classList.toggle('active');
    });
    
    let list = document.querySelectorAll('.list');
    function activeLink(){
      list.forEach((n) => n.classList.remove('active'));
      
    }
  }

}
