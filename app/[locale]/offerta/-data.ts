import {defaultLocale, type Locale} from '@/i18n.config'

type OffertaSection = {
    title: string
    points: string[]
}

type OffertaDocument = {
    id: string
    tabLabel: string
    title: string
    edition: string
    sections: OffertaSection[]
}

export type OffertaContent = {
    pageTitle: string
    pageDescription: string
    topButton: string
    documents: OffertaDocument[]
}

const ruContent: OffertaContent = {
    pageTitle: 'Документы Bulutcha',
    pageDescription:
        'Ниже размещены 2 документа: Политика конфиденциальности и публичная оферта на оказание услуг по платной подписке Bulutcha.',
    topButton: 'Наверх',
    documents: [
        {
            id: 'privacy-policy',
            tabLabel: 'Политика конфиденциальности',
            title: 'Политика конфиденциальности',
            edition: 'Последнее обновление: 25 апреля 2026 года',
            sections: [
                {
                    title: '1. Общие положения',
                    points: [
                        '1.1. Настоящая Политика конфиденциальности описывает правила сбора, использования и раскрытия информации при использовании сервиса Bulutcha, а также права пользователя в отношении персональных данных.',
                        '1.2. Мы используем персональные данные для предоставления, поддержки и улучшения сервиса. Используя сервис, пользователь соглашается со сбором и использованием информации в соответствии с настоящей Политикой.',
                        '1.3. Сервис Bulutcha предоставляется компанией Zerodev. В настоящей Политике слова «мы», «нас» и «наш» относятся к Zerodev.',
                    ],
                },
                {
                    title: '2. Термины и определения',
                    points: [
                        '2.1. Аккаунт — уникальная учетная запись, созданная пользователем для доступа к сервису или его отдельным функциям.',
                        '2.2. Приложение или Сервис — Bulutcha, программный продукт и облачный сервис хранения файлов, предоставляемый Zerodev.',
                        '2.3. Персональные данные — любая информация, относящаяся к идентифицированному или идентифицируемому физическому лицу.',
                        '2.4. Данные об использовании — данные, собираемые автоматически при использовании сервиса или его инфраструктуры.',
                        '2.5. Поставщик услуг — физическое или юридическое лицо, которое обрабатывает данные от имени Zerodev или помогает обеспечивать работу сервиса.',
                        '2.6. Пользователь — лицо, использующее сервис, либо компания или иное юридическое лицо, от имени которого такое лицо использует сервис.',
                    ],
                },
                {
                    title: '3. Какие данные мы собираем',
                    points: [
                        '3.1. При использовании сервиса мы можем запрашивать данные, необходимые для регистрации, идентификации, связи с пользователем и предоставления функций Bulutcha.',
                        '3.2. Данные об использовании собираются автоматически и могут включать IP-адрес, тип и версию браузера, страницы или разделы сервиса, дату и время посещения, время использования, идентификаторы устройства и диагностические данные.',
                        '3.3. При доступе через мобильное устройство мы можем автоматически получать тип устройства, уникальный идентификатор устройства, IP-адрес, операционную систему, тип мобильного браузера и другие диагностические данные.',
                        '3.4. Мы также можем получать информацию, которую браузер или устройство отправляет при посещении или использовании сервиса.',
                    ],
                },
                {
                    title: '4. Как мы используем данные',
                    points: [
                        '4.1. Для предоставления и поддержки сервиса, включая мониторинг его использования и обеспечение стабильной работы.',
                        '4.2. Для управления аккаунтом пользователя и предоставления доступа к функциям, доступным зарегистрированным пользователям.',
                        '4.3. Для исполнения договорных обязательств, включая предоставление выбранных продуктов, тарифов или услуг.',
                        '4.4. Для связи с пользователем по email, телефону, SMS, push-уведомлениям или другим электронным каналам по вопросам сервиса, обновлений, безопасности и поддержки.',
                        '4.5. Для предоставления информации о товарах, услугах, специальных предложениях и событиях, похожих на уже приобретенные или запрошенные пользователем, если пользователь не отказался от таких сообщений.',
                        '4.6. Для обработки запросов пользователя, аналитики, выявления тенденций использования, оценки эффективности коммуникаций и улучшения сервиса, продуктов и пользовательского опыта.',
                    ],
                },
                {
                    title: '5. Передача и раскрытие данных',
                    points: [
                        '5.1. Мы можем передавать персональные данные поставщикам услуг, которые помогают поддерживать, анализировать и улучшать работу сервиса или связываться с пользователем.',
                        '5.2. Данные могут быть переданы при слиянии, продаже активов, финансировании, приобретении или иной передаче части либо всего бизнеса Zerodev.',
                        '5.3. Мы можем передавать данные аффилированным лицам и партнерам при условии соблюдения ими настоящей Политики конфиденциальности.',
                        '5.4. Если пользователь делится информацией в публичных разделах сервиса или предоставляет доступ другим пользователям, такая информация может быть доступна другим лицам.',
                        '5.5. Мы можем раскрыть персональные данные с согласия пользователя или если это требуется законом, судом, государственным органом либо необходимо для защиты прав, безопасности и законных интересов Zerodev, пользователей или общества.',
                    ],
                },
                {
                    title: '6. Хранение и передача данных',
                    points: [
                        '6.1. Zerodev хранит персональные данные только столько, сколько необходимо для целей, указанных в настоящей Политике, соблюдения юридических обязанностей, разрешения споров и исполнения соглашений.',
                        '6.2. Данные об использовании обычно хранятся меньший срок, кроме случаев, когда они нужны для безопасности, улучшения функциональности сервиса или выполнения требований закона.',
                        '6.3. Информация может обрабатываться в операционных офисах Zerodev и в других местах, где находятся стороны, участвующие в обработке. Это означает, что данные могут передаваться в юрисдикции с иными правилами защиты данных.',
                        '6.4. Мы принимаем разумные меры для обеспечения безопасной обработки данных и не передаем персональные данные организациям или странам без достаточных мер защиты.',
                    ],
                },
                {
                    title: '7. Права пользователя',
                    points: [
                        '7.1. Пользователь имеет право запросить доступ к персональным данным, их исправление или удаление в пределах, предусмотренных законом.',
                        '7.2. Если в сервисе доступны настройки аккаунта, пользователь может самостоятельно обновить, изменить или удалить часть информации.',
                        '7.3. Пользователь также может связаться с нами для запроса доступа, исправления или удаления предоставленных персональных данных.',
                        '7.4. В некоторых случаях мы можем сохранить отдельную информацию, если у нас есть юридическая обязанность или законное основание для такого хранения.',
                    ],
                },
                {
                    title: '8. Безопасность данных',
                    points: [
                        '8.1. Безопасность персональных данных важна для нас, но ни один способ передачи данных через интернет или электронного хранения не является полностью безопасным.',
                        '8.2. Мы используем коммерчески разумные меры защиты, однако не можем гарантировать абсолютную безопасность персональных данных.',
                    ],
                },
                {
                    title: '9. Дети',
                    points: [
                        '9.1. Сервис не предназначен для лиц младше 13 лет. Мы сознательно не собираем персональные данные детей младше 13 лет.',
                        '9.2. Если родитель или опекун считает, что ребенок предоставил нам персональные данные, необходимо связаться с нами. После выявления такой информации мы примем меры для ее удаления.',
                        '9.3. Если законодательство страны пользователя требует согласия родителя для обработки данных ребенка, мы можем запросить такое согласие до сбора и использования информации.',
                    ],
                },
                {
                    title: '10. Ссылки на другие сайты',
                    points: [
                        '10.1. Сервис может содержать ссылки на сайты, которые не управляются Zerodev. При переходе по сторонней ссылке пользователь попадает на сайт третьей стороны.',
                        '10.2. Мы рекомендуем ознакомиться с политикой конфиденциальности каждого посещаемого сайта. Zerodev не контролирует и не несет ответственности за содержание, политики или практики сторонних сайтов и сервисов.',
                    ],
                },
                {
                    title: '11. Изменения Политики',
                    points: [
                        '11.1. Мы можем периодически обновлять настоящую Политику конфиденциальности. Новая версия публикуется на этой странице.',
                        '11.2. Перед вступлением существенных изменений в силу мы можем уведомить пользователя по email, через заметное уведомление в сервисе или иным доступным способом.',
                        '11.3. Дата последнего обновления указывается в верхней части документа. Изменения вступают в силу после публикации на этой странице.',
                    ],
                },
                {
                    title: '12. Контакты',
                    points: [
                        '12.1. По вопросам настоящей Политики конфиденциальности пользователь может связаться с нами через форму обратной связи на сайте Bulutcha или через официальные каналы Zerodev.',
                    ],
                },
            ],
        },
        {
            id: 'public-subscription-offer',
            tabLabel: 'Публичная оферта на подписку',
            title: 'Публичная оферта на оказание услуг по платной подписке Bulutcha',
            edition: 'Редакция от 25 апреля 2026 года',
            sections: [
                {
                    title: '1. Предмет оферты',
                    points: [
                        '1.1. Zerodev предоставляет Пользователю доступ к платным тарифам облачного хранения Bulutcha, а Пользователь обязуется оплатить выбранный тариф.',
                        '1.2. Характеристики тарифа, включая объем хранилища, период действия и стоимость, определяются в интерфейсе Сервиса на момент оформления.',
                    ],
                },
                {
                    title: '2. Принятие и заключение договора',
                    points: [
                        '2.1. Пользователь принимает настоящую оферту после завершения оформления тарифа и успешной оплаты в Сервисе.',
                        '2.2. Договор считается заключенным с момента принятия оферты.',
                    ],
                },
                {
                    title: '3. Стоимость и порядок оплаты',
                    points: [
                        '3.1. Цена тарифа указывается в интерфейсе Сервиса в валюте UZS.',
                        '3.2. Оплата производится привязанной и подтвержденной банковской картой либо иным способом, доступным в Сервисе.',
                        '3.3. Услуга считается оплаченной с момента подтверждения успешной платежной операции.',
                    ],
                },
                {
                    title: '4. Порядок оказания услуги',
                    points: [
                        '4.1. После подтверждения оплаты Пользователю предоставляется доступ к выбранному тарифу на указанный срок.',
                        '4.2. Дата начала и дата окончания подписки отображаются в личном кабинете.',
                        '4.3. По окончании срока подписки Zerodev вправе ограничить загрузку новых файлов до продления или изменения тарифа.',
                    ],
                },
                {
                    title: '5. Ограничения и особенности',
                    points: [
                        '5.1. Переход на тариф с меньшим лимитом хранения может быть невозможен, если текущий объем данных превышает новый лимит; Пользователь должен удалить излишек данных.',
                        '5.2. При длительном отсутствии активного платного тарифа учетная запись и/или данные могут быть удалены после льготного периода, установленного правилами Сервиса.',
                    ],
                },
                {
                    title: '6. Возвраты и спорные операции',
                    points: [
                        '6.1. Условия возврата денежных средств определяются действующим законодательством и внутренними правилами Zerodev, опубликованными в Сервисе.',
                        '6.2. По вопросам ошибочных списаний и спорных платежей Пользователь обращается в поддержку с подтверждающими документами.',
                    ],
                },
                {
                    title: '7. Ответственность',
                    points: [
                        '7.1. Ответственность Zerodev ограничивается суммой, фактически оплаченной Пользователем за соответствующий период тарифа, если иное не установлено обязательными нормами закона.',
                        '7.2. Пользователь несет ответственность за достоверность платежных данных и законность использования платежного средства.',
                    ],
                },
            ],
        },
    ],
}

const enContent: OffertaContent = {
    pageTitle: 'Bulutcha Legal Documents',
    pageDescription:
        'Below are 2 documents: Privacy Policy and Public Offer for paid subscription services of Bulutcha.',
    topButton: 'Top',
    documents: [
        {
            id: 'privacy-policy',
            tabLabel: 'Privacy Policy',
            title: 'Privacy Policy',
            edition: 'Last updated: April 25, 2026',
            sections: [
                {
                    title: '1. Overview',
                    points: [
                        '1.1. This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of information when users use Bulutcha, and explains privacy rights and how the law protects users.',
                        '1.2. We use Personal Data to provide and improve the Service. By using the Service, users agree to the collection and use of information in accordance with this Privacy Policy.',
                        '1.3. Bulutcha is provided by Zerodev. In this Policy, “we”, “us”, and “our” refer to Zerodev.',
                    ],
                },
                {
                    title: '2. Interpretation and Definitions',
                    points: [
                        '2.1. Account means a unique account created for a user to access the Service or parts of the Service.',
                        '2.2. Application or Service refers to Bulutcha, the cloud file storage software and service provided by Zerodev.',
                        '2.3. Personal Data means any information that relates to an identified or identifiable individual.',
                        '2.4. Usage Data means data collected automatically, either generated by use of the Service or from the Service infrastructure itself.',
                        '2.5. Service Provider means any natural or legal person who processes data on behalf of Zerodev or helps operate, provide, analyze, or support the Service.',
                        '2.6. User means the individual accessing or using the Service, or the company or other legal entity on behalf of which such individual uses the Service.',
                    ],
                },
                {
                    title: '3. Data We Collect',
                    points: [
                        '3.1. While using the Service, we may ask users to provide information necessary for registration, identification, communication, and access to Bulutcha features.',
                        '3.2. Usage Data is collected automatically and may include IP address, browser type and version, pages or sections visited, visit time and date, time spent, device identifiers, and diagnostic data.',
                        '3.3. When users access the Service through a mobile device, we may automatically collect mobile device type, unique device ID, IP address, operating system, mobile browser type, and other diagnostic data.',
                        '3.4. We may also collect information that a browser or device sends whenever a user visits or accesses the Service.',
                    ],
                },
                {
                    title: '4. How We Use Data',
                    points: [
                        '4.1. To provide and maintain the Service, including monitoring usage and keeping the Service stable.',
                        '4.2. To manage user accounts and provide registered users with access to Service functionality.',
                        '4.3. To perform contractual obligations, including providing purchased products, plans, or services.',
                        '4.4. To contact users by email, phone, SMS, push notifications, or other electronic channels about Service functionality, updates, security, and support.',
                        '4.5. To provide news, special offers, and general information about similar goods, services, and events unless the user has opted out.',
                        '4.6. To manage user requests, analyze data, identify usage trends, evaluate communications, and improve the Service, products, and user experience.',
                    ],
                },
                {
                    title: '5. Sharing and Disclosure',
                    points: [
                        '5.1. We may share Personal Data with Service Providers that help us operate, monitor, analyze, improve, or support the Service.',
                        '5.2. We may share or transfer information in connection with a merger, sale of assets, financing, acquisition, restructuring, or transfer of all or part of Zerodev business.',
                        '5.3. We may share information with affiliates and business partners, provided they honor this Privacy Policy where applicable.',
                        '5.4. When users share information in public areas or grant access to other users, that information may be viewed by other users or distributed outside the Service.',
                        '5.5. We may disclose Personal Data with user consent or when required by law, a court, public authority, or when necessary to protect the rights, safety, and lawful interests of Zerodev, users, or the public.',
                    ],
                },
                {
                    title: '6. Retention and Transfer',
                    points: [
                        '6.1. Zerodev retains Personal Data only for as long as necessary for the purposes described in this Policy, to comply with legal obligations, resolve disputes, and enforce agreements.',
                        '6.2. Usage Data is generally retained for a shorter period, except when needed to strengthen security, improve Service functionality, or comply with legal obligations.',
                        '6.3. Information may be processed at Zerodev operating offices and in other places where parties involved in processing are located. This means data may be transferred to jurisdictions with different data protection laws.',
                        '6.4. We take reasonable steps to ensure data is treated securely and do not transfer Personal Data to an organization or country unless adequate controls are in place.',
                    ],
                },
                {
                    title: '7. User Rights',
                    points: [
                        '7.1. Users have the right to request access to, correction of, or deletion of Personal Data, subject to applicable law.',
                        '7.2. Where account settings are available, users may update, amend, or delete certain information directly within the Service.',
                        '7.3. Users may also contact us to request access to, correction of, or deletion of Personal Data they have provided.',
                        '7.4. We may need to retain certain information when we have a legal obligation or lawful basis to do so.',
                    ],
                },
                {
                    title: '8. Data Security',
                    points: [
                        '8.1. The security of Personal Data is important to us, but no method of transmission over the internet or electronic storage is completely secure.',
                        '8.2. We use commercially reasonable means to protect Personal Data, but we cannot guarantee absolute security.',
                    ],
                },
                {
                    title: '9. Children’s Privacy',
                    points: [
                        '9.1. The Service is not directed to anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under 13.',
                        '9.2. If a parent or guardian believes a child has provided us with Personal Data, they should contact us. If we become aware of such data, we will take steps to remove it.',
                        '9.3. If a user country requires parental consent for processing child information, we may require such consent before collecting and using that information.',
                    ],
                },
                {
                    title: '10. Links to Other Websites',
                    points: [
                        '10.1. The Service may contain links to websites not operated by Zerodev. If a user clicks a third-party link, they will be directed to that third-party site.',
                        '10.2. We advise users to review the Privacy Policy of every site they visit. Zerodev has no control over and assumes no responsibility for third-party content, policies, or practices.',
                    ],
                },
                {
                    title: '11. Changes to This Policy',
                    points: [
                        '11.1. We may update this Privacy Policy from time to time. We will post the new Privacy Policy on this page.',
                        '11.2. Before material changes become effective, we may notify users by email, a prominent notice in the Service, or another available channel.',
                        '11.3. The “Last updated” date appears at the top of this Policy. Changes are effective when posted on this page.',
                    ],
                },
                {
                    title: '12. Contact Us',
                    points: [
                        '12.1. For questions about this Privacy Policy, users can contact us through the contact form on the Bulutcha website or through official Zerodev channels.',
                    ],
                },
            ],
        },
        {
            id: 'public-subscription-offer',
            tabLabel: 'Public Subscription Offer',
            title: 'Public Offer for Paid Subscription Services of Bulutcha',
            edition: 'Version dated April 25, 2026',
            sections: [
                {
                    title: '1. Subject of Offer',
                    points: [
                        '1.1. Zerodev grants the User access to paid cloud storage plans in Bulutcha, and the User agrees to pay for the selected plan.',
                        '1.2. Plan parameters, including storage size, term, and price, are defined in the Service interface at checkout time.',
                    ],
                },
                {
                    title: '2. Acceptance and Contract',
                    points: [
                        '2.1. The User accepts this offer by completing plan checkout and successful payment in the Service.',
                        '2.2. The contract is deemed concluded from the moment the offer is accepted.',
                    ],
                },
                {
                    title: '3. Price and Payment',
                    points: [
                        '3.1. Plan price is specified in UZS in the Service interface.',
                        '3.2. Payment is made by linked and verified bank card or another payment method available in the Service.',
                        '3.3. The Service is considered paid from successful payment confirmation.',
                    ],
                },
                {
                    title: '4. Service Delivery',
                    points: [
                        '4.1. After successful payment, the User receives access to the selected plan for the specified term.',
                        '4.2. Subscription start and end dates are shown in the personal account.',
                        '4.3. After expiration, Zerodev may restrict new file uploads until the plan is renewed or changed.',
                    ],
                },
                {
                    title: '5. Limits and Specifics',
                    points: [
                        '5.1. Downgrading to a smaller storage plan may be unavailable if current usage exceeds the new limit; the User must delete excess data first.',
                        '5.2. If there is no active paid plan for a prolonged period, the account and/or data may be deleted after the grace period established by the Service rules.',
                    ],
                },
                {
                    title: '6. Refunds and Disputes',
                    points: [
                        '6.1. Refund rules are defined by applicable law and Zerodev internal rules published in the Service.',
                        '6.2. For mistaken charges or disputed payments, the User should contact support with supporting documents.',
                    ],
                },
                {
                    title: '7. Liability',
                    points: [
                        '7.1. Zerodev liability is limited to the amount actually paid by the User for the relevant plan period unless mandatory law states otherwise.',
                        '7.2. The User is responsible for accurate payment details and lawful use of payment instruments.',
                    ],
                },
            ],
        },
    ],
}

const uzContent: OffertaContent = {
    pageTitle: 'Bulutcha hujjatlari',
    pageDescription:
        'Quyida 2 ta hujjat keltirilgan: Maxfiylik siyosati va Bulutcha pullik obuna xizmatlari uchun ommaviy oferta.',
    topButton: 'Yuqoriga',
    documents: [
        {
            id: 'privacy-policy',
            tabLabel: 'Maxfiylik siyosati',
            title: 'Maxfiylik siyosati',
            edition: 'Oxirgi yangilanish: 2026 yil 25 aprel',
            sections: [
                {
                    title: '1. Umumiy maʼlumot',
                    points: [
                        '1.1. Ushbu Maxfiylik siyosati foydalanuvchi Bulutcha xizmatidan foydalanganda maʼlumotlarni yigʻish, ishlatish va oshkor qilish tartibini, shuningdek foydalanuvchining maxfiylik huquqlarini tushuntiradi.',
                        '1.2. Biz shaxsiy maʼlumotlardan xizmatni taqdim etish va yaxshilash uchun foydalanamiz. Xizmatdan foydalanish orqali foydalanuvchi maʼlumotlar ushbu Siyosatga muvofiq yigʻilishi va ishlatilishiga rozilik bildiradi.',
                        '1.3. Bulutcha xizmati Zerodev tomonidan taqdim etiladi. Ushbu Siyosatda “biz”, “bizga” va “bizning” soʻzlari Zerodevni anglatadi.',
                    ],
                },
                {
                    title: '2. Talqin va taʼriflar',
                    points: [
                        '2.1. Akkaunt — foydalanuvchining xizmatga yoki uning ayrim qismlariga kirishi uchun yaratilgan noyob hisob.',
                        '2.2. Ilova yoki Xizmat — Zerodev tomonidan taqdim etiladigan Bulutcha bulutli fayl saqlash dasturi va xizmati.',
                        '2.3. Shaxsiy maʼlumotlar — aniqlangan yoki aniqlanishi mumkin boʻlgan jismoniy shaxsga tegishli har qanday maʼlumot.',
                        '2.4. Foydalanish maʼlumotlari — xizmatdan foydalanish jarayonida yoki xizmat infratuzilmasi orqali avtomatik yigʻiladigan maʼlumotlar.',
                        '2.5. Xizmat ko‘rsatuvchi — Zerodev nomidan maʼlumotlarni qayta ishlaydigan yoki xizmatni yuritish, taqdim etish, tahlil qilish yoxud qoʻllab-quvvatlashga yordam beradigan jismoniy yoki yuridik shaxs.',
                        '2.6. Foydalanuvchi — xizmatdan foydalanayotgan jismoniy shaxs yoki ushbu shaxs nomidan xizmatdan foydalanayotgan kompaniya yoxud boshqa yuridik shaxs.',
                    ],
                },
                {
                    title: '3. Biz yigʻadigan maʼlumotlar',
                    points: [
                        '3.1. Xizmatdan foydalanish paytida biz roʻyxatdan oʻtish, identifikatsiya, aloqa va Bulutcha funksiyalaridan foydalanish uchun zarur maʼlumotlarni soʻrashimiz mumkin.',
                        '3.2. Foydalanish maʼlumotlari avtomatik yigʻiladi va IP-manzil, brauzer turi va versiyasi, tashrif buyurilgan sahifa yoki boʻlimlar, tashrif sanasi va vaqti, foydalanish davomiyligi, qurilma identifikatorlari va diagnostik maʼlumotlarni oʻz ichiga olishi mumkin.',
                        '3.3. Mobil qurilma orqali kirilganda biz qurilma turi, noyob qurilma ID raqami, IP-manzil, operatsion tizim, mobil brauzer turi va boshqa diagnostik maʼlumotlarni avtomatik yigʻishimiz mumkin.',
                        '3.4. Shuningdek, foydalanuvchi xizmatga kirganda brauzer yoki qurilma yuboradigan maʼlumotlarni ham olishimiz mumkin.',
                    ],
                },
                {
                    title: '4. Maʼlumotlardan foydalanish',
                    points: [
                        '4.1. Xizmatni taqdim etish va qoʻllab-quvvatlash, jumladan foydalanishni monitoring qilish va barqaror ishlashni taʼminlash uchun.',
                        '4.2. Foydalanuvchi akkauntini boshqarish va roʻyxatdan oʻtgan foydalanuvchilarga xizmat funksiyalariga kirish imkonini berish uchun.',
                        '4.3. Shartnomaviy majburiyatlarni bajarish, jumladan xarid qilingan mahsulot, tarif yoki xizmatlarni taqdim etish uchun.',
                        '4.4. Xizmat funksiyalari, yangilanishlar, xavfsizlik va qoʻllab-quvvatlash masalalari boʻyicha email, telefon, SMS, push-xabarnoma yoki boshqa elektron kanallar orqali bogʻlanish uchun.',
                        '4.5. Foydalanuvchi rad etmagan boʻlsa, oʻxshash mahsulotlar, xizmatlar, maxsus takliflar va tadbirlar haqida maʼlumot yuborish uchun.',
                        '4.6. Foydalanuvchi soʻrovlarini boshqarish, tahlil qilish, foydalanish tendensiyalarini aniqlash, kommunikatsiyalar samaradorligini baholash va xizmat hamda foydalanuvchi tajribasini yaxshilash uchun.',
                    ],
                },
                {
                    title: '5. Maʼlumotlarni ulashish va oshkor qilish',
                    points: [
                        '5.1. Biz shaxsiy maʼlumotlarni xizmatni yuritish, monitoring qilish, tahlil qilish, yaxshilash yoki qoʻllab-quvvatlashga yordam beradigan xizmat ko‘rsatuvchilar bilan ulashishimiz mumkin.',
                        '5.2. Zerodev biznesining toʻliq yoki bir qismi birlashish, aktivlarni sotish, moliyalashtirish, sotib olish, qayta tashkil etish yoki boshqa tarzda oʻtkazish jarayonida maʼlumotlar uzatilishi mumkin.',
                        '5.3. Biz maʼlumotlarni affillangan shaxslar va biznes hamkorlar bilan ulashishimiz mumkin, bunda ular tegishli hollarda ushbu Siyosatga rioya qilishi kerak.',
                        '5.4. Foydalanuvchi ommaviy bo‘limlarda maʼlumot ulashsa yoki boshqa foydalanuvchilarga kirish huquqi bersa, bunday maʼlumotlar boshqa foydalanuvchilar tomonidan koʻrilishi yoki xizmatdan tashqarida tarqalishi mumkin.',
                        '5.5. Biz foydalanuvchi roziligi bilan yoki qonun, sud, davlat organi talabi bo‘yicha, shuningdek Zerodev, foydalanuvchilar yoki jamoatchilik huquqlari, xavfsizligi va qonuniy manfaatlarini himoya qilish zarur bo‘lganda maʼlumotlarni oshkor qilishimiz mumkin.',
                    ],
                },
                {
                    title: '6. Saqlash va uzatish',
                    points: [
                        '6.1. Zerodev shaxsiy maʼlumotlarni ushbu Siyosatda ko‘rsatilgan maqsadlar, qonuniy majburiyatlar, nizolarni hal qilish va kelishuvlarni ijro etish uchun zarur muddat davomida saqlaydi.',
                        '6.2. Foydalanish maʼlumotlari odatda qisqaroq muddat saqlanadi, lekin xavfsizlikni kuchaytirish, xizmat funksiyalarini yaxshilash yoki qonun talablarini bajarish uchun uzoqroq saqlanishi mumkin.',
                        '6.3. Maʼlumotlar Zerodev operatsion ofislarida va qayta ishlashda ishtirok etuvchi tomonlar joylashgan boshqa manzillarda qayta ishlanishi mumkin. Bu maʼlumotlar himoyasi qoidalari farq qiladigan yurisdiksiyalarga uzatilishi mumkinligini anglatadi.',
                        '6.4. Biz maʼlumotlar xavfsiz qayta ishlanishi uchun oqilona choralar ko‘ramiz va yetarli nazorat choralarisiz shaxsiy maʼlumotlarni tashkilot yoki mamlakatga uzatmaymiz.',
                    ],
                },
                {
                    title: '7. Foydalanuvchi huquqlari',
                    points: [
                        '7.1. Foydalanuvchi amaldagi qonunchilik doirasida shaxsiy maʼlumotlarga kirish, ularni tuzatish yoki oʻchirishni soʻrash huquqiga ega.',
                        '7.2. Akkaunt sozlamalari mavjud bo‘lsa, foydalanuvchi ayrim maʼlumotlarni xizmat ichida mustaqil yangilashi, oʻzgartirishi yoki oʻchirishi mumkin.',
                        '7.3. Foydalanuvchi taqdim etgan shaxsiy maʼlumotlarga kirish, ularni tuzatish yoki oʻchirish soʻrovi bilan bizga murojaat qilishi ham mumkin.',
                        '7.4. Ayrim hollarda bizda qonuniy majburiyat yoki qonuniy asos mavjud bo‘lsa, baʼzi maʼlumotlarni saqlab qolishimiz mumkin.',
                    ],
                },
                {
                    title: '8. Maʼlumotlar xavfsizligi',
                    points: [
                        '8.1. Shaxsiy maʼlumotlar xavfsizligi biz uchun muhim, ammo internet orqali uzatish yoki elektron saqlashning hech bir usuli toʻliq xavfsiz emas.',
                        '8.2. Biz shaxsiy maʼlumotlarni himoya qilish uchun tijorat nuqtai nazaridan oqilona choralarni qoʻllaymiz, lekin mutlaq xavfsizlikni kafolatlay olmaymiz.',
                    ],
                },
                {
                    title: '9. Bolalar maxfiyligi',
                    points: [
                        '9.1. Xizmat 13 yoshdan kichik shaxslarga mo‘ljallanmagan. Biz 13 yoshdan kichik shaxslardan ongli ravishda shaxsni aniqlovchi maʼlumotlarni yigʻmaymiz.',
                        '9.2. Agar ota-ona yoki vasiy bola bizga shaxsiy maʼlumot taqdim etgan deb hisoblasa, biz bilan bogʻlanishi kerak. Bunday maʼlumot aniqlansa, uni oʻchirish choralarini koʻramiz.',
                        '9.3. Agar foydalanuvchi mamlakati bola maʼlumotlarini qayta ishlash uchun ota-ona roziligini talab qilsa, maʼlumotlarni yigʻish va ishlatishdan oldin bunday rozilikni soʻrashimiz mumkin.',
                    ],
                },
                {
                    title: '10. Boshqa saytlarga havolalar',
                    points: [
                        '10.1. Xizmatda Zerodev tomonidan boshqarilmaydigan veb-saytlarga havolalar bo‘lishi mumkin. Uchinchi tomon havolasiga bosilganda foydalanuvchi o‘sha uchinchi tomon saytiga o‘tadi.',
                        '10.2. Har bir tashrif buyurilgan saytning Maxfiylik siyosati bilan tanishishni tavsiya qilamiz. Zerodev uchinchi tomon kontenti, siyosati yoki amaliyotini nazorat qilmaydi va ular uchun javobgar emas.',
                    ],
                },
                {
                    title: '11. Siyosatdagi o‘zgarishlar',
                    points: [
                        '11.1. Biz ushbu Maxfiylik siyosatini vaqti-vaqti bilan yangilashimiz mumkin. Yangi versiya ushbu sahifada eʼlon qilinadi.',
                        '11.2. Muhim o‘zgarishlar kuchga kirishidan oldin foydalanuvchini email, xizmatdagi ko‘zga ko‘rinarli bildirishnoma yoki boshqa mavjud kanal orqali xabardor qilishimiz mumkin.',
                        '11.3. Oxirgi yangilanish sanasi hujjat yuqorisida ko‘rsatiladi. O‘zgarishlar ushbu sahifada eʼlon qilingan paytdan kuchga kiradi.',
                    ],
                },
                {
                    title: '12. Bog‘lanish',
                    points: [
                        '12.1. Ushbu Maxfiylik siyosati bo‘yicha savollar yuzasidan foydalanuvchi Bulutcha saytidagi aloqa formasi yoki Zerodev rasmiy kanallari orqali biz bilan bog‘lanishi mumkin.',
                    ],
                },
            ],
        },
        {
            id: 'public-subscription-offer',
            tabLabel: 'Pullik obuna ofertasi',
            title: 'Bulutcha pullik obuna xizmatlari uchun ommaviy oferta',
            edition: '2026 yil 25 aprel tahriri',
            sections: [
                {
                    title: '1. Ofertaning predmeti',
                    points: [
                        '1.1. Zerodev foydalanuvchiga Bulutcha pullik bulutli saqlash tariflariga kirish imkonini beradi, foydalanuvchi esa tanlangan tarifni to‘lash majburiyatini oladi.',
                        '1.2. Tarif parametrlari, jumladan xotira hajmi, amal qilish muddati va narx, rasmiylashtirish vaqtida Xizmat interfeysida ko‘rsatiladi.',
                    ],
                },
                {
                    title: '2. Ofertani qabul qilish va shartnoma tuzilishi',
                    points: [
                        '2.1. Foydalanuvchi tarifni rasmiylashtirib, Xizmatda muvaffaqiyatli to‘lovni amalga oshirgan paytda ushbu oferta qabul qilingan hisoblanadi.',
                        '2.2. Oferta qabul qilingan paytdan boshlab shartnoma tuzilgan deb hisoblanadi.',
                    ],
                },
                {
                    title: '3. Narx va to‘lov tartibi',
                    points: [
                        '3.1. Tarif narxi Xizmat interfeysida UZS valyutasida ko‘rsatiladi.',
                        '3.2. To‘lov Xizmatda biriktirilgan va tasdiqlangan bank kartasi yoki mavjud boshqa to‘lov usuli orqali amalga oshiriladi.',
                        '3.3. Muvaffaqiyatli to‘lov tasdiqlangandan so‘ng xizmat to‘langan hisoblanadi.',
                    ],
                },
                {
                    title: '4. Xizmat ko‘rsatish tartibi',
                    points: [
                        '4.1. To‘lov tasdiqlangach, foydalanuvchiga tanlangan tarif belgilangan muddatga ochiladi.',
                        '4.2. Obuna boshlanish va tugash sanalari shaxsiy kabinetda aks etadi.',
                        '4.3. Obuna muddati tugagach, Zerodev tarif yangilanmaguncha yoki o‘zgartirilmaguncha yangi fayl yuklashni cheklashi mumkin.',
                    ],
                },
                {
                    title: '5. Cheklovlar va xususiyatlar',
                    points: [
                        '5.1. Joriy maʼlumot hajmi yangi limitdan yuqori bo‘lsa, kichikroq tarifga o‘tish mumkin bo‘lmasligi mumkin; foydalanuvchi ortiqcha maʼlumotni o‘chirishi kerak.',
                        '5.2. Faol pullik tarif uzoq vaqt bo‘lmasa, Xizmat qoidalarida belgilangan imtiyozli muddatdan so‘ng akkaunt va/yoki maʼlumotlar o‘chirilishi mumkin.',
                    ],
                },
                {
                    title: '6. Qaytarish va nizoli operatsiyalar',
                    points: [
                        '6.1. Mablag‘ni qaytarish shartlari amaldagi qonunchilik va Xizmatda eʼlon qilingan Zerodev ichki qoidalari bilan belgilanadi.',
                        '6.2. Noto‘g‘ri yechib olish yoki nizoli to‘lovlar bo‘yicha foydalanuvchi tasdiqlovchi hujjatlar bilan qo‘llab-quvvatlash xizmatiga murojaat qiladi.',
                    ],
                },
                {
                    title: '7. Javobgarlik',
                    points: [
                        '7.1. Zerodev javobgarligi, qonun bilan boshqacha belgilanmagan bo‘lsa, tegishli tarif davri uchun foydalanuvchi amalda to‘lagan summa doirasida cheklanadi.',
                        '7.2. Foydalanuvchi to‘lov maʼlumotlarining to‘g‘riligi va to‘lov vositasidan qonuniy foydalanish uchun javobgar.',
                    ],
                },
            ],
        },
    ],
}

export const offertaContentByLocale: Record<Locale, OffertaContent> = {
    ru: ruContent,
    en: enContent,
    uz: uzContent,
}

export function getOffertaContent(locale: string): OffertaContent {
    if (locale in offertaContentByLocale)
        return offertaContentByLocale[locale as Locale]
    return offertaContentByLocale[defaultLocale]
}
