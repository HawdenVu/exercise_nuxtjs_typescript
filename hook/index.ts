import { ref } from '@nuxtjs/composition-api'

export function useChangeLanguage() {
  const isVI = ref(false)

  function initLang() {
    isVI.value = Boolean(Number(localStorage.getItem("isVI")))
  }

  function ChangeLang(): void {
    isVI.value = !isVI.value
    localStorage.setItem("isVI", isVI.value ? '1' : '0')
  }

  return { isVI, ChangeLang, initLang }
}