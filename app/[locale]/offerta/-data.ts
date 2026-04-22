import {defaultLocale, type Locale} from '@/i18n.config'

type OffertaSection = {
    title: string
    points: string[]
}

type OffertaDocument = {
    id: 'user-agreement' | 'public-subscription-offer'
    tabLabel: string
    title: string
    edition: string
    sections: OffertaSection[]
}

export type OffertaContent = {
    pageTitle: string
    pageDescription: string
    topButton: string
    documents: [OffertaDocument, OffertaDocument]
}

const ruContent: OffertaContent = {
    pageTitle: 'Оферта Bulutcha',
    pageDescription:
        'Ниже размещены 2 документа: Пользовательское соглашение (оферта) и публичная оферта на оказание услуг по платной подписке.',
    topButton: 'Наверх',
    documents: [
        {
            id: 'user-agreement',
            tabLabel: 'Пользовательское соглашение',
            title: '1) Пользовательское соглашение (Оферта) сервиса Bulutcha',
            edition: 'Редакция от 22 апреля 2026 года',
            sections: [
                {
                    title: '1. Общие положения',
                    points: [
                        '1.1. Настоящее Пользовательское соглашение (Оферта) (далее — «Соглашение») регулирует порядок использования сервиса облачного хранения Bulutcha (далее — «Сервис»).',
                        '1.2. Сервис предоставляет Пользователю доступ к личному кабинету, загрузке и хранению файлов, управлению папками, просмотру/скачиванию контента, а также функциям совместного доступа.',
                        '1.3. Использование Сервиса означает полное и безоговорочное принятие условий настоящего Соглашения (акцепт оферты).',
                        '1.4. Если Пользователь не согласен с условиями Соглашения, он обязан прекратить использование Сервиса.',
                    ],
                },
                {
                    title: '2. Регистрация и учетная запись',
                    points: [
                        '2.1. Для использования Сервиса Пользователь проходит регистрацию с указанием ФИО, номера телефона и пароля.',
                        '2.2. Подтверждение регистрации и отдельных операций может осуществляться посредством одноразового кода (OTP), направляемого на номер телефона Пользователя.',
                        '2.3. Пользователь обязан обеспечивать конфиденциальность своих учетных данных и несет ответственность за все действия, совершенные под его учетной записью.',
                        '2.4. Оператор вправе ограничить или прекратить доступ к учетной записи при нарушении условий Соглашения или требований законодательства.',
                    ],
                },
                {
                    title: '3. Функциональность Сервиса',
                    points: [
                        '3.1. Пользователь может загружать и хранить файлы в облачном хранилище, создавать/переименовывать/удалять папки и файлы, просматривать и скачивать доступный контент, формировать избранное и закрепленные папки, предоставлять доступ к контенту другим пользователям.',
                        '3.2. Сервис может поддерживать ограничения по объему хранения, типам и иным характеристикам контента в зависимости от тарифа и технических параметров.',
                    ],
                },
                {
                    title: '4. Совместный доступ (Sharing)',
                    points: [
                        '4.1. Пользователь может предоставлять доступ к контенту по номеру телефона получателя и через сгенерированную ссылку доступа.',
                        '4.2. Для ссылок может применяться механизм запроса доступа с модерацией владельцем контента (статусы: одобрено/ожидание/отклонено).',
                        '4.3. Пользователь, предоставляющий доступ, несет ответственность за правомерность передачи контента третьим лицам.',
                    ],
                },
                {
                    title: '5. Тарифы и хранение',
                    points: [
                        '5.1. В Сервисе могут применяться бесплатные и платные тарифные планы (в том числе ежемесячные и ежегодные).',
                        '5.2. Объем доступного хранилища определяется активным тарифом.',
                        '5.3. При переходе на тариф с меньшим лимитом хранилища переход может быть ограничен до удаления части контента, превышающей допустимый лимит.',
                        '5.4. По окончании платного периода функциональность загрузки может быть ограничена до продления/изменения тарифа.',
                        '5.5. Если после окончания срока тарифа Пользователь не урегулирует статус подписки, учетная запись и/или данные могут быть удалены по истечении льготного периода, установленного правилами Сервиса (по текущей логике продукта — до 30 дней).',
                    ],
                },
                {
                    title: '6. Платежи',
                    points: [
                        '6.1. Оплата платных тарифов производится способами, доступными в интерфейсе Сервиса, включая банковские карты.',
                        '6.2. Для оплаты может требоваться привязка и верификация карты (в том числе через SMS-код банка).',
                        '6.3. Стоимость тарифов указывается в интерфейсе Сервиса и может быть изменена Оператором в одностороннем порядке для будущих периодов.',
                        '6.4. Факт оплаты подтверждает согласие Пользователя с параметрами выбранного тарифа.',
                    ],
                },
                {
                    title: '7. Запрещенные действия',
                    points: [
                        '7.1. Пользователю запрещается размещать и передавать через Сервис контент, нарушающий законодательство, права третьих лиц, нормы общественной морали и безопасности.',
                        '7.2. Запрещены действия, направленные на нарушение работы Сервиса, несанкционированный доступ к данным и обход технических ограничений.',
                    ],
                },
                {
                    title: '8. Ответственность сторон',
                    points: [
                        '8.1. Сервис предоставляется по принципу «как есть» в пределах, допустимых законодательством.',
                        '8.2. Оператор не несет ответственности за убытки, вызванные действиями Пользователя, третьих лиц, сбоями связи, оборудования или ПО вне контроля Оператора.',
                        '8.3. Пользователь самостоятельно отвечает за резервное копирование критически важных данных.',
                    ],
                },
                {
                    title: '9. Персональные данные',
                    points: [
                        '9.1. Обработка персональных данных осуществляется в целях предоставления доступа к Сервису, идентификации Пользователя, обеспечения безопасности и исполнения обязательств по Соглашению.',
                        '9.2. Пользователь подтверждает согласие на обработку персональных данных в объеме, необходимом для работы Сервиса.',
                    ],
                }
            ],
        },
        {
            id: 'public-subscription-offer',
            tabLabel: 'Публичная оферта на подписку',
            title: '2) Публичная оферта на оказание услуг по платной подписке Bulutcha',
            edition: 'Редакция от 22 апреля 2026 года',
            sections: [
                {
                    title: '1. Предмет оферты',
                    points: [
                        '1.1. Оператор предоставляет Пользователю доступ к платным тарифам облачного хранения Bulutcha, а Пользователь обязуется оплатить выбранный тариф.',
                        '1.2. Характеристики тарифа (объем хранилища, период действия, стоимость) определяются в интерфейсе Сервиса на момент оформления.',
                    ],
                },
                {
                    title: '2. Принятие и заключение договора',
                    points: [
                        '2.1. Подтверждение принятия происходит после того, как Пользователь завершит оформление заказа и оплату в Сервисе.',
                        '2.2. Договор считается заключенным с момента его принятия.',
                    ],
                },
                {
                    title: '3. Стоимость и порядок оплаты',
                    points: [
                        '3.1. Цена тарифа указывается в интерфейсе Сервиса в валюте UZS.',
                        '3.2. Оплата производится банковской картой, привязанной и подтвержденной в Сервисе, либо иным доступным способом.',
                        '3.3. Услуга считается оплаченной с момента подтверждения успешной платежной операции.',
                    ],
                },
                {
                    title: '4. Порядок оказания услуги',
                    points: [
                        '4.1. После подтверждения оплаты Пользователю предоставляется доступ к выбранному тарифу на указанный срок.',
                        '4.2. Срок действия подписки, дата начала и дата окончания отражаются в личном кабинете.',
                        '4.3. По окончании срока подписки Оператор вправе ограничить загрузку новых файлов до продления тарифа.',
                    ],
                },
                {
                    title: '5. Ограничения и особенности',
                    points: [
                        '5.1. Переход на тариф с меньшим лимитом хранения может быть невозможен при превышении текущего объема данных; Пользователь обязан удалить излишек данных до допустимого лимита.',
                        '5.2. При длительном отсутствии активного тарифа данные и/или учетная запись могут быть удалены после завершения льготного периода, установленного Оператором.',
                    ],
                },
                {
                    title: '6. Возвраты и спорные операции',
                    points: [
                        '6.1. Условия возврата денежных средств определяются действующим законодательством и внутренними правилами Оператора, опубликованными в Сервисе.',
                        '6.2. По вопросам ошибочных списаний и спорных платежей Пользователь обращается в поддержку Оператора с подтверждающими документами.',
                    ],
                },
                {
                    title: '7. Ответственность',
                    points: [
                        '7.1. Оператор несет ответственность только в пределах фактически оплаченной Пользователем стоимости тарифа за соответствующий период, если иное не установлено императивными нормами закона.',
                        '7.2. Пользователь несет ответственность за достоверность платежных данных и законность использования платежного средства.',
                    ],
                }
            ],
        },
    ],
}

const enContent: OffertaContent = {
    pageTitle: 'Bulutcha Offer Terms',
    pageDescription:
        'Below are 2 documents: User Agreement (offer terms) and Public Offer for paid subscription services.',
    topButton: 'Top',
    documents: [
        {
            id: 'user-agreement',
            tabLabel: 'User Agreement',
            title: '1) User Agreement (Offer) of Bulutcha Service',
            edition: 'Version dated April 22, 2026',
            sections: [
                {
                    title: '1. General Provisions',
                    points: [
                        '1.1. This User Agreement (Offer) governs how users access and use the Bulutcha cloud storage service.',
                        '1.2. The Service provides access to an account dashboard, file upload and storage, folder management, content viewing/downloading, and sharing features.',
                        '1.3. Using the Service means full and unconditional acceptance of this Agreement.',
                        '1.4. If the User disagrees with the terms, they must stop using the Service.',
                    ],
                },
                {
                    title: '2. Registration and Account',
                    points: [
                        '2.1. To use the Service, the User registers with full name, phone number, and password.',
                        '2.2. Registration and certain operations may require confirmation by one-time password (OTP) sent to the User phone number.',
                        '2.3. The User must keep credentials confidential and is responsible for all actions under their account.',
                        '2.4. The Operator may limit or terminate account access for violations of this Agreement or applicable law.',
                    ],
                },
                {
                    title: '3. Service Functionality',
                    points: [
                        '3.1. The User can upload/store files, create/rename/delete folders and files, view/download available content, mark favorites/pinned folders, and share content with other users.',
                        '3.2. Storage volume and technical limitations may apply based on the active plan and service parameters.',
                    ],
                },
                {
                    title: '4. Sharing',
                    points: [
                        '4.1. The User can grant access by recipient phone number or by generated access link.',
                        '4.2. Links may support access-request workflow moderated by content owner (approved/pending/rejected).',
                        '4.3. The sharing User is responsible for legal transfer of content to third parties.',
                    ],
                },
                {
                    title: '5. Plans and Storage',
                    points: [
                        '5.1. The Service may provide free and paid plans (including monthly and yearly).',
                        '5.2. Available storage volume depends on the active plan.',
                        '5.3. Downgrade to a lower storage plan can be restricted until exceeding data is removed.',
                        '5.4. After paid period ends, upload functionality may be limited until renewal or plan change.',
                        '5.5. If subscription status is not resolved after plan expiration, account and/or data may be deleted after the grace period (current product logic: up to 30 days).',
                    ],
                },
                {
                    title: '6. Payments',
                    points: [
                        '6.1. Paid plans are purchased by methods available in the Service, including bank cards.',
                        '6.2. Card binding and verification may be required (including bank SMS code).',
                        '6.3. Plan pricing is shown in the Service and may be changed by the Operator for future periods.',
                        '6.4. Successful payment confirms User acceptance of selected plan parameters.',
                    ],
                },
                {
                    title: '7. Prohibited Actions',
                    points: [
                        '7.1. Users must not upload or transmit content violating law, third-party rights, or public safety and morality standards.',
                        '7.2. Actions aimed at disrupting the Service, unauthorized data access, or bypassing technical limits are prohibited.',
                    ],
                },
                {
                    title: '8. Liability',
                    points: [
                        '8.1. The Service is provided “as is” to the extent allowed by law.',
                        '8.2. The Operator is not liable for losses caused by User actions, third parties, communication failures, hardware or software outside Operator control.',
                        '8.3. Users are responsible for backing up their critical data.',
                    ],
                },
                {
                    title: '9. Personal Data',
                    points: [
                        '9.1. Personal data is processed to provide access, identify users, ensure security, and perform obligations under this Agreement.',
                        '9.2. The User confirms consent to personal data processing necessary for Service operation.',
                    ],
                }
            ],
        },
        {
            id: 'public-subscription-offer',
            tabLabel: 'Public Subscription Offer',
            title: '2) Public Offer for Paid Subscription Services of Bulutcha',
            edition: 'Version dated April 22, 2026',
            sections: [
                {
                    title: '1. Subject of Offer',
                    points: [
                        '1.1. The Operator grants access to paid cloud storage plans, and the User agrees to pay for the selected plan.',
                        '1.2. Plan parameters (storage size, period, price) are defined in the Service interface at checkout time.',
                    ],
                },
                {
                    title: '2. Acceptance and Contract',
                    points: [
                        '2.1. Acceptance occurs when User completes plan checkout and payment in the Service.',
                        '2.2. The contract is deemed concluded from the moment of acceptance.',
                    ],
                },
                {
                    title: '3. Price and Payment',
                    points: [
                        '3.1. Plan price is specified in UZS in the Service interface.',
                        '3.2. Payment is made by linked and verified bank card or another available method.',
                        '3.3. Service is considered paid from successful payment confirmation.',
                    ],
                },
                {
                    title: '4. Service Delivery',
                    points: [
                        '4.1. After successful payment, User receives access to selected plan for the specified term.',
                        '4.2. Subscription start and end dates are shown in the personal account.',
                        '4.3. After expiration, Operator may restrict uploads until renewal.',
                    ],
                },
                {
                    title: '5. Limits and Specifics',
                    points: [
                        '5.1. Downgrading to a smaller storage plan may be unavailable if current usage exceeds limit; User must delete excess data first.',
                        '5.2. In case of prolonged inactivity of paid plan, account and/or data may be deleted after the grace period.',
                    ],
                },
                {
                    title: '6. Refunds and Disputes',
                    points: [
                        '6.1. Refund rules are defined by applicable law and Operator internal rules published in the Service.',
                        '6.2. For mistaken charges or disputed payments, User should contact support with evidence documents.',
                    ],
                },
                {
                    title: '7. Liability',
                    points: [
                        '7.1. Operator liability is limited to the amount actually paid by User for the relevant plan period unless mandatory law states otherwise.',
                        '7.2. User is responsible for accurate payment details and lawful use of payment instruments.',
                    ],
                }
            ],
        },
    ],
}

const uzContent: OffertaContent = {
    pageTitle: 'Bulutcha Ommaviy Oferta',
    pageDescription:
        'Quyida 2 ta hujjat keltirilgan: Foydalanuvchi kelishuvi (oferta) va pullik obuna xizmatlari uchun ommaviy oferta.',
    topButton: 'Yuqoriga',
    documents: [
        {
            id: 'user-agreement',
            tabLabel: 'Foydalanuvchi kelishuvi',
            title: '1) Bulutcha xizmati Foydalanuvchi kelishuvi (Oferta)',
            edition: '2026 yil 22 aprel tahriri',
            sections: [
                {
                    title: '1. Umumiy qoidalar',
                    points: [
                        '1.1. Ushbu Foydalanuvchi kelishuvi (Oferta) Bulutcha bulutli saqlash xizmatidan foydalanish tartibini belgilaydi.',
                        '1.2. Xizmat foydalanuvchiga shaxsiy kabinet, fayl yuklash va saqlash, papkalarni boshqarish, kontentni ko‘rish/yuklab olish hamda ulashish funksiyalarini beradi.',
                        '1.3. Xizmatdan foydalanish ushbu kelishuv shartlarini to‘liq va so‘zsiz qabul qilishni anglatadi.',
                        '1.4. Agar foydalanuvchi shartlarga rozi bo‘lmasa, xizmatdan foydalanishni to‘xtatishi shart.',
                    ],
                },
                {
                    title: '2. Ro‘yxatdan o‘tish va akkaunt',
                    points: [
                        '2.1. Xizmatdan foydalanish uchun foydalanuvchi F.I.Sh., telefon raqami va parol bilan ro‘yxatdan o‘tadi.',
                        '2.2. Ro‘yxatdan o‘tish va ayrim amallar telefon raqamiga yuboriladigan bir martalik kod (OTP) orqali tasdiqlanishi mumkin.',
                        '2.3. Foydalanuvchi akkaunt maʼlumotlarini maxfiy saqlashi va akkaunt ostida bajarilgan harakatlar uchun javobgar bo‘ladi.',
                        '2.4. Operator kelishuv yoki qonun talablari buzilganda akkauntga kirishni cheklashi yoki to‘xtatishi mumkin.',
                    ],
                },
                {
                    title: '3. Xizmat funksionalligi',
                    points: [
                        '3.1. Foydalanuvchi fayllarni yuklashi/saqlashi, papka va fayllarni yaratishi/qayta nomlashi/o‘chirishi, kontentni ko‘rishi/yuklab olishi, sevimlilar va mahkamlangan papkalarni shakllantirishi, shuningdek kontentni ulashishi mumkin.',
                        '3.2. Tarif va texnik parametrga qarab xotira hajmi hamda boshqa cheklovlar qo‘llanishi mumkin.',
                    ],
                },
                {
                    title: '4. Birgalikda foydalanish (Sharing)',
                    points: [
                        '4.1. Foydalanuvchi kontentga kirishni oluvchi telefon raqami yoki yaratilgan havola orqali berishi mumkin.',
                        '4.2. Havolalar uchun egasi moderatsiyasi bilan so‘rov mexanizmi bo‘lishi mumkin (tasdiqlandi/kutilmoqda/rad etildi).',
                        '4.3. Kontentni ulashayotgan foydalanuvchi uni uchinchi shaxslarga qonuniy uzatish uchun javobgar hisoblanadi.',
                    ],
                },
                {
                    title: '5. Tariflar va saqlash',
                    points: [
                        '5.1. Xizmatda bepul va pullik tariflar (oylik va yillik) qo‘llanilishi mumkin.',
                        '5.2. Mavjud xotira hajmi faol tarifga bog‘liq.',
                        '5.3. Kichikroq limitli tarifga o‘tish limitdan oshgan maʼlumotlar o‘chirilmaguncha cheklanishi mumkin.',
                        '5.4. Pullik muddat tugagach, tarif yangilanmaguncha yuklash funksiyasi cheklanishi mumkin.',
                        '5.5. Tarif tugagandan keyin obuna holati tiklanmasa, imtiyozli muddatdan so‘ng akkaunt va/yoki maʼlumotlar o‘chirilishi mumkin (joriy mantiq: 30 kungacha).',
                    ],
                },
                {
                    title: '6. To‘lovlar',
                    points: [
                        '6.1. Pullik tariflar uchun to‘lovlar xizmat interfeysida mavjud usullar, jumladan bank kartalari orqali amalga oshiriladi.',
                        '6.2. To‘lov uchun karta biriktirish va tasdiqlash talab qilinishi mumkin (jumladan bank SMS kodi orqali).',
                        '6.3. Tarif narxlari interfeysda ko‘rsatiladi va operator tomonidan kelgusi davrlar uchun o‘zgartirilishi mumkin.',
                        '6.4. To‘lov fakti foydalanuvchi tanlangan tarif shartlarini qabul qilganini bildiradi.',
                    ],
                },
                {
                    title: '7. Taqiqlangan harakatlar',
                    points: [
                        '7.1. Qonun, uchinchi shaxs huquqlari, ijtimoiy axloq va xavfsizlikka zid kontentni joylash va uzatish taqiqlanadi.',
                        '7.2. Xizmat ishini buzish, ruxsatsiz kirish va texnik cheklovlarni aylanib o‘tishga qaratilgan harakatlar taqiqlanadi.',
                    ],
                },
                {
                    title: '8. Tomonlar javobgarligi',
                    points: [
                        '8.1. Xizmat qonun bilan ruxsat etilgan darajada “bor holicha” taqdim etiladi.',
                        '8.2. Operator foydalanuvchi yoki uchinchi shaxs harakati, aloqa nosozligi, uskunalar va operator nazoratidan tashqaridagi Dasturiy taʼminot sabab zararlar uchun javob bermaydi.',
                        '8.3. Foydalanuvchi muhim maʼlumotlarning zaxira nusxasini mustaqil taʼminlaydi.',
                    ],
                },
                {
                    title: '9. Shaxsiy maʼlumotlar',
                    points: [
                        '9.1. Shaxsiy maʼlumotlar xizmatga kirishni taʼminlash, foydalanuvchini identifikatsiya qilish, xavfsizlikni taʼminlash va kelishuv majburiyatlarini bajarish uchun qayta ishlanadi.',
                        '9.2. Foydalanuvchi xizmat ishlashi uchun zarur hajmdagi shaxsiy maʼlumotlar qayta ishlanishiga rozilik bildiradi.',
                    ],
                }
            ],
        },
        {
            id: 'public-subscription-offer',
            tabLabel: 'Pullik obuna ofertasi',
            title: '2) Bulutcha pullik obuna xizmatlari uchun ommaviy oferta',
            edition: '2026 yil 22 aprel tahriri',
            sections: [
                {
                    title: '1. Ofertaning predmeti',
                    points: [
                        '1.1. Operator foydalanuvchiga Bulutcha pullik tariflariga kirish imkonini beradi, foydalanuvchi esa tanlangan tarifni to‘lash majburiyatini oladi.',
                        '1.2. Tarif parametrlari (xotira hajmi, amal qilish muddati, narx) rasmiylashtirish vaqtida interfeysda ko‘rsatiladi.',
                    ],
                },
                {
                    title: '2. Shartnoma tuzilishi',
                    points: [
                        '2.1. Foydalanuvchi tarifni rasmiylashtirib to‘lagan payt ushbu oferta qabul qilingan hisoblanadi.',
                        '2.2. Qabul qilingan paytidan boshlab shartnoma tuzilgan deb hisoblanadi.',
                    ],
                },
                {
                    title: '3. Narx va to‘lov tartibi',
                    points: [
                        '3.1. Tarif narxi xizmat interfeysida UZS valyutasida ko‘rsatiladi.',
                        '3.2. To‘lov xizmatda biriktirilgan va tasdiqlangan bank kartasi yoki mavjud boshqa usul orqali amalga oshiriladi.',
                        '3.3. Muvaffaqiyatli to‘lov tasdiqlangandan so‘ng xizmat to‘langan hisoblanadi.',
                    ],
                },
                {
                    title: '4. Xizmat ko‘rsatish tartibi',
                    points: [
                        '4.1. To‘lov tasdiqlangach foydalanuvchiga tanlangan tarif belgilangan muddatga ochiladi.',
                        '4.2. Obuna boshlanish va tugash sanalari shaxsiy kabinetda aks etadi.',
                        '4.3. Obuna muddati tugagach, operator yangi fayl yuklashni cheklashi mumkin.',
                    ],
                },
                {
                    title: '5. Cheklovlar va xususiyatlar',
                    points: [
                        '5.1. Maʼlumot hajmi limitdan yuqori bo‘lsa, kichikroq tarifga o‘tish mumkin bo‘lmasligi mumkin; foydalanuvchi ortiqcha maʼlumotni o‘chirishi kerak.',
                        '5.2. Faol tarif uzoq vaqt bo‘lmasa, imtiyozli muddatdan so‘ng akkaunt va/yoki maʼlumotlar o‘chirilishi mumkin.',
                    ],
                },
                {
                    title: '6. Qaytarish va nizoli operatsiyalar',
                    points: [
                        '6.1. Mablag‘ni qaytarish shartlari amaldagi qonunchilik va xizmatda eʼlon qilingan operator ichki qoidalari bilan belgilanadi.',
                        '6.2. Noto‘g‘ri yechib olish yoki nizoli to‘lovlar bo‘yicha foydalanuvchi tasdiqlovchi hujjatlar bilan qo‘llab-quvvatlash xizmatiga murojaat qiladi.',
                    ],
                },
                {
                    title: '7. Javobgarlik',
                    points: [
                        '7.1. Operator javobgarligi, qonun bilan boshqacha belgilanmagan bo‘lsa, tegishli davr uchun amalda to‘langan tarif summasi doirasida cheklanadi.',
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
