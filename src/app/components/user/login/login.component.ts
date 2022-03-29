import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { SessionServiceService } from 'src/app/shared/services/session-service.service';
import { UserService } from 'src/app/shared/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailPattern:any = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

  constructor(private userSvc: UserService, private sesion:SessionServiceService, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
    pass: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.get('email');
  }

  get pass(){
    return this.loginForm.get('pass');
  }

  onLogin(user:User){

    if(this.loginForm.valid){

      this.userSvc.onLogin(user).subscribe((res: any) => {
        console.log(res)
        if (res.data.ok) {
          this.sesion.agregarSesion('token', res.data.token)
          this.userSvc.dataUser = res.data
          this.loginForm.reset();
          this.router.navigate(['/map2']);
        } else {
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
        };
      })
    }else{
      console.log('No valid');
    }

  }

}
