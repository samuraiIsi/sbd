import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [{
                id: 'michael', 
                title: 'Honourable Michael A. Feetham',
                subTitle: 'Owner- Director',
                image: '../../theme/assets/img/LRA-295-263x452.jpg',
                text: "Michael Feetham was a former Minister for Trade and Industry in Gibraltar 1988-1996 responsible for economic development. He chaired the committee that drew up the original legislation for the introduction of Financial Services Legislation and the Financial Services Commission both prerequisite to the modernisation and regulation of the present Gibraltar Finance Centre.\nDuring his time in Government he had responsibility for overseeing the largest infrastructural and land reclamation programme in the history of Gibraltar's self government.Since then he has worked in the private sector as an independent consultant. He has also occupied various directorships with leading international firms.\nMichael Feetham first became attracted by Peru its history, culture and people nearly 5 years ago. Following a number of visits he finally decided to form a company in the capital Lima to help attract investors to the country. "
            },
            {
                id: 'carlos', 
                title: 'Lawyer Carlos D. Márquez',
                subTitle: 'Owner- Director',
                image: '../../theme/assets/img/LRA-448-263x452.jpg',
                text: "Carlos D. Márquez (1976, Lima-Perú) Lawyer, Member of the  Illustrious College of Lima (2004). Degree in law from the Faculty of law University of San Martín de Porres (2000). Master's degree in Company law Pontifical Catholic University of Peru (2009). Specialist in Business law, Civil law and Investment.\nIn 2008 he founded the firm Carlos D. Márquez – Abogados Sociedad Anónima Cerrada, a company that brings together a group of professional lawyers,  with graduate and postgraduate studies at the most prestigious law schools in Peru.\nHe is currently a senior advisor for national and international in the area of business law, administrative law, contracts and procurement, public private partnerships and promoting foreign investment companies. Company advisor and consultant to Gibraltar SBD-SAC."
            }
        ];
        let agencies = [{
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
        ]
        let associates = [
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
        let boxes = [{
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
        let boxespanel = [{
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
        let perugib = [
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
        let carouselhome = [
            {
                image: './../theme/assets/img/peru-gib.webp',
                header: 'Foto1'
            },
            {
                image: './../theme/assets/img/peru-gib.webp',
                header: 'Foto2'
            }
        ];
    return { 
            heroes, 
            boxes, 
            boxespanel, 
            agenciesBoxes, 
            associates, 
            agencies,
            carouselhome,
            perugib
    };
  }
}
