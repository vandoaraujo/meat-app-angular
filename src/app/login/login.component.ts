import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {ActivatedRoute, Router} from '@angular/router'
import { LoginService } from "app/login/login.service";
import {User} from './user.model'
import { NotificationService } from "app/shared/messages/notification.service";

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  navigateTo: string

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private notificationService: NotificationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || '/'
  }

  login(){ // 3 callbacks podem ser chamadas, uma pra resposta, uma pra erro e a outra quando o observable terminar...
    this.loginService.login(this.loginForm.value.email,
                            this.loginForm.value.password)
                            .subscribe( user =>
                               this.notificationService.notify(`Bem vindo, ${user.name}`),
                             response => //HttpErrorResponse
                             this.notificationService.notify(response.error.message),
                             ()=>{
                               this.router.navigate([this.navigateTo])
                             })
  }

}
