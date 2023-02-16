
type TIsIdxBot = ({ userAgent }: { userAgent: string }) => boolean

/**
 * Defining a search bot by user agent
 *
 * @param {string} userAgent user-agent
 * @example `req.headers['user-agent']`
 * @return {boolean} Returns true if the search bot's userAgent
 * 
 */

export const isIdxBot: TIsIdxBot = ({ userAgent }) => {

    return Boolean(BOT_AGENTS.filter(elem =>
        userAgent.toLowerCase()
            .includes(elem.toLowerCase())
    ).length)

}

const BOT_AGENTS = [
    'rambler', 'googlebot', 'aport', 'yahoo', 'msnbot', 'turtle', 'mail.ru', 'omsktele',
    'yetibot', 'picsearch', 'sape.bot', 'sape_context', 'gigabot', 'snapbot', 'alexa.com',
    'megadownload.net', 'askpeter.info', 'igde.ru', 'ask.com', 'qwartabot', 'yanga.co.uk',
    'scoutjet', 'similarpages', 'oozbot', 'shrinktheweb.com', 'aboutusbot', 'followsite.com',
    'dataparksearch', 'google-sitemaps', 'appEngine-google', 'feedfetcher-google',
    'liveinternet.ru', 'xml-sitemaps.com', 'agama', 'metadatalabs.com', 'h1.hrn.ru',
    'googlealert.com', 'seo-rus.com', 'yaDirectBot', 'yandeG', 'yandex',
    'yandexSomething', 'Copyscape.com', 'AdsBot-Google', 'domaintools.com',
    'Nigma.ru', 'bing.com', 'dotnetdotcom'
]