import Link from "next/link";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Button, Card } from 'semantic-ui-react';

const Index = ({ promos }) => {
  useEffect(() => {
    console.log(promos); // Periksa data yang diterima
  }, [promos]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }} className="promos-container">
      <h1 class="mb-10 text-2xl">Promo</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "10px", maxWidth: "1200px", padding: "0 16px", margin: "auto" }} className="wrapper">
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
    const res = await fetch('http://localhost:3000/api/promos');
    const { data } = await res.json();
    return { promos: data };
  } catch (error) {
    console.log(error);
    return { promos: [] };
  }
}

export default Index;