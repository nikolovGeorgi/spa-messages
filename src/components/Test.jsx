import React from 'react';

export default function Test(props) {
  return <h1> {props.match.params.id} </h1>
}
