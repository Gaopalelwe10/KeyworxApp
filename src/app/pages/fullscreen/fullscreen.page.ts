import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.page.html',
  styleUrls: ['./fullscreen.page.scss'],
})
export class FullscreenPage implements OnInit {
  propertyid;
  imageList: any;
  items={
  propertyid:""
}
  constructor(private route:ActivatedRoute,
    private propertyService: PropertyService,
    ) {
    //   this.propertyService.imageList(this.propertyid).subscribe((data)=>{
    //     this.imageList = data.map(e => {
    //       return {
    //         key: e.payload.doc.id,
    //         ...e.payload.doc.data()
    //       }
    //     })
    //     console.log(this.imageList);
    //   })

    // this.route.queryParams
    // .subscribe(params => {
    //   this.items.propertyid = params.propertyid;
    //   console.log(this.items.propertyid)
    // });
   }

  ngOnInit() {
 
  }

}
