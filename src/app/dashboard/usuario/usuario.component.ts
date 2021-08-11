import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id = 0;
  firstName = '';
  email = '';
  urlImg = '';
  gender = '';
  loading = true;
  constructor(private aRoute: ActivatedRoute, private _usuarioService: UsuarioService) {
    this.id = +this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario(): void{
    this._usuarioService.getUsuario(this.id).subscribe(data => {
      this.firstName = data.data.name;
      this.email = data.data.email;
      this.gender = data.data.gender;
      this.urlImg = 'https://www.elpais.com.co/files/article_main/files/crop/uploads/2019/10/07/5d9c0183abbc5.r_1570553039339.0-607-1333-1409.jpeg'     
      this.loading = false;  
    })
  }

}
