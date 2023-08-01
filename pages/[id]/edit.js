import { useState, useEffect } from "react";
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";

const EditNote = ({ note }) => {
  const [form, setForm] = useState({ title: note.title, description: note.description });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        updateNote();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const updateNote = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/notes/${router.query.id}`, {
        method: 'PUT',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      router.push("/minuman");
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const validate = () => {
    let err = {};
    if (!form.title) {
      err.title = 'Title is required';
    }
    if (!form.description) {
      err.description = 'Description is required';
    }
    return err;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-20 font-medium text-gray-900">Edit Note</h1>
          <div>
            {isSubmitting ?
              <Loader active inline="centered" />
              : (
                <Form onSubmit={handleSubmit}>
                  <Form.Input
                    fluid
                    error={errors.title ? { content: 'Please enter a title', pointing: 'below' } : null}
                    label="Title"
                    placeholder="Title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                  />
                  <Form.Input
                    fluid
                    error={errors.price ? { content: 'Please enter a price', pointing: 'below' } : null}
                    label="Price"
                    placeholder="Price"
                    name="price"
                    value={form.price}
                    onChange={handleChange}
                  />
                  <Form.Input
                    fluid
                    error={errors.image ? { content: 'Please enter a image', pointing: 'below' } : null}
                    label="Image"
                    placeholder="Image"
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                  />
                  <Form.TextArea
                    fluid
                    error={errors.description ? { content: 'Please enter a description', pointing: 'below' } : null}
                    label="Description"
                    placeholder="Description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                  />
                  <Button type="submit">Update</Button>
                </Form>
              )}
          </div>
        </div>
      </div>
    </section>
  );
}

EditNote.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/notes/${id}`);
  const { data } = await res.json();

  return { note: data }
}

export default EditNote;
