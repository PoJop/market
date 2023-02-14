import React from "react"
import { HEADER_NAV } from "./consts"
import { Container, PrimaryLink } from "../../shared/ui-kit"
import { Locales, ThemeMode } from "@/features"
import { useTranslation } from 'next-i18next'

export const Header: React.FC = () => {
    
    const { t } = useTranslation('routers')

    return (
        <>
            <header className="fixed top-0 left-0 w-full py-4 theme-mode z-header">
                <Container className="flex items-center justify-between">
                    <div>
                        <nav>
                            <ul className="flex gap-5">
                                {HEADER_NAV.map(({ linkId, link }, idx) =>
                                    <li key={idx} className="pr-2 last:pr-0">
                                        <PrimaryLink href={link}>
                                            {t(`header.router.${linkId}`)}
                                        </PrimaryLink>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center ">
                        <Locales />
                        <ThemeMode />
                    </div>
                </Container>
            </header>
        </>
    )
}