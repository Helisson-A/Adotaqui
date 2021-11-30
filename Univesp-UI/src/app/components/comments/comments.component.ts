import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent implements OnInit {

  @Input() title = '';
  @Input() response = '';
  @Input() IdDono = 0;
  @Input() Iduser = 0;
  @Input() IdAnimal = 0;
  @Input() IdComentario = 0;
  @Input() IdDoador = -1;

  constructor(
    private tokenService: TokenService,
    private profileService: ProfileService
  ) { }

    enableReply: boolean = false
    reply: any = ''


  ngOnInit(): void {

  }

  postReply(){
    console.log(this.reply)

    let body = {
      IdAnimal: this.IdAnimal,
      IdDoador: this.IdDoador,
      IdComentario: this.IdComentario,
      Resposta: this.reply,
    }

    this.profileService.PostResposta(body).subscribe( (success: any) => {
        this.response = body.Resposta
    }, error => {
      
    })
  }

}
