import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AboutService} from '../../services/aboutService/about.service'

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let navMenuEN = ["home", "about", "associates", "agencies", "perugibraltar", "contact"];
        let navMenuES = ["inicio", "nosotros", "asociados", "agencias", "perugibraltar", "contacto"];
        let detailsEN = [{
                id: 'michael', 
                title: 'Honourable Michael A. Feetham',
                subTitle: 'Owner- Director',
                image: '../../theme/assets/img/LRA-295-263x452.jpg',
                text: "Michael Feetham This is English"
            },
            {
                id: 'carlos', 
                title: 'Lawyer Carlos D. Márquez',
                subTitle: 'Owner- Director',
                image: '../../theme/assets/img/LRA-448-263x452.jpg',
                text: "Carlos D. Márquez (1976, Lima-Perú) Lawyer, Member of the  Illustrious College of Lima (2004). Degree in law from the Faculty of law University of San Martín de Porres (2000). Master's degree in Company law Pontifical Catholic University of Peru (2009). Specialist in Business law, Civil law and Investment.\nIn 2008 he founded the firm Carlos D. Márquez – Abogados Sociedad Anónima Cerrada, a company that brings together a group of professional lawyers,  with graduate and postgraduate studies at the most prestigious law schools in Peru.\nHe is currently a senior advisor for national and international in the area of business law, administrative law, contracts and procurement, public private partnerships and promoting foreign investment companies. Company advisor and consultant to Gibraltar SBD-SAC."
            }
        ];
        let detailsES = [{
                id: 'michael', 
                title: 'Honorable Michael A. Feetham',
                subTitle: 'Owner- Director',
                image: '../../theme/assets/img/LRA-295-263x452.jpg',
                text: "Michael Feetham Esto esta en español. ",
                lang: 'es'
            },
            {
                id: 'carlos', 
                title: 'Lawyer Carlos D. Márquez',
                subTitle: 'Owner- Director',
                image: '../../theme/assets/img/LRA-448-263x452.jpg',
                text: "Carlos D. Márquez (1976, Lima-Perú) Lawyer, Member of the  Illustrious College of Lima (2004). Degree in law from the Faculty of law University of San Martín de Porres (2000). Master's degree in Company law Pontifical Catholic University of Peru (2009). Specialist in Business law, Civil law and Investment.\nIn 2008 he founded the firm Carlos D. Márquez – Abogados Sociedad Anónima Cerrada, a company that brings together a group of professional lawyers,  with graduate and postgraduate studies at the most prestigious law schools in Peru.\nHe is currently a senior advisor for national and international in the area of business law, administrative law, contracts and procurement, public private partnerships and promoting foreign investment companies. Company advisor and consultant to Gibraltar SBD-SAC.",
                lang: 'en'
            }
        ];
        let agenciesEN = [{
                id: 'aads', 
                title: 'JUAN CARMELINO',
                subTitle: 'lawyer',
                image: '../../theme/assets/img/LRA-448-263x452.jpg',
                btnLinkA: 'spain',
                text: "Juan Carmona Cózar lawyer Degree in Law from the Complutense University of Madrid in 1975.Master School of Legal Practice of the Complutense University of Madrid in 1976. Specializes in advising corporations and companies in their complex relationships and contacts with government, with the activity intended to carry out. These activities are most often urban implications of applying for licenses, environmental, management of cases of expropriation, including disciplinary, involving a large economic impact and, sometimes, delay or stoppage if not faced with knowledge, experience, and discretion.  Juan Carmona Cózar, has been senior executive in local, provincial, and regional government for 12 years, which has allowed him to deeply know the Public Administration from within.\n- Mayor of La Línea de la Concepción from 1979-1984 \n- Vice President of the Provincial Council of Cadiz 1979-1983\n- Provincial Delegate of Finance of Cadiz in 1984-1986.\n- Director General of Budgets of the Junta de Andalucía (Regional Government) of 1986-1991.\nHe has also worked with all the major utilities and energy sector, implementation of power plant projects, both producing renewable wind energy as gas combined cycles. (Endesa, Iberdrola, Union Fenosa, Cepsa, Elecnor, Gamesa, etc. ... ..)\nHe has also participated and contributed as an expert on public projects that require specialized advice to the administration, in its relationship with businesses and citizens.  In that sense he is a specialist in Law of Public Administration and Urban Development, which has allowed municipalities and corporations have their counselling efforts leading to successfully negotiating complex projects such as: Management Plans, records of expropriation, relocation of populations , ...... etc."
            },
            {
                id: 'sports-agency', 
                title: 'Sports Agency',
                subTitle: 'KENNETH ASQUEZ LLM  Sports Law',
                image: '../../theme/assets/img/sports-agency.jpg',
                btnLinkA: 'peru',
                text: "Smile is a leading Sports & Media Management Company. We have a dedicated team of professionals with a thorough understanding of the Spanish Culture and Language whilst working and educated within the Anglo Saxon model. Our combined experience, our ability to balance the Anglo Saxon and Latin Business Models and Languages and our long-term close contacts within the Iberian Peninsular give the company a real edge and a unique approach.\n The Company was founded in 2003 by Kenneth Asquez. Kenneth has a strong background in the financial services industry having spent eighteen years working in senior positions with two major industry players. During this time he provided financial services to a number of professional players and Senior Executives within the Sports industry.\nIt became clear to Kenneth that these “Special Careers” would benefit from an agency with a solid understanding of financial management. Kenneth is an FA Licensed Player’s Agent since 2003 and holds a Masters in International Sports Law from Anglia Ruskin University. Using Gibraltar as a platform to operate provides Smile with a location that is cost effective, well regulated and accessible, with the unique advantages that come with being a member of the European Union."
            }
        ];
        let agenciesES = [{
                id: 'aads', 
                title: 'JUAN CARMELINO',
                subTitle: 'Abogado',
                image: '../../theme/assets/img/LRA-448-263x452.jpg',
                btnLinkA: 'spain',
                text: "Juan Carmona Cózar lawyer español."
            },
            {
                id: 'sports-agency', 
                title: 'Sports Agency',
                subTitle: 'KENNETH ASQUEZ LLM  Sports Law',
                image: '../../theme/assets/img/sports-agency.jpg',
                btnLinkA: 'peru',
                text: "Agencia peru en español"
            }
        ];
        let associatesEN = [
            {
                id: 'spain', 
                title: 'JUAN CARMELINO',
                subTitle: 'lawyer',
                image: '../../theme/assets/img/newyork.jpg',
                btnLinkA: 'spain',
                text: "Juan Carmona Cózar lawyer Degree in Law from the Complutense University of Madrid in 1975.Master School of Legal Practice of the Complutense University of Madrid in 1976. Specializes in advising corporations and companies in their complex relationships and contacts with government, with the activity intended to carry out. These activities are most often urban implications of applying for licenses, environmental, management of cases of expropriation, including disciplinary, involving a large economic impact and, sometimes, delay or stoppage if not faced with knowledge, experience, and discretion.  Juan Carmona Cózar, has been senior executive in local, provincial, and regional government for 12 years, which has allowed him to deeply know the Public Administration from within.\n- Mayor of La Línea de la Concepción from 1979-1984 \n- Vice President of the Provincial Council of Cadiz 1979-1983\n- Provincial Delegate of Finance of Cadiz in 1984-1986.\n- Director General of Budgets of the Junta de Andalucía (Regional Government) of 1986-1991.\nHe has also worked with all the major utilities and energy sector, implementation of power plant projects, both producing renewable wind energy as gas combined cycles. (Endesa, Iberdrola, Union Fenosa, Cepsa, Elecnor, Gamesa, etc. ... ..)\nHe has also participated and contributed as an expert on public projects that require specialized advice to the administration, in its relationship with businesses and citizens.  In that sense he is a specialist in Law of Public Administration and Urban Development, which has allowed municipalities and corporations have their counselling efforts leading to successfully negotiating complex projects such as: Management Plans, records of expropriation, relocation of populations , ...... etc."
            },
            {
                id: 'peru', 
                title: 'Lawyer Carlos D. Márquez',
                subTitle: 'Owner- Director',
                image: '../../theme/assets/img/paris.jpg',
                btnLinkA: 'peru',
                text: "Carlos D. Márquez (1976, Lima-Perú) Lawyer, Member of the  Illustrious College of Lima (2004). Degree in law from the Faculty of law University of San Martín de Porres (2000). Master's degree in Company law Pontifical Catholic University of Peru (2009). Specialist in Business law, Civil law and Investment.\nIn 2008 he founded the firm Carlos D. Márquez – Abogados Sociedad Anónima Cerrada, a company that brings together a group of professional lawyers,  with graduate and postgraduate studies at the most prestigious law schools in Peru.\nHe is currently a senior advisor for national and international in the area of business law, administrative law, contracts and procurement, public private partnerships and promoting foreign investment companies. Company advisor and consultant to Gibraltar SBD-SAC."
            },
            {
                id: 'europe', 
                title: 'Lawyer Carlos D. Márquez',
                subTitle: 'Owner- Director',
                image: '../../theme/assets/img/LRA-448-263x452.jpg',
                btnLinkA: 'europe',
                text: "Carlos D. Márquez (1976, Lima-Perú) Lawyer, Member of the  Illustrious College of Lima (2004). Degree in law from the Faculty of law University of San Martín de Porres (2000). Master's degree in Company law Pontifical Catholic University of Peru (2009). Specialist in Business law, Civil law and Investment.\nIn 2008 he founded the firm Carlos D. Márquez – Abogados Sociedad Anónima Cerrada, a company that brings together a group of professional lawyers,  with graduate and postgraduate studies at the most prestigious law schools in Peru.\nHe is currently a senior advisor for national and international in the area of business law, administrative law, contracts and procurement, public private partnerships and promoting foreign investment companies. Company advisor and consultant to Gibraltar SBD-SAC."
            },
            {
                id: 'russia', 
                title: 'Lawyer Carlos D. Márquez',
                subTitle: 'Owner- Director',
                image: '../../theme/assets/img/LRA-448-263x452.jpg',
                btnLinkA: 'russia',
                text: "Carlos D. Márquez (1976, Lima-Perú) Lawyer, Member of the  Illustrious College of Lima (2004). Degree in law from the Faculty of law University of San Martín de Porres (2000). Master's degree in Company law Pontifical Catholic University of Peru (2009). Specialist in Business law, Civil law and Investment.\nIn 2008 he founded the firm Carlos D. Márquez – Abogados Sociedad Anónima Cerrada, a company that brings together a group of professional lawyers,  with graduate and postgraduate studies at the most prestigious law schools in Peru.\nHe is currently a senior advisor for national and international in the area of business law, administrative law, contracts and procurement, public private partnerships and promoting foreign investment companies. Company advisor and consultant to Gibraltar SBD-SAC."
            },
            {
                id: 'angola', 
                title: 'Lawyer Carlos D. Márquez',
                subTitle: 'Owner- Director',
                image: '../../theme/assets/img/LRA-448-263x452.jpg',
                btnLinkA: 'angola',
                text: "Carlos D. Márquez (1976, Lima-Perú) Lawyer, Member of the  Illustrious College of Lima (2004). Degree in law from the Faculty of law University of San Martín de Porres (2000). Master's degree in Company law Pontifical Catholic University of Peru (2009). Specialist in Business law, Civil law and Investment.\nIn 2008 he founded the firm Carlos D. Márquez – Abogados Sociedad Anónima Cerrada, a company that brings together a group of professional lawyers,  with graduate and postgraduate studies at the most prestigious law schools in Peru.\nHe is currently a senior advisor for national and international in the area of business law, administrative law, contracts and procurement, public private partnerships and promoting foreign investment companies. Company advisor and consultant to Gibraltar SBD-SAC."
            }

        ];
        let associatesES = [
            {
                id: 'spain', 
                title: 'JUAN CARMELINO',
                subTitle: 'lawyer',
                image: '../../theme/assets/img/newyork.jpg',
                btnLinkA: 'spain',
                text: "Juan Carmona Cózar lawyer abogado español"
            },
            {
                id: 'peru', 
                title: 'Lawyer Carlos D. Márquez',
                subTitle: 'Owner- Director',
                image: '../../theme/assets/img/paris.jpg',
                btnLinkA: 'peru',
                text: "Carlos D. Márquez (1976, Lima-Perú) Lawyer, Member of the  Illustrious College of Lima (2004). Degree in law from the Faculty of law University of San Martín de Porres (2000). Master's degree in Company law Pontifical Catholic University of Peru (2009). Specialist in Business law, Civil law and Investment.\nIn 2008 he founded the firm Carlos D. Márquez – Abogados Sociedad Anónima Cerrada, a company that brings together a group of professional lawyers,  with graduate and postgraduate studies at the most prestigious law schools in Peru.\nHe is currently a senior advisor for national and international in the area of business law, administrative law, contracts and procurement, public private partnerships and promoting foreign investment companies. Company advisor and consultant to Gibraltar SBD-SAC."
            },
            {
                id: 'europe', 
                title: 'Lawyer Carlos D. Márquez',
                subTitle: 'Owner- Director',
                image: '../../theme/assets/img/LRA-448-263x452.jpg',
                btnLinkA: 'europe',
                text: "Carlos D. Márquez (1976, Lima-Perú) Lawyer, Member of the  Illustrious College of Lima (2004). Degree in law from the Faculty of law University of San Martín de Porres (2000). Master's degree in Company law Pontifical Catholic University of Peru (2009). Specialist in Business law, Civil law and Investment.\nIn 2008 he founded the firm Carlos D. Márquez – Abogados Sociedad Anónima Cerrada, a company that brings together a group of professional lawyers,  with graduate and postgraduate studies at the most prestigious law schools in Peru.\nHe is currently a senior advisor for national and international in the area of business law, administrative law, contracts and procurement, public private partnerships and promoting foreign investment companies. Company advisor and consultant to Gibraltar SBD-SAC."
            },
            {
                id: 'russia', 
                title: 'Lawyer Carlos D. Márquez',
                subTitle: 'Owner- Director',
                image: '../../theme/assets/img/LRA-448-263x452.jpg',
                btnLinkA: 'russia',
                text: "Carlos D. Márquez (1976, Lima-Perú) Lawyer, Member of the  Illustrious College of Lima (2004). Degree in law from the Faculty of law University of San Martín de Porres (2000). Master's degree in Company law Pontifical Catholic University of Peru (2009). Specialist in Business law, Civil law and Investment.\nIn 2008 he founded the firm Carlos D. Márquez – Abogados Sociedad Anónima Cerrada, a company that brings together a group of professional lawyers,  with graduate and postgraduate studies at the most prestigious law schools in Peru.\nHe is currently a senior advisor for national and international in the area of business law, administrative law, contracts and procurement, public private partnerships and promoting foreign investment companies. Company advisor and consultant to Gibraltar SBD-SAC."
            },
            {
                id: 'angola', 
                title: 'Lawyer Carlos D. Márquez',
                subTitle: 'Owner- Director',
                image: '../../theme/assets/img/LRA-448-263x452.jpg',
                btnLinkA: 'angola',
                text: "Carlos D. Márquez (1976, Lima-Perú) Lawyer, Member of the  Illustrious College of Lima (2004). Degree in law from the Faculty of law University of San Martín de Porres (2000). Master's degree in Company law Pontifical Catholic University of Peru (2009). Specialist in Business law, Civil law and Investment.\nIn 2008 he founded the firm Carlos D. Márquez – Abogados Sociedad Anónima Cerrada, a company that brings together a group of professional lawyers,  with graduate and postgraduate studies at the most prestigious law schools in Peru.\nHe is currently a senior advisor for national and international in the area of business law, administrative law, contracts and procurement, public private partnerships and promoting foreign investment companies. Company advisor and consultant to Gibraltar SBD-SAC."
            }

        ];
        let boxesEN = [{
                classDiv: 'col-lg-6 col-md-6 col-xs-12',
                articleClass: 'boxes col-lg-6 col-lg-offset-3 bg-border-img',
                headerText: '',
                image: '../../theme/assets/img/LRA-295-263x452.jpg',
                imageClass: '', 
                name: 'Michael A. Feetham',
                telephone: '900 300 307',
                btnClass: 'btn--navy-blue',
                btnText: 'More',
                btnLink: 'michael',
                mediaClass: [
                    'fa fa-facebook',
                    'fa fa-twitter'
                ]
            },
            {
                classDiv: 'col-lg-6 col-md-6 col-xs-12',
                articleClass: 'boxes col-lg-6 col-lg-offset-3',
                headerText: '',
                image: '../../theme/assets/img/LRA-448-263x452.jpg',
                imageClass: '',
                name: 'Carlos D. Márquez',
                telephone: '900 300 307',
                btnClass: 'btn--navy-blue',
                btnText: 'More',
                btnLink: 'carlos',
                mediaClass: [
                    'fa fa-facebook',
                    'fa fa-twitter'
                ]
            }
        ];
        let boxesES = [{
                classDiv: 'col-lg-6 col-md-6 col-xs-12',
                articleClass: 'boxes col-lg-6 col-lg-offset-3 bg-border-img',
                headerText: '',
                image: '../../theme/assets/img/LRA-295-263x452.jpg',
                imageClass: '', 
                name: 'Michael A. Feetham',
                telephone: '900 300 307',
                btnClass: 'btn--navy-blue',
                btnText: 'Mas',
                btnLink: 'michael',
                mediaClass: [
                    'fa fa-facebook',
                    'fa fa-twitter'
                ]
            },
            {
                classDiv: 'col-lg-6 col-md-6 col-xs-12',
                articleClass: 'boxes col-lg-6 col-lg-offset-3',
                headerText: '',
                image: '../../theme/assets/img/LRA-448-263x452.jpg',
                imageClass: '',
                name: 'Carlos D. Márquez',
                telephone: '900 300 307',
                btnClass: 'btn--navy-blue',
                btnText: 'Mas',
                btnLink: 'carlos',
                mediaClass: [
                    'fa fa-facebook',
                    'fa fa-twitter'
                ]
            }
        ];
        let boxespanelEN = [{
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'spain',
                image: '../../theme/assets/img/newyork.jpg',
                imageClass: 'img-responsive',
                btnLink: 'spain',
                footerText: 'COMPANY ADVISER'
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'peru',
                image: '../../theme/assets/img/paris.jpg',
                imageClass: 'img-responsive',
                btnLink: 'peru',
                footerText: 'COMPANY CONSULTANTS'
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'europe',
                image: '../../theme/assets/img/sanfran.jpg',
                imageClass: 'img-responsive',
                btnLink: 'europe',
                footerText: "COMPANY SOLICITORS"
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12 col-lg-offset-2',
                articleClass: 'panel panel--blue-dark',
                headerText: 'russia',
                image: '../../theme/assets/img/img_chania.jpg',
                imageClass: 'img-responsive',
                btnLink: 'russia',
                footerText: 'ASSOCIATES Yakovlev & Partners'
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12 col-md-offset-3 col-lg-offset-0',
                articleClass: 'panel panel--blue-dark',
                headerText: 'angola',
                image: '../../theme/assets/img/newyork.jpg',
                imageClass: 'img-responsive',
                btnLink: 'angola',
                footerText: 'LEGAL REPRESENTATIVE'
            }
        ];
        let boxespanelES = [{
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'españa',
                image: '../../theme/assets/img/newyork.jpg',
                imageClass: 'img-responsive',
                btnLink: 'spain',
                footerText: 'COMPANY ADVISER'
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'peru',
                image: '../../theme/assets/img/paris.jpg',
                imageClass: 'img-responsive',
                btnLink: 'peru',
                footerText: 'COMPANY CONSULTANTS'
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'europa',
                image: '../../theme/assets/img/sanfran.jpg',
                imageClass: 'img-responsive',
                btnLink: 'europe',
                footerText: "COMPANY SOLICITORS"
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12 col-lg-offset-2',
                articleClass: 'panel panel--blue-dark',
                headerText: 'rusia',
                image: '../../theme/assets/img/img_chania.jpg',
                imageClass: 'img-responsive',
                btnLink: 'russia',
                footerText: 'ASSOCIATES Yakovlev & Partners'
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12 col-md-offset-3 col-lg-offset-0',
                articleClass: 'panel panel--blue-dark',
                headerText: 'angola',
                image: '../../theme/assets/img/newyork.jpg',
                imageClass: 'img-responsive',
                btnLink: 'angola',
                footerText: 'LEGAL REPRESENTATIVE'
            }
        ];
        let agenciesBoxes = [{
                classDiv: 'col-lg-4 col-md-6 col-xs-12 col-lg-offset-2',
                articleClass: 'panel panel--blue-dark',
                headerText: 'aads',
                image: '../../theme/assets/img/newyork.jpg',
                imageClass: 'img-responsive',
                btnLink: 'aads',
                footerText: 'Part of an Automotive Group of companies.'
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'sports agency',
                image: '../../theme/assets/img/paris.jpg',
                imageClass: 'img-responsive',
                btnLink: 'sports-agency',
                footerText: 'KENNETH ASQUEZ LLM  Sports Law.'
            }
        ];
        let perugibEN = [
            {
                title: 'Peru',
                subTitle: 'WHY INVEST IN PERU?',
                text: 'cscdcdcdcdc',
                listTexts: [
                    'Internationally acknowledged macroeconomic soundness',
                    'Free trade and free market policies , economic model whose fundamental principle respect to economic freedoms',
                    'Legal stability - contract law.',
                    'Attractive sectors for investment.'
                ]
            },
            {
                title: 'Gibraltar',
                subTitle: 'WHY INVEST IN GIBRALTAR?',
                text: 'Gibraltar is a British',
                listTexts: [
                    'Internationally acknowledged macroeconomic soundness',
                    'Free trade and free market policies , economic model whose fundamental principle respect to economic freedoms',
                    'Legal stability - contract law.',
                    'Attractive sectors for investment.'
                ]
            }
            ];
        let perugibES = [
            {
                title: 'Peru',
                subTitle: 'WHY INVEST IN PERU?',
                text: 'En español',
                listTexts: [
                    'Internationally acknowledged macroeconomic soundness',
                    'Free trade and free market policies , economic model whose fundamental principle respect to economic freedoms',
                    'Legal stability - contract law.',
                    'Attractive sectors for investment.'
                ]
            },
            {
                title: 'Gibraltar',
                subTitle: 'WHY INVEST IN GIBRALTAR?',
                text: 'Gibraltar en Español',
                listTexts: [
                    'Internationally acknowledged macroeconomic soundness',
                    'Free trade and free market policies , economic model whose fundamental principle respect to economic freedoms',
                    'Legal stability - contract law.',
                    'Attractive sectors for investment.'
                ]
            }
            ];
        let carouselhome = [
            {
                image: './../theme/assets/img/gib-xbig.jpg',
                header: 'Gibraltar',
                liClass: 'slide1',
                text: 'Why invest in Gibraltar?',
                btnLink: 'michael'
            },
            {
                image: './../theme/assets/img/machu-pichu-xbig.jpg',                
                header: 'Peru',
                liClass: 'slide2',
                text: 'Why invest in Peru?',
                btnLink: 'carlos'
            }
        ];
        let carouselhomeES = [
            {
                image: './../theme/assets/img/gib-xbig.jpg',
                header: 'Gibraltar',
                liClass: 'slide1',
                text: 'Por que invertir en Gibraltar?',
                btnLink: 'michael'
            },
            {
                image: './../theme/assets/img/machu-pichu-xbig.jpg',                
                header: 'Peru',
                liClass: 'slide2',
                text: 'Por que invertir en Peru?',
                btnLink: 'carlos'
            }
        ];
        let footer = [
            {
                divClass: 'col-lg-offset-0 col-lg-9 col-md-9 col-sm-8 col-xs-7',
                header: 'Peru',
                subHeader: 'Calle Las Castañitas 138, San Isidro (Lima 27)',
                email: 'cmarquez@gibraltar-sbd.com',
                phone: '+51-95-510-9774',
                mobile: '+51-997-428-789',
                fax: '+51-1-422-1870'
            },
            {
                divClass: 'col-lg-3 col-lg-3 col-md-3 col-sm-4 col-xs-5 pull-r-scmin-640 text-right',
                header: 'Gibraltar',
                subHeader: 'Calle Las Castañitas 138, San Isidro (Lima 27)',
                email: 'cmarquez@gibraltar-sbd.com',
                phone: '+51-95-510-9774',
                mobile: '+51-997-428-789',
                fax: '+51-1-422-1870'
            }
        ];
        let contactpageEN = [
            {
                divClass: 'col-lg-6 col-md-6 height-350',
                header: 'Peru',
                subHeader: 'Las Castañitas 138, San Isidro (Lima 27) Street',
                email: 'cmarquez@gibraltar-sbd.com',
                phone: '+51-95-510-9774',
                mobile: '+51-997-428-789',
                fax: '+51-1-422-1870',
                mapDivClass: 'col-lg-12',
                map: 'map'
            },
            {
                divClass: 'col-lg-6 col-md-6',
                header: 'Gibraltar',
                subHeader: 'Las Castañitas 138, San Isidro (Lima 27) Street',
                email: 'cmarquez@gibraltar-sbd.com',
                phone: '+51-95-510-9774',
                mobile: '+51-997-428-789',
                fax: '+51-1-422-1870',
                mapDivClass: 'col-lg-12',
                map: 'map2'
            }
        ];
        let contactpageES = [
            {
                divClass: 'col-lg-6 col-md-6 height-350',
                header: 'Peru',
                subHeader: 'Calle Las Castañitas 138, San Isidro (Lima 27)',
                email: 'cmarquez@gibraltar-sbd.com',
                phone: '+51-95-510-9774',
                mobile: '+51-997-428-789',
                fax: '+51-1-422-1870',
                mapDivClass: 'col-lg-12',
                map: 'map'
            },
            {
                divClass: 'col-lg-6 col-md-6',
                header: 'Gibraltar',
                subHeader: 'Calle Las Castañitas 138, San Isidro (Lima 27)',
                email: 'cmarquez@gibraltar-sbd.com',
                phone: '+51-95-510-9774',
                mobile: '+51-997-428-789',
                fax: '+51-1-422-1870',
                mapDivClass: 'col-lg-12',
                map: 'map2'
            }
        ];
        
    return { 
            detailsEN,
            detailsES,
            boxesEN, 
            boxesES, 
            boxespanelEN,
            boxespanelES, 
            agenciesBoxes, 
            associatesEN,
            associatesES,  
            agenciesEN,
            agenciesES,
            carouselhome,
            carouselhomeES,
            contactpageEN,
            contactpageES,
            footer,
            navMenuEN,
            navMenuES,
            perugibEN,
            perugibES
    };
  }
}
