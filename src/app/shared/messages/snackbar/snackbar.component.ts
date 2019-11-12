import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { NotificationService } from "app/shared/messages/notification.service";
import {Observable, timer} from 'rxjs'
import {tap, switchMap} from 'rxjs/operators'

@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out')),
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = "Hello There"

  snackVisibility: string = 'hidden'

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    //Subscribe => coloca um listener no observable e só a partir daquele ponto o Observable vai notificar voce
    //do => Permite executar uma ação no momento que chega aquela mensagem naquela cadeia, ele faz parte da configuração...
    //Com o switchMap vc encadeia dois subscribers... e troca o Observable...
    //quando chega uma mensagem e vc manda outra mensagem, ele ve que existe um antigo
    //e faz o unsubscribe do antigo e faz o subscribe do novo com o timer novo
    this.notificationService.notifier
    .pipe(
      tap(message => {
        this.message = message
        this.snackVisibility = 'visible'
      }),
      switchMap(message => timer(3000))
    ).subscribe(timer => this.snackVisibility = 'hidden')

  }


  toggleSnack(){
    this.snackVisibility = this.snackVisibility ==='hidden' ? 'visible' : 'hidden'
  }
}
