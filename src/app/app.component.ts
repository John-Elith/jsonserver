import { Component, OnInit } from '@angular/core';
import { JsonserverService } from './services/jsonserver.service';

export class Post{
  public id: number= 0;
  public imagen!: string
  public titulo!: string
  public detalle!: string
    setdata(data: any){
      this.id = data.id
      this.titulo = data.titulo
      this.detalle = data.detalle
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public post = new Post();
  public posts: Post[] = [];
  title = 'jsonserver';
  constructor(
    public jsons: JsonserverService
  ) {    
    
  }

  oncargar(){
    this.jsons.onLoad().subscribe((res: any)=>{
      this.posts = []
      res.forEach((item: any) => {
        let aux = new Post
        aux.setdata(item)
        this.posts.push(aux)
      });
    });
  }

  ngOnInit(){
    this.oncargar();
  }
  onSave(){
    this.jsons.onCreate(this.post);
    this.oncargar();
  }
}
