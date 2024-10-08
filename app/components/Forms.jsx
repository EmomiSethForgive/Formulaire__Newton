export function Forms() {
  return (
    <div className="w-full">
      <form className="w-full ">
        <div className="flex flex-col w-95% gap-2">
          <div className="flex w-full">
            <h1 className="max-sm:text-xs w-[] ">INFORMATIONS PERSONNELLES</h1>
            <div className="w-[50%] md:w-[33%] bg-black md:mt-2 max-md:m-auto h-1"></div>
          </div>
          <input type="text" placeholder="Civilité" className=" border border-black  h-10  rounded-md pl-3 w-[20%]  md:w-[15%] " />
          <input type="text" placeholder="Nom" className=" border border-black  h-10  rounded-md pl-3 max-sm:w-full w-[70%] md:w-[50%] " />
          <input type="text" placeholder="Prénom" className=" border border-black  h-10  rounded-md pl-3 max-sm:w-full w-[70%] md:w-[50%] " />
          <div className="flex gap-1">
            <input type="text" placeholder="Lieu de naissance" className="border border-black  h-10  rounded-md pl-3 max-sm:w-[49.7%] w-[24.8%] " />
            <input type="date" placeholder="Date de naissance" className="border border-black  h-10  rounded-md pl-3 max-sm:w-[49.7%] w-[24.8%] " />
          </div>
          <div className="flex gap-1">
            <input type="text" placeholder="Types de piece" className="border border-black  h-10  rounded-md pl-3 max-sm:w-[49.7%] w-[24.8%]" />
            <input type="text" placeholder="Date d'expiration" className="border border-black  h-10  rounded-md pl-3 max-sm:w-[49.7%] w-[24.8%] " />
          </div>
          <input type="text" placeholder="Fichier" className="border border-black  h-10  rounded-md pl-3 max-sm:w-full w-[70%] md:w-[50%] " />
          <div className="flex w-full">
            <h1 className="max-sm:text-xs">COORDONNEES</h1>
            <div className="w-[90%] bg-black md:w-[41%] md:mt-2 max-sm:m-auto h-1"></div>
          </div>
          <input type="text" placeholder="Ville de résisdence" className="border border-black  h-10  rounded-md pl-3 max-sm:w-full w-[70%] md:w-[50%] " />
          <input type="text" placeholder="Adresse" className="border border-black  h-10  rounded-md pl-3 max-sm:w-full w-[70%] md:w-[50%] " />
          <div className="flex gap-1">
            <input type="text" placeholder="Boite postal" className="border border-black  h-10  rounded-md pl-3 max-sm:w-[49.7%] w-[24.8%] " />
            <input type="number" placeholder="Téléphone" className="border border-black  h-10  rounded-md pl-3 max-sm:w-[49.7%] w-[24.8%] " />
          </div>
          <div className="flex w-full">
            <h1 className="max-sm:text-xs">AYANT DROIT</h1>
            <div className="w-[80%] md:w-[43%] md:mt-2 bg-black  max-sm:m-auto h-1"></div>
          </div>
          <input type="text" placeholder="Féliation" className="border border-black  h-10  rounded-md pl-3 w-[20%]  md:w-[15%] " />
          <input type="text" placeholder="Nom" className="border border-black  h-10  rounded-md pl-3 max-sm:w-full w-[70%] md:w-[50%] " />
          <input type="text" placeholder="Prénom" className="border border-black  h-10  rounded-md pl-3 max-sm:w-full w-[70%] md:w-[50%] " />
          <div className="flex gap-1">
            <input type="text" placeholder="Lieu de naissance" className="border border-black  h-10  rounded-md pl-3 max-sm:w-[49.7%] w-[24.8%] " />
            <input type="text" placeholder="Date de naissance" className="border border-black  h-10  rounded-md pl-3 max-sm:w-[49.7%] w-[24.8%] " />
          </div>
          <div className="flex gap-1">
            <input type="text" placeholder="Types de piece" className="border border-black  h-10  rounded-md pl-3 max-sm:w-[49.7%] w-[24.8%] " />
            <input type="text" placeholder="Date d'expiration" className="border border-black  h-10  rounded-md pl-3 max-sm:w-[49.7%] w-[24.8%] " />
          </div>
          <input type="text" placeholder="Fichier" className="border border-black  h-10  rounded-md pl-3 max-sm:w-full w-[70%] md:w-[50%] " />
          <input type="text" placeholder="AJOUTER" className="border border-black  h-10  rounded-md pl-3 w-[20%]  md:w-[15%] " />
          <div className="flex w-full">
            <h1 className="max-sm:text-xs">BIENS IMMOBILIER</h1>
            <div className="w-[72%] bg-black md:w-[40%] md:mt-2  max-sm:m-auto h-1"></div>
          </div>
          <input type="text" placeholder="Vous etes?" className="border border-black  h-10  rounded-md pl-3 max-sm:w-full w-[70%] md:w-[50%] " />
          <input type="text" placeholder="Types" className="border border-black  h-10  rounded-md pl-3 max-sm:w-full w-[70%] md:w-[50%] " />
          <div className="flex gap-1">
            <input type="text" placeholder="Années de construction" className="border border-black  h-10  rounded-md pl-3 max-sm:w-[49.7%] w-[24.8%] " />
            <input type="text" placeholder="Valeur locative" className="border border-black  h-10  rounded-md pl-3 max-sm:w-[49.7%] w-[24.8%] " />
          </div>
          <input type="text" placeholder="Nombre de pieces" className="border border-black  h-10  rounded-md pl-3 max-sm:w-full w-[70%] md:w-[50%] " />
          <input type="text" placeholder="Location" className="border border-black  h-10  rounded-md pl-3 max-sm:w-full w-[70%] md:w-[50%] " />
          <input type="text" placeholder="Ajouter" className="border border-black  h-10  rounded-md pl-3 w-[20%]  md:w-[15%] " />
        </div>
      </form>
    </div>
  );
}
