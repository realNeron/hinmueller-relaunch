import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface ServiceItem {
  id: string;
  title: string;
  category: 'private' | 'commercial' | 'agriculture';
  subcategory: string;
  icon: string;
  shortDesc: string;
  details: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  searchTerm: string = '';
  activeTab: 'all' | 'private' | 'commercial' | 'agriculture' = 'all';

  services: ServiceItem[] = [
    // Private - Sachversicherung
    {
      id: 'privathaftpflicht',
      title: 'Privathaftpflicht',
      category: 'private',
      subcategory: 'Sachversicherung',
      icon: 'fa-user-shield',
      shortDesc: 'Der wichtigste Basisschutz für Sie und Ihre Familie bei unabsichtlichen Schäden an Dritten.',
      details: [
        'Prüfung von Haftpflichtfragen',
        'Abwehr unberechtigter Ansprüche',
        'Regulierung berechtigter Schäden (Personen-, Sach- & Vermögensschäden)',
        'Forderungsausfalldeckung inklusive'
      ]
    },
    {
      id: 'hausrat',
      title: 'Hausratversicherung',
      category: 'private',
      subcategory: 'Sachversicherung',
      icon: 'fa-couch',
      shortDesc: 'Schutz für Ihr gesamtes Hab und Gut bei Feuer, Einbruch, Leitungswasser, Sturm und Hagel.',
      details: [
        'Absicherung zum Wiederbeschaffungswert',
        'Fahrraddiebstahl optional einschließbar',
        'Elementarschadenabdeckung bei Überschwemmung/Rückstau',
        'Wertsachen und Elektronik mitversichert'
      ]
    },
    {
      id: 'wohngebaeude',
      title: 'Wohngebäudeversicherung',
      category: 'private',
      subcategory: 'Sachversicherung',
      icon: 'fa-house-chimney',
      shortDesc: 'Finanzieller Schutz für Ihr Eigenheim gegen Elementarschäden, Brand, Leitungswasser und Sturm.',
      details: [
        'Absicherung des Baukörpers und fester Einbauten',
        'Kostenübernahme für Aufräum- & Abbruchsarbeiten',
        'Grobe Fahrlässigkeit voll mitversichert',
        'Dringend empfohlen: Elementarschaden-Zusatzschutz'
      ]
    },
    {
      id: 'rechtsschutz',
      title: 'Rechtsschutzversicherung',
      category: 'private',
      subcategory: 'Sachversicherung',
      icon: 'fa-gavel',
      shortDesc: 'Sichert das finanzielle Risiko bei Rechtsstreitigkeiten im Privat-, Berufs- oder Verkehrsleben.',
      details: [
        'Freie Anwaltswahl',
        'Übernahme von Gerichts-, Anwalts- und Gutachterkosten',
        'Kostenlose telefonische Erstberatung durch Anwälte',
        'Bausteine flexibel wählbar (Privat, Beruf, Verkehr, Wohnen)'
      ]
    },
    {
      id: 'tierhalterhaftpflicht',
      title: 'Tierhalterhaftpflicht',
      category: 'private',
      subcategory: 'Sachversicherung',
      icon: 'fa-dog',
      shortDesc: 'Für Hunde- und Pferdebesitzer unverzichtbar – haftet unbegrenzt bei Schäden durch Ihr Tier.',
      details: [
        'Hunde- und Pferdehaftpflicht',
        'Mietsachschäden an Mietwohnungen/Ferienhäusern',
        'Ungewollter Deckakt mitversichert',
        'Auslandsaufenthalte weltweit abgedeckt'
      ]
    },
    {
      id: 'tierkranken',
      title: 'Tierkrankenversicherung',
      category: 'private',
      subcategory: 'Sachversicherung',
      icon: 'fa-heart-pulse',
      shortDesc: 'Schützt vor hohen Tierarzt- und OP-Kosten bei Krankheit oder Unfall Ihres geliebten Vierbeiners.',
      details: [
        'OP-Kostenschutz oder Krankenvollversicherung',
        'Freie Tierarzt- und Klinikwahl',
        'Übernahme von Diagnostik (Röntgen, CT, Labor)',
        'Kostenerstattung bis zum 4-fachen Satz der GOT'
      ]
    },
    {
      id: 'ebike-drohne',
      title: 'E-Bike- & Drohnenversicherung',
      category: 'private',
      subcategory: 'Sachversicherung',
      icon: 'fa-bicycle',
      shortDesc: 'Spezialschutz für teure Pedelecs (Diebstahl, Akku-Defekte) und gesetzliche Haftpflicht für Drohnen.',
      details: [
        'E-Bike: Diebstahl, Vandalismus und Verschleißschutz (inkl. Akku)',
        'Drohnen: Gesetzlich vorgeschriebene Haftpflicht für den Flugbetrieb',
        'Weltweiter Schutz bei Reisen',
        'Soforthilfe bei Pannen unterwegs'
      ]
    },
    // Private - Vorsorge & Gesundheit
    {
      id: 'krankenversicherung',
      title: 'Private Krankenversicherung',
      category: 'private',
      subcategory: 'Vorsorge & Gesundheit',
      icon: 'fa-stethoscope',
      shortDesc: 'Maßgeschneiderte Erstklass-Medizin: PKV-Vollversicherung und leistungsstarke Zusatzversicherungen.',
      details: [
        'PKV-Vollversicherung für Selbstständige, Freiberufler & Beamte',
        'Zahnzusatzversicherung (bis zu 100% Zahnersatz & Prophylaxe)',
        'Stationäre Zusatzversicherung (Chefarzt & Einbettzimmer)',
        'Ambulanter Ergänzungsschutz (Heilpraktiker, Sehhilfen)'
      ]
    },
    {
      id: 'altersvorsorge',
      title: 'Altersvorsorge & Rente',
      category: 'private',
      subcategory: 'Vorsorge & Gesundheit',
      icon: 'fa-chart-line',
      shortDesc: 'Schließen Sie Ihre Rentenlücke mit staatlich geförderten oder privaten Vorsorgekonzepten.',
      details: [
        'Basisrente / Rürup-Rente (Steuerbegünstigt für Selbstständige)',
        'Riester-Rente (Staatliche Zulagen für Familien & Arbeitnehmer)',
        'Private Rentenversicherung (Flexibel und steuerbegünstigt)',
        'Betriebliche Altersvorsorge (bAV) via Entgeltumwandlung'
      ]
    },
    {
      id: 'bu-arbeitskraft',
      title: 'Berufsunfähigkeit (BU)',
      category: 'private',
      subcategory: 'Vorsorge & Gesundheit',
      icon: 'fa-user-doctor',
      shortDesc: 'Sichert Ihre finanzielle Existenz, falls Sie Ihren Beruf aus gesundheitlichen Gründen nicht mehr ausüben können.',
      details: [
        'Monatliche Rentenzahlung bei Berufsunfähigkeit ab 50%',
        'Verzicht auf abstrakte Verweisung',
        'Vereinfachte Gesundheitsprüfung bei bestimmten Anlässen',
        'Flexibel anpassbar bei Karriere- und Lebensänderungen'
      ]
    },
    {
      id: 'unfallversicherung',
      title: 'Unfallversicherung',
      category: 'private',
      subcategory: 'Vorsorge & Gesundheit',
      icon: 'fa-kit-medical',
      shortDesc: 'Schutz rund um die Uhr, weltweit. Die gesetzliche Unfallversicherung leistet nur auf dem Arbeitsweg.',
      details: [
        'Kapitalzahlung im Invaliditätsfall',
        'Lebenslange Unfallrente vereinbar',
        'Bergungs- und kosmetische OP-Kosten inklusive',
        'Gilt in der Freizeit, im Haushalt und auf Reisen'
      ]
    },
    {
      id: 'kfz-versicherung',
      title: 'Kfz-Versicherung',
      category: 'private',
      subcategory: 'Sachversicherung',
      icon: 'fa-car',
      shortDesc: 'Optimaler Schutz für Pkw, Motorrad oder Moped mit schnellem Schadenservice.',
      details: [
        'Haftpflicht mit hoher Deckungssumme',
        'Teilkasko (Wildschaden, Glasschaden, Diebstahl, Marderbiss)',
        'Vollkasko (selbstverschuldete Schäden & Vandalismus)',
        'Schadenservice mit Werkstattbindung optional wählbar'
      ]
    },

    // Commercial
    {
      id: 'betriebshaftpflicht',
      title: 'Betriebshaftpflicht',
      category: 'commercial',
      subcategory: 'Gewerblicher Schutz',
      icon: 'fa-building-shield',
      shortDesc: 'Existenzschutz für Ihr Unternehmen bei Personen- und Sachschäden, die durch Ihren Betrieb verursacht werden.',
      details: [
        'Prüfung der Haftungsfrage und Abwehr unberechtigter Ansprüche',
        'Absicherung für Betriebsinhaber, Mitarbeiter und Subunternehmer',
        'Produkthaftpflicht und Umwelthaftpflicht integrierbar',
        'Spezialtarife für Gastronomie, Handel, Handwerk & Baugewerbe'
      ]
    },
    {
      id: 'betriebsinhalt',
      title: 'Inhalts- & Ertragsausfall',
      category: 'commercial',
      subcategory: 'Gewerblicher Schutz',
      icon: 'fa-boxes-stacked',
      shortDesc: 'Sichert Waren, Vorräte, Maschinen und den entgangenen Gewinn bei Betriebsunterbrechung ab.',
      details: [
        'Betriebs-Inhaltsversicherung (Brand, Einbruch, Leitungswasser, Sturm)',
        'Betriebsunterbrechungsversicherung (Laufende Kosten & entgangener Gewinn)',
        'Betriebsschließungsversicherung (z.B. bei behördlichen Auflagen)',
        'Neuwertentschädigung für Betriebseinrichtung'
      ]
    },
    {
      id: 'betriebsgebaeude',
      title: 'Betriebsgebäudeversicherung',
      category: 'commercial',
      subcategory: 'Gewerblicher Schutz',
      icon: 'fa-industry',
      shortDesc: 'Der Schutz für Ihre gewerblich genutzten Immobilien gegen Substanzverluste durch Feuer und Naturgefahren.',
      details: [
        'Absicherung von Hallen, Bürogebäuden und Nebengebäuden',
        'Aufräumungs-, Abbruch- und Dekontaminationskosten',
        'Mietausfall für vermietete gewerbliche Räume',
        'Mitversicherung von Photovoltaikanlagen auf den Dächern'
      ]
    },
    {
      id: 'cyberversicherung',
      title: 'Cyber-Versicherung',
      category: 'commercial',
      subcategory: 'Technische Risiken',
      icon: 'fa-shield-halved',
      shortDesc: 'Schutz vor den finanziellen Folgen von Hackerangriffen, Phishing und Datenverlusten.',
      details: [
        'Sofortige IT-Krisenhilfe durch Spezialisten (24/7 Hotline)',
        'Übernahme von Drittschäden (Datenschutzverstöße)',
        'Eigenschadendeckung (Datenwiederherstellung, Erpressungsgeld)',
        'Ertragsausfall nach einem Cyber-Angriff abgedeckt'
      ]
    },
    {
      id: 'gewerberechtsschutz',
      title: 'Gewerberechtsschutz',
      category: 'commercial',
      subcategory: 'Gewerblicher Schutz',
      icon: 'fa-scale-balanced',
      shortDesc: 'Sichert Sie ab bei Streitigkeiten mit Mitarbeitern, Kunden, Lieferanten oder Behörden.',
      details: [
        'Arbeitgeber-Rechtsschutz (Streitigkeiten mit Angestellten)',
        'Vertrags-Rechtsschutz für Hilfsgeschäfte',
        'Steuer- und Sozialgerichtsrechtsschutz vor deutschen Gerichten',
        'Inklusive Inkasso-Dienstleistungen zur Beitreibung von Forderungen'
      ]
    },
    {
      id: 'd_and_o',
      title: 'D&O / Managerhaftung',
      category: 'commercial',
      subcategory: 'Gewerblicher Schutz',
      icon: 'fa-user-tie',
      shortDesc: 'Schützt Geschäftsführer, Vorstände und Aufsichtsräte vor der persönlichen Haftung bei Managementfehlern.',
      details: [
        'Abdeckung von Innen- und Außenhaftungsansprüchen',
        'Übernahme der Abwehrkosten (Gericht, Anwalt, Gutachter)',
        'Freistellung von berechtigten Schadenersatzansprüchen',
        'Speziell auf KMU zugeschnittene Deckungskonzepte'
      ]
    },
    {
      id: 'technische_versicherungen',
      title: 'Maschinen- & Elektronikschutz',
      category: 'commercial',
      subcategory: 'Technische Risiken',
      icon: 'fa-laptop-code',
      shortDesc: 'Spezialversicherung für teure technische Anlagen, IT-Systeme, Baumaschinen und Messgeräte.',
      details: [
        'Elektronikversicherung für Server, PCs und Medizintechnik',
        'Maschinenversicherung für stationäre und fahrbare Arbeitsmaschinen',
        'Abdeckung bei Bedienungsfehlern, Ungeschicklichkeit und Diebstahl',
        'Mehrkostenversicherung (z.B. Miete von Ersatzgeräten)'
      ]
    },
    {
      id: 'betriebliche_vorsorge',
      title: 'Betriebliche Vorsorge (bAV/bKV)',
      category: 'commercial',
      subcategory: 'Mitarbeiter-Benefits',
      icon: 'fa-people-group',
      shortDesc: 'Steigern Sie Ihre Arbeitgeberattraktivität durch betriebliche Altersvorsorge und Krankenversicherung.',
      details: [
        'Einrichtung und Optimierung von bAV-Modellen (Direktversicherung, Unterstützungskasse)',
        'Betriebliche Krankenversicherung (bKV) als spürbarer Mehrwert',
        'Mitarbeitergewinnung und -bindung im Wettbewerb',
        'Haftungsminimierung für den Arbeitgeber'
      ]
    },

    // Agriculture
    {
      id: 'landwirtschaft_haftpflicht',
      title: 'Betriebshaftpflicht Landwirtschaft',
      category: 'agriculture',
      subcategory: 'Landwirtschaftlicher Schutz',
      icon: 'fa-tractor',
      shortDesc: 'Essentieller Schutz für landwirtschaftliche Betriebe inklusive Umwelthaftung, Produkthaftung und Tierhaltung.',
      details: [
        'Absicherung für den Betriebsinhaber, Familienmitarbeiter und Saisonkräfte',
        'Haftpflicht für Tierhaltung (Milchvieh, Pferde, Masttiere)',
        'Umwelthaftpflicht- und Umweltschadendeckung (z.B. Gülleunfälle)',
        'Produkthaftung für Direktvermarktung und Hofläden'
      ]
    },
    {
      id: 'landwirtschaft_inhalt',
      title: 'Inventar- & Gebäudeversicherung',
      category: 'agriculture',
      subcategory: 'Landwirtschaftlicher Schutz',
      icon: 'fa-wheat-awn',
      shortDesc: 'Rundumschutz für Wirtschaftsgebäude, Erntevorräte, Futtermittel und landwirtschaftliche Maschinen.',
      details: [
        'Absicherung von Scheunen, Ställen, Silos und Biogasanlagen',
        'Feuerversicherung für geerntete Feldfrüchte und Vorräte',
        'Tierversicherung (z.B. bei Seuchenausbruch oder Stromausfall im Stall)',
        'Sturm- und Elementarschadenabsicherung der Betriebsgebäude'
      ]
    },
    {
      id: 'maschinen_traktoren',
      title: 'Maschinen- & Schlepperkasko',
      category: 'agriculture',
      subcategory: 'Landwirtschaftlicher Schutz',
      icon: 'fa-truck-field',
      shortDesc: 'Kaskoversicherung für Traktoren, Mähdrescher und Anbaugeräte bei Unfällen, Diebstahl und Bedienungsfehlern.',
      details: [
        'Maschinen-Kaskoversicherung für Erntemaschinen',
        'GAP-Deckung für geleaste oder finanzierte Schlepper',
        'Absicherung von Elektronikschäden und GPS-Lenksystemen',
        'Bergungskosten nach Unfällen auf dem Feld mitversichert'
      ]
    },
    {
      id: 'ertragsausfall_klima',
      title: 'Ertragsausfall & Klimarisiken',
      category: 'agriculture',
      subcategory: 'Landwirtschaftlicher Schutz',
      icon: 'fa-cloud-sun-rain',
      shortDesc: 'Schutz vor den wirtschaftlichen Folgen von Dürre, Hagel, Frost, Starkregen und Tierseuchen.',
      details: [
        'Hagelversicherung für stehende Ernten',
        'Mehrgefahrenversicherung (Dürre, Starkregen, Frost)',
        'Ertragsausfallversicherung nach Brandschäden in Stallungen',
        'Ertragsausfall bei Seuchen (Afrikanische Schweinepest, Geflügelpest)'
      ]
    }
  ];

  get filteredServices(): ServiceItem[] {
    return this.services.filter(service => {
      // Filter by Tab
      const matchesTab = this.activeTab === 'all' || service.category === this.activeTab;
      
      // Filter by Search Term
      const search = this.searchTerm.toLowerCase().trim();
      const matchesSearch = !search || 
        service.title.toLowerCase().includes(search) ||
        service.shortDesc.toLowerCase().includes(search) ||
        service.subcategory.toLowerCase().includes(search) ||
        service.details.some(detail => detail.toLowerCase().includes(search));

      return matchesTab && matchesSearch;
    });
  }

  setTab(tab: 'all' | 'private' | 'commercial' | 'agriculture'): void {
    this.activeTab = tab;
  }
}
