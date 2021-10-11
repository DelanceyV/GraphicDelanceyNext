import { Card, CardImg, CardText, CardTitle, CardBody, CardColumns } from 'reactstrap'
import { Component } from 'react'
import { PIECES } from '../shared/pieces'
import Link from 'next/link'


class GalleryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pieces: PIECES
    }
  }

  render() {

    const Pieces = (this.state.pieces.map((piece) => {
      if(piece.linkTo) {
        return (
          <CardColumns>
            <Card key={piece.id}>
            <Link href={piece.linkTo} target='_blank'>
              <CardImg
                top
                width="100%"
                src={piece.image}
                alt={piece.name}
              />
            </Link>
              <CardBody>
                <CardTitle tag='h3'>{piece.name}</CardTitle>
                <CardText>{piece.description}</CardText>
              </CardBody>
            </Card>
          </CardColumns>
        );
      } else {
        return (
          <CardColumns>
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
          </CardColumns>
        );
      }
    }))

    return (
      <>
      <main>
        {/* 
        Was Having an issue getting images to show in card. Used this as troubleshooting.
        // import mixed from '../public/images/gallery/MMMdonelighter2.png'
        // import Image from 'next/image'
        <Image
          src={mixed}
          alt="GD logo"
          height={30}
          width={30}
        /> */}
        {Pieces}
      </main>
      </>
    );
  }

}

export default GalleryCard;

