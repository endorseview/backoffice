export const environment = {
    production: true,
    hmr: false,
    RequireHttps: true,
    apiBaseUrl: 'https://dm-rule.dtmss.com',
    // apiBaseUrl: 'http://78.46.177.61:8080',

    ResourceServer: "https://is.bmax.cloud/",
    IssuerUri: "https://login.bmax.cloud",
    Uri: 'https://dm-admin.dtmss.com',
    
    calendar: {
        firstDayOfWeek: 1,
        dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
        dayNamesShort: ['Paz', 'Pts', 'Sal', 'Çar', 'Per', 'Cum', 'Cts'],
        dayNamesMin: ['Pa', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'],
        monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        monthNamesShort: ['Ock', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Ekm', 'Kas', 'Ara'],
        today: 'Bugün',
        clear: 'Temizle'
    },
    spinner: {
        bdColor: 'rgba(51, 51, 51, 0.8)',
        size: 'large',
        color: '#fff',
        type: 'timer'
    }
};
