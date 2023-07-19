import Link from "next/link";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Button, Card } from 'semantic-ui-react';

const Index = ({ initialPromos }) => {
  const [promos, setPromos] = useState(initialPromos);

  useEffect(() => {
    console.log(promos); // Check the received data
  }, [promos]);

  const handleDelete = async (promoId) => {
    try {
      await fetch(`/api/promos/${promoId}`, {
        method: 'DELETE'
      });

      // Remove the deleted promo from the promos state
      setPromos(promos.filter(promo => promo._id !== promoId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <nav class="w-full rounded-md p-3">
        <ol class="list-reset flex">
          <li>
            <Link
              href="/home"
              >Homepage
            </Link>
          </li>
          <li>
            <span class="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
          </li>
          <li class="text-neutral-500 dark:text-neutral-400 text-[#67442E]">Our Promo</li>
        </ol>
      </nav>
          <div style={{ textAlign: "center", marginTop: "20px" }} className="promos-container">
      <h1 className="mb-10 text-2xl">PROMO</h1>
      <div className="wrapper">
        {promos.map(promo => {
          return (
            <div key={promo._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/${promo._id}`}>
                      <span>{promo.title}</span>
                    </Link>
                  </Card.Header>
                </Card.Content>
                <Card.Content>
                  <span>{promo.description}</span>
                </Card.Content>
                <Card.Content extra>
                  <Link href={`/${promo._id}`}>
                    <Button primary>
                      View
                    </Button>
                  </Link>
                  <Link href={`/${promo._id}/edit`}>
                    <Button primary>Edit</Button>
                  </Link>
                  <Button primary onClick={() => handleDelete(promo._id)}>
                    Delete
                  </Button>
                </Card.Content>
              </Card>
            </div>
          )
        })}
      </div>

      <style jsx>{`
        .promos-container {
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
    </div>
  )
}

Index.getInitialProps = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/promos');
    const { data } = await res.json();
    return { initialPromos: data };
  } catch (error) {
    console.log(error);
    return { initialPromos: [] };
  }
}

export default Index;
