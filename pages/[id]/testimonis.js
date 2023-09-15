import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Confirm, Loader, Message } from 'semantic-ui-react';

const Testimoni = ({ testimoni }) => {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isDeleting) {
      deleteTestimoni();
    }
  }, [isDeleting]);

  const open = () => setConfirm(true);
  const close = () => setConfirm(false);
  const deleteTestimoni = async () => {
    const testimoniId = router.query.id;
    try {
      const deleted = await fetch(`http://localhost:3000/api/testimonis/${testimoniId}`, {
        method: 'DELETE'
      });
      setDeleteSuccess(true);
      setTimeout(() => {
        router.push('/testimoni');
      }, 2000);
    } catch (error) {
      setDeleteError('An error occurred while deleting the testimoni.');
      console.log(error);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    close();
  };

  return (
    <div className="testimoni-container">
      {isDeleting ? (
        <Loader active />
      ) : (
        <>
          {deleteSuccess && (
            <Message positive>
              <Message.Header>Testimoni Deleted</Message.Header>
              <p>The testimoni has been successfully deleted.</p>
            </Message>
          )}
          {deleteError && (
            <Message negative>
              <Message.Header>Error Deleting Testimoni</Message.Header>
              <p>{deleteError}</p>
            </Message>
          )}
          <section className="bg-gray-100 py-24">
            <div className="container mx-auto flex items-center justify-center flex-col">
              <div className="text-center lg:w-2/3 w-full">
                <div className="rounded-full overflow-hidden mx-auto w-60 h-60 lg:w-60 lg:h-60">
                  <img
                    className="w-full h-full object-cover"
                    src={testimoni.image}
                    alt="image description"
                  />
                </div>
                <div className="mt-8">
                  <h1 className="text-3xl sm:text-4xl font-medium text-gray-900 text-center">
                    {testimoni?.title}
                  </h1>
                  <div className="mt-4 text-center">
                    <p className="italic text-gray-700">"{testimoni?.description}"</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </>
      )}
      <Confirm
        open={confirm}
        onCancel={close}
        onConfirm={handleDelete}
        content="Are you sure you want to delete this testimoni?"
        cancelButton="No"
        confirmButton="Yes"
        size="tiny"
        className="custom-confirm-dialog"
        style={{ height: '200px', maxWidth: '400px' }}
      />
      <style jsx global>{`
        .custom-confirm-dialog.ui.modal {
          position: fixed !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
        }
      `}</style>
    </div>
  );
};

Testimoni.getInitialProps = async ({ query: { id } }) => {
  try {
    const res = await fetch(`http://localhost:3000/api/testimonis/${id}`);
    const { data } = await res.json();
    return { testimoni: data };
  } catch (error) {
    console.log(error);
    return { testimoni: {} };
  }
};

export default Testimoni;
