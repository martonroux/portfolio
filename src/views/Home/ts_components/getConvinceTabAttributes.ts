export function getBackgroundAttributes(lang: string): object {
    if (lang === 'en')
        return [
            {
                "text": "4 years",
                "logo": "/code.svg",
                "alt": "Code"
            },
            {
                "text": "1 year",
                "logo": "/web.svg",
                "alt": "Web"
            }
        ]
    else
        return [
            {
                "text": "4 ans",
                "logo": "/code.svg",
                "alt": "Code"
            },
            {
                "text": "1 an",
                "logo": "/web.svg",
                "alt": "Web"
            }
        ]

}

export function getSkillsAttributes(lang: string): object {
    if (lang === 'en')
        return [
            {
                "text": "0.5 years",
                "logo": "/ai.svg",
                "alt": "AI"
            },
            {
                "text": "1 year",
                "logo": "/vue-logo.svg",
                "alt": "VueJS"
            },
            {
                "text": "1 year",
                "logo": "/fastapi-logo.svg",
                "alt": "FastAPI"
            }
        ]
    else
        return [
            {
                "text": "0.5 ans",
                "logo": "/ai.svg",
                "alt": "AI"
            },
            {
                "text": "1 an",
                "logo": "/vue-logo.svg",
                "alt": "VueJS"
            },
            {
                "text": "1 an",
                "logo": "/fastapi-logo.svg",
                "alt": "FastAPI"
            }
        ]
}

export function getWhyMeAttributes(lang: string): object {
    if (lang === 'en')
        return [
            {
                "text": "Rigorous",
                "logo": "/laptop.svg",
                "alt": "Laptop"
            },
            {
                "text": "Hard working",
                "logo": "/strong.svg",
                "alt": "Strong"
            }
        ]
    else
        return [
            {
                "text": "Rigoureux",
                "logo": "/laptop.svg",
                "alt": "Laptop"
            },
            {
                "text": "Travailleur",
                "logo": "/strong.svg",
                "alt": "Strong"
            }
        ]
}