import Link from "next/link";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Button, Card } from 'semantic-ui-react';

const Index = ({ notes }) => {
  useEffect(() => {
    console.log(notes); // Periksa data yang diterima
  }, [notes]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }} className="notes-container">
      <h1 class="mb-10 text-2xl">Makanan</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "10px", maxWidth: "1200px", padding: "0 16px", margin: "auto" }} className="wrapper">
        {notes.map(note => {
          return (
            <div key={note._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/${note._id}`}>
                      <span>{note.title}</span>
                    </Link>
                  </Card.Header>
                </Card.Content>
                <Card.Content extra>
                  <Link href={`/${note._id}`}>
                    <Button primary>
                      View
                    </Button>
                  </Link>
                  <Link href={`/${note._id}/edit`}>
                    <Button primary>Edit</Button>
                  </Link>
                </Card.Content>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Index.getInitialProps = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/notes');
    const { data } = await res.json();
    return { notes: data };
  } catch (error) {
    console.log(error);
    return { notes: [] };
  }
}

export default Index;
