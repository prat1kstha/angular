import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';

  cards = [
    {
      title: 'Colosseum',
      subtitle: 'Rome, Italy',
      imageUrl: 'https://i.shgcdn.com/87d41c49-6594-41a0-b4c6-c0ea936316f3/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      description: 'The Colosseum is well known as the place of gladiators, public performances, and Russell Crowe as the largest and most famous amphitheater in the world.'
    },
    {
      title: 'Christ The Redeemer',
      subtitle: 'Rio de Janeiro, Brazil',
      imageUrl: 'https://i.shgcdn.com/17261c14-58bf-4ffe-b142-feddbe9704ae/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      description: 'This art deco statue of Jesus Christ, built between 1922 and 1931, was created by the French sculptor Paul Landowski and built-in collaboration with the French engineer Albert Caquot by the Brazilian engineer Heitor da Silva Costa.'
    },
    {
      title: 'Great Wall Of China',
      subtitle: 'China',
      imageUrl: 'https://i.shgcdn.com/475e7aef-88e8-4ee7-8987-5eb04a8e0d01/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      description: 'China’s Great Wall has been built, restored, joined together and for centuries watched over by various powers and regimes. Overall, it runs for more than 21000 km.'
    },
    {
      title: 'Petra',
      subtitle: 'China',
      imageUrl: 'https://i.shgcdn.com/635c3339-ef0e-47fa-932c-8c404de61be1/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      description: 'Petra was founded as the capital of the Nabataeans (that were an ancient Arab people) around 300 BC.'
    },
    {
      title: 'Taj Mahal',
      subtitle: 'Agra, India',
      imageUrl: 'https://i.shgcdn.com/99425bd3-8465-4929-81be-cc21687c09fc/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      description: 'Taj Mahal has become India’s most celebrated landmark and one of the world’s best-known examples of Islamic architecture.'
    },
    {
      title: 'Chichen Itza',
      subtitle: 'Peninsula, Mexico',
      imageUrl: 'https://i.shgcdn.com/72fbaf5d-c927-45b1-9cdb-178560d66422/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      description: 'This Mayan city, located on the Yucatán Peninsula, is among the best pieces of civilization in the Americas before Europeans arrived.'
    },
    {
      title: 'Machu Picchu',
      subtitle: 'Cuzco, Peru',
      imageUrl: 'https://i.shgcdn.com/aa5a7f61-5a35-4e24-96f3-d370d058de28/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
      description: 'It was built by pre-Columbian culture-Machu Picchu is a remote ruin of Inca high altitude (2430 m).'
    }
  ];
}
