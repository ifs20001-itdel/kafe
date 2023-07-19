import { useState, useEffect } from "react";
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";

const NewNote = () => {
  const [form, setForm] = useState({ title: '', description: '', image: null });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createNote();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const createNote = async () => {
    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("image", form.image);

      const res = await fetch(`/api/notes`, {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error(data.error);
      }
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
    if (e.target.name === "image") {
      setForm({
        ...form,
        image: e.target.files[0]
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      });
    }
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
          <h1 className="title-font sm:text-4xl text-3xl mb-20 font-medium text-gray-900">Create Menu</h1>
          <div>
            {isSubmitting ? (
              <Loader active inline="centered" />
            ) : (
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
                <Form.TextArea
                  fluid
                  error={errors.description ? { content: 'Please enter a description', pointing: 'below' } : null}
                  label="Description"
                  placeholder="Description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                />
                <Form.Input
                  type="file"
                  fluid
                  label="Image"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                />
                <Button type="submit">Create</Button>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewNote;
