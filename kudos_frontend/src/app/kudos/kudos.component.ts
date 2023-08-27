import { Component } from '@angular/core';
import { KudoService } from '../services/kudo.service';

@Component({
  selector: 'app-kudos',
  templateUrl: './kudos.component.html',
  styleUrls: ['./kudos.component.scss']
})
export class KudosComponent {
  kudoId:string | undefined;
  public kudos:any;
  edit = ''; 

  kudoData = { 
    date:'', 
    text: '', 
    category: '', 
    img_url: '', 
    gif_url: '', 
    personal_notes: '', 
    user_id: '1', 
    timestamps: ''
  }

  constructor(private kudoService:KudoService) { }

  ngOnInit(): void {
    // get all kudos by user ID
    this.kudoService.getKudosByUserId() 
    .subscribe(response => {
      this.kudos = response;
    })
  }

  public editKudo(kudoId: string) {
    this.edit = kudoId; 
  }

  public showHide() {
    this.edit = '';
  }

  // update kudo by kudo ID
  public updateKudo = (kudoId: any) => {
    this.kudoService.updateKudosById(kudoId, this.kudoData).subscribe(data => data);
  }

  // update kudo by kudo ID
  public deleteKudo = (kudoId:string) => {
    this.kudoService.deleteKudosById(kudoId).subscribe(data => data)
  }

  // post a new kudo (user ID required)
  public newKudoPost() {
    this.kudoService.postNewKudo(this.kudoData)
      .subscribe(data => data)
  }

  onUpdate(event: Event) {
    this.kudoData.text = (<HTMLInputElement>event.target).value; 
  }

  receiveImage($event: any) {
    this.kudoData.img_url = $event;
  }
}
