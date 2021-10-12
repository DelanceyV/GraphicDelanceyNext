import { Component } from 'react';
import { CardColumns, CardBody, Card, CardTitle } from 'reactstrap';
import { PAGES } from '../shared/pages';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: PAGES
    };
  }

  render() {

    const Pages = (this.state.pages.map(page =>
      (page.title !== 'Home') ?
        <CardColumns>
          <Card key={page.id}>
            <a href={page.linkTo}>
              <CardBody>
                <CardTitle tag='h2'>{page.title}</CardTitle>
              </CardBody>
            </a>
          </Card>
        </CardColumns>
      : 
        <span></span>
    ))
    return (
      <>
        {Pages}
      </>
    );
  }
}

//       OLD
//       <div className='container'>
//         <div className='row'>
//           <div className='card btn'>
//             <a href='/gallery'>
//                 View Gallery
//             </a>
//           </div>
//           <div className='card btn'>
//             <a href='/game'>
//               Play Game
//             </a>
//           </div>
//           <div className='card btn'>
//             <a href='/contact'>
//               Reach Out
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Home;
