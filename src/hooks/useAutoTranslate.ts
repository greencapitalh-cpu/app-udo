import dict from '../assets/translations.json'

type LangKey = keyof typeof dict

export function t(key: keyof typeof dict['en']){
  const lang = (navigator.language?.slice(0,2) || 'en') as LangKey
  const base = (dict[lang] ? dict[lang] : dict['en']) as any
  return base[key] || dict['en'][key] || key
}
