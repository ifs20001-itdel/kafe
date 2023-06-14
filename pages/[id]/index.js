import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Confirm, Button, Loader } from 'semantic-ui-react';

const Note = ({ note }) => {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isDeleting) {
      deleteNote();
    }
  }, [isDeleting]);

  const open = () => setConfirm(true);
  const close = () => setConfirm(false);
  const deleteNote = async () => {
    const noteId = router.query.id;
    try {
      const deleted = await fetch(
        `http://localhost:3000/api/notes/${noteId}`,
        {
          method: 'DELETE'
        }
      );
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    close();
  };

  return (
    <div className="note-container">
      {isDeleting ? (
        <Loader active />
      ) : (
        <>
          <h1></h1>
          <p></p>
          <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
              <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
              <div class="text-center lg:w-2/3 w-full">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{note?.title}</h1>
                <p class="mb-8 leading-relaxed">{note?.description}</p>
                <div class="flex justify-center">
                  <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Buy</button>
                  <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" onClick={open}>Delete</button>
                </div>
              </div>
            </div>
          </section>

        </>
      )}
      <Confirm open={confirm} onCancel={close} onConfirm={handleDelete} />
    </div>
  );
};

Note.getInitialProps = async ({ query: { id } }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`);
    const { data } = await res.json();
    return { note: data };
  } catch (error) {
    console.log(error);
    return { note: {} };
  }
};

export default Note;
