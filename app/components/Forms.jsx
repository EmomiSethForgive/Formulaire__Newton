export function Forms() {
  return (
    <div className="w-full">
      <form className="w-full ">
        <div className="flex flex-col w-95% gap-2">
          <div className="flex mt-3 mb-3 font-semibold w-full">
            <h1 className="max-sm:text-xs w-[] ">INFORMATIONS PERSONNELLES</h1>
            <div className="w-[50%] md:w-[33%] bg-gray-600 md:mt-2 max-md:m-auto h-1"></div>
          </div>
          <select className=" border border-gray-600  h-10 bg-transparent rounded-md pl-3 max-sm:pl-2 w-[25%]  md:w-[15%] ">
            <option disabled selected className="bg-transparent">Civilité</option>
            <option  className=" border border-gray-600 h-10  rounded-md pl-3 max-sm:pl-2 w-[25%]  md:w-[15%]">Mr</option>
            <option  className=" border border-gray-600 h-10  rounded-md pl-3 max-sm:pl-2 w-[25%]  md:w-[15%]">Mme</option>
            <option  className=" border border-gray-600 h-10  rounded-md pl-3 max-sm:pl-2 w-[25%]  md:w-[15%]">Mlle</option>
          </select>
          {/* <input type="text" placeholder="Civilité" className=" border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 w-[25%]  md:w-[15%] " /> */}
          <input type="text" placeholder="Nom" className=" border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-full w-[70%] md:w-[50%] " />
          <input type="text" placeholder="Prénom" className=" border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-full w-[70%] md:w-[50%] " />
          <div className="flex gap-1">
            <input type="text" placeholder="Lieu de naissance" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-[49.7%] w-[24.8%] " />
            <input type="date" placeholder="Date de naissance" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-[49.7%] w-[24.8%] " />
          </div>
          <div className="flex gap-1">
            <input type="text" placeholder="Types de piece" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-[49.7%] w-[24.8%]" />
            <input type="text" placeholder="Date d'expiration" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-[49.7%] w-[24.8%] " />
          </div>
          <input type="text" placeholder="Fichier" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-full w-[70%] md:w-[50%] " />
          <div className="flex w-full mt-3 mb-3 font-semibold ">
            <h1 className="max-sm:text-xs">COORDONNEES</h1>
            <div className="w-[90%] bg-gray-600 md:w-[41%] md:mt-2 max-sm:m-auto h-1"></div>
          </div>
          <input type="text" placeholder="Ville de résisdence" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-full w-[70%] md:w-[50%] " />
          <input type="text" placeholder="Adresse" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-full w-[70%] md:w-[50%] " />
          <div className="flex gap-1">
            <input type="text" placeholder="Boite postal" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-[49.7%] w-[24.8%] " />
            <input type="number" placeholder="Téléphone" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-[49.7%] w-[24.8%] " />
          </div>
          <div className="flex w-full mt-3 mb-3 font-semibold ">
            <h1 className="max-sm:text-xs">AYANT DROIT</h1>
            <div className="w-[80%] md:w-[43%] md:mt-2 bg-gray-600 max-sm:m-auto h-1"></div>
          </div>
          <input type="text" placeholder="Filiation" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 w-[25%]  md:w-[15%] " />
          <input type="text" placeholder="Nom" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-full w-[70%] md:w-[50%] " />
          <input type="text" placeholder="Prénom" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-full w-[70%] md:w-[50%] " />
          <div className="flex gap-1">
            <input type="text" placeholder="Lieu de naissance" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-[49.7%] w-[24.8%] " />
            <input type="text" placeholder="Date de naissance" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-[49.7%] w-[24.8%] " />
          </div>
          <div className="flex gap-1">
            <input type="text" placeholder="Types de piece" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-[49.7%] w-[24.8%] " />
            <input type="text" placeholder="Date d'expiration" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-[49.7%] w-[24.8%] " />
          </div>
          <input type="text" placeholder="Fichier" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-full w-[70%] md:w-[50%] " />
          <button type="submit"className="border border-gray-600 bg-transparent  h-10  rounded-md font-semibold w-[25%]  md:w-[15%] ">AJOUTER</button>
          <div className="flex w-full mt-3 mb-3 font-semibold ">
            <h1 className="max-sm:text-xs">BIENS IMMOBILIER</h1>
            <div className="w-[72%] bg-gray-600 md:w-[40%] md:mt-2  max-sm:m-auto h-1"></div>
          </div>
          <input type="text" placeholder="Vous etes?" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-full w-[70%] md:w-[50%] " />
          <input type="text" placeholder="Types" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-full w-[70%] md:w-[50%] " />
          <div className="flex gap-1">
            <input type="text" placeholder="Années de construction" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-[49.7%] w-[24.8%] " />
            <input type="text" placeholder="Valeur locative" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-[49.7%] w-[24.8%] " />
          </div>
          <input type="text" placeholder="Nombre de pieces" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-full w-[70%] md:w-[50%] " />
          <input type="text" placeholder="Location" className="border border-gray-600 bg-transparent  h-10  rounded-md pl-3 max-sm:pl-2 max-sm:w-full w-[70%] md:w-[50%] " />
          <button type="submit"className="border border-gray-600 bg-transparent  h-10  rounded-md font-semibold w-[25%]  md:w-[15%] ">Ajouter</button>
        </div>
      </form>
    </div>
  );
}
