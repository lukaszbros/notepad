import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useHistory, useParams } from 'react-router-dom';
import { GET_NOTE } from './entity/queries';
import { ActionButton, Container } from './StyledComponets';

interface NoteDetailsParams {
  id: string;
}

export default function NoteDetails() {
  const { id } = useParams<NoteDetailsParams>();
  const { loading, error, data } = useQuery(GET_NOTE, {variables: { id: id }});
  const history = useHistory();

  useEffect(() => {
    //const noteDetails = state.notes.find(note => note.id === id);
    //setNote(noteDetails)
  });

  const deleteNote = () => {
    /*if (note) {
      dispatch({type: Actions.REMOVE_NOTE, payload: note});
      history.push('/');
    }*/
  }

  if (loading) return (<Container center={true}><h1>Loading...</h1></Container>);
  if (error) return (<Container center={true}><h1>Error! {error.message}</h1></Container>);

  return (                          
    <div>
      <Container style={{display: 'flex', justifyContent: 'space-between'}}>
        <Link to='/'><ActionButton backgroundColor="#E5E5E5">Go back</ActionButton></Link> 
        <ActionButton backgroundColor="#EC5752" color="#FCFCFC" onClick={deleteNote}>Delete note</ActionButton>
      </Container>
      {data && 
        <Container backgroundColor="#EAEAEA">
          <ReactMarkdown>{data.note.text}</ReactMarkdown>
          <div style={{textAlign: 'right'}}>{data.note.date}</div>
        </Container>     
      }
    </div>
  )
}
