import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title ='Eduardo'
minhapromise(nome: string) : Promise <string>{
  return new Promise((resolve,  reject) =>{
    if(nome == 'Eduardo'){
      setTimeout(() =>{
        resolve( 'Seje bem vindo '  +  nome)
      },1000)
    }
    
    else{
      reject( 'Ops voce não é o Eduardo!')
    }
  })
}
//chamando a promessa pelo metodo oninit
ngOnInit(): void{
  this.minhapromise( 'Eduardo')
  .then(result => console.log(result))
  .catch(erro => console.log(erro))
}
}
