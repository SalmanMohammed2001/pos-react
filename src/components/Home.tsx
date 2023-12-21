import DefaultCard from "./card/DefaultCard.tsx";


function Home(){

    return(
      <>
          <br/>
      <div className="container">
          <div className="row">

              <div className="con-12 col-sm-6 col-md-4 col-lg-3">
                <DefaultCard
                    thumbnail='https://img.freepik.com/free-photo/medium-shot-people-shaking-hands_23-2149300663.jpg?w=740&t=st=1703137369~exp=1703137969~hmac=35986ede947cc3d1bd51ced58f37bc199ab223c93f17e0d2c2fdf356f075fe52'
                    title='Customer'
                    description='This is a wider card'
                    value={250}
                    key={1}

                 />
              </div>

              <div className="con-12 col-sm-6 col-md-4 col-lg-3">
                  <DefaultCard
                      thumbnail='https://img.freepik.com/free-photo/large-warehouse-woman-white-protective-helmet-with-tablet-standing-large-industrial-warehouse-aisle-high-racks-goods_259150-56920.jpg?w=740&t=st=1703137426~exp=1703138026~hmac=ce592e2b7f33a81ce8dd5f50dd0c612bc7ce2788241e9ed84b5b86466b650e7d'
                      title='Product'
                      description='This is a wider card '
                      value={250}
                      key={2}
                  />
              </div>

              <div className="con-12 col-sm-6 col-md-4 col-lg-3">
                  <DefaultCard
                      thumbnail='https://img.freepik.com/free-photo/black-friday-concept-with-products-shopping-cart_23-2147709351.jpg?size=626&ext=jpg&ga=GA1.2.1097798542.1703137309&semt=sph'
                      title='Orders'
                      description='This is a wider card'
                      value={250}
                      key={3}
                  />
              </div>
              <div className="con-12 col-sm-6 col-md-4 col-lg-3">
                  <DefaultCard
                      thumbnail='https://img.freepik.com/free-photo/person-carrying-lot-cash_53876-65367.jpg?w=740&t=st=1703137614~exp=1703138214~hmac=4fa5181e8c9443624820aa514432cd4446ba6ffd3e6e65184e0f1236fe8781b7'
                      title='Income'
                      description='This is a wider card'
                      value={250}
                      key={4}
                  />
              </div>
          </div>
      </div>
      </>
    )


}

export default Home