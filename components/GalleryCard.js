import { Card, CardImg, CardText, CardTitle, CardBody, CardColumns } from 'reactstrap'
import { Component } from 'react'
import { PIECES } from '../shared/pieces'
// import Link from 'next/link'


class GalleryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pieces: PIECES
    };

  }

  render() {

    const Pieces = (this.state.pieces.map((piece) =>
      (piece.linkTo) ?
          (<CardColumns>
            <Card key={piece.id}>
            <a href={piece.linkTo} target='_blank'>
              <CardImg
                top
                width="100%"
                src={piece.image}
                alt={piece.name}
              />
            </a>
              <CardBody>
                <CardTitle tag='h3'>{piece.name}</CardTitle>
                <CardText>{piece.description}</CardText>
              </CardBody>
            </Card>
          </CardColumns>)
      :
        (<CardColumns>
          <Card key={piece.id}>
            <CardImg
              top
              width="100%"
              src={piece.image}
              alt={piece.name}
            />
            <CardBody>
              <CardTitle tag='h3'>{piece.name}</CardTitle>
              <CardText>{piece.description}</CardText>
            </CardBody>
          </Card>
        </CardColumns>)
      ))

    return (
      <>
        {Pieces}
      </>
    );
  }

}

export default GalleryCard;

