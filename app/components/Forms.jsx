export function Forms() {
  return (
    <div className="md:w-full w-full">
      <form className=" flex ml-4 max-sm:ml-3 max-sm:mr-3 flex-col">
        <div className="flex flex-col  gap-2">
          <div className="flex mt-3 mb-3 font-semibold w-full">
            <h1 className="max-sm:text-xs w-[] ">INFORMATIONS PERSONNELLES</h1>
            <div className="w-[50%] md:w-[31%] lg:w-[14%] bg-gray-600 md:mt-2 max-md:m-auto h-1"></div>
          </div>
          <select className=" border border-gray-600  h-10 bg-transparent rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 w-[25%] md:w-[20%] ">
            <option disabled selected className="bg-transparent">Civilité</option>
            <option  className=" border border-gray-600 h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 w-[25%]  md:w-[20%]">Mr</option>
            <option  className=" border border-gray-600 h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 w-[25%]  md:w-[20%]">Mme</option>
            <option  className=" border border-gray-600 h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 w-[25%]  md:w-[20%]">Mlle</option>
          </select>
          {/* <input type="text" placeholder="Civilité" className=" border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 w-[25%]  md:w-[0%] " /> */}
          <input type="text" placeholder="Nom" className=" border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-full  md:w-[80%] lg:w-[50%] " />
          <input type="text" placeholder="Prénom" className=" border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-full md:w-[80%] lg:w-[50%] " />
          <div className="flex gap-1">
            <input type="text" placeholder="Lieu de naissance" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-[49.7%] md:w-[39.6%] lg:w-[24.8%] " />
            <input type="date" placeholder="Date de naissance" className="border border-gray-600 bg-transparent  h-10  rounded-md ²l-1 lg:pl-3 max-sm:pl-2 max-sm:w-[49.7%] md:w-[39.6%] lg:w-[24.8%] " />
          </div>
          <div className="flex gap-1">
            <input type="text" placeholder="Types de piece" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-[49.7%] md:w-[39.6%] lg:w-[24.8%]" />
            <input type="text" placeholder="Date d'expiration" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-[49.7%] md:w-[39.6%] lg:w-[24.8%] " />
          </div>
          <input type="file" placeholder="Fichier" className="border pt-1 border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-full w-[%] md:w-[80%] lg:w-[50%] " />
          <div className="flex w-full mt-3 mb-3 font-semibold ">
            <h1 className="max-sm:text-xs">COORDONNEES</h1>
            <div className="w-[90%] bg-gray-600 md:w-[55%] lg:w-[32%] md:mt-2 max-sm:m-auto h-1"></div>
          </div>
          <input type="text" placeholder="Ville de résisdence" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-full w-[%] md:w-[80%] lg:w-[50%] " />
          <input type="text" placeholder="Adresse" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-full w-[%] md:w-[80%] lg:w-[50%] " />
          <div className="flex gap-1">
            <input type="text" placeholder="Boite postal" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-[49.7%] md:w-[39.6%] lg:w-[24.8%] " />
            <input type="number" placeholder="Téléphone" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-[49.7%] md:w-[39.6%] lg:w-[24.8%] " />
          </div>
          <div className="flex w-full mt-3 mb-3 font-semibold ">
            <h1 className="max-sm:text-xs">AYANT DROIT</h1>
            <div className="w-[80%] lg:w-[35%] md:w-[59%] md:mt-2 bg-gray-600 max-sm:m-auto h-1"></div>
          </div>
          <input type="text" placeholder="Filiation" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 w-[25%]  md:w-[20%] " />
          <input type="text" placeholder="Nom" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-full w-[%] md:w-[80%] lg:w-[50%] " />
          <input type="text" placeholder="Prénom" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-full w-[%] md:w-[80%] lg:w-[50%] " />
          <div className="flex gap-1">
            <input type="text" placeholder="Lieu de naissance" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-[49.7%] md:w-[39.6%] lg:w-[24.8%] " />
            <input type="date" placeholder="Date de naissance" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-[49.7%] md:w-[39.6%] lg:w-[24.8%] " />
          </div>
          <div className="flex gap-1">
            <input type="text" placeholder="Types de piece" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-[49.7%] md:w-[39.6%] lg:w-[24.8%] " />
            <input type="text" placeholder="Date d'expiration" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-[49.7%] md:w-[39.6%] lg:w-[24.8%] " />
          </div>
          <input type="text" placeholder="Fichier" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-full w-[%] md:w-[80%] lg:w-[50%] " />
          <button type="submit"className="border border-gray-600 bg-transparent  h-10 max-sm:text-sm  rounded-md font-semibold w-[25%] md:w-[20%] ">AJOUTER</button>
          <div className="flex w-full mt-3 mb-3 font-semibold ">
            <h1 className="max-sm:text-xs">BIENS IMMOBILIER</h1>
            <div className="w-[72%] bg-gray-600 lg:w-[29%] md:w-[51%] md:mt-2  max-sm:m-auto h-1"></div>
          </div>
          <select className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-full w-[%] md:w-[80%] lg:w-[50%]">
            <option disabled selected className="bg-transparent">Vous etes?</option>
            <option  className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-full w-[%] md:w-[80%] lg:w-[50%]">Bailleurs</option>
            <option  className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-full w-[%] md:w-[80%] lg:w-[50%]">Locataire</option>
            <option  className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-full w-[%] md:w-[80%] lg:w-[50%]">Agence Immobilière</option>
          </select>
         {/*  <input type="text" placeholder="Vous tees?" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-full w-[%] md:w-[80%] lg:w-[50%] " />  */}
          <input type="text" placeholder="Types" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-full w-[%] md:w-[80%] lg:w-[50%] " />
          <div className="flex gap-1">
            <input type="calendar" placeholder="Années de construction" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-[49.7%] md:w-[39.6%] lg:w-[24.8%] " />
            <input type="text" placeholder="Valeur locative" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-[49.7%] md:w-[39.6%] lg:w-[24.8%] " />
          </div>
          <input type="text" placeholder="Nombre de pieces" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-full w-[%] md:w-[80%] lg:w-[50%] " />
          <input type="text" placeholder="Location" className="border border-gray-600 bg-transparent  h-10  rounded-md md:pl-1 lg:pl-3 max-sm:pl-2 max-sm:w-full w-[%] md:w-[80%] lg:w-[50%] " />
          <button type="submit"className="border md:mb-4 border-gray-600 bg-transparent  h-10  rounded-md font-semibold w-[25%]  md:w-[20%]">Ajouter</button>
        </div>
      </form>
    </div>
  );
}
