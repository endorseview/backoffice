import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import * as translationEn from 'assets/i18n/en.json';
import * as translationTr from 'assets/i18n/tr.json';
import { Observable, of as staticOf } from 'rxjs';

const TRANSLATIONS = {
  en: translationEn,
  tr: translationTr,
};
class JSONModuleLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return staticOf(TRANSLATIONS[lang]);
  }
}
export function JSONModuleLoaderFactory(): JSONModuleLoader {
  return new JSONModuleLoader();
}
