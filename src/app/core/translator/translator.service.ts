import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class TranslatorService {
    instant(arg0: string): any {
        throw new Error("Method not implemented.");
    }

    private defaultLanguage: string = "en";

    private availablelangs = [
        { code: "en", text: "English" },
        { code: "es", text: "Spanish" },
        { code: "pt", text: "Portuguese" },
        { code: "fr", text: "French" },
        { code: "nl", text: "Dutch" },
        { code: "ru", text: "Russian" },
        { code: "zh-cn", text: "Chinese Simplified" },
        { code: "zh-tw", text: "Chinese Traditional" },
    ];

    constructor(public translate: TranslateService) {

        if (!translate.getDefaultLang())
            translate.setDefaultLang(this.defaultLanguage);

        this.useLanguage();

    }

    useLanguage(lang: string = null) {
        this.translate.use(lang || this.translate.getDefaultLang());
    }

    getAvailableLanguages() {
        return this.availablelangs;
    }

}
