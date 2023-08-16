import { useState, useEffect } from "react";
import fetch from 'isomorphic-unfetch';
import { Button, Form, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";

const NewPromo = () => {
  const [form, setForm] = useState({ title: '', description: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createPromo();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  const createPromo = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/promos`, {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });
      router.push("/promo");
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
    <section className="text-gray-600 bg-[#f6efdf] body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-20 font-medium text-gray-900">Create Promo</h1>
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
                  onChange={handleChange}
                />
                <Form.Input
                  fluid
                  error={errors.price ? { content: 'Please enter a price', pointing: 'below' } : null}
                  label="Price"
                  placeholder="Price"
                  name="price"
                  onChange={handleChange}
                />
                <Form.Input
                  fluid
                  error={errors.image ? { content: 'Please enter a image', pointing: 'below' } : null}
                  label="Url Image"
                  placeholder="https://gambar.jpg"
                  name="image"
                  onChange={handleChange}
                />
                <Form.TextArea
                  fluid
                  error={errors.description ? { content: 'Please enter a description', pointing: 'below' } : null}
                  label="Description"
                  placeholder="Description"
                  name="description"
                  onChange={handleChange}
                />
                <button
                    type='submit'
                    className="mt-16"
                    style={{
                      borderRadius: "15px",
                      background: "#DDCCAE",
                      display: "flex",
                      width: "308px",
                      height: "54px",
                      padding: "8px 20px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "-5px",
                      fontSize: "20px",
                      fontWeight: "500px"
                    }}
                  >
                    Create
                  </button>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewPromo;