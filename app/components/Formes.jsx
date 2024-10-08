export function Formes() {
  return (
    <div>
      <form>
        <div>
          <div className={``}>
            <img
              src="../assets/bsect1-1.svg"
              alt=""
              // width={339}
              // height={215}
              className={`w-[339px] h-[215px] md:w-[710px] md:h-[510px] `}
            />
            <p>Produit</p>
          </div>
          <p>Paiement</p>
        </div>
        <h1>SAMBA AGRIKOL-SAMBA</h1>
        <p>Paiment</p>
        <div>
            {/* visa */}
          <input type="radio"  placeholder="Visa"> <img
              src="../assets/bsect1-1.svg"
              alt=""
              // width={339}
              // height={215}
              className={`w-[339px] h-[215px] md:w-[710px] md:h-[510px] `}
            /></input>
            {/* airtel money */}
          <input type="radio"  placeholder="Airtel Money "> <img
              src="../assets/bsect1-1.svg"
              alt=""
              // width={339}
              // height={215}
              className={`w-[339px] h-[215px] md:w-[710px] md:h-[510px] `}
            /></input>
            {/* MobiCAsh */}
          <input type="radio"  placeholder=" MobiCAsh"> <img
              src="../assets/bsect1-1.svg"
              alt=""
              // width={339}
              // height={215}
              className={`w-[339px] h-[215px] md:w-[710px] md:h-[510px] `}
            /></input>
        </div>
        <p>Fature</p>
        <div>
            <p>an</p>
            <p>42.000 Fcfa</p>
        </div>
        <div>
            <p>Taxes 2.7%</p>
            <p>1.134 Fcfa</p>
            <div></div>
        </div>
        <div>
            <p>Total</p>
            <p>43.134 Fcfa</p>
        </div>
        <button> <img
              src="../assets/bsect1-1.svg"
              alt=""
              // width={339}
              // height={215}
              className={`w-[339px] h-[215px] md:w-[710px] md:h-[510px] `}
            /> Payer</button>
      </form>
    </div>
  );
}
