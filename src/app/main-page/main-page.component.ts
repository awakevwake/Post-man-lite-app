import {Component, OnInit,AfterContentChecked} from '@angular/core';
import {ActivatedRoute,Params, Router} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {MatDialog} from '@angular/material/dialog';
import {ErrorDialogComponent} from '../error-dialog/error-dialog.component';

export class ErrorType {
	navigationId:string;
	errorCode:string;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{

  private code:string; 
  constructor(private route:ActivatedRoute, private router:Router,private dialog:MatDialog) {}
  errorType = new ErrorType();
  // ngAfterContentChecked(): void {
  //   this.authenticate();
  //   this.route.params.subscribe(params => {
  //     console.log("From Subscribe",params['token']);
  //   });
  // }

  ngOnInit():void{
    this.authenticate();
    
    //ERROR PAGE LOGIC
    this.errorType = window.history.state;
    if(this.errorType.errorCode === 'ERROR36245'){
      console.log("ErrorCode ",this.errorType.errorCode);
      this.openDialog();
    }
    
  }

  openDialog() {
    this.dialog.open(ErrorDialogComponent);
  }
  
  authenticate(){
    // const API_URL = "https://www.oauth.com/playground/auth-dialog.html?response_type=token&client_id=Hb5SQ7vfu_phBkeS1_uo4Pbl&redirect_uri=https://www.oauth.com/playground/implicit.html&scope=photo&state=8RSaXclsayF4_78Y";
    // window.open(API_URL, "_blank");
    this.code=this.route.snapshot.queryParamMap.get('token');
    console.log("From method",this.code);
    
  }
  //strange-camel@example.com
  //Brave-Centipede-41

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}