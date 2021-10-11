// import Link from 'next/link'
// import { Component } from 'react'
// import Header from '../components/Header'
// import { PIECES } from '../shared/pieces'
import React from 'react';
import Head from 'next/head';
import GalleryCard from '../components/GalleryCard';

export default function Gallery () {

  // First attempted solution. Gallery was function component. Changed for props. Changed back for simplicity. Put props in card component Not pulling from array.
  
  // const pieceImage = ({pieces}) => (
  //   <>
  //     {pieces.map(piece => (
  //       <div key={piece.image}>{piece.image}</div>
  //     ))}
  //   </>
  // );

  // const pieceLink = ({pieces}) => (
  //   <>
  //     {pieces.map(piece => (
  //       <div key={piece.linkTo}>{piece.linkTo}</div>
  //     ))}
  //   </>
  // );

  // const pieceName = ({pieces}) => (
  //   <>
  //     {pieces.map(piece => (
  //       <div key={piece.name}>{piece.name}</div>
  //     ))}
  //   </>
  // );

  // const pieceDescription = ({pieces}) => (
  //   <>
  //     {pieces.map(piece => (
  //       <div key={piece.description}>{piece.description}</div>
  //     ))}
  //   </>
  // );
  return (

    <div className="container">
      <Head>
        <title>Graphic Delancey</title>
        <link rel="icon" href="/Favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/rym1jja.css"
        />
      </Head>

      <main>
        <GalleryCard/>
      </main>

    </div>
  );
}
