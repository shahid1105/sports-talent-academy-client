import "./Collection.css";

const Collection = () => {
  return (
    <div className="mt-16 bg-fixed collection-bg text-white py-12">
      <h3 className="text-xl md:text-3xl lg:text-3xl font-bold italic text-center pt-8">
        --- Our Dress Collection ---
      </h3>
      <div className="md:flex lg:flex mx-12 justify-evenly mt-12">
        <div>
          <h1 className="font-bold text-lime-500 text-2xl">MENS COLLECTION</h1>
          <div>
            <p className="mt-6 pb-2">SHARTS</p>
            <hr />
            <p className="mt-6 pb-2">PANTS</p>
            <hr />
            <p className="mt-6 pb-2">SHORTS</p>
            <hr />
            <p className="mt-6 pb-2">SNEAKERS</p>
            <hr />
            <p className="mt-6 pb-2">ACCESSORIES</p>
            <hr />
            <p className="mt-6 pb-2">CAPS</p>
            <hr />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-lime-500 text-2xl">
            WOMENS COLLECTION
          </h1>
          <div>
            <p className="mt-6 pb-2">SHARTS</p>
            <hr />
            <p className="mt-6 pb-2">PANTS</p>
            <hr />
            <p className="mt-6 pb-2">SHORTS</p>
            <hr />
            <p className="mt-6 pb-2">SNEAKERS</p>
            <hr />
            <p className="mt-6 pb-2">ACCESSORIES</p>
            <hr />
            <p className="mt-6 pb-2">CAPS</p>
            <hr />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-lime-500 text-2xl">OTHERS</h1>
          <div>
            <p className="mt-6 pb-2">SHARTS</p>
            <hr />
            <p className="mt-6 pb-2">PANTS</p>
            <hr />
            <p className="mt-6 pb-2">SHORTS</p>
            <hr />
            <p className="mt-6 pb-2">SNEAKERS</p>
            <hr />
            <p className="mt-6 pb-2">ACCESSORIES</p>
            <hr />
            <p className="mt-6 pb-2">CAPS</p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
