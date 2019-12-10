import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.page.html',
  styleUrls: ['./fullscreen.page.scss'],
})
export class FullscreenPage implements OnInit {
 
  pic={
    downloadURL:"",
}
  constructor(private route:ActivatedRoute,
    ) {
    
    this.route.queryParams
    .subscribe(params => {
      this.pic.downloadURL = params.downloadURL;
      console.log(this.pic.downloadURL)
    });
   }

  ngOnInit() {
  }
}
