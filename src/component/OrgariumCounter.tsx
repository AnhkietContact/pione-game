import Counter from "./Counter";

const OrgariumCounter = () => {

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 xl:flex xl:flex-row xl:justify-center gap-20">
      <div className="rounded-xl bg-white px-10 min-h-[200px] flex items-center justify-center">
        <div className="counter-inner text-center">
          <div className="text">
            <h2 className="font-extrabold text-[40px] text-[#000]">
              <Counter end={1000} />+
            </h2>
            <p className="font-bold text-[#000] text-[20px]">
             Customers
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-white px-10 min-h-[200px] flex items-center justify-center">
        <div className="counter-inner text-center">
          <div className="text">
            <p className="font-bold text-[#000] text-[40px]">
              Targeting
            </p>
            <h2 className="font-extrabold text-[40px] text-[#000]">
              <Counter end={2000} />
            </h2>
            <p className="font-bold text-[#000] text-[20px]">Business</p>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-white px-10 min-h-[200px] flex items-center justify-center">
        <div className="counter-inner text-center">
          <div className="text ">
            <h2 className=" font-extrabold text-[40px] text-[#000]">
             Target <Counter end={400} />+
            </h2>
            <p className="font-bold text-[#000] text-[20px]">Active</p>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-white px-10 min-h-[200px] flex items-center justify-center">
        <div className="counter-inner text-center">
          <div className="text">
            <h2 className="font-extrabold text-[40px] text-[#000]">
              <Counter end={95} />M
            </h2>
            <p className="font-bold text-[#000] text-[20px]">
              Theperson
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgariumCounter;

export const OrgariumCounter2 = () => (
  <div className="row">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="single-counter-item mb-40">
        <div className="text">
          <h2 className="number">
            <Counter end={3652} />+
          </h2>
          <p>Saticfied Clients</p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="single-counter-item mb-40">
        <div className="text">
          <h2 className="number">
            <Counter end={896} />+
          </h2>
          <p>Saticfied Clients</p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="single-counter-item mb-40">
        <div className="text">
          <h2 className="number">
            <Counter end={945} />+
          </h2>
          <p>Saticfied Clients</p>
        </div>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div className="single-counter-item mb-40">
        <div className="text">
          <h2 className="number">
            <Counter end={565} />+
          </h2>
          <p>Saticfied Clients</p>
        </div>
      </div>
    </div>
  </div>
);
