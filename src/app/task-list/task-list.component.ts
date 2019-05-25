import { Component } from '@angular/core';



@Component({  //decorator - torna a classe um componente
  selector: 'app-task-list', //nome da TAG do componente
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],

})
export class TaskListComponent {
  postagem = [ { id:0, texto:"", comentarios:[] } ];
  comentario = "";
  postagens = [];

  //private fotoPostagem =  "perfil.png" ;
  //private fotoComentario =  "perfil2.png";

  /*postagens = [

    {
      id: 1, 
      texto:"Primeira postagem", 
      comentarios: [
        "Legal... muito bom",
        "Muito interessante",
        "Magnífico",
        "Não achei legal"
      ]
    },
    {
      id: 2, 
      texto: "Segunda postagem",
      comentarios: [
        "Humm...  bom",
        "Ruim...",
        "Fenomenal...",
        "Show de bola"
      ]
    }
  ];*/
  
  comentar(postagem) {
      let indice =  this.postagens.indexOf(postagem);
      this.postagens[indice].comentarios.push(postagem.comentario);
      //console.log(indice , postagem.comentario)  ;
      console.log(this.postagens[indice]);
      postagem.comentario = "";

  }

  postar(postagem) {
    let id = this.postagens.length +1;
    postagem.id = id;
    console.log(postagem);
    this.postagens.push(postagem);
    postagem.comentarios = [];
    this.postagem = [];
    
  }
}
