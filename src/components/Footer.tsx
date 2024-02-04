import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="bg-slate-50 pt-9 pb-16 flex w-full">
        <div className="w-full max-w-5xl mx-auto text-sm flex items-start justify-between ">
          <div className="flex flex-col gap-4">
            <h3>Allgemein</h3>
            <div className="flex flex-col gap-1">
              <a
                href="https://www.bmi.bund.de/DE/themen/verfassung/staatliche-ordnung/versammlungsrecht/versammlungsrecht-node.html"
                className="text-gray-500 cursor-pointer hover:underline"
              >
                Versammlungsrecht
              </a>
              <a className="text-gray-500 cursor-pointer hover:underline">
                Versammlungsgesetz (VersammlG)
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3>demoheute.de</h3>
            <div className="flex flex-col gap-1">
              <a className="text-gray-500 cursor-pointer hover:underline">
                Impressum
              </a>
              <a className="text-gray-500 cursor-pointer hover:underline">
                Nutzungsbedingungen
              </a>
              <a className="text-gray-500 cursor-pointer hover:underline">
                Datenschutz
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3>Kontakt</h3>
            <div className="flex flex-col gap-1">
              <a
                className="text-gray-500 cursor-pointer hover:underline"
                href="mailto:kontakt@demoheute.de"
              >
                kontakt@demoheute.de
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3>Links</h3>
            <div className="flex flex-col gap-1">
              <a
                className="text-gray-500 cursor-pointer hover:underline"
                href="fragdenstaat.de"
              >
                fragdenstaat.de
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary text-primary-foreground py-3 text-sm flex justify-center">
        © 2020-2024 demoheute.de
      </div>
    </footer>
  );
};

export default Footer;
