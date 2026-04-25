'use client'

import {getOffertaContent} from '@/app/[locale]/offerta/-data'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {cn} from '@/lib/utils'
import {motion} from 'framer-motion'
import {useLocale} from 'next-intl'
import {useEffect, useState} from 'react'

const Offerta = () => {
    const locale = useLocale()
    const content = getOffertaContent(locale)
    const [activeTab, setActiveTab] = useState(content.documents[0].id)
    const [showScrollTop, setShowScrollTop] = useState(false)
    const hasMultipleDocuments = content.documents.length > 1

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'auto'})
        const onScroll = () => setShowScrollTop(window.scrollY > 280)
        onScroll()
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <main id='offerta-top' className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16'>
            <div className='rounded-2xl border border-border bg-card p-5 sm:p-8 space-y-8'>
                <header className='space-y-3'>
                    <h1 className='text-2xl sm:text-3xl font-bold text-foreground'>{content.pageTitle}</h1>
                    <p className='text-sm sm:text-base text-muted-foreground'>{content.pageDescription}</p>
                </header>

                <Tabs value={activeTab} onValueChange={value => setActiveTab(value as typeof activeTab)}
                      className='relative z-40 w-full flex flex-col gap-6'>
                    {hasMultipleDocuments ? (
                        <div className='flex items-center w-full justify-center'>
                            <TabsList
                                className='hide-scollbar overflow-x-scroll flex h-full w-fit items-center justify-start gap-3 rounded-4xl'>
                                {content.documents.map(doc =>
                                    activeTab === doc.id ? (
                                        <TabsTrigger
                                            className={cn('font-regular relative cursor-pointer bg-none px-4 py-2 text-sm sm:text-base')}
                                            key={doc.id}
                                            value={doc.id}
                                        >
                                            <motion.div
                                                layoutId='activeTabBackground'
                                                className='bg-primary border-border/20 absolute inset-0 rounded-4xl border'
                                                transition={{type: 'spring', stiffness: 500, damping: 30}}
                                            />
                                            <span className='relative z-20 text-white'>{doc.tabLabel}</span>
                                        </TabsTrigger>
                                    ) : (
                                        <TabsTrigger
                                            className={cn('font-regular relative cursor-pointer bg-none px-4 py-2 text-sm sm:text-base')}
                                            key={doc.id}
                                            value={doc.id}
                                        >
                                            <span className='relative z-20 text-black'>{doc.tabLabel}</span>
                                        </TabsTrigger>
                                    ),
                                )}
                            </TabsList>
                        </div>
                    ) : null}

                    {content.documents.map(doc => (
                        <TabsContent key={doc.id} value={doc.id} className='w-full'>
                            <section className='space-y-6'>
                                <div className='space-y-2'>
                                    <h2 className='text-xl sm:text-2xl font-semibold text-foreground'>{doc.title}</h2>
                                    <p className='text-sm sm:text-base text-muted-foreground'>{doc.edition}</p>
                                </div>

                                <div className='space-y-7'>
                                    {doc.sections.map(section => (
                                        <section key={section.title} className='space-y-3'>
                                            <h3 className='text-lg sm:text-xl font-semibold text-foreground'>{section.title}</h3>
                                            <ul className='space-y-2 text-sm sm:text-base text-muted-foreground leading-7'>
                                                {section.points.map(point => (
                                                    <li key={point}>{point}</li>
                                                ))}
                                            </ul>
                                        </section>
                                    ))}
                                </div>
                            </section>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>

            {showScrollTop ? (
                <button
                    type='button'
                    aria-label={content.topButton}
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                    className='fixed bottom-6 right-6 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition hover:bg-muted'
                >
                    {content.topButton}
                </button>
            ) : null}
        </main>
    )
}

export default Offerta
