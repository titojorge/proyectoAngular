import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios</h3>
    <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/01/meme-perro-fine-2928042.jpg" alt=""/>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias odit rerum possimus quam nostrum hic earum facilis in, est officia blanditiis culpa non tempora velit ratione ullam neque impedit rem!</p>
  `,
  styles: `
  img{
    width:100%;
    heigth: auto;
  } `
})
export class CommentsComponent {

}
