import { Card, CardText, CardTitle, CardBody, CardColumns } from 'reactstrap'
import { Component } from 'react'
import { PIECES } from '../shared/pieces'
import Image from 'next/image'
// import imgLoader from './imgLoader'
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
        (<Card key={piece.id}>
            <a href={piece.linkTo} target='_blank'>
              <Image
                // loader={imgLoader}
                className="card-image-top cardImg"
                layout="responsive"
                width={piece.width}
                height={piece.height}
                src={`/${piece.image}`}
                alt={piece.name}
              />
            </a>
            <CardBody>
              <CardTitle tag='h3'>{piece.name}</CardTitle>
              <CardText>{piece.description}</CardText>
            </CardBody>
          </Card>)
      :
        (<Card key={piece.id}>
            <Image
                // loader={imgLoader}
                className="card-image-top cardImg"
                layout="responsive"
                width={piece.width}
                height={piece.height}
                src={`/${piece.image}`}
                alt={piece.name}
              />
            <CardBody>
              <CardTitle tag='h3'>{piece.name}</CardTitle>
              <CardText>{piece.description}</CardText>
            </CardBody>
          </Card>)
      ))

    return (
      <CardColumns>
        {Pieces}
      </CardColumns>
    );
  }

}

export default GalleryCard;

