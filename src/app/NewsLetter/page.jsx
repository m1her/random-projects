import React from "react";
import "./style.css";
import Newsletterbnr from "../../../public/newsletterbnr.png";
import Logo from "../../../public/Logo.png";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-9 relative h-[950px]">
        <div className="col-span-5 bg-[#0b4068] flex flex-col gap-y-8 p-20">
          <div className="newsLetterTitle">COMPANY NEWSLETTER</div>
          <div className="companyLink">WWW.DIASPO-DUNDING.DE</div>
        </div>
        <div className="col-span-4 bg-[#ffff] flex flex-col items-end gap-y-8 p-20">
          <Image
            className="mt-3 w-[360px]"
            src={Logo}
            loading="lazy"
            alt="logo"
            width={1000}
            height={1000}
          />
          <div className="date">Monday, July 1, 2024</div>
        </div>
        <div className="w-full h-[550px] z-50 absolute bottom-3 px-20">
          <Image
            className="mt-3 w-full h-full"
            src={Newsletterbnr}
            loading="lazy"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 p-20 gap-x-4">
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-8"></div>

          <div className="text-5xl font-semibold text-[#0b4068]">
            Levée De Fonds Pour Projet D'Investissement
          </div>
          <div className="text-2xl font-medium">
            Nous lançons une levée de fonds à hauteur de xx€ pour un taux
            d'intérêt de xx% sur la période du 01.07.2024 au 30.09.2024 pour
            approximativement une vingtaine de personnes qui pourrons investir.
          </div>
          <div className="text-2xl font-medium">
            Si tu es intéressé n'hésite pas et envoies-nous dès maintenant ta
            demande de participation en utilisant notre simulateur sur notre
            page internet www.diaspo-funding.de
          </div>
        </div>
        <div className="flex flex-col gap-y-8 -mt-44 z-50 h-fit">
          <div className="bg-[#0b4068] p-12 flex flex-col gap-y-8">
            <div className="text-4xl font-bold text-[#ffff]">
              Qui sommes-nous (Si tu ne nous connais pas encore)?
            </div>
            <div className="text-2xl font-medium text-white">
              Nous entreprenons depuis 2001 et initions des levées de fonds
              depuis 2016 pour des investissements principalement dans
              l'immobilier, l'acquisition et la création d'entreprises aussi
              bien ici en Europe que dans différents pays d'Afrique.
            </div>
          </div>
          <div className="bg-[#c4a15f] p-12 flex flex-col gap-y-8">
            <div className="text-4xl font-bold text-[#ffff]">Notre vision</div>
            <div className="text-2xl font-medium text-white">
              Créer un fond de financement participatif de la diaspora
              Africaine. Fond géré et garantie par notre société de gestion de
              patrimoine "diaspo funding GmbH" par émission d’obligations à des
              taux d’intérêt adéquats.
            </div>
          </div>
        </div>
      </div>
      <div className="text-6xl font-bold text-[#0b4068] px-20 -mt-4">
        Seul nous sommes allez vite, avec vous nous souhaitons aller plus loin.
      </div>
      <div className="grid grid-cols-2 px-20 mt-12 gap-x-4 relative">
        <div className="w-2/5 z-20 h-[450px] bg-[#0b4068] absolute left-10 -top-10 grid grid-rows-5">
          <div className="row-span-3 px-8">
            <div className="border-b mt-3 h-full border-white/50"></div>
          </div>
          <div className="row-span-2"></div>
        </div>

        <div className="text-2xl font-medium text-white w-3/4 z-30">
          En pièce jointe trouve une description détaillée sur nos secteurs
          d'activité, le principe et les pays dans lesquels nous avons des
          investissements ou dans lesquels nous sommes en prospections.
        </div>
        <div className="text-2xl font-medium w-3/4">
          Pour toutes questions complémentaires n'hésite pas à te rapprocher de
          nous par E-Mail, téléphone ou même dans nos bureaux.
        </div>
      </div>
      <div className="grid grid-cols-2 px-20 py-8 mt-12 gap-x-4 bg-[#c4a15f]">
        <div className="flex flex-col gap-y-2 z-50">
          <div className="text-lg font-semibold text-white">
            Surname Name:{" "}
            <span className="text-base font-medium text-white">
              Geschäftsführung
            </span>
          </div>

          <div className="text-lg font-medium text-white">
            diaspo funding GmbH
          </div>
          <div className="text-lg font-medium text-white">
            Riedstr. 2, 64295 Darmstadt
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="text-lg font-semibold text-white">
            Tel.:{" "}
            <span className="text-base font-medium text-white">
              +49 xxxx xxxx xx
            </span>
          </div>
          <div className="text-lg font-semibold text-white">
            Mobile:{" "}
            <span className="text-base font-medium text-white">
              +49 xxxx xxxx xx
            </span>
          </div>
          <div className="text-lg font-semibold text-white">
            E-Mail:{" "}
            <span className="text-base font-medium text-white">
              info@diaspo-funding.de
            </span>
          </div>{" "}
          <div className="text-2xl font-bold text-white mt-4">
            Diaspo Funding - Give More Meaning To Your Income
          </div>
        </div>
      </div>
    </div>
  );
};
//
export default NewsLetter;
