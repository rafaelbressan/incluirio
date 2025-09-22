export default {
    content: [
        "./src/**/*.html",
        "./src/**/*.md",
        "./src/**/*.njk",
        "./src/**/*.liquid",
        "./src/_includes/**/*.html",
        "./src/_layouts/**/*.html",
        "./style/safelist.css"
    ],
    theme: {
        extend: {
            colors: {
                'rotary-royal-blue': 'var(--rotary-royal-blue)',
                'rotary-gold': 'var(--rotary-gold)',
                'rotary-azure': 'var(--rotary-azure)',
                'rotary-sky-blue': 'var(--rotary-sky-blue)',
                'rotary-cranberry': 'var(--rotary-cranberry)',
                'rotary-cardinal': 'var(--rotary-cardinal)',
                'rotary-turquoise': 'var(--rotary-turquoise)',
                'rotary-orange': 'var(--rotary-orange)',
                'rotary-violet': 'var(--rotary-violet)',
                'rotary-grass': 'var(--rotary-grass)',
                'rotary-powder-blue': 'var(--rotary-powder-blue)',
                'rotary-moss': 'var(--rotary-moss)',
                'rotary-lavender': 'var(--rotary-lavender)',
                'rotary-taupe': 'var(--rotary-taupe)',
                'rotary-stone': 'var(--rotary-stone)',
                'rotary-slate': 'var(--rotary-slate)',
                'rotary-charcoal': 'var(--rotary-charcoal)',
                'rotary-pewter': 'var(--rotary-pewter)',
                'rotary-smoke': 'var(--rotary-smoke)',
                'rotary-silver': 'var(--rotary-silver)',
                'rotary-white': 'var(--rotary-white)',
                'rotary-black': 'var(--rotary-black)',
                'rotary-storm': 'var(--rotary-storm)',
                'rotary-ash': 'var(--rotary-ash)',
                'rotary-platinum': 'var(--rotary-platinum)',
                'rotary-cloud': 'var(--rotary-cloud)',
            },
            fontFamily: {
                'primary': 'var(--font-primary)',
                'secondary': 'var(--font-secondary)',
            },
            maxWidth: {
                '7xl': '96rem',
            },
            zIndex: {
                '1000': '1000',
                '1001': '1001',
            },
            height: {
                '15': '60px',
            },
        },
    },
    plugins: [],
}