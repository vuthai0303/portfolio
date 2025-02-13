import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { switchLanguage } from '../../store/slices/languageSlice'
import { RootStateType } from '../../types/SliceTypes'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const curLanguage = useSelector((state: RootStateType) => state?.language?.value)
  const dispatch = useDispatch()

  useEffect(() => {
    const changeLanguage = async () => {
      await i18n.loadLanguages(curLanguage) // Tải file ngôn ngữ
      i18n.changeLanguage(curLanguage)
    }

    changeLanguage()
  }, [curLanguage, i18n])

  const changeLanguage = (lng: string) => {
    dispatch(switchLanguage(lng)) // Lưu ngôn ngữ vào store
  }

  return (
    <div>
      <select
        className="pr-1"
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
      </select>
    </div>
  )
}

export default LanguageSwitcher
