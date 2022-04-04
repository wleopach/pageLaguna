
///////CONTACTUS
const translationsEnContactUs =  {
  "C":"Contact us",
  "QO":"We want to offer our services.",
  "N":"Name*",
  "CE":"E-mail adress*",
  "E":"Company*",
  "A":"Issue*",
  "TM":"Your message...",
  "ME":"¡Message sent!",
  "EM":"Send Message"

};
const translationsEsContactUs =  {
  "C":"Contáctanos",
  "QO":"Queremos ofrecerte nuestros servicios de acuerdo a tus necesidades, contáctanos ahora para recibir asesoría.",
  "N":"Nombre*",
  "CE":"Correo electrónico*",
  "E":"Empresa*",
  "A":"Asunto*",
  "TM":"Tu mensaje...",
  "ME":"¡Mensaje enviado!",
  "EM":"Enviar Mensaje"
};

//////ABOUT1
const translationsEnAbout1 = {"AN":"About us",
	          "FL":"We founded LAGUNA-AI ",
			  "NC":"We like quality.",
			  "CN":"¡Know more about us!",
};

const translationsEsAbout1 = {"AN":"Acerca de nosotros",
	          "FL":"Fundamos LAGUNA-AI con el fin de adaptar toda empresa a la cuarta revolución industrial. Pensando en esto, ofrecemos servicios tecnológicos y estadísticos. Nos enfocamos procesamiento de lenguaje natural, rama de la inteligenciaartificial que ayuda a las computadoras a entender,interpretar y manipular el lenguaje humano. Para hacerlo,nuestro equipo cuenta con profesionales en matemáticas,estadística y ciencia de datos.",
			  "NC":"Nos gusta prestar servicios útiles y de calidad.",
			  "CN":"¡Conoce nuestro equipo!",
};

//////ABOUT
const translationsEsAbout =  {
"NEQ":"Nuestro equipo",
"JF":" Ph.D en Matemáticas. Experto en algoritmos de clasificación supervisada.",
"DC":"Científico de datos",
"DA":"Analísta de datos",
"L":" Profesional en Estadística. Experta en diseño de experimentos y modelos de regresión.",
"ML":"Ingeniera de ML",
"Y":"Ph.D. en matemáticas. Experta en aprendizaje automático en la nube.",
"LE":" Matemático. Especialista en Bases de datos.",
"ES":"Estadístico senior",
"H":"M.Sc. en Sistemas. Experto en gerencia de proyectos.",
"DN":"Analista de datos NLP",
"CA":"Ph.D. en Matemáticas.",
"GC":"Gerente comercial",
"SD":"Desarrollador de software",
"CC":"Creadora de contenidos",
"MQ":"MSc. en Química",
"DP":"Desarrollador NLP",
"M":"Matemático",
						 
	
};

const translationsEnAbout =  {
"NEQ":"Our team",
"JF":" Ph.D in Mathematics. Supervised learning expert",
"DC":"Data Scientist",
"DA":"Data Analyst",
"L":" Statistician. Expert in regression models, and model design.",
"ML":"Ingeniera de ML",
"Y":"Ph.D. in mathematics. ML and Cloud development expert.",
"LE":" Mathematicion. Data Bases Specialist.",
"ES":"Senior Statistician",
"H":"M.Sc. in Computer Science. Proyect management expert.",
"DN":"Data Analyst, NLP",
"CA":"Ph.D. in Mathematics.",
"GC":"General Manager",
"SD":"Software developer",
"CC":"Contents developer",
"MQ":"MSc. in Chemestry",
"DP":" NLP developer",
"M":"Mathematician",
						
};
//////SERVICES
const translationsEsServices ={
 "NS":"Nuestros Servicios",
 "CI":"Chatbots inteligentes",
 "AC":"Asistentes conversacionales capaces de atender las necesidades de tus clientes 24/7",
 "CT":"Clasificación de textos",
 "CD":"Clasificación de datos no estructurados. Análisis de sentimientos y clasificación de PQR. Te ayudamos a entender como se relacionan tus clientes con tu producto.",
 "SA":"Sumarización automática",
 "AE":"Algoritmos para la extracción y estructuración de información relevante en textos. Disminuye el tiempo dedicado al escrutinio del lenguaje.",
 "AD":"Análisis de datos",
 "EV":"Exploración y visualización de datos, análisis y modelización reportados en tableros de control. Extrae valor de la información de tu empresa.",
 "MA":"Modelos analíticos",
 "MR":"Modelos de regresión lineal y logística, Análisis de series de tiempo, Redes Neuronales, Análisis topológico de datos"
	
	
};

const translationsEnServices ={
 "NS":"Our Services",
 "CI":" Smart Chatbots ",
 "AC":"Availability 24/7",
 "CT":"Text classification",
 "CD":"Not struturated Data classification . Sentiment analysis .",
 "SA":"Automatic sumarization",
 "AE":"Algorithms ",
 "AD":"Data analytics",
 "EV":"Data visualization",
 "MA":"Analytic models",
 "MR":"Linear regression"
	
	
};
////////HEADER
const translationsEsHeader ={ 
 "IN":"Inicio",
 "SE":"Servicios",
 "AU":"Acerca de nosotros",
 "CO":"Contacto"
	
};

const translationsEnHeader ={
 "IN":"Home",
 "SE":"Services",
 "AU":"About us",
 "CO":"Contact"
	
};

////////MAIN
export const translationsEn =  {
  "análisisDeDatos": "Data Analysis",
  "espNLP": "We are NLP experts ",
  "WeOffer": "We offer...",
  ...translationsEnContactUs,
  ...translationsEnAbout1,
  ...translationsEnServices,
  ...translationsEnHeader,
  ...translationsEnAbout
	
  
 
};

export const translationsEs =  {
  "análisisDeDatos": "Análisis de datos",
  "espNLP": "Especializados en procesamiento del lenguaje natural",
  "WeOffer": "Ofrecemos servicios tecnológicos y estadísticos. Nos enfocamos en el procesamiento de lenguaje natural, rama de la inteligencia artificial que ayuda a las computadoras a entender, interpretar y manipular el lenguaje humano.",
  ...translationsEsContactUs,
  ...translationsEsAbout1,
  ...translationsEsServices,
  ...translationsEsHeader,
  ...translationsEsAbout
	
 
};
