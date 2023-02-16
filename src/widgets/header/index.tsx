import React from "react"
import { HEADER_NAV } from "./consts"
import { Container, PrimaryLink } from "../../shared/ui-kit"
import { Locales, ThemeMode } from "@/features"
import { useTranslation } from 'next-i18next'
import { LogoIcon } from "@/shared/assets"
import Link from "next/link"
import { SearchkIcon } from "@/shared/assets/icons"

export const Header: React.FC = () => {

    const { t } = useTranslation('routers')

    return (
        <>
            <header className="fixed top-0 left-0 w-full py-2 theme-mode z-header">
                <Container className="flex items-center justify-between">
                    <div className="flex ">
                        <div className="flex items-center mr-[60px]">
                            <Link href={"/"} legacyBehavior>
                                <a><LogoIcon className="h-[28px] " /></a>
                            </Link>
                        </div>
                        <nav className="py-4 ">
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
                    <div className="flex items-center gap-5 ">
                        <div className="w-[20px] h-[20px]">
                            <SearchkIcon />
                        </div>
                        <Locales />
                        <ThemeMode />
                    </div>
                </Container>
            </header>
        </>
    )
}