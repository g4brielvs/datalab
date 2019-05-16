const sources = {
    countryComparisonMts: {
        href: 'https://www.fiscal.treasury.gov/files/reports-statements/mts/mts0917.pdf',
        linkText: 'Monthly Treasury Statement (MTS)'
    },
    template: {
        href: '',
        linkText: ''
    }
}

export default function(key) {
    if (!sources[key]) {
        throw 'No data source exists for key provided.';
    }

    return sources[key];
}