import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {
  @Input() user: any;
  imgUrl: string;
  firstName: string;
  email: string;
  id: number;
  constructor() {
    this.imgUrl = '';
    this.firstName = '';
    this.email = '';
    this.id = 0;
  }

  ngOnInit(): void {
    this.firstName =  this.user.name;
    this.email = this.user.email;
    this.imgUrl = 'https://estacion40.com.py/wp-content/uploads/2021/01/manuel-e1611145432597.jpg';
    this.id = this.user.id;    
  }

}
