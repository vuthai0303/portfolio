import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { switchLanguage } from '../../store/slices/languageSlice'
import { RootStateType } from '../../types/SliceTypes'
import { Select, SelectItem } from '@heroui/react'
import { EarthIcon } from 'lucide-react'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const curLanguage = useSelector((state: RootStateType) => state?.language?.value)
  const dispatch = useDispatch()

  useEffect(() => {
    const changeLanguageI18 = async () => {
      await i18n.loadLanguages(curLanguage) // Tải file ngôn ngữ
      i18n.changeLanguage(curLanguage)
    }

    changeLanguageI18()
  }, [curLanguage, i18n])

  const changeLanguage = (lng: string) => {
    dispatch(switchLanguage(lng)) // Lưu ngôn ngữ vào store
  }

  return (
    <div>
      <Select
        className="pr-1 w-[80px] lg:w-[100px]"
        defaultSelectedKeys={[curLanguage]}
        selectedKeys={[curLanguage]}
        selectionMode='single'
        label=""
        endContent={<EarthIcon className='hidden lg:flex' />}
        variant='flat'
        color='primary'
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <SelectItem key="en">EN</SelectItem>
        <SelectItem key="vi">VN</SelectItem>
      </Select>
    </div>
  )
}

export default LanguageSwitcher
