import Link from "next/link";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Button, Card } from 'semantic-ui-react';

const Index = ({ initialNotes }) => {
  const [notes, setNotes] = useState(initialNotes);

  useEffect(() => {
    console.log(notes); // Check the received data
  }, [notes]);

  const handleDelete = async (noteId) => {
    try {
      await fetch(`/api/notes/${noteId}`, {
        method: 'DELETE'
      });

      // Remove the deleted note from the notes state
      setNotes(notes.filter(note => note._id !== noteId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <nav className="w-full rounded-md p-3">
        <ol className="list-reset flex">
          <li>
            <Link href="/home">Homepage</Link>
          </li>
          <li>
            <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
          </li>
          <li className="text-neutral-500 dark:text-neutral-400 text-[#67442E]">Our Foods</li>
        </ol>
      </nav>
      <div style={{ textAlign: "center", marginTop: "20px" }} className="notes-container">
        <h1 className="mb-10 text-2xl">Minuman</h1>
        <div className="wrapper">
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
                  {note.image && (
                    <Card.Content>
                      <img src={note.imagePath} alt={note.title} className="note-image" />
                    </Card.Content>
                  )}
                  <Card.Content>
                    <span>{note.description}</span>
                  </Card.Content>
                  <Card.Content extra>
                    <Link href={`/${note._id}`}>
                      <Button primary>View</Button>
                    </Link>
                    <Link href={`/${note._id}/edit`}>
                      <Button primary>Edit</Button>
                    </Link>
                    <Button primary onClick={() => handleDelete(note._id)}>
                      Delete
                    </Button>
                  </Card.Content>
                </Card>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .notes-container {
          margin: 20px;
        }

        .wrapper {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 10px;
          max-width: 1200px;
          padding: 0 16px;
          margin: auto;
        }

        .note-image {
          max-width: 100%;
          height: auto;
        }

        @media (max-width: 768px) {
          .wrapper {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .wrapper {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  )
}

Index.getInitialProps = async () => {
  try {
    const res = await fetch('/api/notes');
    const { data } = await res.json();
    return { initialNotes: data };
  } catch (error) {
    console.log(error);
    return { initialNotes: [] };
  }
}

export default Index;
