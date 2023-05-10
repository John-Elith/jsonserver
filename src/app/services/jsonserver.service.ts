import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonserverService {

  constructor(
    public http: HttpClient
  ) { }

  onCreate(post: any){
    this.http.post('http://localhost:3000/posts', post).subscribe((res)=>{
      console.log(res);
    })
  }

  onLoad(){
    return this.http.get('http://localhost:3000/posts');
  }
}