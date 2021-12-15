import { Component } from '@angular/core';
import { GiftListItemCreate } from 'src/app/models';
import { GiftDataService } from 'src/app/services/gift-data.service';

@Component({
  selector: 'app-gift-giving',
  templateUrl: './gift-giving.component.html',
  styleUrls: ['./gift-giving.component.css']
})
export class GiftGivingComponent {
  private currentId = 4;
  data$ = this.service.getData();

  constructor(private service: GiftDataService) { }

  addGiftItem(item: GiftListItemCreate) {
    this.service.addData(item);
  }
}
