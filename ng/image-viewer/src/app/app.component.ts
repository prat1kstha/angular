import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-viewer';

  currentPage = 0;
  images = [
    {
      title: 'Colosseum',
      imageUrl: 'https://i.shgcdn.com/87d41c49-6594-41a0-b4c6-c0ea936316f3/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
    {
      title: 'Christ The Redeemer',
      imageUrl: 'https://i.shgcdn.com/17261c14-58bf-4ffe-b142-feddbe9704ae/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
    {
      title: 'Great Wall Of China',
      imageUrl: 'https://i.shgcdn.com/475e7aef-88e8-4ee7-8987-5eb04a8e0d01/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
    {
      title: 'Petra',
      imageUrl: 'https://i.shgcdn.com/635c3339-ef0e-47fa-932c-8c404de61be1/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
    {
      title: 'Taj Mahal',
      imageUrl: 'https://i.shgcdn.com/99425bd3-8465-4929-81be-cc21687c09fc/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
    {
      title: 'Chichen Itza',
      imageUrl: 'https://i.shgcdn.com/72fbaf5d-c927-45b1-9cdb-178560d66422/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    },
    {
      title: 'Machu Picchu',
      imageUrl: 'https://i.shgcdn.com/aa5a7f61-5a35-4e24-96f3-d370d058de28/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    }
  ];

}
