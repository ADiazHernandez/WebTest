document.addEventListener('DOMContentLoaded', function () {
  const yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      siteNav.classList.toggle('open');
      const expanded = siteNav.classList.contains('open');
      navToggle.setAttribute('aria-expanded', String(expanded));
    });

    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    siteNav.querySelectorAll('a').forEach(function (link) {
      const href = link.getAttribute('href');
      const linkPage = href ? href.split('/').pop() : '';
      if (linkPage === currentPage || (linkPage === 'index.html' && currentPage === '')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(
        'https://formsubmit.co/ajax/jdpropertyservicesmadison@gmail.com',
        {
          method: 'POST',
          body: formData
        }
      );

      if (response.ok) {
        const successMessage = document.getElementById('successMessage');

        const currentLang = localStorage.getItem('siteLang') || 'en';

      if (successMessage) {
        if (currentLang === 'es') {
          successMessage.textContent =
            '✓ ¡Gracias! Su solicitud de presupuesto ha sido enviada correctamente. Nos pondremos en contacto con usted pronto.';
        } else {
          successMessage.textContent =
            '✓ Thank you! Your estimate request has been submitted successfully. We will contact you soon.';
        }

        successMessage.style.display = 'block';
      }

        form.reset();

        window.scrollTo({
          top: form.offsetTop - 100,
          behavior: 'smooth'
        });
      } else {
        alert('There was a problem submitting your request. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('There was a problem submitting your request. Please try again.');
    }
  });
}

  /* Translation / language toggle (full reversible translations) */
  const translations = {
    /* Navigation */
    "Home": "Inicio",
    "Services": "Servicios",
    "About": "Acerca de",
    "Contact": "Contacto",

    /* Site copy */
    "Trusted property care": "Cuidado de propiedades de confianza",
    "Built for healthy buildings, happy owners, and lasting value.": "Diseñado para edificios saludables, propietarios satisfechos y valor duradero.",
    "From repairs and renovations to full facility management, our team delivers dependable property services with clear communication and craftsmanship you can count on.": "Desde reparaciones y renovaciones hasta la gestión completa de instalaciones, nuestro equipo ofrece servicios de propiedad confiables con comunicación clara y mano de obra en la que puede confiar.",
    "Explore Services": "Explorar servicios",
    "Request a Quote": "Solicitar presupuesto",
    "24/7 Support": "Soporte 24/7",
    "Emergency repairs available": "Reparaciones de emergencia disponibles",
    "Transparent Pricing": "Precios transparentes",
    "No hidden costs, honest quotes": "Sin costos ocultos, presupuestos honestos",
    "Wide Range of Services": "Amplia gama de servicios",
    "Repairs, renovations & management": "Reparaciones, renovaciones y gestión",
    "Services designed to keep every site running.": "Servicios diseñados para mantener cada sitio en funcionamiento.",
    "Our service teams combine practical expertise with streamlined project management so your property stays secure, functional, and efficient.": "Nuestros equipos de servicio combinan experiencia práctica con gestión de proyectos optimizada para que su propiedad se mantenga segura, funcional y eficiente.",

    /* Service cards */
    "Maintenance & Repairs": "Mantenimiento y reparaciones",
    "Fast response repair work, preventative maintenance plans, and reliable upkeep for residential and commercial properties.": "Trabajo de reparación de respuesta rápida, planes de mantenimiento preventivo y mantenimiento confiable para propiedades residenciales y comerciales.",
    "Construction & Renovation": "Construcción y renovación",
    "From interior refreshes to major remodels, we keep schedules on track and quality at the center of every build.": "Desde renovaciones interiores hasta remodelaciones importantes, mantenemos los cronogramas y la calidad en el centro de cada proyecto.",
    "Facility Management": "Gestión de instalaciones",
    "Complete facility services, cleaning, grounds care, and tailored programs that preserve long-term asset value.": "Servicios completos de instalaciones, limpieza, mantenimiento de terrenos y programas a medida que preservan el valor a largo plazo.",

    "What makes our approach different?": "¿Qué hace que nuestro enfoque sea diferente?",
    "We combine thoughtful planning, dependable teams, and clear communication so every project finishes on time and on budget.": "Combinamos planificación reflexiva, equipos confiables y comunicación clara para que cada proyecto termine a tiempo y dentro del presupuesto.",

    "Why choose JD Property Services": "Por qué elegir JD Property Services",
    "We're committed to being the trusted partner you can rely on for all your property care needs.": "Estamos comprometidos a ser el socio de confianza en el que puede confiar para todas sus necesidades de cuidado de la propiedad.",

    /* Feature headings and descriptions */
    "Quality Workmanship": "Mano de obra de calidad",
    "Every project reflects our attention to detail and dedication to craftsmanship. From small repairs to major renovations, we deliver results that last.": "Cada proyecto refleja nuestra atención al detalle y dedicación a la artesanía. Desde pequeñas reparaciones hasta grandes renovaciones, entregamos resultados que perduran.",
    "Honest Communication": "Comunicación honesta",
    "We believe in transparency from the first consultation to the final walkthrough. Clear estimates, realistic timelines, and no hidden costs.": "Creemos en la transparencia desde la primera consulta hasta la inspección final. Estimaciones claras, plazos realistas y sin costos ocultos.",
    "Dependable Teams": "Equipos confiables",
    "We show up on time, deliver on commitments, and treat your property with the respect it deserves.": "Nos presentamos a tiempo, cumplimos con los compromisos y tratamos su propiedad con el respeto que merece.",
    "Fair & Transparent Pricing": "Precios justos y transparentes",
    "We provide honest quotes with straightforward billing. What you see is what you pay—no surprises, just straightforward service.": "Proporcionamos presupuestos honestos con facturación sencilla. Lo que ve es lo que paga—sin sorpresas, solo servicio directo.",
    "Residential & Commercial Expertise": "Experiencia residencial y comercial",
    "Whether you're a homeowner or a business owner, we have the experience and solutions to keep your property in top condition year-round.": "Ya sea que sea propietario o empresario, tenemos la experiencia y las soluciones para mantener su propiedad en excelentes condiciones todo el año.",
    "Customer Satisfaction First": "La satisfacción del cliente primero",
    "Your satisfaction is our ultimate goal. We build lasting relationships by being easy to work with and delivering exceptional service every time.": "Su satisfacción es nuestro objetivo final. Construimos relaciones duraderas siendo fáciles de trabajar y ofreciendo un servicio excepcional cada vez.",

    /* Contact page */
    "Contact - JD Property Services": "Contacto - JD Property Services",
    "Contact Details": "Detalles de contacto",
    "Connect with us": "Conéctese con nosotros",
    "Let's talk about your property needs.": "Hablemos sobre las necesidades de su propiedad.",
    "Need maintenance, repairs, landscaping, flooring, painting, or a property improvement project?\n            Contact us today for a free estimate.": "¿Necesita mantenimiento, reparaciones, paisajismo, suelos, pintura o un proyecto de mejora de la propiedad?\n            Contáctenos hoy para una estimación gratuita.",
    "Phone": "Teléfono",
    "Email": "Correo electrónico",
    "Service Area": "Área de servicio",
    "Hours": "Horario",
    "Call or text for estimates and project inquiries.": "Llame o envíe un mensaje de texto para estimaciones y consultas de proyectos.",
    "We'll respond as soon as possible.": "Responderemos lo antes posible.",
    "Madison, Wisconsin": "Madison, Wisconsin",
    "Serving surrounding communities.": "Atendiendo a las comunidades cercanas.",
    "Monday – Friday: 8:00 AM – 6:00 PM": "Lunes a viernes: 8:00 a.m. – 6:00 p.m.",
    "Weekend appointments available.": "Citas disponibles los fines de semana.",

    /* Form labels and options */
    "Request a Free Estimate": "Solicitar una estimación gratuita",
    "Full Name *": "Nombre completo *",
    "Full Name": "Nombre completo",
    "Email Address *": "Correo electrónico *",
    "Email Address": "Correo electrónico",
    "Phone Number *": "Número de teléfono *",
    "Property Address": "Dirección de la propiedad",
    "Service Needed *": "Servicio necesario *",
    "Select a service": "Seleccione un servicio",
    "Power Washing": "Limpieza a presión",
    "Deck Maintenance": "Mantenimiento de terrazas",
    "Lawn Care & Landscaping": "Cuidado del césped y paisajismo",
    "Debris Removal & Cleanup": "Eliminación de escombros y limpieza",
    "Snow Removal": "Remoción de nieve",
    "Drywall Repair": "Reparación de paneles de yeso",
    "Painting & Repairs": "Pintura y reparaciones",
    "Carpentry Repairs": "Reparaciones de carpintería",
    "Flooring": "Suelos",
    "Office & Restaurant Maintenance": "Mantenimiento de oficinas y restaurantes",
    "Other": "Otro",
    "Project Details *": "Detalles del proyecto *",
    "Please describe your project, property size, timeline, and any additional details.": "Por favor describa su proyecto, tamaño de la propiedad, plazo y cualquier detalle adicional.",
    "Request Free Estimate": "Solicitar estimación gratuita",
    "Clear Form": "Limpiar formulario",

    /* New contact intro copy */
    "Ready to start your next project?": "¿Listo para comenzar su próximo proyecto?",
    "Whether you need property maintenance, repairs, landscaping, power washing, flooring, painting, or commercial maintenance services, JD Property Services is here to help. Fill out the form below with your project details, and we'll contact you as soon as possible to discuss your needs and provide a free estimate. We are committed to delivering reliable service, quality workmanship, and customer satisfaction on every project.": "Ya sea que necesite mantenimiento de la propiedad, reparaciones, paisajismo, limpieza a presión, suelos, pintura o servicios de mantenimiento comercial, JD Property Services está aquí para ayudar. Complete el formulario a continuación con los detalles de su proyecto y nos pondremos en contacto con usted lo antes posible para discutir sus necesidades y proporcionarle una estimación gratuita. Estamos comprometidos a ofrecer un servicio confiable, mano de obra de calidad y satisfacción del cliente en cada proyecto.",
    "Call, text, or submit a request through our contact form—we look forward to helping with your next project.": "Llame, envíe un mensaje de texto o envíe una solicitud a través de nuestro formulario de contacto; esperamos poder ayudar con su próximo proyecto.",

    /* Services page specific paragraphs */
    "Solutions that protect your property value and streamline operations.": "Soluciones que protegen el valor de su propiedad y optimizan las operaciones.",
    "We manage maintenance, construction, and facility support with a focus on reliability, efficiency, and long-term peace of mind.": "Gestionamos mantenimiento, construcción y soporte de instalaciones con un enfoque en confiabilidad, eficiencia y tranquilidad a largo plazo.",
    "Core service areas": "Áreas de servicio principales",
    "Every offering is designed to keep your property operating smoothly and looking its best.": "Cada oferta está diseñada para mantener su propiedad funcionando sin problemas y con la mejor apariencia.",
    "Restore the appearance of your property with professional pressure washing. We remove dirt, mold, mildew, and stains from siding, driveways, sidewalks, decks, and other exterior surfaces.": "Restauramos la apariencia de su propiedad con limpieza a presión profesional. Eliminamos suciedad, moho, hongos y manchas de revestimientos, entradas, aceras, terrazas y otras superficies exteriores.",
    "Protect and extend the life of your deck with cleaning, repairs, staining, and routine maintenance. We help keep your outdoor space safe and looking its best.": "Proteja y prolongue la vida de su terraza con limpieza, reparaciones, teñido y mantenimiento rutinario. Ayudamos a mantener su espacio exterior seguro y con la mejor apariencia.",
    "From routine lawn maintenance to landscape improvements, we provide reliable services that enhance curb appeal and keep your property well-maintained year-round.": "Desde mantenimiento rutinario del césped hasta mejoras del paisaje, ofrecemos servicios confiables que realzan el atractivo exterior y mantienen su propiedad bien cuidada durante todo el año.",
    "Fast and efficient removal of yard waste, construction debris, unwanted materials, and general property cleanup to keep your space clean and professional.": "Retiro rápido y eficiente de desechos de jardín, escombros de construcción, materiales no deseados y limpieza general de la propiedad para mantener su espacio limpio y profesional.",
    "Dependable snow and ice management for residential and commercial properties. We help keep walkways, driveways, and parking areas safe during winter weather.": "Gestión confiable de nieve y hielo para propiedades residenciales y comerciales. Ayudamos a mantener despejados los pasos, entradas y áreas de estacionamiento durante el clima invernal.",
    "Professional drywall patching and repairs for holes, cracks, water damage, and general wear. We restore smooth, finished walls ready for paint.": "Reparación profesional de paneles de yeso para agujeros, grietas, daños por agua y desgaste general. Restauramos paredes lisas y terminadas listas para pintar.",
    "Quality painting services combined with minor repairs to refresh and protect your property. We deliver clean, professional results for homes and businesses.": "Servicios de pintura de calidad combinados con reparaciones menores para renovar y proteger su propiedad. Entregamos resultados limpios y profesionales para hogares y negocios.",
    "Repair and maintenance of doors, trim, framing, fencing, cabinets, and other wood structures. We provide practical solutions to restore functionality and appearance.": "Reparación y mantenimiento de puertas, molduras, estructuras, cercas, gabinetes y otras estructuras de madera. Proporcionamos soluciones prácticas para restaurar funcionalidad y apariencia.",
    "Reliable maintenance services for commercial properties, including repairs, preventive maintenance, cleaning support, and facility upkeep to keep operations running smoothly.": "Servicios de mantenimiento confiables para propiedades comerciales, incluidas reparaciones, mantenimiento preventivo, apoyo de limpieza y cuidado de instalaciones para mantener las operaciones en marcha.",
    "Installation and repair of various flooring materials, including tile, laminate, vinyl plank, and hardwood. We focus on durability, precision, and quality craftsmanship.": "Instalación y reparación de varios materiales de pisos, incluyendo baldosas, laminado, vinilo y madera dura. Nos enfocamos en durabilidad, precisión y mano de obra de calidad.",
    "How we make it easy": "Cómo lo hacemos fácil",
    "From the first estimate to the final walkthrough, our process is built to reduce friction and keep you informed.": "Desde la primera estimación hasta la inspección final, nuestro proceso está diseñado para reducir fricciones y mantenerlo informado.",
    "Step 1": "Paso 1",
    "Consultation & planning": "Consulta y planificación",
    "Step 2": "Paso 2",
    "Clear estimates and scheduling": "Estimaciones claras y programación",
    "Step 3": "Paso 3",
    "Delivery with follow-up support": "Entrega con soporte de seguimiento",
    "Book a service review": "Reservar una revisión de servicio",

    /* About page specific */
    "About Us - JD Property Services": "Acerca de - JD Property Services",
    "About us": "Acerca de",
    "About JD Property Services": "Acerca de JD Property Services",
    "Providing professional property care and reliable maintenance throughout the Madison area.": "Proporcionando cuidado profesional de propiedades y mantenimiento confiable en el área de Madison.",
    "Our story": "Nuestra historia",
    "At JD Property Services, we believe every property deserves professional care, reliable maintenance, and quality workmanship. We proudly serve homeowners, property managers, and businesses throughout the Madison area with a wide range of property maintenance and improvement services.": "En JD Property Services, creemos que cada propiedad merece cuidado profesional, mantenimiento confiable y mano de obra de calidad. Nos enorgullece servir a propietarios, administradores de propiedades y empresas en el área de Madison con una amplia gama de servicios de mantenimiento y mejora de propiedades.",
    "Our approach": "Nuestro enfoque",
    "Our team is committed to helping clients protect their investment by providing dependable solutions for repairs, maintenance, landscaping, power washing, painting, flooring, cleanup services, and more. Whether it's a small repair or a large project, we approach every job with the same attention to detail and dedication to customer satisfaction.": "Nuestro equipo está comprometido a ayudar a los clientes a proteger su inversión proporcionando soluciones confiables para reparaciones, mantenimiento, paisajismo, limpieza a presión, pintura, suelos, servicios de limpieza y más. Ya sea una reparación pequeña o un gran proyecto, abordamos cada trabajo con la misma atención al detalle y dedicación a la satisfacción del cliente.",
    "We understand that finding a trustworthy contractor can be difficult. That's why we focus on honest communication, fair pricing, and delivering results that meet or exceed expectations. Our goal is to build lasting relationships with our customers through dependable service and quality work they can count on.": "Entendemos que encontrar un contratista confiable puede ser difícil. Por eso nos enfocamos en la comunicación honesta, precios justos y entregar resultados que cumplan o superen las expectativas. Nuestro objetivo es construir relaciones duraderas con nuestros clientes mediante un servicio confiable y trabajo de calidad en el que puedan confiar.",
    "Our commitment": "Nuestro compromiso",
    "Our mission": "Nuestra misión",
    "Every project reflects our dedication to quality and customer satisfaction.": "Cada proyecto refleja nuestra dedicación a la calidad y la satisfacción del cliente.",
    "Attention to detail and craftsmanship in every project.": "Atención al detalle y artesanía en cada proyecto.",
    "Dependable teams you can count on when you need us most.": "Equipos confiables en los que puede confiar cuando más nos necesita.",
    "Clear, transparent dialogue from start to finish.": "Diálogo claro y transparente de principio a fin.",
    "No hidden costs, just honest quotes and straightforward billing.": "Sin costos ocultos, solo presupuestos honestos y facturación sencilla.",
    "Experience serving both homeowners and business owners.": "Experiencia sirviendo tanto a propietarios como a dueños de negocios.",
    "Your satisfaction is our ultimate measure of success.": "Su satisfacción es nuestra medida final de éxito.",
    "Our mission is to provide reliable, high-quality property maintenance and repair services while building lasting relationships through professionalism, integrity, and exceptional customer care.": "Nuestra misión es proporcionar servicios confiables y de alta calidad en mantenimiento y reparación de propiedades mientras construimos relaciones duraderas mediante profesionalismo, integridad y atención al cliente excepcional.",
    "Let's connect": "Conectemos",
    "Ready to work with a team that cares about your property as much as you do?": "¿Listo para trabajar con un equipo que cuida su propiedad tanto como usted?",
    "Maintaining Properties. Building Trust.": "Mantenimiento de propiedades. Construyendo confianza.",
    "Get in touch": "Póngase en contacto",
    "Our services": "Nuestros servicios",

  "Before & After Transformations": "Transformaciones Antes y Después",
  "Drag the slider to see the results of our work.": "Deslice el control para ver los resultados de nuestro trabajo.",

  "Debris Removal & Cleanup": "Eliminación de Escombros y Limpieza",
  "Interior & Exterior Painting": "Pintura Interior y Exterior",
  "Landscape & Property Maintenance": "Mantenimiento de Jardines y Propiedades",
  "Restaurant Maintenance": "Mantenimiento de Restaurantes",

  "BEFORE": "ANTES",
  "AFTER": "DESPUÉS",
  "Our services": "Nuestros servicios",
  "Interior & Exterior Painting & Repair": "Pintura y Reparación Interior y Exterior",

    /* Buttons */
    "Send message": "Enviar mensaje",
    "Clear": "Limpiar",
    "Explore our services": "Explore nuestros servicios",
    "Request a quote": "Solicitar presupuesto",

    /* Page titles & meta */
    "Services - JD Property Services": "Servicios - JD Property Services",
    "Projects - JD Property Services": "Proyectos - JD Property Services",
    "Contact JD Property Services for estimates, maintenance, repairs, landscaping, and property improvement services.": "Contacte a JD Property Services para estimaciones, mantenimiento, reparaciones, paisajismo y servicios de mejora de la propiedad.",
    "Professional property maintenance, construction, and facility management services.": "Servicios profesionales de mantenimiento de propiedades, construcción y gestión de instalaciones.",
    "Learn about JD Property Services and our commitment to quality property care.": "Conozca a JD Property Services y nuestro compromiso con el cuidado de propiedades de calidad.",

    /* Footer */
    "JD Property Services — maintenance, renovation, and facility care.": "JD Property Services — mantenimiento, renovación y cuidado de instalaciones.",
    "JD Property Services — dependable property care.": "JD Property Services — cuidado de la propiedad confiable.",
    "©": "©",
    "Ready to experience the JD Property Services difference?": "¿Listo para experimentar la diferencia de JD Property Services?",

    /* Alerts */
    "Please fill in the required fields before sending your message.": "Por favor complete los campos obligatorios antes de enviar su mensaje.",
    "Thanks, ": "Gracias, ",
    "! Your message is ready to be sent. This site does not currently process submissions, so please connect the form to your backend.": "! Su mensaje está listo para ser enviado. Este sitio actualmente no procesa envíos, así que conecte el formulario a su backend.",

    /* Brand (keep name) */
    "JD Property Services": "JD Property Services"
  };

  function applyLanguage(lang) {
    // Elements to translate by selector
    const selectors = 'h1,h2,h3,h4,p,span,strong,li,a,button,label,option,blockquote,figcaption,figcaption strong,figcaption p,small,em,div';
    document.querySelectorAll(selectors).forEach(function (el) {
      const raw = el.getAttribute('data-i18n-original-raw') || el.textContent || '';
      const original = (raw.replace ? raw.replace(/\s+/g, ' ').trim() : String(raw).trim());
      if (!el.getAttribute('data-i18n-original')) {
        el.setAttribute('data-i18n-original', original);
        el.setAttribute('data-i18n-original-raw', el.textContent);
      }
      if (lang === 'es') {
        const t = translations[original];
        if (t) {
          // If element has no child elements, safely replace its text
          if (el.children.length === 0) {
            el.textContent = t;
          } else {
            // Preserve structure: replace only text nodes within the element
            el.childNodes.forEach(function (node) {
              if (node.nodeType === Node.TEXT_NODE) {
                const rawNode = node.nodeValue || '';
                const txt = rawNode.replace(/\s+/g, ' ').trim();
                if (txt && translations[txt]) node.nodeValue = node.nodeValue.replace(txt, translations[txt]);
              }
            });
          }
        }
      } else {
        // restore original while preserving structure
        if (el.children.length === 0) {
          el.textContent = original;
        } else {
          // restore any text nodes to their original values if possible
          el.childNodes.forEach(function (node) {
              if (node.nodeType === Node.TEXT_NODE) {
                const rawNode = node.nodeValue || '';
                const txt = rawNode.replace(/\s+/g, ' ').trim();
                if (translations[txt]) {
                  const eng = Object.keys(translations).find(function (k) { return translations[k] === translations[txt] ? k : translations[k] === txt; });
                  if (eng) node.nodeValue = node.nodeValue.replace(txt, eng);
                }
              }
            });
        }
      }
    });

    // placeholders for inputs and textareas
    document.querySelectorAll('input,textarea').forEach(function (el) {
      const phRaw = el.getAttribute('placeholder') || '';
      const ph = phRaw.replace(/\s+/g, ' ').trim();
      const key = el.getAttribute('data-i18n-placeholder') || ph;
      if (!el.getAttribute('data-i18n-placeholder') && phRaw) el.setAttribute('data-i18n-placeholder', ph);
      if (key) {
        if (lang === 'es' && translations[key]) el.placeholder = translations[key];
        if (lang === 'en') el.placeholder = key;
      }
    });

    // options
    document.querySelectorAll('option').forEach(function (opt) {
      const raw = opt.getAttribute('data-i18n-original-raw') || opt.textContent || '';
      const original = (raw.replace ? raw.replace(/\s+/g, ' ').trim() : String(raw).trim());
      if (!opt.getAttribute('data-i18n-original')) {
        opt.setAttribute('data-i18n-original', original);
        opt.setAttribute('data-i18n-original-raw', opt.textContent);
      }
      if (lang === 'es' && translations[original]) opt.textContent = translations[original];
      if (lang === 'en') opt.textContent = original;
    });

    // image alts
    document.querySelectorAll('img[alt]').forEach(function (img) {
      const raw = img.getAttribute('data-i18n-original-raw') || img.getAttribute('alt') || '';
      const original = (raw.replace ? raw.replace(/\s+/g, ' ').trim() : String(raw).trim());
      if (!img.getAttribute('data-i18n-original')) {
        img.setAttribute('data-i18n-original', original);
        img.setAttribute('data-i18n-original-raw', img.getAttribute('alt'));
      }
      if (lang === 'es' && translations[original]) img.setAttribute('alt', translations[original]);
      if (lang === 'en') img.setAttribute('alt', original);
    });

    // document title
    if (!window._i18nTitleOriginal) window._i18nTitleOriginal = document.title;
    if (lang === 'es' && translations[window._i18nTitleOriginal]) document.title = translations[window._i18nTitleOriginal];
    if (lang === 'en') document.title = window._i18nTitleOriginal;

    // meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const raw = metaDesc.getAttribute('data-i18n-original-raw') || metaDesc.getAttribute('content') || '';
      const original = (raw.replace ? raw.replace(/\s+/g, ' ').trim() : String(raw).trim());
      if (!metaDesc.getAttribute('data-i18n-original')) {
        metaDesc.setAttribute('data-i18n-original', original);
        metaDesc.setAttribute('data-i18n-original-raw', metaDesc.getAttribute('content'));
      }
      if (lang === 'es' && translations[original]) metaDesc.setAttribute('content', translations[original]);
      if (lang === 'en') metaDesc.setAttribute('content', original);
    }

    // update lang in localStorage
    localStorage.setItem('siteLang', lang === 'es' ? 'es' : 'en');

    // set document language attribute for accessibility
    try { document.documentElement.lang = (lang === 'es') ? 'es' : 'en'; } catch (e) {}

    // translate aria-labels where we have matches
    document.querySelectorAll('[aria-label]').forEach(function (el) {
      const lbl = el.getAttribute('aria-label') || '';
      if (!lbl) return;
      const key = el.getAttribute('data-i18n-aria') || lbl;
      if (!el.getAttribute('data-i18n-aria')) el.setAttribute('data-i18n-aria', lbl);
      if (lang === 'es' && translations[key]) el.setAttribute('aria-label', translations[key]);
      if (lang === 'en') el.setAttribute('aria-label', key);
    });
  }

  // Apply stored language on every page load so translations persist across navigation
  const storedLang = localStorage.getItem('siteLang') || 'en';
  if (storedLang === 'es') applyLanguage('es');

  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    // set initial toggle label to reflect current language
    langToggle.textContent = (storedLang === 'es') ? 'EN' : 'ES';

    langToggle.addEventListener('click', function () {
      const current = localStorage.getItem('siteLang') || 'en';
      if (current === 'en') {
        applyLanguage('es');
        langToggle.textContent = 'EN';
      } else {
        applyLanguage('en');
        langToggle.textContent = 'ES';
      }
    });
  }
});


document.querySelectorAll('.comparison-slider').forEach(slider => {

    const range = slider.querySelector('.slider-control');
    const after = slider.querySelector('.after-wrapper');
    const handle = slider.querySelector('.slider-handle');

    function updateSlider(value) {
        after.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
        handle.style.left = value + '%';
    }

    updateSlider(50);

    range.addEventListener('input', () => {
        updateSlider(range.value);
    });

});
