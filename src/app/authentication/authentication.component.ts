import { Component, AfterContentChecked, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  private code:string | null; 
  private cache:string | null; 
  constructor(private route:ActivatedRoute, private router:Router, private http:HttpClient) { }


  private GET_URL:string = "https://www.oauth.com/playground/auth-dialog.html?response_type=token&client_id=Hb5SQ7vfu_phBkeS1_uo4Pbl&redirect_uri=https://www.oauth.com/playground/implicit.html&scope=photo&state=";
//strange-camel@example.com
  //Brave-Centipede-41
  //ngAfterContentChecked(): void {

  ngOnInit():void{
    this.code = this.getToken();
    if(!this.isEmpty(this.code) && this.code != this.cache){
      this.cache = this.code;
      this.code = "E81Od1I4PlZuGWhc";
      console.log("Code : " , this.code)
      console.log("Code : " , this.http.get(this.GET_URL+"this.code"));
    }
    console.log("Cache : " , this.cache)
  }

  navigateToHomeWithErrorState(){
    this.router.navigate(['/home'],{ state: { errorCode: "ERROR36245" } })
  }

  getToken():string{

    return this.route.snapshot.queryParamMap.get('token');
  }

  isEmpty(str) {
    return (!str || str.length === 0 );
  }
}
