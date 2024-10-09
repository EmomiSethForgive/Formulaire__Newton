// import {RadioGroup} from "./RadioGroup"

export function Deuxième() {
  return (
    <div className=" w-[50%] max-sm:mt-10 max-sm:w-full  ">
      <form className=" flex flex-col bg-pink-50 border-r-4 border-l-4 border-t-4 border-b-4 border-pink-200 p-4 rounded-lg mr-4 max-sm:ml-3 max-sm:mr-3 gap-4">
        <div className="flex justify-between">
          <div className={``}>
            <img
              src="../assets/tirè.svg"
              alt=""
              // width={339}
              // height={215}
              className={`w-[20px] h-[20px] md:w-[] md:h-[] `}
            />
          </div>
          <p className="font-bold md:text-lg">Paiement</p>
        </div>
        <div className="flex flex-col gap-2">
        <p className="font-bold md:text-lg">Produit</p>
        <h1 className="bg-blue-800 w-full max-sm:w-full md:text-xs lg:text-base text-white h-10 pt-2 pl-3 rounded-md  font-medium ">
          SAMBA AGRIKOL-SAMBA
        </h1>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold md:text-lg">Paiment</p>
          {/* <RadioGroup /> */}
          {/* visa */}
          <div className="flex items-center w-full justify-between rounded-md pl-2 pr-2  max-sm:w-full  border border-gray-600 cursor-pointer">
            <label className="flex items-center gap-4 cursor-pointer mr-[10px] ">
              <img
                src="../assets/visa.svg"
                alt=""
                // width={339}
                // height={215}
                className={`w-[5%] h-[5%] md:w-[] md:h-[] `}
              />
              <span>Visa</span>
            </label>
            <input className="" type="radio" />
          </div>
          {/* Airtel money */}
          <div className="flex items-center w-full max-sm:justify-between rounded-md pl-2 pr-2   max-sm:w-full  border border-gray-600 cursor-pointer">
            <label className="flex items-center gap-4 cursor-pointer mr-[10px] ">
              <img
                src="../assets/paypal.svg"
                alt=""
                // width={339}
                // height={215}
                className={`w-[5%] h-[5%] md:w-[] md:h-[] `}
              />
              <span>Airtel Money</span>
            </label>
            <input className="" type="radio" />
          </div>
          {/* Moov money */}
          <div className="flex items-center w-full max-sm:justify-between rounded-md pl-2 pr-2   max-sm:w-full  cursor-pointer border border-gray-600">
            <label className="flex items-center gap-4 cursor-pointer mr-[10px] ">
              <img
                src="../assets/moovmoney.svg"
                alt=""
                // width={339}
                // height={215}
                className={`w-[5%] h-[5%] md:w-[] md:h-[] `}
              />
              <span>Moov Money</span>
            </label>
            <input className="" type="radio" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold md:text-lg">Fature</p>
          <div className="flex justify-between gap-2 rounded-md pl-2 pr-2 ">
            <p className="text-gray-400">an</p>
            <p className="text-gray-400">42.000 Fcfa</p>
          </div>
          <div className="flex justify-between gap-2 rounded-md pl-2 pr-2 ">
            <p className="text-gray-400">Taxes 2.7%</p>
            <p className="text-gray-400">1.134 Fcfa</p>
          </div>
          <div className="w-full h-1 gap-2 bg-gray-600 max-sm:justify-between rounded-md pl-2 pr-2 "></div>
          <div className="flex justify-between rounded-md pl-2 pr-2 ">
            <p className="font-bold md:text-lg"> Total</p>
            <p className="font-bold">43.134 Fcfa</p>
          </div>
        </div>
        <button className="flex items-center justify-center max-sm:mb-4 bg-blue-800 w-full  max-sm:w-full  text-white h-10 pt-2 pl-3 rounded-md  font-medium">
          <span>
            <img
              src="../assets/clé.svg"
              alt=""
              // width={339}
              // height={215}
              className={`w-[40%] h-[470%] md:w-[] md:h-[] `}
            />
          </span>
          Payer
        </button>
      </form>
    </div>
  );
}
