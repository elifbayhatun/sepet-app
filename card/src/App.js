import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "anakart",
      image: "https://picsum.photos/id/29/4000/2670",
      adet: 1,
      info: "3.0 GMZ 3USB 2.0",
    },
    {
      id: 2,
      title: "RAM",
      image: "https://picsum.photos/id/25/5000/3333",
      adet: 1,
      info: "16GB Kingston,",
    },
    {
      id: 3,
      title: "Ekran Kartı",
      image: "https://picsum.photos/id/5/5000/3334",
      adet: 1,
      info: "Nvdia Geforce 1050",
    },
    {
      id: 4,
      title: "Monitör",
      image: "https://picsum.photos/id/10/2500/1667",
      adet: 1,
      info: "17 Monitör",
    },
  ]);

  const [basket, setBasket] = useState([]);

  return (
    <div className="App">
      <h1>REACT SEPET UYGULAMASI</h1>
      <h2>Listeleme Ürünler</h2>
      <div className="urunler">
        {product.map((eleman, index) => {
          return (
            <Card
              onClick={() => {
                const arr = [...basket];
                if (
                  arr.findIndex((İnd) => {
                    return eleman.id === İnd.id;
                  }) === -1
                ) {
                  arr.push(eleman);
                  setBasket(arr);
                } else {
                  arr.map((item) => {
                    if (item.id === eleman.id) {
                      return (eleman.adet += 1);
                    }
                    setBasket(arr);
                  });
                }
                console.log(basket);
              }}
              key={index}
              title={eleman.title}
              image={eleman.image}
              info={eleman.info}
            />
          );
        })}
      </div>
      <div className="sepet">
        <h2>SEPETİMİZ</h2>
        <ul className="sepet">
          {basket.map((eleman, index) => {
            return (
              <li>
                {eleman.title + "---->" + eleman.info + "Adet:"}{" "}
                <b style={{ fontSize: "24px", color: "yellow" }}>
                  {eleman.adet}
                </b>
              </li>
            );
          })}
        </ul>

        {basket.length > 0 ? (
          <button
            onClick={() => {
              setBasket([]);
            }}
          >
            Sepeti Temizle
          </button>
        ) : (
          <h2>Sepetinizde Ürün Bulunmamaktadır.</h2>
        )}
      </div>
    </div>
  );
}

export default App;
