import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public imageURL: string;
  emailPattern:any = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

  constructor(private userSvc: UserService, private router: Router) {

    this.imageURL="https://cuanticaconsulting.com/wp-content/uploads/2018/12/Cuantica-Consulting-Mundo-3C-Continuo-Cambio-Creativo-Large-1080x675.jpeg"

  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
    pass: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
  }

  onLogin(user:User){

    if(this.loginForm.valid){


      if(this.userSvc.onLogin(user)){

        this.loginForm.reset();
        this.router.navigate(['/map']);

      }else if(!this.userSvc.onLogin(user)){
          Swal.fire({
            title: 'Ingreso inválido',
            html:
           'Usuario: <b>Silva@prueba.com</b> <br>' +
           'Clave: <b>12345678</br>' ,
            position: 'center',
            icon: 'error',
            showConfirmButton: true,
            confirmButtonText: 'Ok',
            width:'25%',
            heightAuto:true
                   });
      }

    }else{
      console.log('No valid');
    }

  }

  get email(){
    return this.loginForm.get('email');
  }

  get pass(){
    return this.loginForm.get('pass');
  }

}
