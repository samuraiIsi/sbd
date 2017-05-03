import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AboutService} from '../../services/aboutService/about.service'

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let navMenuEN = [
            {display: "home", value:"home"},
            {display: "about", value: "about"},
            {display: "associates", value: "associates"},
            {display: "agencies", value: "agencies"},
            {display: "perugibraltar", value: "Peru & Gibraltar"},
            {display: "contact", value: "contact"}
        ];
        let navMenuES = [
            {display: "es/inicio", value:"inicio"},
            {display: "es/nosotros", value: "nosotros"},
            {display: "es/asociados", value: "asociados"},
            {display: "es/agencias", value: "agencias"},
            {display: "es/perugibraltar", value: "Peru y Gibraltar"},
            {display: "es/contacto", value: "contacto"}
        ];
        let aboutTextEN = [{text:"GIBRALTAR STRATEGIC BUSINESS DEVELOPMENT is a company conceived with the aim of promoting the opening of markets in Latin America, mainly in Peru, to International European companies established in Gibraltar, United Kingdom, Israel, Russia, among others, in the areas of mining, automotive, military, construction and real estate markets, oil, energy, online games, sports representation services and legal services.\nSimilarly, Gibraltar SBD has promoted Peruvian investment income and capital and Latin American to European markets, offering highly competitive banking, financial and tax solutions for any country in the European Community. Gibraltar SBD is also in a position to open up markets in Europe for placing biodiversity of raw materials and products of the Latin America region.\nThe strength of Gibraltar SBD lies in the combination of its partners who have an unblemished personal history, professional and political experience in European governments, this in addition to the Peruvian legal practice and technical team to implement large projects with efficiency and diligence ."}];
        let aboutTextES = [{text:"GIBRALTAR STRATEGIC BUSINESS DEVELOPMENT es una compañía concebida con la finalidad de promover la apertura de mercados en América Latina, principalmente en el Perú, a empresas europeas de gran envergadura asentadas en Gibraltar, Reino Unido, Dinamarca, Israel, Rusia, entre otros, en rubros mineros, automotriz, militar, mercados de construcción e inmobiliarios, petróleo, energía, juegos online, servicios de representación de deportistas y servicios jurídicos.\nDe igual forma, Gibraltar SBD viene promoviendo el ingreso de inversiones y capital peruano y latinoamericano al mercado europeo, ofreciendo soluciones bancarias, financieras y tributarias altamente competitivas respecto de cualquier país de la Comunidad Europea. Gibraltar SBD además está en posición de abrir mercados en Europa para la colocación de la biodiversidad de materia prima y productos de la región Latinoamérica.\nLa fortaleza de Gibraltar SBD radica en la conjunción de sus socios quienes cuentan con una trayectoria personal intachable, experiencia profesional y experiencia política en Gobiernos Europeos, esto en adición a la práctica legal peruana y equipo técnico para poner en marcha grandes proyectos con eficiencia y diligencia”."}];
        let homeBoxesEN = [
            {
                classDiv: 'col-md-4',
                articleClass: 'boxes bg-border-img',
                headerText: '',
                image: '../../theme/assets/img/mapa-mundi.jpg',
                imageClass: '', 
                name: 'International Law',
                telephone: '900 300 307',
                boxTextArea: 'box-text',
                boxText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla odio vitae odio maximus ullamcorper. Maecenas ornare erat et neque fermentum dictum. Nullam nunc lacus',
                btnClass: 'btn--navy-blue',
                btnText: 'More',
                btnLink: '/associates'
            },
            {
                classDiv: 'col-md-4',
                articleClass: 'boxes bg-border-img',
                headerText: '',
                image: '../../theme/assets/img/sport-orig_280x130.jpg',
                imageClass: '', 
                name: 'Sports Consultancy',
                telephone: '900 300 307',
                boxTextArea: 'box-text',
                boxText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla odio vitae odio maximus ullamcorper. Maecenas ornare erat et neque fermentum dictum. Nullam nunc lacus',
                btnClass: 'btn--navy-blue',
                btnText: 'More',
                btnLink: '/agencies/smile'
            },
            {
                classDiv: 'col-md-4',
                articleClass: 'boxes',
                headerText: '',
                image: '../../theme/assets/img/entrepreneur_280x130.jpg',
                imageClass: '', 
                name: 'Offshore Investment',
                boxTextArea: 'box-text',
                boxText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla odio vitae odio maximus ullamcorper. Maecenas ornare erat et neque fermentum dictum. Nullam nunc lacus',
                telephone: '900 300 307',
                btnClass: 'btn--navy-blue',
                btnText: 'More',
                btnLink: '/perugibraltar'
            }
        ];
        let homeBoxesES = [
            {
                classDiv: 'col-md-4',
                articleClass: 'boxes bg-border-img',
                headerText: '',
                image: '../../theme/assets/img/mapa-mundi.jpg',
                imageClass: '', 
                name: 'Derecho Internacional',
                telephone: '900 300 307',
                boxTextArea: 'box-text',
                boxText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla odio vitae odio maximus ullamcorper. Maecenas ornare erat et neque fermentum dictum. Nullam nunc lacus',
                btnClass: 'btn--navy-blue',
                btnText: 'Más',
                btnLink: '/es/asociados'
            },
            {
                classDiv: 'col-md-4',
                articleClass: 'boxes bg-border-img',
                headerText: '',
                image: '../../theme/assets/img/money.jpg',
                imageClass: '', 
                name: 'Consultora de Deportes',
                telephone: '900 300 307',
                boxTextArea: 'box-text',
                boxText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla odio vitae odio maximus ullamcorper. Maecenas ornare erat et neque fermentum dictum. Nullam nunc lacus',
                btnClass: 'btn--navy-blue',
                btnText: 'Más',
                btnLink: '/es/agencias/smile'
            },
            {
                classDiv: 'col-md-4',
                articleClass: 'boxes',
                headerText: '',
                image: '../../theme/assets/img/entrepreneur_280x130.jpg',
                imageClass: '', 
                name: 'Inversión Offshore',
                boxTextArea: 'box-text',
                boxText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla odio vitae odio maximus ullamcorper. Maecenas ornare erat et neque fermentum dictum. Nullam nunc lacus',
                telephone: '900 300 307',
                btnClass: 'btn--navy-blue',
                btnText: 'Más',
                btnLink: '/es/perugibraltar'
            }
        ];
        let detailsEN = [{
                id: 'michael', 
                title: 'Honourable Michael A. Feetham',
                subTitle: 'Owner- Director',
                image: '../../theme/assets/img/michael_263x452.jpg',
                text: "Michael Feetham was a former Minister for Trade and Industry in Gibraltar 1988-1996 responsible for economic development. He chaired the committee that drew up the original legislation for the introduction of Financial Services Legislation and the Financial Services Commission both prerequisite to the modernisation and regulation of the present Gibraltar Finance Centre. During his time in Government he had responsibility for overseeing the largest infrastructural and land reclamation programme in the history of Gibraltar's self government.\nSince then he has worked in the private sector as an independent consultant.\nHe has also occupied various directorships with leading international firms.Michael Feetham first became attracted by Peru its history, culture and people nearly 5 years ago. Following a number of visits he finally decided to form a company in the capital Lima to help attract investors to the country."
            },
            {
                id: 'carlos', 
                title: 'Lawyer Carlos D. Márquez',
                subTitle: 'Owner- Director',
                image: '../../theme/assets/img/carlos_263x452.jpg',
                text: "Carlos D. Márquez (1976, Lima-Perú) Lawyer, Member of the  Illustrious College of Lima (2004). Degree in law from the Faculty of law University of San Martín de Porres (2000). Master's degree in Company law Pontifical Catholic University of Peru (2009). Specialist in Business law, Civil law and Investment. In 2008 he founded the firm Carlos D. Márquez – Abogados Sociedad Anónima Cerrada, a company that brings together a group of professional lawyers,  with graduate and postgraduate studies at the most prestigious law schools in Peru.\nHe is currently a senior advisor for national and international in the area of business law, administrative law, contracts and procurement, public private partnerships and promoting foreign investment companies. Company advisor and consultant to Gibraltar SBD-SAC."
            }
        ];
        let detailsES = [{
                id: 'michael', 
                title: 'Honorable Michael A. Feetham',
                subTitle: 'Owner- Director',
                image: '../../theme/assets/img/michael_263x452.jpg',
                text: "Michael Feetham es un ex Ministro de Comercio e Industria en Gibraltar 1988-1996 responsable para el desarrollo económico. Él presidió el comité que redactó la legislación original para la introducción de Servicios Financieros Legislación y la Comisión de Servicios Financieros, tanto pre-requisito para la modernización y la regulación de la presente Finance Centre Gibraltar. Durante su tiempo en el Gobierno tenía la responsabilidad de supervisar el programa de recuperación de infraestructura y la tierra más grande en la historia del auto gobierno de Gibraltar.\nDesde entonces, ha trabajado en el sector privado como consultor independiente. También ha ocupado diversos cargos directivos con las principales firmas internacionales. Michael Feetham primero se sintió atraído por el Perú de su historia, la cultura y la gente hace casi 5 años. Tras una serie de visitas que finalmente decidió formar una compañía en la capital Lima para ayudar a atraer inversionistas al país."
            },
            {
                id: 'carlos', 
                title: 'Lawyer Carlos D. Márquez',
                subTitle: 'Owner- Director',
                image: '../../theme/assets/img/carlos_263x452.jpg',
                text: "Abogado  Miembro del Ilustre Colegio de Abogados de Lima (2004). Licenciado en Derecho de la Facultad de Derecho de la Universidad de San Martín de Porres (2000). Maestría en Derecho de la Empresa en la Pontificia Universidad Católica del Perú (2009). Especialista en Derecho Empresarial, Derecho Civil e Inversiones. Desde el 2005 es propietario de la firma Carlos D. Márquez - Abogados SAC, empresa asesora y consultora de Gibraltar SBD. En el año 2008 funda el despacho Carlos D. Márquez – Abogados Sociedad Anónima Cerrada, empresa que reúne a un grupo de profesionales abogados en ejercicio, graduados y con estudios de postgrado en las más prestigiosas facultades de derecho del Perú.\nActualmente es asesor principal de empresas nacionales e internacionales en el rubro del derecho de la empresa, derecho administrativo, contrataciones y adquisiciones, asociaciones público privadas y promoción de inversiones extranjeras.",
                lang: 'en'
            }
        ];
        let agenciesEN = [{
                id: 'aads', 
                title: 'AADS',
                subTitle: 'Automotive Group',
                image: '../../theme/assets/img/aads_400x300.jpg',
                btnLinkA: 'aads',
                text: "AADS is part of an Automotive Group of companies which has traded since 1904. The company carry out their own accessories and conversion work. Each (non-armoured) vehicle sold by the company spends an average of 40 hours in the workshop, for conversions or accessorization orders such as communications equipment, ballistic protection, etc.\n\nEspecially spare parts and after sales support. After sales staff  travel all over the world providing solutions for their customer's requirements. The company fully understand that after sales support is the number one priority for most military purchasers.\nThey provide extensive training, both for drivers and technical staff. Thereafter, their field engineers offer on-going training as required.\n\nJeep J8\nJeep has appointed AADS as authorised suppliers of the Jeep J8 to Governmental Organisations worldwide.\nBetween days 3 to 7 February 2014, executives of the company known AFRICA AUTOMOTIVE DISTRIBUTION SERVICES LTD. (AADS) Gibraltar conducted in Lima - Peru, different presentations of the Military Jeep J8 multipurpose vehicle and new applications developed for the Armed Forces of Peru. These presentations took place at the Army Headquarters, Naval Base of Callao Rimac Police Complex and Central Army Special Operations. GIBRALTAR SBD is the commercial agent AADS in Peru."
            },
            {
                id: 'smile', 
                title: 'SPORTS AGENCY',
                subTitle: 'KENNETH ASQUEZ LLM  Sports Law',
                image: '../../theme/assets/img/smile_400x300.jpg',
                btnLinkA: 'sports',
                text: "Kenneth Asquez LLM Sports Law has a strong background in the financial services industry having spent eighteen years working in senior positions with two major industry players. During this time , as a well-known respected industry player, he provided financial services to a number of professional players and Senior Executives within the Sports Industry. In 2004 he graduated with a Masters  in Sports Law  from Anglia University and has been involved in transfers worth €45m within the Iberian Peninsular since setting up Sports and Media Management Agency in 2003. He has developed a reputation for honesty and top professionalism and is always responsive to the strong demands of the sports industry.\n\nSmile is a leading Sports & Media Management Company. We have a dedicated team of professionals with a thorough understanding of the Spanish Culture and Language whilst working and educated within the Anglo Saxon model. Our combined experience, our ability to balance the Anglo Saxon and Latin Business Models and Languages and our long-term close contacts within the Iberian Peninsular give the company a real edge and a unique approach.\n\nThe Company was founded in 2003 by Kenneth Asquez. Kenneth has a strong background in the financial services industry having spent eighteen years working in senior positions with two major industry players. During this time he provided financial services to a number of professional players and Senior Executives within the Sports industry.\nIt became clear to Kenneth that these “Special Careers” would benefit from an agency with a solid understanding of financial management. Kenneth is an FA Licensed Player’s Agent since 2003 and holds a Masters in International Sports Law from Anglia Ruskin University. Using Gibraltar as a platform to operate provides Smile with a location that is cost effective, well regulated and accessible, with the unique advantages that come with being a member of the European Union."
            }
        ];
        let agenciesES = [{
                id: 'aads', 
                title: 'AADS',
                subTitle: 'Grupo Automotriz',
                image: '../../theme/assets/img/aads_400x300.jpg',
                btnLinkA: 'aads',
                text: "AADS es parte de un Grupo Automotriz de empresas que ha negociado desde 1904.\nLa compañía lleva a cabo sus propios accesorios y obras de transformación. Cada vehículo (no blindados) vendido por la empresa gasta un promedio de 40 horas en el taller, para las conversiones u órdenes accessorization tales como equipos de comunicaciones, protección balística, etc.\n\nEspecialmente piezas de repuesto y servicio post-venta. Personal de ventas de AADS viajas en todo el mundo, proporcionando soluciones para las necesidades de sus clientes. La compañía entiende completamente que post venta esto es la prioridad número uno para la mayoría de los compradores militares. Ofrecemos una amplia formación, tanto para los conductores y el personal técnico. A partir de entonces, sus ingenieros de campo ofrecen capacitación en curso según se requiera.\n\nJeep J8\nJeep ha nombrado AADS como proveedores autorizados del Jeep J8 a Organizaciones No Gubernamentales de todo el mundo.\nEntre los días 3 al 7 de febrero del 2014, directivos de la conocida empresa AFRICA AUTOMOTIVE DISTRIBUTION SERVICES LTD. (AADS) de Gibraltar realizaron en la ciudad de Lima - Perú, diversas presentaciones del vehículo militar multipropósito JEEP J8 y los nuevos aplicativos desarrollados para las Fuerzas Armadas del Perú. Estas presentaciones se desarrollaron en el Cuartel General del Ejército, Base Naval del Callao, Complejo Policial del Rímac y Centro de Operaciones Especiales del Ejército. GIBRALTAR SBD es el agente comercial de AADS en el Perú."
            },
            {
                id: 'smile', 
                title: 'Agencia de Deporte',
                subTitle: 'Kenneth Asquez LLM Derecho Deportivo',
                image: '../../theme/assets/img/smile_400x300.jpg',
                btnLinkA: 'sports-agency',
                text: "Kenneth Asquez LLM Derecho Deportivo tiene una gran experiencia en la industria de servicios financieros habiendo pasó dieciocho años trabajando en puestos de alto nivel con dos grandes de la industria . Durante este tiempo , como un conocido jugador  respetado en la industria , que proporciona servicios financieros a un número de jugadores profesionales y altos ejecutivos dentro de la industria del deporte .\n\nEn 2004 se graduó con una Maestría en Derecho del Deporte de la Universidad de Anglia Inglaterra y ha estado involucrado en las transferencias por valor de € 45 millones en la Península Ibérica desde la creación de la Agencia de Gestión de Deportes y Medios de Comunicación en 2003. Ha desarrollado una reputación de honestidad y profesionalismo superior y es siempre sensible a las fuertes demandas de la industria de los deportes ."
            }
        ];
        let associatesEN = [
            {
                id: 'spain', 
                title: 'JUAN CARMONA CÓZAR',
                subTitle: 'LAWYER',
                image: '../../theme/assets/img/gavel_400x300.jpg',
                btnLinkA: 'spain',
                text: "Juan Carmona Cózar lawyer Degree in Law from the Complutense University of Madrid in 1975.Master School of Legal Practice of the Complutense University of Madrid in 1976. Specializes in advising corporations and companies in their complex relationships and contacts with government, with the activity intended to carry out. These activities are most often urban implications of applying for licenses, environmental, management of cases of expropriation, including disciplinary, involving a large economic impact and, sometimes, delay or stoppage if not faced with knowledge, experience, and discretion.\n\nJuan Carmona Cózar, has been senior executive in local, provincial, and regional government for 12 years, which has allowed him to deeply know the Public Administration from within.\n\n- Mayor of La Línea de la Concepción from 1979-1984 \n- Vice President of the Provincial Council of Cadiz 1979-1983\n- Provincial Delegate of Finance of Cadiz in 1984-1986.\n- Director General of Budgets of the Junta de Andalucía (Regional Government) of 1986-1991.\n\nHe has also worked with all the major utilities and energy sector, implementation of power plant projects, both producing renewable wind energy as gas combined cycles. (Endesa, Iberdrola, Union Fenosa, Cepsa, Elecnor, Gamesa, etc. ... ..)\nHe has also participated and contributed as an expert on public projects that require specialized advice to the administration, in its relationship with businesses and citizens.  In that sense he is a specialist in Law of Public Administration and Urban Development, which has allowed municipalities and corporations have their counselling efforts leading to successfully negotiating complex projects such as: Management Plans, records of expropriation, relocation of populations , ...... etc."
            },
            {
                id: 'peru', 
                title: 'COMPANY CONSULTANTS',
                subTitle: 'Antonio Carmelino & Carlos D. Marquez Moran',
                image: '../../theme/assets/img/laurel-balance-peru-flag.jpg',
                btnLinkA: 'peru',
                text: "Antonio Carmelino\nAdvocate, studies to date culminated in the Master of Laws in Business Law from the Pontifical Catholic University of Peru, with experience, capability and extensive knowledge of the legal framework concerning energy (electricity, gas, nuclear), Customs Law (Customs Agent), Agro-export, legal regime Investment Promotion and Negotiation Techniques. He has served for over 20 years in Managerial level positions in those specialties and nine years as Managing Director and / or legal advisor for companies and organizations linked to energy sector.\n\nCarlos D. Marquez Moran\nIn 2008 he founded the firm Carlos D. Márquez – Abogados Sociedad Anónima Cerrada, a company that brings together a group of professional lawyers,  with graduate and postgraduate studies at the most prestigious law schools in Peru. He is currently a senior advisor for national and international in the area of business law, administrative law, contracts and procurement, public private partnerships and promoting foreign investment companies"
            },
            {
                id: 'europe', 
                title: 'Hassans',
                subTitle: 'COMPANY SOLICITORS',
                image: '../../theme/assets/img/hassans_400x300.png',
                btnLinkA: 'europe',
                text: "Hassans was established in 1939 by Sir Joshua Hassan working from one room in Horse Barrack Lane, Gibraltar.\n\nSir Joshua trained as a lawyer at Middle Temple and was called to the Bar of England and Wales in 1939. When World War II broke out, he volunteered as a gunner in the Gibraltar Defence Force and remained in the then colony when most of Gibraltar’s civilian population had been evacuated and only a small number of Gibraltarians remained on The Rock. He was nicknamed “Salvador” (Saviour), was a Gibraltarian politician, and first Mayor and Chief Minister of Gibraltar, serving four terms as Chief Minister for a total of 17 years. He is seen as the key figure in the civil rights movement in Gibraltar, and played a key role in the creation of the territory’s institutions of self-government.\n\nSir Joshua passed away in 1997. According to Peter Caruana, Chief Minister of Gibraltar at the time of Hassan’s death, “No one has done more to establish and promote the identity and maintain the rights of the people of Gibraltar.” In that year, James Levy took on the leadership  of the firm as Senior Partner. He was awarded CBE in 2014 for his services to the community and has grown the firm to 36 partners and over 200 staff today.\nHassans is both the largest firm in Gibraltar and the leading firm, as cited by the industries’ leading directories, Chambers and Partners and Legal 500."
            },
            {
                id: 'russia', 
                title: 'Yakovlev & Partners',
                subTitle: 'ASSOCIATES',
                image: '../../theme/assets/img/yakolev_400x300.png',
                btnLinkA: 'russia',
                text: "The Law Group “Yakovlev & Partners” was one of the fist private law firms in Russia, which came into being in 1990 by establishing a Limited Liability Company “MaTEC”(Marketing, Trading, Engineering and Consulting small business), which was organized by a group of lawyers with the great experience of work at the government institutions.\n\nIn 1995 the company was renamed as ООО “MaTEC. Yakovlev & Partners” (LLC), with the new area of its activities: rendering legal support to business not only in Russia, but also abroad.\n\nIn 2003 the Moscow Collegium of Advocates” was set up on the basis of the law firm. It allowed to highlight two main lines of the company’s activities: the Collegium attorneys-at-law mainly work in courts, and employees of the firm “MaTEC. Yakovlev & Partners” provide legal advise to clients.\n\nOver a period of 20 years the Law Group “Yakovlev & Partners” is one of the leaders in the sphere of business legal support in Russia"
            },
            {
                id: 'angola', 
                title: 'Paulo Costa',
                subTitle: 'LEGAL REPRESENTATIVE',
                image: '../../theme/assets/img/angola_400x300.jpg',
                btnLinkA: 'angola',
                text: "It needs text"
            }

        ];
        let associatesES = [
            {
                id: 'spain', 
                title: 'JUAN CARMELINO',
                subTitle: 'LAWYER',
                image: '../../theme/assets/img/gavel_400x300.jpg',
                btnLinkA: 'spain',
                text: "Juan Carmona de Cózar. Abogado Licenciado en Derecho por la Universidad Complutense de Madrid en 1975.Master en la Escuela de Práctica Jurídica de la Universidad Complutense de Madrid en 1976.\nJuan Carmona de Cózar,  es especialista en el asesoramiento a Corporaciones y empresas en sus complejas relaciones y contactos con las Administraciones Públicas, respecto de la actividad que pretenden llevar a cabo. Dichas actividades tienen la mayoría de las veces implicaciones urbanísticas de solicitud de licencias, medioambientales, de tramitación de expedientes de expropiación, incluso sancionadores, que conllevan una gran repercusión económica y, en algunas ocasiones, de retraso o incluso paralización de la actividad si no se encaran con conocimiento, experiencia, y discreción.\n\nEn este sentido, Juan Carmona de Cózar, ha sido alto directivo en las Administraciones Públicas local, provincial, y regional, durante 12 años,  lo que le ha permitido conocer profundamente la Administración Pública desde dentro.\n\n- Alcalde de La Línea de la Concepción de 1979 a 1984\n- Vicepresidente de la Diputación Provincial de Cádiz de 1979 a 1983.\n- Delegado Provincial de Hacienda de Cádiz de 1984 a 1986.\n- Director General de Presupuestos de la Junta de Andalucía (Gobierno Regional) de 1986 a 1991.\n\nTambién ha trabajado con todas las grandes compañías eléctricas y del sector de la energía, en implantación de proyectos de centrales eléctricas, tanto de producción de energía renovable eólica, como de gas en ciclos combinados. (Endesa, Iberdrola, Unión Fenosa, Cepsa, Elecnor, Gamesa, etc.….\nTambién ha participado y contribuido, como experto, en proyectos públicos que requieren un asesoramiento especializado a la propia Administración, en su relación con las empresas y los ciudadanos.\nEn ese sentido es especialista en Derecho de las Administraciones Públicas y Urbanismo, lo cual ha permitido a Ayuntamientos y Corporaciones contar con su asesoramiento para gestiones y negociar con éxito proyectos muy complejos, tales como: Planes de Ordenación, expedientes de expropiación, realojo de poblaciones, etc.……"
            },
            {
                id: 'peru', 
                title: 'CONSULTORES',
                subTitle: 'Antonio Carmelino & Carlos D. Marquez Moran',
                image: '../../theme/assets/img/laurel-balance-peru-flag.jpg',
                btnLinkA: 'peru',
                text: "Antonio Carmelino\nAbogado, a la fecha con estudios culminados en la  Maestría de Derecho con mención en Derecho de la Empresa de la Pontificia Universidad Católica del Perú, con experiencia, capacitación y amplio conocimiento del marco legal energético (electricidad, gas, energía nuclear), Derecho Aduanero (Agente de Aduana), Agro-exportación, régimen legal de Promoción de la Inversión  y Técnicas de Negociación. Se ha desempeñado por más de 20 años en puestos de nivel Gerencial en las citadas especialidades y los últimos nueve años como Gerente, Director y/o Asesor Legal en empresas y entidades vinculadas al sector energía.\n\nCarlos D. Marquez Moran\nEn 2008 fundó la empresa de Carlos D. Márquez - Abogados Sociedad Anónima Cerrada, una empresa que reúne a un grupo de abogados profesionales, con estudios de grado y de postgrado en las facultades de derecho más prestigiosas de Perú. En la actualidad es asesor principal para las empresas nacionales e internacionales en el área de derecho mercantil, derecho administrativo, contratos y adquisiciones, asociaciones público-privadas y la promoción de la inversión extranjera."
            },
            {
                id: 'europe', 
                title: 'Hassans',
                subTitle: 'BUFETE DE ABOGADOS',
                image: '../../theme/assets/img/hassans_400x300.png',
                btnLinkA: 'europe',
                text: "<b>Traducirlo a español</b>."
            },
            {
                id: 'russia', 
                title: 'Yakovlev & Partners',
                subTitle: 'ASSOCIADOS',
                image: '../../theme/assets/img/yakolev_400x300.png',
                btnLinkA: 'russia',
                text: "Después de más de veinte años de estar en el negocio jurídico 'Yakovlev & Partners' ® se ha convertido en una de las firmas legales líderes en Rusia, con más de 75 abogados ..."
            },
            {
                id: 'angola', 
                title: 'Paulo Costa',
                subTitle: 'REPRESENTANTE LEGAL',
                image: '../../theme/assets/img/angola_400x300.jpg',
                btnLinkA: 'angola',
                text: "Necesita texto"
            }

        ];
        let boxesEN = [{
                classDiv: 'col-lg-6 col-md-6',
                articleClass: 'boxes col-lg-6 col-lg-offset-3 bg-border-img',
                headerText: '',
                image: '../../theme/assets/img/michael_263x452.jpg',
                imageClass: '', 
                name: 'Michael A. Feetham',
                prof: 'Owner-Director',
                telephoneText: 'Telephone',
                telephone: '900 300 307',
                boxTextArea: 'col-lg-6',
                btnClass: 'btn--navy-blue',
                btnText: 'More',
                btnLink: 'michael',
                mediaClass: [
                    'fa fa-facebook',
                    'fa fa-twitter'
                ]
            },
            {
                classDiv: 'col-lg-6 col-md-6',
                articleClass: 'boxes col-lg-6 col-lg-offset-3',
                headerText: '',
                image: '../../theme/assets/img/carlos_263x452.jpg',
                imageClass: '',
                name: 'Carlos D. Márquez',
                prof: 'Owner-Director',
                telephoneText: 'Telephone',
                telephone: '900 300 307',
                boxTextArea: 'col-lg-6',
                btnClass: 'btn--navy-blue',
                btnText: 'More',
                btnLink: 'carlos'
            }
        ];
        let boxesES = [{
                classDiv: 'col-lg-6 col-md-6',
                articleClass: 'boxes col-lg-6 col-lg-offset-3 bg-border-img',
                headerText: '',
                image: '../../theme/assets/img/michael_263x452.jpg',
                imageClass: '', 
                name: 'Michael A. Feetham',
                prof: 'Socio-Director',
                telephoneText: 'Teléfono',
                telephone: '900 300 307',
                boxTextArea: 'col-lg-6',
                btnClass: 'btn--navy-blue',
                btnText: 'Mas',
                btnLink: 'michael'
            },
            {
                classDiv: 'col-lg-6 col-md-6',
                articleClass: 'boxes col-lg-6 col-lg-offset-3',
                headerText: '',
                image: '../../theme/assets/img/carlos_263x452.jpg',
                imageClass: '',
                name: 'Carlos D. Márquez',
                prof: 'Socio-Director',
                telephoneText: 'Teléfono',
                telephone: '900 300 307',
                boxTextArea: 'col-lg-6',
                btnClass: 'btn--navy-blue',
                btnText: 'Mas',
                btnLink: 'carlos'
            }
        ];
        let boxespanelEN = [{
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'spain',
                image: '../../theme/assets/img/gavel_400x300.jpg',
                imageClass: 'img-responsive',
                btnLink: 'spain',
                footerText: 'COMPANY ADVISER'
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'peru',
                image: '../../theme/assets/img/laurel-balance-peru-flag.jpg',
                imageClass: 'img-responsive',
                btnLink: 'peru',
                footerText: 'COMPANY CONSULTANTS'
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'europe',
                image: '../../theme/assets/img/hassans_400x300.png',
                imageClass: 'img-responsive',
                btnLink: 'europe',
                footerText: "COMPANY SOLICITORS"
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12 col-lg-offset-2',
                articleClass: 'panel panel--blue-dark',
                headerText: 'russia',
                image: '../../theme/assets/img/yakolev_400x300.png',
                imageClass: 'img-responsive',
                btnLink: 'russia',
                footerText: 'ASSOCIATES Yakovlev & Partners'
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12 col-md-offset-3 col-lg-offset-0',
                articleClass: 'panel panel--blue-dark',
                headerText: 'angola',
                image: '../../theme/assets/img/angola_400x300.jpg',
                imageClass: 'img-responsive',
                btnLink: 'angola',
                footerText: 'LEGAL REPRESENTATIVE'
            }
        ];
        let boxespanelES = [{
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'españa',
                image: '../../theme/assets/img/gavel_400x300.jpg',
                imageClass: 'img-responsive',
                btnLink: 'spain',
                footerText: 'COMPANY ADVISER'
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'peru',
                image: '../../theme/assets/img/laurel-balance-peru-flag.jpg',
                imageClass: 'img-responsive',
                btnLink: 'peru',
                footerText: 'COMPANY CONSULTANTS'
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'europa',
                image: '../../theme/assets/img/hassans_400x300.png',
                imageClass: 'img-responsive',
                btnLink: 'europe',
                footerText: "COMPANY SOLICITORS"
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12 col-lg-offset-2',
                articleClass: 'panel panel--blue-dark',
                headerText: 'rusia',
                image: '../../theme/assets/img/yakolev_400x300.png',
                imageClass: 'img-responsive',
                btnLink: 'russia',
                footerText: 'ASSOCIATES Yakovlev & Partners'
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12 col-md-offset-3 col-lg-offset-0',
                articleClass: 'panel panel--blue-dark',
                headerText: 'angola',
                image: '../../theme/assets/img/angola_400x300.jpg',
                imageClass: 'img-responsive',
                btnLink: 'angola',
                footerText: 'LEGAL REPRESENTATIVE'
            }
        ];
        let agenciesBoxesEN = [{
                classDiv: 'col-lg-4 col-md-6 col-xs-12 col-lg-offset-2',
                articleClass: 'panel panel--blue-dark',
                headerText: 'aads',
                image: '../../theme/assets/img/aads_400x300.jpg',
                imageClass: 'img-responsive',
                btnLink: 'aads',
                footerText: 'Part of an Automotive Group of companies.'
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'sports agency',
                image: '../../theme/assets/img/smile_400x300.jpg',
                imageClass: 'img-responsive',
                btnLink: 'smile',
                footerText: 'KENNETH ASQUEZ LLM  Sports Law.'
            }
        ];
        let agenciesBoxesES = [{
                classDiv: 'col-lg-4 col-md-6 col-xs-12 col-lg-offset-2',
                articleClass: 'panel panel--blue-dark',
                headerText: 'aads',
                image: '../../theme/assets/img/aads_400x300.jpg',
                imageClass: 'img-responsive',
                btnLink: 'aads',
                footerText: 'Part of an Automotive Group of companies.'
            },
            {
                classDiv: 'col-lg-4 col-md-6 col-xs-12',
                articleClass: 'panel panel--blue-dark',
                headerText: 'sports agency',
                image: '../../theme/assets/img/smile_400x300.jpg',
                imageClass: 'img-responsive',
                btnLink: 'smile',
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
                image: './../theme/assets/img/gibraltar_1904x598.jpg',
                header: 'Gibraltar',
                liClass: 'slide1',
                text: 'Why invest in Gibraltar?',
                btnLink: 'michael'
            },
            {
                image: './../theme/assets/img/machu-pichu_1904x598.jpg',                
                header: 'Peru',
                liClass: 'slide2',
                text: 'Why invest in Peru?',
                btnLink: 'carlos'
            }
        ];
        let carouselhomeES = [
            {
                image: './../theme/assets/img/gibraltar_1904x598.jpg',
                header: 'Gibraltar',
                liClass: 'slide1',
                text: 'Por que invertir en Gibraltar?',
                btnLink: 'michael'
            },
            {
                image: './../theme/assets/img/machu-pichu_1904x598.jpg',                
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
                subHeader: '5.2 Waterport Place',
                email: 'cmarquez@gibraltar-sbd.com',
                phone: '+51-95-510-9774',
                mobile: '+51-997-428-789',
                fax: '+51-1-422-1870'
            }
        ];
        let contactpageEN = [
            {
                divClass: 'col-lg-6 col-md-6 min-height-contact bg-border-img',
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
                subHeader: '5.2 Waterport Place',
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
                divClass: 'col-lg-6 col-md-6 min-height-contact bg-border-img',
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
            aboutTextEN,
            aboutTextES,
            homeBoxesEN,
            homeBoxesES,
            agenciesBoxesEN,
            agenciesBoxesES, 
            associatesEN,
            associatesES,  
            agenciesEN,
            agenciesES,
            boxesEN, 
            boxesES, 
            boxespanelEN,
            boxespanelES, 
            carouselhome,
            carouselhomeES,
            contactpageEN,
            contactpageES,
            detailsEN,
            detailsES,
            footer,
            navMenuEN,
            navMenuES,
            perugibEN,
            perugibES
    };
  }
}
