import { useState } from 'react';

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-primary-500 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm font-inter mb-4">
              © {currentYear} Biroul Notarial Andrei Ionescu — Toate drepturile rezervate.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <button 
                onClick={() => setShowTerms(true)}
                className="hover:text-gold-500 transition-colors cursor-pointer"
              >
                Termeni și Condiții
              </button>
              <button 
                onClick={() => setShowPrivacy(true)}
                className="hover:text-gold-500 transition-colors cursor-pointer"
              >
                Politica de Confidențialitate
              </button>
              <a 
                href="https://www.websiteon.ro" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-500 transition-colors cursor-pointer"
              >
                Creat de WebsiteON
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal pentru Termeni și Condiții */}
      {showTerms && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowTerms(false)}
        >
          <div 
            className="bg-white rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-lora font-semibold text-primary-500">
                Termeni și Condiții
              </h3>
              <button 
                onClick={() => setShowTerms(false)}
                className="text-gray-500 hover:text-primary-500 transition-colors"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            
            <div className="space-y-4 text-gray-700 font-inter">
              <section>
                <h4 className="text-lg font-semibold text-primary-500 mb-2">1. Acceptarea Termenilor</h4>
                <p>
                  Prin utilizarea serviciilor Biroului Notarial Andrei Ionescu, acceptați să respectați 
                  prezentii termeni și condiții. Dacă nu sunteți de acord cu acești termeni, vă rugăm 
                  să nu utilizați serviciile noastre.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-primary-500 mb-2">2. Servicii Oferite</h4>
                <p>
                  Biroul nostru notarial oferă servicii de autentificare, legalizare, întocmire contracte, 
                  deschidere succesiuni, procuri și alte acte notariale în conformitate cu legislația 
                  română în vigoare.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-primary-500 mb-2">3. Programări și Anulări</h4>
                <p>
                  Programările se pot face telefonic, prin email sau prin formularul online. În cazul în 
                  care nu puteți onora o programare, vă rugăm să ne anunțați cu cel puțin 24 de ore înainte.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-primary-500 mb-2">4. Tarife și Plăți</h4>
                <p>
                  Tarifele pentru serviciile notariale sunt stabilite conform Ordinului Ministerului Justiției. 
                  Tarifele orientative sunt disponibile pe site, dar pot varia în funcție de complexitatea 
                  cazului. Plata se efectuează la finalizarea serviciului.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-primary-500 mb-2">5. Confidențialitate</h4>
                <p>
                  Ne angajăm să respectăm confidențialitatea informațiilor dumneavoastră în conformitate 
                  cu reglementările GDPR și legislația română privind protecția datelor personale.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-primary-500 mb-2">6. Responsabilități</h4>
                <p>
                  Clientul este responsabil pentru furnizarea documentelor complete și corecte necesare 
                  pentru efectuarea actului notarial. Biroul notarial nu își asumă responsabilitatea pentru 
                  întârzieri cauzate de documentație incompletă.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-primary-500 mb-2">7. Modificări ale Termenilor</h4>
                <p>
                  Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. 
                  Modificările vor fi publicate pe site și vor intra în vigoare imediat.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-primary-500 mb-2">8. Contact</h4>
                <p>
                  Pentru întrebări privind acești termeni și condiții, vă rugăm să ne contactați 
                  la notariat@notariatnotar.ro sau telefonic la 070 000 000.
                </p>
              </section>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setShowTerms(false)}
                className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-gold-500 transition-colors font-inter font-medium cursor-pointer"
              >
                Închide
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal pentru Politica de Confidențialitate */}
      {showPrivacy && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowPrivacy(false)}
        >
          <div 
            className="bg-white rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-lora font-semibold text-primary-500">
                Politica de Confidențialitate
              </h3>
              <button 
                onClick={() => setShowPrivacy(false)}
                className="text-gray-500 hover:text-primary-500 transition-colors"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            
            <div className="space-y-4 text-gray-700 font-inter">
              <section>
                <h4 className="text-lg font-semibold text-primary-500 mb-2">1. Introducere</h4>
                <p>
                  Biroul Notarial Andrei Ionescu respectă confidențialitatea datelor dumneavoastră personale 
                  și se angajează să le protejeze în conformitate cu Regulamentul General privind Protecția 
                  Datelor (GDPR) și legislația română aplicabilă.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-primary-500 mb-2">2. Date Colectate</h4>
                <p>
                  Colectăm următoarele categorii de date personale:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Date de identificare (nume, prenume, CNP, serie și număr carte de identitate)</li>
                  <li>Date de contact (adresă, telefon, email)</li>
                  <li>Documente necesare pentru efectuarea actelor notariale</li>
                  <li>Informații financiare necesare pentru facturare</li>
                </ul>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-primary-500 mb-2">3. Scopul Prelucrării</h4>
                <p>
                  Prelucrăm datele dumneavoastră personale în următoarele scopuri:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Întocmirea și autentificarea actelor notariale</li>
                  <li>Îndeplinirea obligațiilor legale</li>
                  <li>Comunicare cu dumneavoastră privind serviciile solicitate</li>
                  <li>Arhivarea documentelor conform legii</li>
                </ul>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-primary-500 mb-2">4. Baza Legală</h4>
                <p>
                  Prelucrarea datelor dumneavoastră se bazează pe:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Executarea unui contract sau măsuri precontractuale</li>
                  <li>Obligații legale care ne revin ca birou notarial</li>
                  <li>Consimțământul dumneavoastră explicit</li>
                </ul>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-primary-500 mb-2">5. Partajarea Datelor</h4>
                <p>
                  Datele dumneavoastră pot fi partajate cu:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Autorități publice (ANCPI, Arhiva Electronică de Garanții Reale Mobiliare, etc.)</li>
                  <li>Alte părți implicate în actul notarial (cu acordul dumneavoastră)</li>
                  <li>Furnizori de servicii IT pentru mentenanța sistemelor noastre</li>
                </ul>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-primary-500 mb-2">6. Drepturile Dumneavoastră</h4>
                <p>
                  Aveți următoarele drepturi privind datele personale:
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Dreptul de acces la datele dumneavoastră</li>
                  <li>Dreptul de rectificare a datelor inexacte</li>
                  <li>Dreptul la ștergerea datelor (în anumite condiții)</li>
                  <li>Dreptul de a vă opune prelucrării</li>
                  <li>Dreptul la portabilitatea datelor</li>
                  <li>Dreptul de a depune plângere la ANSPDCP</li>
                </ul>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-primary-500 mb-2">7. Securitatea Datelor</h4>
                <p>
                  Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele 
                  dumneavoastră împotriva accesului neautorizat, pierderii sau distrugerii.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-primary-500 mb-2">8. Perioada de Stocare</h4>
                <p>
                  Datele dumneavoastră sunt stocate conform prevederilor legale aplicabile actelor 
                  notariale, de regulă pentru o perioadă de minimum 50 de ani pentru arhivă.
                </p>
              </section>

              <section>
                <h4 className="text-lg font-semibold text-primary-500 mb-2">9. Contact</h4>
                <p>
                  Pentru exercitarea drepturilor sau pentru întrebări privind prelucrarea datelor, 
                  ne puteți contacta la:
                </p>
                <ul className="list-none mt-2 space-y-1">
                  <li><strong>Email:</strong> notariat@notariatnotar.ro</li>
                  <li><strong>Telefon:</strong> 070 000 000</li>
                  <li><strong>Adresă:</strong> Strada Notarială nr. 11, Sector 4, București</li>
                </ul>
              </section>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setShowPrivacy(false)}
                className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-gold-500 transition-colors font-inter font-medium cursor-pointer"
              >
                Închide
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
